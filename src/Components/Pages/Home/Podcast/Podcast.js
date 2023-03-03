import React from 'react';
import apple from '../../../Assets/Apple-Podcast.svg';
import sound from '../../../Assets/Sound-Cloud.svg';
import google from '../../../Assets/Google-Podcast.svg';
import spotify from '../../../Assets/Spotify.svg';

const Podcast = () => {
    return (
        <div className='podcast_section flex  flex-wrap flex-row justify-evenly items-center my-11'>
            <div className='basis-1/4'>
                <h3 className='text-2xl font-semibold'>Podcast Available On</h3>
            </div>
            <div className='basis-9/12'>
                <div className='flex justify-between items-center flex-wrap'>
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