import React, { useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';

const About = ({ daref, refInView, ref2 }) => {
    const animated = useRef(false)

    useEffect(() => {
        console.log("WEFILUWIEAFWIEF")
        console.log(refInView)
        if (refInView) {
            if (!animated.current) {
                animated.current = true
            }
        }
    }, [refInView])

    return (
        <div className='grid place-items-center h-full min-h-screen' ref={ref2}>
            <div ref={daref}>
                <p className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500 mb-10'>about</p>
                <Transition
                    show={animated.current}
                    enter="transition duration-700 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition duration-700 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className='bg-gradient-to-l from-amber-500 to-red-500 mx-32 p-10 mt-4 rounded-xl shadow-md' >
                        <p className='text-white'>Dde to the cancellation of the annual Code211 Hackathon hosted by D211 schools, there is a lack of opportunities for computer science students of the district to interact with each other and gain from an educational experience. hackathons are timed coding competitions where students are given a set amount of time to code their own project, and though the process of collaborative development and educational activities provided throughout that timeframe, students are able to form a deeper connection with the computer science community, gain a stronger knowledge of the field, and partake in an enjoyable competition that allows them to meet new friends and win prizes.</p>
                        <p className='text-white mt-2'>cougarhacks will be a hybrid hackathon, so participants have the option to join all events virtually and, if they choose, join the opening ceremony and awards in person.</p>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default About;
