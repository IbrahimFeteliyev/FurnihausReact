import React, { useContext, useEffect, useState } from 'react'
import '../ShopList/shopList.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { addToCartAction } from './../../redux/Actions/CartAction';
import { ToastContainer, toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from "../../context/MyContext";


function Shop() {

    const { cartItems } = useSelector((state) => state.cart)
    const { favoriesItems } = useSelector((state) => state.favories)
    const getProduct = useSelector((state) => state.products.products.message);
    const dispatch = useDispatch();
    const [cart, setCart] = useState(0)
    const { cartCount, setCartCount } = useContext(CartContext);

    const notify = () => toast("Product added to cart !");
    const notifyF = () => toast("Product added to favourites !");

    const addToCartHadler = (id, name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToCartAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToCartAction(id, 1))
        }
        setCartCount(cartCount + 1);
    }

    const addToCartHandler = (id, name) => {
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
        <div>
            <section className="shop-banner">
                <div className="text">
                    <h2>Shop</h2>
                </div>
                <div className="black"></div>
            </section>
            <section className="shop-list">
                <div className="container">
                    <div className="products">
                        <h1 className='text-center mb-5'>All Products</h1>
                        <div className="row">
                            {getProduct &&
                                getProduct.map((e) => (
                                    <div className="col-lg-4">
                                        <div key={Math.floor(Math.random() * 100000000)} className="trendingproduct-box">
                                            <div className="trendingproduct-img">
                                                <img src={e.coverPhoto} alt="" />
                                                <div className="icons">
                                                    <a className="icon-box my-1" onClick={() => { addToCartHandler(e.id, e.name); notifyF(); }}>
                                                        <FavoriteBorderIcon />
                                                    </a>
                                                    <a className="icon-box my-1" onClick={() => { addToCartHadler(e.id, e.name); notify(); }}>
                                                        <AddShoppingCartIcon />
                                                    </a>
                                                    <a className="icon-box my-1">
                                                        <span>C</span>
                                                    </a>
                                                    <a className="icon-box my-1">
                                                        <span>D</span>
                                                    </a>
                                                </div>

                                            </div>

                                            <div className="trendingproduct-text text-center">
                                                <span className='my-2 d-block'>{e.name}</span>
                                                <span className='my-2 d-block'>Price : {e.price} $</span>
                                            </div>
                                            <button className="cart-button" onClick={() => { addToCartHadler(e.id, e.name); notify(); }}>Add to Cart</button>
                                        </div>
                                    </div>
                                ))}


                        </div>
                    </div>
                </div>
                <ToastContainer
                    limit={3}
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
            </section >

        </div >
    )
}

export default Shop