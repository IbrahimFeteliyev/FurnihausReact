import React, { useEffect, useState } from 'react'
import '../ShopList/shopList.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from "../../redux/Actions/ProductAction";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { addToCartAction } from './../../redux/Actions/CartAction';
import { ToastContainer, toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { BASE_URL } from '../../api/Config';
import SearchIcon from '@mui/icons-material/Search';

function Shop() {

    const { cartItems } = useSelector((state) => state.cart)
    const { favoriesItems } = useSelector((state) => state.favories)
    const { products } = useSelector((state) => state.products)
    const [category, setCategory] = useState([]);

    const dispatch = useDispatch();

    const notify = () => toast("Product added to cart !");
    const notifyF = () => toast("Product added to favourites !");

    const addToCartHandler = (id, name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToCartAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToCartAction(id, 1))
        }
    }

    const addToFavHandler = (id, name) => {
        var myCart = favoriesItems.find(e => e.id === id)
        if (myCart) {
            dispatch(addToFavoriesAction(id, myCart.quantity + 1))
        } else {
            dispatch(addToFavoriesAction(id, 1))
        }
    }

    const getCategories = async () => {
        await fetch(BASE_URL + "category/getall")
            .then((a) => a.json())
            .then((data) => setCategory(data));
    };

    const [names, setNames] = useState(products)
    const filterNames = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames = products.filter(names => names.name.toLowerCase().includes(search))
        setNames(filteredNames)
    }

    useEffect(() => {
        getCategories();
        dispatch(getProductsAction());
    }, []);

    const filterResult = (catItem) => {
        const result = products.filter((e) => {
            return e.categoryName === catItem
        })
        setNames(result)
    }

    console.log(category);

    return (
        <div>
            <section className="shop-banner">
                <div className="text">
                    <h2>Shop</h2>
                </div>
                <div className="black"></div>
            </section>
            <section className="shop-list my-5">
                <div className="container">
                    <h1 className='text-center mb-5'>All Products</h1>

                    <div className="seacrh-box my-3">
                        <div className="d-flex align-items-center">
                            <SearchIcon />
                            <input className='search-input' onChange={(e) => filterNames(e)} type="text" placeholder='Search product name...' />
                        </div>
                    </div>

                    <div className="categories my-5">
                        <div className="d-flex justify-content-between">
                            <button onClick={() => setNames(products)} className='col-lg-2 text-center'>All</button>
                            {category &&
                                category.map((e, index) => (
                                    <button onClick={() => filterResult(e.name)} key={index} className='col-lg-3 text-center'>{e.name}</button>
                                ))}
                        </div>
                    </div>

                    <div className="products">

                        <div className="row">
                            {names &&
                                names.map((e, index) => (
                                    <div key={index} className="col-lg-4">
                                        <div className="trendingproduct-box">
                                            <div className="trendingproduct-img">
                                                <img src={e.coverPhoto} alt="" />
                                                <div className="icons">
                                                    <a className="icon-box my-1" onClick={() => { addToFavHandler(e.id, e.name); notifyF(); }}>
                                                        <FavoriteBorderIcon />
                                                    </a>
                                                    <a className="icon-box my-1" onClick={() => { addToCartHandler(e.id, e.name); notify(); }}>
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
                                            <button className="cart-button" onClick={() => { addToCartHandler(e.id, e.name); notify(); }}>Add to Cart</button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Shop