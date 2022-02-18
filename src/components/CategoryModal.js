import React from 'react';

const CategoryModal = ({ showModal, setShowModal, title, text }) => {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/3 my-6 mx-auto max-w-2xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-6">
                                <div className="flex items-start justify-between rounded-t">
                                    <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700">
                                        {title}
                                    </h3>
                                </div>
                                <div className="relative flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>Close</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default CategoryModal;
