import React, { useEffect, useState } from "react";
import { BASE_URL, FILE_PATH } from "./../../api/Config";
import '../ProductDetail/productDetail.scss'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link, useParams } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/Actions/CartAction";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactImageMagnify from 'react-image-magnify';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [count, setCounter] = useState(1);
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [value, setValue] = useState("1");
  const { cartItems } = useSelector((state) => state.cart);
  const { favoriesItems } = useSelector((state) => state.favories);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const notify = () => toast("Product added to cart !");
  const notifyF = () => toast("Product added to favourites !");

  const addToCartHandler = (id, name) => {
    var myCart = cartItems.find((e) => e.id === id);
    if (myCart) {
      dispatch(addToCartAction(id, myCart.quantity + 1));
    } else {
      dispatch(addToCartAction(id, 1));
    }
  };

  const addToFavHandler = (id, name) => {
    var myCart = favoriesItems.find((e) => e.id === id);
    if (myCart) {
      dispatch(addToFavoriesAction(id, myCart.quantity + 1));
    } else {
      dispatch(addToFavoriesAction(id, 1));
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };
  const postComment = async () => {
    fetch(BASE_URL + "Comment/addcomment", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        userEmail: email,
        review: review,
        ratings: currentValue,
        productId: id,
      }),
    });
  };

  var starCount = product.rating;
  var test = [
    <StarOutlineIcon />,
    <StarOutlineIcon />,
    <StarOutlineIcon />,
    <StarOutlineIcon />,
    <StarOutlineIcon />,
  ];

  for (let index = 0; index < 5; index++) {
    if (starCount % 1 != 0) {
      starCount -= starCount % 1;
    }
    if (index < starCount) {
      test[index] = <StarIcon />;
    } else {
      if (product.rating % 1 == 0) {
        break;
      }
      if (index == starCount) {
        test[index] = <StarHalfIcon />;
        break;
      }
    }
  }
  const reviewStar = (stars) => {
    var star = [
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
    ];

    for (let i = 0; i < stars; i++) {
      star[i] = <StarIcon style={{ color: "#FFBA5A" }} />;
    }

    return <>{star.map((e) => e)}</>;
  };
  const getProducts = async () => {
    await fetch(BASE_URL + "product/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setProducts(data.message));
  };
  useEffect(() => {
    dispatch(getProductsAction());
    getProducts();
  }, [dispatch]);


  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };



  return (
    <section className="productdetail-section">
      <div className="container">
        <div className="boxes">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-box">
                <div className="row">
                  <div className="col-lg-2">
                    {product.productPictures &&
                      product.productPictures.map((e) => (
                        <img
                          onClick={(a) => setPhoto(e)}
                          className="sml-picture"
                          width="100%"
                          src={e}
                          alt=""
                        />
                      ))}
                  </div>
                  <div className="col-lg-10">

                    {product.productPictures && (
                      <div className="big-picture">
                        <ReactImageMagnify {...{
                          smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: photo.length === 0 ? product.productPictures[0] : photo
                          },
                          largeImage: {
                            src: photo.length === 0 ? product.productPictures[0] : photo,
                            width: 1200,
                            height: 1800
                          }
                        }} />
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-box">
                <h1>{product.name}</h1>
                <div className="d-flex"></div>
                <h5 className="price">Price: $ {product.price}</h5>
                {product.isStock == true ? (
                  <div className="stock my-2">
                    <h5 className="stock"><CheckBoxIcon /><span>INSTOCK</span></h5>
                  </div>
                ) : (
                  <div className="outofstock">
                    <p>This product is currently out of stock and unavailable.</p>
                  </div>
                )}

                <div className="count d-flex">
                  <RemoveIcon />
                  <input value={1} type="text" />
                  <AddIcon />
                </div>
                <button className="my-3" onClick={() => { addToCartHandler(product.id, product.name); notify(); }}><ShoppingCartIcon />Add To Cart</button>
                <div className="wishlist my-2">
                  <span onClick={() => { addToFavHandler(product.id, product.name); notifyF(); }}><FavoriteBorderIcon /><span>Add to Wishlist</span></span>
                </div>
                <span class="d-block">Category: {product.categoryName}</span>
                <span class="d-block">SKU: {product.sku}</span>

              </div>
            </div>
          </div>
        </div>
        <div className="container boxess">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Description" value="1" />
                  <Tab label={`Reviews (${product.reviewCount})`} value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div id="description">
                  <p>{product.description}</p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div id="comment">
                  <div className="container">
                    <div className="top">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="add">
                            <div className="d-flex">
                              <div className="admin">
                                {product.comments &&
                                  product.comments.map((comment) => (
                                    <div key={comment.userEmail}>
                                      <h6 className="date">
                                        {comment.userName} - {comment.userEmail}
                                      </h6>
                                      <p className="light">
                                        Your review : {comment.review}
                                      </p>
                                      <p>
                                        Your rating :{reviewStar(comment.ratings)}
                                      </p>
                                      <hr />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div class="comment-title">
                        <h2>Add a review</h2>
                      </div>
                      <div class="comment-input-box">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="comment-input">
                              <input
                                width="100%"
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="comment-input">
                              <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <textarea
                              onChange={(e) => setReview(e.target.value)}
                              placeholder="Your review"
                              class="comment-input comment-textarea"
                            ></textarea>
                          </div>
                          <div class="comment-rating">
                            <div className="d-flex">
                              <span>Your rating : </span>
                              <div style={styles.containerr}>
                                <div style={styles.stars}>
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={15}
                                        style={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                        }}
                                        color={
                                          (hoverValue || currentValue) > index
                                            ? colors.orange
                                            : colors.grey
                                        }
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() =>
                                          handleMouseOver(index + 1)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="comment-submit">
                              <button
                                onClick={(e) => postComment()}
                                type="submit"
                                class="cart-btn"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>{" "}
          <hr />
        </div>
      </div>
    </section>
  )
}

const styles = {
  containerr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};


export default ProductDetail