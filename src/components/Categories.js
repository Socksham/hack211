import React from 'react';

const Categories = () => {
    return (
        <div className='grid place-items-center bg-gradient-to-tl from-amber-500 to-red-500 min-h-screen h-full'>
            <div className=''>
                <p className='text-center text-white text-6xl font-extrabold pb-4 mb-10'>categories</p>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='bg-white rounded-xl grid place-items-center p-8'>
                        <div>
                            <p className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>Entertainment</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl grid place-items-center p-8'>
                        <div>
                            <p className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>Utility</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
