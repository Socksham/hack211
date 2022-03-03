import React, { useState } from 'react';

const Navbar = ({ glass, time, about, categories, schedule, faq }) => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className={`fixed w-full  ${glass ? "transition duration-700 ease-in-out bg-gradient-to-r to-red-700/60 from-blue-700/60 backdrop-blur-sm" : "transition duration-400 ease-in-out"}`}>
            <div className={`${glass ? "border-b-2 border-blue-500 " : ""}`}>
                <div className='relative'>
                    {/* <div className='absolute inset-0 bg-gradient-to-r from-rose-600 to-blue-700 blur-lg'>

                </div> */}
                    <div className='absolute inset-0 '>

                    </div>
                    <div className='relative px-2 py-4 px-4 lg:px-32 rounded-lg'>
                        <div className='flex justify-between text-white items-center'>
                            <div>
                                <p className='text-lg font-semibold'>March 11-13</p>
                            </div>
                            <div className='flex space-x-4 items-center hidden lg:flex'>
                                <div onClick={() => { about.current.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <p className='border-dashed border-2 border-white rounded-lg  px-2 text-lg font-semibold cursor-pointer'>About</p>
                                </div>
                                <div onClick={() => { categories.target.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>Categories</p>
                                </div>
                                <div onClick={() => { schedule.target.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>Schedule</p>
                                </div>
                                <div onClick={() => { faq.target.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <p className='border-dashed border-2 border-white rounded-lg px-2 text-lg font-semibold cursor-pointer'>FAQ</p>
                                </div>
                                <div className='bg-white rounded-lg px-2 py-1' onClick={() => { time.target.scrollIntoView({ behavior: 'smooth' }) }}>
                                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700  rounded-lg text-lg font-semibold cursor-pointer'>Interested?</p>
                                </div>
                            </div>
                            <div className="flex lg:hidden mb-1 cursor-pointer">
                                <label onClick={() => {
                                    console.log("ERIRE")
                                    setClicked(!clicked)
                                }} for="menu-toggle" className="pointer-cursor block lg:hidden block"><svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                                <input className="hidden" type="checkbox" id="menu-toggle" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 bg-black bg-opacity-50">
                    {
                        clicked
                            ?
                            <div className="lg:hidden w-full justify-end text-black pb-10" id="menu">
                                <nav>
                                    <ul className="cursor-pointer text-base text-white pt-4 items-end">
                                        <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400 space-x-1" onClick={(e) => {
                                            about.current.scrollIntoView({ behavior: 'smooth' })
                                            setClicked(!clicked)
                                        }}>
                                            about
                                        </li>
                                        <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                            categories.target.scrollIntoView({ behavior: 'smooth' })
                                            setClicked(!clicked)
                                        }}>categories</li>
                                        <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                            schedule.target.scrollIntoView({ behavior: 'smooth' })
                                            setClicked(!clicked)
                                        }}>
                                            schedule</li>
                                        <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                            faq.target.scrollIntoView({ behavior: 'smooth' })
                                            setClicked(!clicked)
                                        }}>
                                            faq</li>
                                        <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                            time.target.scrollIntoView({ behavior: 'smooth' })
                                            setClicked(!clicked)
                                        }}>
                                            interested?</li>
                                    </ul>
                                </nav>
                            </div>
                            :
                            <div className="hidden w-full" id="menu">

                            </div>
                    }
                </div>
            </div>

        </div>

    );
};

export default Navbar;
