import React from 'react';

const ScheduleDay = ({ day, clicked, setNum, index }) => {
    return (
        <div>
            {
                clicked
                    ?
                    <div className='shadow-md px-6 py-2 rounded-lg bg-gradient-to-l from-red-700 to-blue-700 cursor-pointer'>
                        <p className='text-white'>{day}</p>
                    </div>
                    :
                    <div className='shadow-md px-6 py-2 rounded-lg cursor-pointer' onClick={() => {setNum(index)}}>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>{day}</p>
                    </div>
            }

        </div>

    );
};

export default ScheduleDay;
