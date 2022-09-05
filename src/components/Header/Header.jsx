import React from 'react'
import '../Header/header.scss'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
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
                    <ul class="list-unstyled dropped-item">
                      <li><a href="#">Demo V1</a></li>
                      <li><a href="#">Demo V2</a></li>
                      <li><a href="#">Demo V3</a></li>
                      <li><a href="#">Demo V4</a></li>
                    </ul>
                  </li>
                  <li className='header-li'>
                    <a href="#">FURNITURE</a>
                    <ul class="list-unstyled  dropped-big-menu">
                      <li className='dropped-big-menu-li'>
                        <ul>
                          <li class="list-unstyled">
                            <img className='img-fluid' src="https://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/livingroom.jpg" alt="" />
                          </li>
                          <li class="list-unstyled"><h4>salam</h4></li>
                          <li class="list-unstyled"><a href="#">salam</a></li>
                          <li class="list-unstyled"><a href="#">salam</a></li>
                          <li class="list-unstyled"><a href="#">salam</a></li>
                          <li class="list-unstyled"><a href="#">salam</a></li>

                        </ul>
                      </li>
                      <li className='dropped-big-menu-li'>
                        <ul>
                          <li class="list-unstyled">
                            <img className='img-fluid' src="https://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/livingroom.jpg" alt="" />
                          </li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>

                        </ul>
                      </li>
                      <li className='dropped-big-menu-li'>
                        <ul>
                          <li class="list-unstyled">
                            <img className='img-fluid' src="https://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/livingroom.jpg" alt="" />
                          </li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>
                          <li class="list-unstyled">salam</li>

                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='header-li'><Link to="/shop">SHOP</Link></li>
                  <li className='header-li'><a href="#">PAGES</a></li>
                  <li className='header-li'><a href="#">BLOG</a></li>
                  <li className='header-li'><a href="#">CONTACT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="header-right">
                <div className="icons">
                  <SearchIcon />
                  <FavoriteBorderIcon />
                  <AddShoppingCartIcon />
                </div>
                <span>LOGIN</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header