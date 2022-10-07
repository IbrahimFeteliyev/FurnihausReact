import React from 'react'
import { Routes,Route } from 'react-router-dom'
import GoToTop from '../GoToTop'
import AllBlogs from '../pages/AllBlogs'
import Blog from '../pages/Blog'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import NotFoundPage from '../pages/NotFoundPage'
import Account from '../components/Account/Account'
import CartPage from '../pages/CartPage'
import FavouritePage from '../pages/FavouritePage'
import ConfirmCart from '../pages/ConfirmCart'
import CartSuccess from '../pages/CartSuccess'
import { ToastContainer } from 'react-toastify'

function MyRouter() {
  return (
   <div>
        <GoToTop />        
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/product/:id' element={<Detail/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
            <Route path='/allblogs' element={<AllBlogs/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/favourite' element={<FavouritePage/>}/>
            <Route path='/confirmcart' element={<ConfirmCart/>}/>
            <Route path='/cartsuccess' element={<CartSuccess/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
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
   </div>
  )
}

export default MyRouter