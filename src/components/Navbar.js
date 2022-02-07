import React from 'react';

const Navbar = ({ glass, time, about, categories, schedule, faq }) => {
    return (
        <div className={`fixed w-full  ${glass ? "transition duration-700 ease-in-out bg-red-400/20 backdrop-blur-sm" : "transition duration-400 ease-in-out"}`}>
            <div className={`${glass ? "border-b-2 border-orange-500 " : ""}`}>
                <div className='relative'>
                    {/* <div className='absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-700 blur-lg'>

                </div> */}
                    <div className='absolute inset-0 '>

                    </div>
                    <div className='relative py-4 px-32 rounded-lg'>
                        <div className='flex justify-between text-white items-center'>
                            <div>
                                <p className='text-lg font-semibold'>march 11-30</p>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <div onClick={() => {about.target.scrollIntoView({ behavior: 'smooth' })}}>
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
                                <div onClick={() => {time.target.scrollIntoView({ behavior: 'smooth' })}}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>interested?</p>
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
