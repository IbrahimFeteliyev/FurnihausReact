import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Slider/slider.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
function Slider() {

    return (
        <section className='slider-section'>
            {/* Pagination Scrollbar A11y */}
            <Swiper
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Navigation,Pagination]}
                spaceBetween={0}f
                slidesPerView={1}
                navigation
                pagination={{
                    type: "progressbar",
                }}
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            //   onSwiper={(swiper) => console.log(swiper)}
            //   onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide>
                    <img className='slider-img' src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/revslider/home-slider1/slider-2.jpg" alt="" />
                    <div className="slider-content">

                        <h1 data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-mirror="true">CREATIVE
                        </h1>
                        <h3 data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-mirror="true">
                            SHOP CREATIVE DESGINS</h3>
                        <button
                            data-aos="fade-right"
                            data-aos-delay="1000"
                            data-aos-duration="700"
                        >SHOP NOW</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className='slider-img' src="http://furnihaus.kaththemes.com/demo/wp-content/uploads/revslider/home-slider1/slider-1.jpg" alt="" />
                    <div className="slider-content">
                        <h1>CREATIVE</h1>
                        <h3>SHOP CREATIVE DESGINS</h3>
                        <button>SHOP NOW</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section >
    )
}

export default Slider