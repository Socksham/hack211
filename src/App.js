import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import About from './components/About';
import Categories from './components/Categories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';

const App = () => {

    const [y, setY] = useState(window.scrollY);
    const [glass, setGlass] = useState(false)

    const [aboutRef, aboutInView, aboutEntry] = useInView();
    const [categoriesRef, categoriesInView, categoriesEntry] = useInView();
    const [faqRef, faqInView, faqEntry] = useInView();
    const [timeRef, timeInView, timeEntry] = useInView();
    const [scheduleRef, scheduleInView, scheduleEntry] = useInView();
    const aboutRef2 = useRef()
    // const aboutRef = useRef()
    // const categoriesRef = useRef()
    // const faqRef = useRef()
    // const timeRef = useRef()
    // const scheduleRef = useRef()

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY === 0) {
                setGlass(false)
            }
            // if (y > window.scrollY) {
            //     console.log("scrolling up");
            if (y < window.scrollY) {
                setGlass(true)
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div className="bg-white">
            <Navbar glass={glass} time={timeEntry} about={aboutRef2} categories={categoriesEntry} schedule={scheduleEntry} faq={faqEntry} />
            <Hero daref={timeRef} />
            <About daref={aboutRef} refInView={aboutInView} ref2={aboutRef2}/>
            <Categories daref={categoriesRef} refInView={categoriesInView}/>
            <Schedule daref={scheduleRef} refInView={scheduleInView}/>
            <FAQ daref={faqRef} />
            <Footer />
        </div>
    );
};

export default App;

