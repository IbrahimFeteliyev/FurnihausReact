import React from 'react'
import '../BlogList/blogList.scss'
function BlogList() {
    return (
        <div>
            <div className="container">
                <div className="blog-boxes">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-box">
                                <div className="img">
                                    <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/04/neonbrand-381344-unsplash-360x292.jpg" alt="" />
                                </div>
                                <div className="img-text">
                                    <h3>Modern furniture designs for your dream lorem ipsum is a dummy text home</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend a lectus ac auctor. Nulla facilisi. Suspendisse potenti. Praesent nisl augue, porttitor ut tempor ac, consectetur ut lorem. Aenean eleifend,...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogList