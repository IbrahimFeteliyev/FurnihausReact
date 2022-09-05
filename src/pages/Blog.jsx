import React from 'react'
import BlogComment from '../components/BlogComment/BlogComment'
import BlogSection from '../components/BlogSection/BlogSection'
import RelatedArticle from '../components/RelatedArticle/RelatedArticle'

function Blog() {
  return (
    <div>
        <BlogSection/>
        <RelatedArticle/>
        <BlogComment/>
    </div>
  )
}

export default Blog