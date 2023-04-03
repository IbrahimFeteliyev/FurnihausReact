import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Cart/cart.scss";
import Swal from "sweetalert2";
import { getUserAction } from "../../redux/Actions/UserAction";
import { CheckOutAction } from "./../../redux/Actions/CheckOutAction";
import { removeAllCartAction } from "./../../redux/Actions/CartAction";
import { Link, useNavigate } from "react-router-dom";
import { FILE_PATH } from "../../api/Config";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);

  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const addOrder = () => {
    if (userInfo.length !== 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger mx-2",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Sifarişi tamamlamaq istədiyinizdən əminsiniz?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sifarişi tamamla",
          cancelButtonText: "Ləğv et!",
          reverseButtons: false,
          closeOnConfirm: false
        })
        .then((isConfirm, dismiss) => {
          if (isConfirm) {
            if (cartItems.length > 0) {
              dispach(CheckOutAction(userInfo.id));
              dispach(removeAllCartAction());
              navigate("/cartsuccess");
            }
            else {
              Swal.fire("Səbətiniz boşdur.");
              navigate("/cart");
            }
          }
          else if (
            dismiss === Swal.DismissReason.cancel

          ) {

            swalWithBootstrapButtons.fire(
              "Ləğv olundu.",
              "error"
            );
          }
        });
    }
    else {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Evvelce daxil olmalisiniz!",
      }).then((result) => {
        if (result.value) {
          navigate("/login");
        }
      });
    }
  };

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, cartItems]);

  return (
    <div id="cart">
      <div className="container">
        <h3 className="text-center mb-5">Səbətim</h3>
        <div className="container">
          <div className="top">
            <table class="table">
              <thead>
                <tr>
                  <th>Şəkil</th>
                  <th>Məhsulun adı</th>
                  <th>Sayı</th>
                  <th>Qiyməti</th>
                  <th>Məbləğ</th>
                </tr>
              </thead>
                {cartItems.length > 0
                  ? cartItems.map((product) => (
                    <tbody key={Math.floor(Math.random() * 100000000)}>
                      <tr>
                        <td data-label="Şəkil">
                          <img width="40%" src={`${FILE_PATH}${product.img}`} alt="" />
                        </td>
                        <td data-label="Məhsulun adı">{product.name}</td>
                        <td data-label="Sayı">{product.quantity} ədəd</td>
                        <td data-label="Qiyməti">{product.price}₼</td>
                        <td data-label="Məbləğ">{product.price * product.quantity}₼</td>
                      </tr>
                    </tbody>
                  ))
                  : <span className='wishlist-none'>"Mehsul yoxdur"</span>}
              


            </table>
          </div>

          <div className="bottom">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-7">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="shoppingButton">
                        Alış-verişə davam edin
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-5">
                    <h3>Ümumi hesab</h3>
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <div className="row justify-content-between align-items-center">
                              <div className="col-lg-8">Məbləğ</div>
                              <div className="col-lg-4 price"> {totalPrice}₼</div>
                            </div>
                          </td>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <td>
                            <div className="row justify-content-between align-items-center">
                              <div className="col-lg-8">Ümumi məbləğ</div>
                              <div className="col-lg-4 price"> {totalPrice}₼</div>
                            </div>
                          </td>
                        </tr>
                      </thead>
                    </table>
                    <button onClick={() => addOrder()} >
                      Sifarişi rəsmiləşdir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
