import React, { useContext, useEffect, useState } from 'react'
import '../TrendingProducts/trendingProducts.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Slider/slider.scss'
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from './../../redux/Actions/CartAction';
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { CartContext } from "../../context/MyContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function TrendingProducts() {
    const { cartItems } = useSelector((state) => state.cart)
    const { favoriesItems } = useSelector((state) => state.favories)
    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch();
    const [cart, setCart] = useState(0)
    const { cartCount, setCartCount } = useContext(CartContext);

    const notify = () => toast("Product added to cart !");
    const notifyF = () => toast("Product added to favourites !");

    const addToCartHandler = (id, name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToCartAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToCartAction(id, 1))
        }
        setCartCount(cartCount + 1);
    }

    const addToFavHandler = (id, name) => {
        var myCart = favoriesItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToFavoriesAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToFavoriesAction(id, 1))
        }
        setCartCount(cartCount + 1);
    }


    useEffect(() => {
        dispatch(getProductsAction());
    }, []);




    return (
        <section className='trendingproduct-section' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h2 className='text-center mb-5' >Trending Products</h2>
            <div className="container">

                <Swiper
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },

                    }}
                    pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                //   onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
                >
                    {products &&
                        products.map((e) => (
                            <SwiperSlide key={Math.floor(Math.random() * 100000000)}>
                                <div className="trendingproduct-box">
                                    <div className="trendingproduct-img">
                                        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/product/' + e.id}  >
                                            <img src={e.coverPhoto} alt="" />
                                        </Link>

                                        <div className="icons">
                                            <a className="icon-box my-1" onClick={() => { addToFavHandler(e.id, e.name); notifyF(); }}>
                                                <FavoriteBorderIcon />
                                            </a>
                                            <a className="icon-box my-1" onClick={() => { addToCartHandler(e.id, e.name); notify(); }}>
                                                <AddShoppingCartIcon />
                                            </a>
                                            <a className="icon-box my-1">
                                                <span></span>
                                            </a>
                                            <a className="icon-box my-1">
                                                <span></span>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="trendingproduct-text text-center">
                                        <span className='my-2 d-block'>{e.name}</span>
                                        <span className='my-2 d-block'>Price : {e.price} $</span>
                                    </div>
                                    {/* <button className="cart-button" onClick={() => { addToCartHandler(e.id, e.name); notify(); }}>Add to Cart</button> */}
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TrendingProducts