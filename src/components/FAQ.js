import React from 'react';
import { useState } from 'react';
import FAQCard from './FAQCard';

const FAQ = ({ daref }) => {
    const [items, setItems] = useState([
        {
            title: "generalgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneralgeneral",
            questions: [
                {
                    question: "what is cougarhacks?",
                    answer: "a hackathon"
                }
            ]
        },
        {
            title: "general",
            questions: [
                {
                    question: "what is cougarhacks?",
                    answer: "a hackathon"
                }
            ]
        },
        {
            title: "general",
            questions: [
                {
                    question: "what is cougarhacks?",
                    answer: "a hackathon"
                }
            ]
        },
        {
            title: "general",
            questions: [
                {
                    question: "what is cougarhacks?",
                    answer: "a hackathon"
                }
            ]
        },
    ])
    return (
        <div className='grid place-items-center bg-white min-h-screen h-full' ref={daref}>
            <div className='space-y-4'>
                <p className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>faq</p>
                <div className='grid grid-cols-2 gap-4 mx-32'>
                    {
                        items.map((item, i) => {
                            return (
                                <FAQCard title={item.title} items={item.questions}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;
