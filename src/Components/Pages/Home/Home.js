import React from 'react';
import Hero from './Hero/Hero';
import Podcast from './Podcast/Podcast';

const Home = () => {
    return (
        <div className='mx-auto w-11/12'>
            <Hero></Hero>
            <Podcast></Podcast>
        </div>
    );
};

export default Home;