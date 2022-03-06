import React from 'react';
import { useState } from 'react';
import FAQCard from './FAQCard';

const FAQ = ({ daref }) => {
    const [items, setItems] = useState([
        {
            title: "General",
            questions: [
                {
                    question: "What is a hackathon?",
                    answer: "A hackathon is an event where coders of all ability levels come together and build cool projects with software and/or hardware."
                },
                {
                    question: "What is a workshop?",
                    answer: "Workshops are sessions within hackathons where you can go to learn more about specific technologies or concepts. You can take what you learn from a workshop and implement it into your project or just attend for fun!"
                },
                {
                    question: "What’s the cost?",
                    answer: "Completely free! We want to make Hack211 accessible and open to all."
                }
            ]
        },
        {
            title: "Timing",
            questions: [
                {
                    question: "How long is CougarHacks?",
                    answer: "The official hackathon goes from 8pm on March 11th and submissions are due by 8am March 13th. The opening ceremony and awards will take place before and after the main hackathon competition, while the workshops will be during the hackathon on March 12th. For more specifics, refer to the schedule above."
                }
            ]
        },
        {
            title: "Logistics",
            questions: [
                {
                    question: "How do categories and prizes work?",
                    answer: "Categories are different judging sections for the hackathon. By submitting your project to a category, it will be compared to other similar projects. All tracks have their own prizes and there will also be overall prizes for the best projects in the entire hackathon. After judging is complete, prizes will be awarded to the winners in the awards ceremony."
                },
                {
                    question: "How do teams work?",
                    answer: "You can create teams of up to 4 people to work with during the hackathon. If you’re coming alone, great! You can join another team or fly solo if you want!"
                }
            ]
        },
        {
        title: "Questions",
            questions: [
                {
                    question: "But I don’t know how to code?",
                    answer: "Great! CougarHacks is made to be inclusive. We have different tracks that will allow you to build projects suited for your skill level. Also, be sure to attend workshops to learn as much as you can!"
                },
                {
                    question: "I'm interested! Where do I sign up!?",
                    answer: "You should fill out the interest form linked at the top of the page and join the DevPost and Discord server!"
                },

                {
                    question: "I have more questions!",
                    answer: "Reach out to us by clicking the email link at the bottom of the page and we are happy to help!"
                }
            ]
        },
    ])
    return (
        <div className='grid place-items-center bg-white min-h-screen h-full' ref={daref}>
            <div className='space-y-4'>
                <p className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-blue-700'>FAQ</p>
                <div className='grid grid-cols-2 gap-4 mx-4 lg:mx-32'>
                    {
                        items.map((item, i) => {
                            return (
                                <div key={i}>
                                    <FAQCard title={item.title} items={item.questions} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQ;
