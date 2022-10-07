import React from 'react'
import BlogComment from '../components/BlogComment/BlogComment'
import BlogDetail from '../components/BlogDetail/BlogDetail'
import RelatedArticle from '../components/RelatedArticle/RelatedArticle'

function Blog() {
  return (
    <div>
        <BlogDetail/>
        <RelatedArticle/>
        {/* <BlogComment/> */}
    </div>
  )
}

export default Blog