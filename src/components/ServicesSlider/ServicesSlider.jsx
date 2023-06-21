import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import services1 from '../../assets/services-1.png';
import services2 from '../../assets/services-2.png';
import services3 from '../../assets/services-3.png';
import services4 from '../../assets/services-4.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServicesSlider = () => {
    return (
        <>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    }
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='rounded-lg shadow-lg'>
                        <img src={services1} alt="" />
                        <div className='p-2'>
                            <h3 className='text-center font-bold text-xl'>Pre Wedding Photoshoot</h3>
                            <div className='divider my-0'></div>
                            <p className='text-[#4C696D] mb-5 text-center'><span className='font-bold'>Starting at</span> 25,000 (One Day)</p>
                            <button className='bg-[#4E99A4] text-white rounded-lg py-3 px-14 mx-auto block'>Know more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg shadow-lg'>
                        <img src={services2} alt="" />
                        <div className='p-2'>
                            <h3 className='text-center font-bold text-xl'>Wedding Photoshoot</h3>
                            <div className='divider my-0'></div>
                            <p className='text-[#4C696D] mb-5 text-center'><span className='font-bold'>Starting at</span> 65,000 (Two days )</p>
                            <button className='bg-[#4E99A4] text-white rounded-lg py-3 px-14 mx-auto block'>Know more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg shadow-lg'>
                        <img src={services3} alt="" />
                        <div className='p-2'>
                            <h3 className='text-center font-bold text-xl'>Portfolio Shoot</h3>
                            <div className='divider my-0'></div>
                            <p className='text-[#4C696D] mb-5 text-center'><span className='font-bold'>Starting at</span> 25,000 (Standard price for 6-8 hours)</p>
                            <button className='bg-[#4E99A4] text-white rounded-lg py-3 px-14 mx-auto block'>Know more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg shadow-lg'>
                        <img src={services4} alt="" />
                        <div className='p-2'>
                            <h3 className='text-center font-bold text-xl'>Birthday Baby Folio</h3>
                            <div className='divider my-0'></div>
                            <p className='text-[#4C696D] mb-5 text-center'><span className='font-bold'>Starting at</span> 15,000 (One Day)</p>
                            <button className='bg-[#4E99A4] text-white rounded-lg py-3 px-14 mx-auto block'>Know more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg shadow-lg'>
                        <img src={services4} alt="" />
                        <div className='p-2'>
                            <h3 className='text-center font-bold text-xl'>Birthday Baby Folio</h3>
                            <div className='divider my-0'></div>
                            <p className='text-[#4C696D] mb-5 text-center'><span className='font-bold'>Starting at</span> 15,000 (One Day)</p>
                            <button className='bg-[#4E99A4] text-white rounded-lg py-3 px-14 mx-auto block'>Know more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default ServicesSlider;