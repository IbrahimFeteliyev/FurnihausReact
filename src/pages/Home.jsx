import React from 'react'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import Blog from '../components/Blog/Blog'
import MoreAbout from '../components/MoreAbout/MoreAbout'


function Home() {
  return (
    <div>
      <Slider/>
      <TrendingProducts/>
      <Categories/>
      <MoreAbout/>
      <Blog/>
    </div>
  )
}

export default Home