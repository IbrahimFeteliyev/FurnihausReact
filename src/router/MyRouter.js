import React from 'react'
import { Routes,Route } from 'react-router-dom'
import GoToTop from '../GoToTop'
import AllBlogs from '../pages/AllBlogs'
import Blog from '../pages/Blog'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

function MyRouter() {
  return (
   <div>
        <GoToTop />        
        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/allblogs' element={<AllBlogs/>}/>
        </Routes>
   </div>
  )
}

export default MyRouter