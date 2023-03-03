import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/header-log.svg'

const Header = () => {
    return (
        <div className='header_Section mx-auto w-11/12 px-5 py-6'>
            <div className='flex items-center justify-between'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <Link to='/about' className='text-base font-normal'>About</Link>
            </div>
        </div>
    );
};

export default Header;