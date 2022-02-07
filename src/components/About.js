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
                        <p className='text-white'>Nunc sed augue lacus viverra vitae congue eu consequat ac. In tellus integer feugiat scelerisque varius morbi. Neque ornare aenean euismod elementum. Elementum integer enim neque volutpat ac tincidunt vitae semper. Sem integer vitae justo eget. Tristique magna sit amet purus gravida quis blandit. Justo nec ultrices dui sapien. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Dolor sit amet consectetur adipiscing. Proin fermentum leo vel orci porta non pulvinar neque. Tellus at urna condimentum mattis. Commodo viverra maecenas accumsan lacus vel facilisis. Faucibus scelerisque eleifend donec pretium. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Non odio euismod lacinia at quis risus sed. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing.</p>
                    </div>
                </Transition>
            </div>
        </div>
    );
};

export default About;
