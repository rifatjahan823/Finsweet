import React from 'react';
import Episod from './Episod/Episod';
import Hero from './Hero/Hero';
import Podcast from './Podcast/Podcast';

const Home = () => {
    return (
        <div className='mx-auto w-11/12 px-5'>
            <Hero></Hero>
            <Podcast></Podcast>
            <Episod></Episod>
        </div>
    );
};

export default Home;