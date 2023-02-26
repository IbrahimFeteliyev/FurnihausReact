import React from 'react'
import { Link } from 'react-router-dom'
import '../Categories/categories.scss'



function Categories() {
    return (
        <section className='category-section'>
            <div className="container">
                <div className="category-boxes">
                    <h2 className='text-center mb-5'>Popular Categories</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/cat-00.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Office Furniture Collection</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/living-room-furniture.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Living Room Furniture</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/cat-01.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Bed Room Furniture</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/study-table.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Study Table for Comfort</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/cat-02.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Outdoor Living Furniture</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="category-box my-2">
                                <Link to="/">
                                    <img src="https://themes.wpmarvels.com/furnihaus/demo/wp-content/uploads/2018/04/dinning-bar-furniture.jpg" alt="" />
                                    <div className="category-text">
                                        <span>Dinning Room & Bar Furniture</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="button mt-4" data-aos="fade-up"
                        data-aos-duration="1000">
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories