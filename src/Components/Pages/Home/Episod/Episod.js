import React from 'react';
import './Episod.css';
import client1 from '../../../Assets/Client-1.jpg';
import client2 from '../../../Assets/Client-2.jpg';
import client3 from '../../../Assets/Client-3.jpg';
import episonIcon from '../../../Assets/Episode Icon.png';
import lisenIcon from '../../../Assets/Iisen.png';

const Episod = () => {
    return (
        <div className='epison_section'>
            {/* ********Epison Top area************* */}
            <div className='flex justify-between items-end  flex-row '>
                <div className='basis-1/3'>
                    <h3 className='text-2xl font-bold'>Recent Episodes</h3>
                    <p className='font-normal text-base mt-4'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                </div>
                <div>
                    <button className='episodd_btn'>See All Episiodes</button>
                </div>
            </div>
            {/* ********Epison Bottom area************* */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-16 '>
                {/* *********1st Grid*********** */}
                <div className='relative'>
                    <img className='w-full mb-8' src={client1} alt="" />
                    <img className='absolute top-4 right-4' src={episonIcon} alt="" />
                    <h2 className='text-2xl font-semibold leading-7'>Ep 1: How to build a world-class business brand</h2>
                    <p className='text-base my-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div className='flex items-center'>
                        <img src={lisenIcon} alt="" />
                        <h5 className='text-[#503AE7] text-base font-semibold ml-1'>Listen Now</h5>
                    </div>
                </div>
                {/* ***********2nd Grid******** */}
                <div className='relative'>
                    <img className='w-full mb-8' src={client2} alt="" />
                    <img className='absolute top-4 right-4' src={episonIcon} alt="" />
                    <h2 className='text-2xl font-semibold leading-7'>Ep 2: Getting the first 100 customers for your business</h2>
                    <p className='text-base my-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div className='flex items-center'>
                        <img src={lisenIcon} alt="" />
                        <h5 className='text-[#503AE7] text-base font-semibold ml-1'>Listen Now</h5>
                    </div>
                </div>
                {/* **********3rd Grid********* */}
                <div className='relative'>
                    <img className='w-full mb-8' src={client3} alt="" />
                    <img className='absolute top-4 right-4' src={episonIcon} alt="" />
                    <h2 className='text-2xl font-semibold leading-7'>Ep 3: Should I raise money for my startup, or not?</h2>
                    <p className='text-base my-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                    <div className='flex items-center'>
                        <img src={lisenIcon} alt="" />
                        <h5 className='text-[#503AE7] text-base font-semibold ml-1'>Listen Now</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episod;