import React from 'react';
import apple from '../../../Assets/Apple-Podcast.svg';
import sound from '../../../Assets/Sound-Cloud.svg';
import google from '../../../Assets/Google-Podcast.svg';
import spotify from '../../../Assets/Spotify.svg';


const Podcast = () => {
    return (
            <div className='podcast_section xl:flex  xl:flex-wrap grid grid-cols-1 flex-row justify-evenly items-center mt-36 mb-32'>
                <div className='xl:basis-1/4 '>
                    <h3 className='text-2xl font-semibold'>Podcast Available On</h3>
                </div>
                <div className='xl:basis-9/12 mt-5 '>
                    <div className='flex justify-between items-center flex-wrap gap-3'>
                        <img src={apple} alt="" />
                        <img src={sound} alt="" />
                        <img src={google} alt="" />
                        <img src={spotify} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Podcast;