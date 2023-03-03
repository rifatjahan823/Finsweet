import React from 'react';
import shape from '../../../Assets/Shapes.png';
import article1 from '../../../Assets/bitcoins.jpg';
import article2 from '../../../Assets/top-view-of-assorted.jpg'

const Blog = () => {
    return (
        <div className='blog_section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-32'>
            {/* **********Article-1********* */}
            <div className='h-100 bg-[#F4F2FF] relative'>
                <div className='pt-10 pl-10 pr-11  '>
                    <h3 className='font-bold sm:text-3xl text-2xl pb-4'>Read our <br /> articles & news</h3>
                    <p className='text-[#503AE7] text-base font-semibold'>See More</p>
                </div>
                <img className='mt-11 xl:absolute bottom-0 w-full left-0 right-0' src={shape} alt="" />
            </div>
            {/* ************Article-2*********** */}
            <div className='h-100'>
                <img className='w-full  mb-8' src={article1} alt="" />
                <h2 className='sm:text-2xl text-xl font-semibold leading-7'>Getting the first 100 customers for your business</h2>
                <p className='text-base my-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                <h5 className='text-[#503AE7] text-base font-semibold'>Read Now</h5>
            </div>
            {/* ***************Article-2********** */}
            <div className='h-100'>
                <img className='w-full  mb-8' src={article2} alt="" />
                <h2 className='sm:text-2xl text-xl font-semibold leading-7'>Apparently we had reached a great height in the atmosphere, ...</h2>
                <p className='text-base my-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                <h5 className='text-[#503AE7] text-base font-semibold'>Read Now</h5>
            </div>
        </div>
    );
};

export default Blog;