import React, { useContext, useEffect, useState } from "react";
import '../Header/header.scss'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../../api/Config';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../context/MyContext";
import { logoutUserAction } from "../../redux/Actions/UserAction";


function Header() {

  const [category, setCategory] = useState([]);
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const logOut = () => {
    dispatch(logoutUserAction())
    navigate("/")
  }

  const getCategories = async () => {
    await fetch(BASE_URL + "category/getallchild")
      .then((a) => a.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    countTotal();
    getCategories();
  }, [totalPrice, cartItems, userInfo]);




  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4">
              <div className="header-left">
                <div className="logo">
                  <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/logo.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="header-center">
                <ul className='header-ul list-unstyled d-flex justify-content-between'>
                  <li className='header-li'>
                    <Link to="/">HOME</Link>
                    <ul className="list-unstyled dropped-item">
                      <li><a href="#">Demo V1</a></li>
                      <li><a href="#">Demo V2</a></li>
                      <li><a href="#">Demo V3</a></li>
                      <li><a href="#">Demo V4</a></li>
                    </ul>
                  </li>
                  <li className='header-li'>
                    <a href="#">FURNITURE</a>
                    <ul className="list-unstyled  dropped-big-menu">

                      {
                        category &&
                        category.map((e) => (
                          <li className='dropped-big-menu-li' key={Math.floor(Math.random() * 100000000)}>
                            <ul>
                              <li className="list-unstyled">
                                <img className='img-fluid' src="https://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/livingroom.jpg" alt="" />
                              </li>
                              <li className="list-unstyled"><h4>{e.name}</h4></li>
                              {e.childCategory.map((cc) => (
                                <>
                                  <p>{cc.childCategoryName}</p>
                                </>
                              ))}
                            </ul>
                          </li>
                        ))}


                    </ul>
                  </li>
                  <li className='header-li'><Link to="/shop">SHOP</Link></li>
                  <li className='header-li'><a href="#">PAGES</a></li>
                  <li className='header-li'><Link to="/allblogs">BLOG</Link></li>
                  <li className='header-li'><a href="#">CONTACT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header-right">
                <div className="icons">
                  <SearchIcon />
                  <Link to="/favourite">
                    <FavoriteBorderIcon   style={{color: "black"}}/>
                  </Link>
                  <Link to="/cart">
                      <AddShoppingCartIcon  style={{color: "black"}}/>
                  </Link>

                </div>
                <div className="user">

                  <span><AccountCircleIcon />Account</span>
                  <ul>
                    {
                      userInfo.length === 0 ? (
                        <Link to="/login" style={{ textDecoration: "none" }}>
                        </Link>
                      ) : (
                        <Link to='/account' style={{ textDecoration: "none" }}>
                          <li>Hesabım</li>
                        </Link>
                      )
                    }

                    <li>Sifariş Tarixçəsi</li>
                    {userInfo.length === 0 ? (
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>Giriş</li>
                      </Link>
                    ) : (
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <li onClick={() => logOut()}>Çıxış</li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header