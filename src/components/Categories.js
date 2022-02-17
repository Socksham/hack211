import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Modal from 'react-modal';
import CategoryModal from './CategoryModal';

const Categories = ({ daref, refInView }) => {

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("")
    const [modalText, setModalText] = useState("");
    const animated = useRef(false)

    function entertainment() {
        setModalTitle("game")
        setModalText("Participants who wish to compete in this category can create something that provides joy and entertainment to the user. Any game-based application is accepted in this category.")
        setShowModal(true);
    }

    function utilities() {
        setModalTitle("utility")
        setModalText("Participants who wish to compete in this category can create something that can help people’s lives through utility or by enhancing productivity. Traditional applications regarding social media, task management, or productivity enhancement are accepted in this category, as well as any other applications that help the user do something.")
        setShowModal(true);
    }

    useEffect(() => {
        console.log(refInView)
        if (refInView) {
            if (!animated.current) {
                animated.current = true
            }
        }
    }, [refInView])

    return (
        <div className='grid place-items-center bg-gradient-to-tl from-amber-500 to-red-500 min-h-screen h-full' ref={daref}>
            <CategoryModal showModal={showModal} setShowModal={setShowModal} title={modalTitle} text={modalText} />
            <div className=''>
                <p className='text-center text-white text-6xl font-extrabold pb-4 mb-10'>categories</p>
                <div className='grid grid-cols-2 gap-8'>
                    <Transition
                        show={animated.current}
                        enter="transition duration-700 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition duration-700 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className='bg-white rounded-xl grid place-items-center p-8 cursor-pointer shadow-md' onClick={entertainment}>
                            <div>
                                <p className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>game</p>
                            </div>
                        </div>
                    </Transition>

                    <Transition
                        show={animated.current}
                        enter="transition duration-700 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition duration-700 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className='bg-white rounded-xl grid place-items-center p-8 cursor-pointer shadow-md' onClick={utilities}>
                            <div>
                                <p className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>utility</p>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default Categories;
