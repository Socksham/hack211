import React, { useEffect, useState } from 'react';

const Hero = () => {

    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    const updateTime = () => {
        let date_now = new Date().getTime()
        let date_future = 1647007200000

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
        <div className='grid place-items-center h-screen'>
            <div className=''>
                <p className='text-center text-white text-6xl font-extrabold pb-4'>hack211</p>
                <div className='text-white text-3xl'>
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
                </div>
                <div className='flex justify-center w-full'>
                    <div className='flex space-x-1 text-white text-lg pt-2'>
                        <p>interesed? fill out the form</p>
                        <p className='underline cursor-pointer text-red-500'>here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
