import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-row bg-gradient-to-tl from-red-700 to-blue-700 px-32 py-8'>
            <p className='text-md text-white font-semibold mt-7'>Website created by Saksham Gupta from</p>
            <a href="https://conant.hackclub.com"><img src='chc.png' width="200" height="35" alt='chc'></img></a>
        </div>
    );
};

export default Footer;
