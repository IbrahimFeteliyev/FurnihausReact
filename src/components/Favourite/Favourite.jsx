import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FILE_PATH } from '../../api/Config';
import { CartContext } from '../../context/MyContext';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { removeFromFavories } from '../../redux/Actions/FavoriesAction';
import { getUserAction } from '../../redux/Actions/UserAction';
import "../Favourite/favourite.scss"

const Favories = () => {
  const { favoriesItems } = useSelector((state) => state.favories);
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { cartCount, setCartCount } = useContext(CartContext);
  const notify = () => toast("Product added to cart !");

  const countTotal = () => {
    var price = 0;
    favoriesItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const addToCartHadler = (id, name) => {
    var myCart = cartItems.find(e => e.id === id)
    if (myCart) {
      dispach(addToCartAction(id, myCart.quantity + 1))
    } else {
      dispach(addToCartAction(id, 1))
    }
    setCartCount(cartCount + 1);
  }

  const removeFromFavoriesHandler = (id) => {
    dispach(removeFromFavories(id));
  }

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, favoriesItems]);

  return (
    <div id="favories">
      <div className="container">
        <h3 class="text-center mb-3"> İstək Siyahısı</h3>
        <div className="container">
          <div className="top">
            <table class="table">
              <thead>
                <tr>
                  <th>Şəkil</th>
                  <th>Məhsulun adı</th>
                  <th>Qiyməti</th>
                  <th>Hərəkət</th>
                </tr>
              </thead>

              {favoriesItems.length > 0
                ? favoriesItems.map((product, index) => (
                  <tbody key={Math.floor(Math.random() * 100000000)}>
                    <tr key={index}>
                      <td data-label="Şəkil">
                        <img width="40%" src={`${FILE_PATH}${product.img}`} alt="" />
                      </td>
                      <td data-label="Məhsulun adı">{product.name}</td>
                      <td data-label="Qiyməti">{product.price}₼</td>
                      <td data-label="Hərəkət">
                        <div className="d-flex justify-content-end">
                          <div className="icon">
                            <i className="fa fa-shopping-cart" onClick={() => {addToCartHadler(product.id, product.name); notify();}}></i>
                          </div>
                          <div className="icon1" onClick={() => removeFromFavoriesHandler(product.product)}>
                            <i className="fa fa-times"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
                : <span className='wishlist-none'>"İstəklər siyahısına əlavə edilmiş məhsul yoxdur."</span>
              }
            </table>
          </div>

              <div className="bottom">
                <div className="row">
                  <div className="col-lg-7">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="shoppingButton">
                        Davam edin
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  );

}

export default Favories