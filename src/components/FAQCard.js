import React from 'react';

const FAQCard = ({ title, items }) => {

    return (
        <div className="rounded-xl bg-gradient-to-l from-red-700 to-blue-700 p-1 h-94">
            <div className="justify-center h-full bg-white text-white rounded-lg">
                <p className='grid place-items-center text-blue-900 text-2xl font-bold overflow-x:scroll'>{title}</p>
                {items.map((animal, index) => {
                    return (
                        <div key={index}>
                            <p className='text-black text-bold text-xl ml-2'>{animal.question}</p>
                            <li className='text-black ml-5'>{animal.answer}</li>
                        </div>
                    )


                })}
          </div>
        </div>
    );
    // return (
    //     <div className="rounded-xl bg-gradient-to-l from-red-700 to-blue-700 p-1 h-64">
    //         <div className="justify-center h-full bg-white text-white rounded-lg">
    //             <p className='text-black overflow-x:scroll'>{title}</p>
    //                 {items.forEach((item, i) => {
    //                     return <p key={i}>{item.question}</p>;
    //                     //     <div>
    //                     //         <p>{item.question}</p>
    //                     //         <p>{item.answer}</p>
    //                     //     </div>
    //                 })}
    //         </div>
    //     </div>
    // );
};

export default FAQCard;