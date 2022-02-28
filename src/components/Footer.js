import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-row items-center bg-gradient-to-tl from-red-700 to-blue-700 px-4 lg:px-32 lg:py-8 py-4 mt-10'>
            <p className='text-md text-white font-semibold'>Website created by Saksham Gupta from</p>
            <a href="https://conant.hackclub.com"><img src='chc.png' width="200" height="35" alt='chc'></img></a>
        </div>
    );
};

export default Footer;
