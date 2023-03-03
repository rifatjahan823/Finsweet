import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import logo1 from '../../../Assets/sponsors-1.png';
import logo2 from '../../../Assets/sponsors-2.png';
import logo3 from '../../../Assets/sponsors-3.png';
import logo4 from '../../../Assets/sponsors-4.png';
import logo5 from '../../../Assets/sponsors-5.png';
import logo from '../../../Assets/Logo.svg';
import apple from '../../../Assets/footerLogo-1.svg';
import google from '../../../Assets/footerLogo-2.svg';
import cloud from '../../../Assets/footerLogo-3.svg';
import sound from '../../../Assets/footerLogo-4.svg';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer_section'>
            {/* **********Sponsors Ssection********** */}
            <div className='-mb-20 z-50 relative'>
                <div className='mx-auto w-11/12 px-4  '>
                    <div className='bg-[#503AE7] p-16'>
                        <h3 className='mb-16 text-center text-3xl text-white font-bold'>Our Sponsors</h3>
                        <Swiper
                            // install Swiper modules
                            modules={[Autoplay,]}
                            autoplay={{
                                delay: 2000,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={55}
                            loop={true}
                            breakpoints={{
                                // when window width is >= 400px
                                400: {
                                    width: 400,
                                    slidesPerView: 2,
                                },// when window width is >= 360px
                                360: {
                                    width: 360,
                                    slidesPerView: 1,
                                },// when window width is >= 640px
                                640: {
                                    width: 640,
                                    slidesPerView: 3,
                                },  // when window width is >= 768px
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                }, // when window width is >= 960px
                                960: {
                                    width: 960,
                                    slidesPerView: 4,
                                }, // when window width is >= 1200px
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {/* -----------------slider-1------------ */}
                            <SwiperSlide >
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo1} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-2-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo2} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-3-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo3} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-4-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo4} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-5-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo5} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -----------------slider-1------------ */}
                            <SwiperSlide >
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo1} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-2-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo2} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-3-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo3} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-4-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo4} alt="TKT" />
                                </div>
                            </SwiperSlide>
                            {/* -------------slider-5-------------- */}
                            <SwiperSlide>
                                <div className="brandSlide ">
                                    <img className="slide-img" src={logo5} alt="TKT" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
            {/* ***********Main-footer*********** */}
            {/* footer-top */}
            <div className='bg-[#14142B] pt-44 pb-28 px-4 '>
                <div className='mx-auto w-11/12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1   mt-7'>
                    {/* **********Logo******** */}
                    <div className=''>
                        {/* <Link to='/' className=' text-white'>&#x7B;Finsweet </Link> */}
                        <Link to='/'> <img src={logo} alt="" srcset="" /></Link>
                    </div>
                    {/* ********Pages********** */}
                    <div>
                        <h5 className='font-bold text-xl text-white mb-8'>Pages</h5>
                        <Link className='text-base font-normal text-white block my-4' to='/'>Home</Link>
                        <Link className='text-base font-normal text-white block' to='/'>Podcast</Link>
                        <Link className='text-base font-normal text-white block my-4' to='/'>Host</Link>
                        <Link className='text-base font-normal text-white block' to='/'>Blog</Link>
                    </div>
                    {/* ***********Reach Us********* */}
                    <div>
                        <h5 className='font-bold text-xl text-white mb-8'>Reach Us</h5>
                        <Link className='text-base font-normal text-white block mb-4' to='/'>Contact</Link>
                        <Link className='text-base font-normal text-white block' to='/'>About</Link>
                    </div>
                    {/* ***********Subscribe********* */}
                    <div>
                        <h5 className='font-bold text-xl text-white mb-8'>Subscribe</h5>
                            <img src={apple} alt="" srcset="" />
                            <img className='my-6' src={google} alt="" srcset="" />
                            <img src={cloud} alt="" srcset="" />
                            <img src={sound} className="mt-6" alt="" srcset="" />
                    </div>
                </div>
            </div>
            {/* *********Footer_Bottom****** */}
            <div className='bg-[#503AE7] p-5'>
                <p className='text-center font-bold text-base text-white'>&#169; Copyright Finsweet 2021</p>
            </div>
        </div>
    );
};

export default Footer;