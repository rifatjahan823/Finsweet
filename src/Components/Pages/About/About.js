import React from 'react';

const About = () => {
    return (
        <div className='mx-auto w-11/12 px-5'>
        <div className='grid md:grid-cols-2 grid-cols-1 xl:px-20 lg:px-8 py-32 '>
            {/* ************hero_content area********** */}
            <div className='hero_content'>
                <h2 className='xl:text-5xl  md:text-4xl sm:text-5xl text-3xl font-bold'>About Finsweet <br /> Podcast</h2> 
                <p className='text-base leading-7 my-8 xl:pr-12'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua..</p>
                <button className='w-44 bg-[#503AE7] h-12 text-[#F4F2FF] font-bold capitalize'>Subscribe Now!</button>
            </div>

        </div>
        </div>
    );
};

export default About;