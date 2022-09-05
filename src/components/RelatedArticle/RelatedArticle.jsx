import React from 'react'
import '../RelatedArticle/relatedArticle.scss'


function RelatedArticle() {
    return (
        <section className='related-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="blog-box">
                            <div className="blog-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2018/04/neonbrand-381344-unsplash-570x350.jpg" alt="" />
                            </div>
                            <div className="blog-text">
                                <div className="text-top mb-2">
                                    <span>April 16, 2018 </span>
                                    <span>Furnihaus</span>
                                </div>
                                <h2>Modern furniture designs for your dream lorem…</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend a lectus ac auctor. Nulla facilisi. Suspendisse potenti. Praesent nisl augue, porttitor ut tempor ac, consectetur ut lorem.…</p>
                                <button>READ MORE</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="blog-box">
                            <div className="blog-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/11/pexels-photo-210265-670x411.jpeg" alt="" />
                            </div>
                            <div className="blog-text">
                                <div className="text-top mb-2">
                                    <span>April 16, 2018 </span>
                                    <span>Furnihaus</span>
                                </div>
                                <h2>Modern furniture designs for your dream lorem…</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend a lectus ac auctor. Nulla facilisi. Suspendisse potenti. Praesent nisl augue, porttitor ut tempor ac, consectetur ut lorem.…</p>
                                <button>READ MORE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedArticle