import React from 'react';

const ScheduleTime = ({time}) => {
    return (
        <div className='flex justify-between shadow-md px-4 py-2 rounded-lg transition duration-150 animate-fade-in-down'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>{time.time}</p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>{time.event}</p>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>{time.location}</p>
        </div>
    );
};

export default ScheduleTime;
