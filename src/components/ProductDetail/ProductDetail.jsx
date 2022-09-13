import React from 'react'
import '../ProductDetail/productDetail.scss'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function ProductDetail() {
    return (
        <section className="productdetail-section">
            <div className="container">
                <div className="boxes">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-box">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/09/cusion.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-box">
                                <h1>Adelaide Bar Tool
                                </h1>
                                <h5 className="price">Price: $200.00</h5>
                                <h5 className="stock"><CheckBoxIcon /><span>INSTOCK</span></h5>
                                <div className="count d-flex">
                                    <RemoveIcon />
                                    <input value={1} type="text" />
                                    <AddIcon />
                                </div>
                                <button><ShoppingCartIcon />Add To Cart</button>
                                <div className="wishlist">
                                    <a href="#"><FavoriteBorderIcon /><span>Add to Wishlist</span></a>

                                </div>
                                <span>Categories: Bar Stools, Chair</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail