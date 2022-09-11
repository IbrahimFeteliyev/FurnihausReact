import React, { useEffect, useState } from 'react'
import '../Header/header.scss'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';



function Header() {

  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    await fetch(BASE_URL + "category/getallchild")
      .then((a) => a.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    getCategories();
  }, []);


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

                      {
                        category &&
                        category.map((e) => (
                          <li className='dropped-big-menu-li' key={Math.floor(Math.random() * 100000000)}>
                            <ul>
                              <li class="list-unstyled">
                                <img className='img-fluid' src="https://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/05/livingroom.jpg" alt="" />
                              </li>
                              <li class="list-unstyled"><h4>{e.name}</h4></li>
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
                <span className='login-button'>
                  <Link to="/login">LOGIN</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header