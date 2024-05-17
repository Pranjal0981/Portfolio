import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

import './Slider.scss';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <h1 className="gallery-title" id='Gallery'> Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 10,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500, // Time between transitions in milliseconds
                    disableOnInteraction: false, // Keep autoplay running even after user interactions
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/slide1.jpeg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slide2.jpeg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slide3.jpeg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slide4.jpeg" alt="Nature 4" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
