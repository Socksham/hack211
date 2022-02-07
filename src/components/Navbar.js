import React from 'react';

const Navbar = ({ glass, time, about, categories, schedule, faq }) => {
    return (
        <div className={`fixed w-full  ${glass ? "transition duration-700 ease-in-out bg-red-400/40 backdrop-blur-sm" : "transition duration-400 ease-in-out"}`}>
            <div className={`${glass ? "border-b-2 border-orange-500 " : ""}`}>
                <div className='relative'>
                    {/* <div className='absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-700 blur-lg'>

                </div> */}
                    <div className='absolute inset-0 '>

                    </div>
                    <div className='relative py-4 px-32 rounded-lg'>
                        <div className='flex justify-between text-white items-center'>
                            <div>
                                <p className='text-lg font-semibold'>march 11-13</p>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <div onClick={() => {about.current.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='border-dashed border-2 border-white rounded-lg  px-2 text-lg font-semibold cursor-pointer'>about</p>
                                </div>
                                <div onClick={() => {categories.target.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>categories</p>
                                </div>
                                <div onClick={() => {schedule.target.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>schedule</p>
                                </div>
                                <div onClick={() => {faq.target.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>faq</p>
                                </div>
                                <div className='bg-white rounded-lg px-2 py-1' onClick={() => {time.target.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500  rounded-lg text-lg font-semibold cursor-pointer'>interested?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Navbar;
