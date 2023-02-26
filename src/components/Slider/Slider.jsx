import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Slider/slider.scss'
import { Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { BASE_URL } from '../../api/Config';

function Slider() {

    const [slider, setSlider] = useState([]);

    const getSliders = async () => {
        await fetch(BASE_URL + "Slider/getall")
            .then((a) => a.json())
            .then((data) => setSlider(data));
    };

    useEffect(() => {
        getSliders();
    }, []);

    return (
        <section className='slider-section'>
            {/* Pagination Scrollbar A11y */}
            <Swiper
                autoplay={{ delay: 3000 }}
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
            // pagination={{
            //     type: "progressbar",
            // }}
            //   pagination={{ clickable: true }}


            >
                {
                    slider.map((e, index) => (
                        <SwiperSlide key={index}>
                            <img className='slider-img' src={e.photoUrl} alt="" />
                            <div className="slider-content">

                                <h1 data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-mirror="true">{e.title}
                                </h1>
                                <h3 data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    data-aos-mirror="true">
                                    {e.description}</h3>
                                <button
                                    data-aos="fade-right"
                                    data-aos-delay="1000"
                                    data-aos-duration="700"
                                >SHOP NOW</button>
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </section >
    )
}

export default Slider