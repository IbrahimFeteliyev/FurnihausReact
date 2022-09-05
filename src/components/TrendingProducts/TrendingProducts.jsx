import React from 'react'
import '../TrendingProducts/trendingProducts.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Slider/slider.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function TrendingProducts() {
    return (
        <section className='trendingproduct-section' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <h2 className='text-center mb-5'>Trending Products</h2>
            <div className="container">

                <Swiper
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                  pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                //   onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
                Pagination
                >
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trendingproduct-box">
                            <div className="trendingproduct-img">
                                <img src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/2017/10/sofa-300x300.jpg" alt="" />
                                <div className="icons">
                                    <a href="#" className="icon-box my-1">
                                        <span>A</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>B</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>C</span>
                                    </a>
                                    <a href="#" className="icon-box my-1">
                                        <span>D</span>
                                    </a>
                                </div>

                            </div>

                            <div className="trendingproduct-text text-center">
                                <span className='my-2 d-block'>Veneto Arm Chair</span>
                                <span className='my-2 d-block'>$100.00 - $200.00</span>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>
        </section>
    )
}

export default TrendingProducts