import React, { useEffect, useState } from 'react';

const Hero = ({ daref }) => {

    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    const updateTime = () => {
        let date_now = new Date().getTime()
        let date_future = 1647180000000
        //7PM Friday — 1647046800000
        //Submission Deadline — 1647180000000

        // get total seconds between the times
        var delta = Math.abs(date_future - date_now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = parseInt(delta % 60);
        // var seconds = 1  // in theory the modulus is not required
        if (days < 10) {
            days = "0" + days
        }
        if (hours < 10) {
            hours = "0" + hours
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)

        setTimeout(updateTime, 1000)
    }

    useEffect(() => {
        setTimeout(updateTime, 1000)
    }, [])

    return (
        <div className='grid place-items-center h-full min-h-screen bg-gradient-to-tl from-red-700 to-blue-700' ref={daref}>
            <div className=''>
                <img src='CougarHacks.png' width="350" alt='CougarHacks' className='pb-2'></img>
                <br></br>
                {/* <p className='text-center text-white text-6xl font-extrabold pb-4'>Submissions Due In</p> */}
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>Submissions are now closed.</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>Thanks for participating!</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>Awards will be announced on</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>March 14th at 7PM CST</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>in our awards Zoom</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>(Link provided in Discord)</p>
                        </div>
                    </div>
                </div>
                {/* <div className='text-white text-3xl'>
                    <div className='flex justify-center'>
                        <div className='flex space-x-6 tabular-nums'>
                            <p>{days}</p>
                            <p>:</p>
                            <p>{hours}</p>
                            <p>:</p>
                            <p>{minutes}</p>
                            <p>:</p>
                            <p>{seconds}</p>
                        </div>
                    </div>
                </div> */}
                <div className='flex justify-center mt-4 rounded-xl'>
                    <div className='space-y-3'>
                        {/* <div className='rounded-lg p-2 bg-white flex space-x-2 text-white text-lg items-center'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>Interested? Fill out the form</p>
                            <div className='bg-gradient-to-tl from-red-700 to-blue-700 py-1 px-2 rounded-lg cursor-pointer' onClick={() => {window.open("https://docs.google.com/forms/d/e/1FAIpQLSdQT0gu3zkkHc75B6uMoGrbWCmGE3BPhjhiGEzX6BtLVgOiJg/viewform?usp=sf_link")}}>
                                <p className='text-white'>here</p>
                            </div>
                        </div> */}
                        {/* <div className='rounded-lg p-2 bg-white flex space-x-2 text-white text-lg items-center'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 mx-auto'>Submitting projects? Submit them</p>
                            <div className='bg-gradient-to-tl from-red-700 to-blue-700 py-1 px-2 rounded-lg cursor-pointer' onClick={() => {window.open("https://cougarhacks.devpost.com")}}>
                                <p className='text-white'>here</p>
                            </div>
                        </div> */}
                        <div className='rounded-lg p-2 bg-white flex space-x-2 text-white text-lg items-center'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 mx-auto'>Join our Discord!</p>
                            <div className='bg-gradient-to-tl from-red-700 to-blue-700 py-1 px-2 rounded-lg cursor-pointer' onClick={() => {window.open("https://discord.gg/pqH5zHjBMN")}}>
                                <p className='text-white'>here</p>
                            </div>
                        </div>
                        <div className='rounded-lg p-2 bg-white flex space-x-2 text-white text-lg items-center content-center justify-center'>
                            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700 mx-auto'>Questions? Email us</p>
                            <div className='bg-gradient-to-tl from-red-700 to-blue-700 py-1 px-2 rounded-lg cursor-pointer' onClick={() => {window.open("mailto:anandani4136@students.d211.org")}}>
                                <p className='text-white'>here</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
