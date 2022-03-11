import React, { useEffect, useRef, useState } from 'react';
import ScheduleDay from './ScheduleDay';
import ScheduleTime from './ScheduleTime';
import { Transition } from '@headlessui/react'

const Schedule = ({ daref, refInView }) => {

    const animated = useRef(false)
    const [scheduleDays, setScheduleDays] = useState(["March 11", "March 12", "March 13", "March 14"])
    const [num, setNum] = useState(0)
    const [scheduleTimes, setScheduleTimes] = useState([
        {
            times: [
                { time: "7:00pm CST", event: "Opening Ceremony begins", location: "virtually and in-person: conant high school media center" },
                { time: "7:10pm CST", event: "Guest Speaker presentation", location: "virtually and in-person: conant high school media center" },
                { time: "7:30pm CST", event: "Live QnA", location: "virtually and in-person: conant high school media center" },
                { time: "7:45pm CST", event: "CougarHacks Rules", location: "virtually and in-person: conant high school media center" },
                { time: "8:00pm CST", event: "Offical start to CougarHacks", location: " virtually and in-person: the CougarHacks hackathon begins " },
            ]
        },
        {
            times: [
                { time: "1:00pm CST", event: "Overview of Git", location: "virtually: zoom" },
                { time: "2:00pm CST", event: "UIUC Student Panel", location: "virtually: zoom" },
                { time: "3:00pm CST", event: "Core principles of WebScraping", location: "virtually: zoom" },
                { time: "3:00pm CST", event: "Fundamentals of Databases", location: "virtually: zoom" },
                { time: "4:00pm CST", event: "Essentials of API Data Fetching", location: "virtually: zoom" },
                { time: "4:00pm CST", event: "Advanced Web Development", location: "virtually: zoom" },
                { time: "5:00pm CST", event: "Unity Game Development", location: "virtually: zoom" },
                { time: "7:00pm CST", event: "Advanced Databases", location: "virtually: zoom" },
                { time: "8:00pm CST", event: "Introduction to Artificial Intelligence", location: "virtually: zoom" },

            ]
        },
        {
            times: [
                { time: "9:00am CST", event: "Project submissions due", location: "virtually: devpost" },
                { time: "8:00am CST", event: "Project judging begins", location: "virtually: devpost" },
            ]
        },
        {
            times: [
                { time: "7:00pm CST", event: "Award Ceremony Begins", location: " virtually and in-person: conant high school media center" },
                { time: "8:00pm CST", event: "Award Ceremony Concludes: Thanks for attending!", location: " virtually and in-person: conant high school media center" }
            ]
        }
    ])

    useEffect(() => {
        console.log(refInView)
        if (refInView) {
            if (!animated.current) {
                animated.current = true
            }
        }
    }, [refInView])

    function setTheNum(number) {
        setNum(number)
    }

    return (
        <div className='bg-white h-full min-h-screen' ref={daref}>
            <div className='px-4 lg:px-32 py-16'>
                <p className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>Schedule</p>
                <Transition
                    show={animated.current}
                    enter="transition ease-in-out duration-700 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-700 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
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
                </Transition>

                <Transition
                    show={animated.current}
                    enter="transition ease-in-out duration-700 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-700 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
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
                        {
                            num === 3 &&
                            <div className='grid grid-cols-1 gap-2'>
                                {
                                    scheduleTimes[3].times.map((time, i) => {
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
                </Transition>

            </div>
        </div>
    );
};

export default Schedule;
