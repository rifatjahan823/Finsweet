import React from 'react';
import aduiTrack from '../../../Assets/Audio track.png';


const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-x-4 gap-y-10 items-center justify-center xl:px-20 lg:px-8 py-32'>
            {/* ************hero_content area********** */}
            <div className='hero_content'>
                <h2 className='xl:text-5xl  md:text-4xl sm:text-5xl text-2xl font-bold'>Become The Hero <br /> Of Your Own Story</h2> 
                <p className='text-base leading-7 my-8 xl:pr-12'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <input placeholder='Enter Your Email Id' type="email" name="" id="" className='bg-[#F4F2FF] p-4 w-9/12 h-12' />  
                <button className='w-1/4 bg-[#503AE7] h-12 text-[#F4F2FF] font-bold capitalize'>subscribe</button>
            </div>
            {/* *************hero_audio_track Area************** */}
            <div className='hero_audio_track'>
                <img src={aduiTrack} alt="" />
            </div>
        </div>
    );
};

export default Hero;