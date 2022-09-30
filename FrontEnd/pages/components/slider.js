import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";


import { Autoplay, EffectFade } from "swiper"

const Slider = () => {
    
    return (
        <div>
             <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade , Autoplay ]}
        className="mySwiper"
        rewind = {true}
       
      >
     <SwiperSlide>
        <div className='slide'>
          <div className='slider-content'>
            <h1 className='text-6xl text-gray-800'>New , Amazing Stuff is here</h1>
          </div>
          <div>
        <div  className="slider-images2">
        </div>
        <img className='frame-image' src="https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/revslider/startup_slaider/5559331632_2_3_1.png" alt="" />
        </div>
        </div>
        </SwiperSlide>


<SwiperSlide>
        <div className='slide'>
          <div className='slider-content'>
            <h1 className='text-6xl text-gray-600'>New , Amazing Stuff is here</h1>
          </div>
          <div>
        <div  className="slider-images1">
        </div>
        <img className='frame-image' src="https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/revslider/startup_slaider/5559325500_2_1_1.png" alt="" />
        </div>
        </div>
        </SwiperSlide>

        
        <SwiperSlide>
        <div className='slide'>
          <div className='slider-content'>
            <h1 className='text-6xl text-gray-600'>New , Amazing Stuff is here</h1>
          </div>
          <div>
        <div  className="slider-images">
        </div>
        <img className='frame-image' src="https://jevelin.shufflehound.com/fashion-shop/wp-content/uploads/sites/27/revslider/startup_slaider/5559315711_2_5_1.png" alt="" />
        </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
    );
};

export default Slider;