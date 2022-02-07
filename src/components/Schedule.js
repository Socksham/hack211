import React, { useEffect, useRef, useState } from 'react';
import ScheduleDay from './ScheduleDay';
import ScheduleTime from './ScheduleTime';

const Schedule = ({ daref, refInView }) => {

    const animated = useRef(false)
    const [startAnimation, setStartAnimation] = useState(false)
    const [scheduleDays, setScheduleDays] = useState(["march 11", "march 12", "march 13"])
    const [num, setNum] = useState(0)
    const [scheduleTimes, setScheduleTimes] = useState([
        {
            times: [
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" }
            ]
        },
        {
            times: [
                { time: "7:00am", event: "check-in begins", location: "media center" },

            ]
        },
        {
            times: [
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" },
                { time: "7:00am", event: "check-in begins", location: "media center" }
            ]
        }
    ])

    useEffect(() => {
        console.log(refInView)
        if(refInView){
            if(!animated.current){
                setStartAnimation(true)
                animated.current = true
            }
        }
    }, [refInView])

    function setTheNum(number) {
        setNum(number)
    }

    return (
        <div className='bg-white h-full min-h-screen' ref={daref}>
            <div className='px-32 py-16'>
                <p className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>schedule</p>
                <div className='flex space-x-4 mb-4 mt-4'>
                    {
                        scheduleDays.map((day, i) => {
                            if (i === num) {
                                return (
                                    <div key={i}>
                                        <ScheduleDay day={day} clicked={true} setNum={setTheNum} index={i} />
                                    </div>

                                )
                            }
                            return (
                                <div key={i}>
                                    <ScheduleDay day={day} clicked={false} setNum={setTheNum} index={i} />
                                </div>

                            )
                        })
                    }
                </div>
                <div>
                    {
                        num === 0 &&
                        <div className='grid grid-cols-1 gap-2'>
                            {
                                scheduleTimes[0].times.map((time, i) => {
                                    return (
                                        <div key={i}>
                                            <ScheduleTime time={time} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    }
                    {
                        num === 1 &&
                        <div className='grid grid-cols-1 gap-2'>
                            {
                                scheduleTimes[1].times.map((time, i) => {
                                    return (
                                        <div key={i}>
                                            <ScheduleTime time={time} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    {
                        num === 2 &&
                        <div className='grid grid-cols-1 gap-2'>
                            {
                                scheduleTimes[2].times.map((time, i) => {
                                    return (
                                        <div key={i}>
                                            <ScheduleTime time={time} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Schedule;
