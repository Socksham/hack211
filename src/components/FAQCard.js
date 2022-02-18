import React from 'react';

const FAQCard = ({title, items}) => {
    return (
        <div className="rounded-xl bg-gradient-to-l from-red-700 to-blue-700 p-1 h-64">
            <div className="justify-center h-full bg-white text-white rounded-lg">
                <p className='text-black overflow-x:scroll'>{title}</p>
                {
                    items.forEach((item, i) => {
                        return (
                            <div>
                                <p>{item.question}</p>
                                <p>{item.answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FAQCard;
