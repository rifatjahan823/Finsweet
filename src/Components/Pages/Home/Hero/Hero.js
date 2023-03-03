import React from 'react';
import aduiTrack from '../../../Assets/Audio track.png';
import './Hero.css'

const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-16 items-center justify-center lg:px-40 py-20'>
            {/* ************hero_content area********** */}
            <div className='hero_content'>
                <h2 className='text-5xl font-bold'>Become The Hero <br /> Of Your Own Story</h2> 
                <p className='text-base leading-7 my-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <input placeholder='Enter Your Email Id' type="email" name="" id="" className='hero_input ' />  
                <button className='subs_btn'>subscribe</button>
            </div>
            {/* *************hero_audio_track Area************** */}
            <div className='hero_audio_track'>
                <img src={aduiTrack} alt="" />
            </div>
        </div>
    );
};

export default Hero;