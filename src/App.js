import React, { useState, useCallback, useEffect } from 'react';
import About from './components/About';
import Categories from './components/Categories';
import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {

    const [y, setY] = useState(window.scrollY);
    const [glass, setGlass] = useState(false)

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if(window.scrollY === 0){
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
            <div className="bg-gradient-to-tl from-amber-500 to-red-500 min-h-screen h-full">
                <Navbar glass={glass}/>
                <Hero />
            </div>
            <About />
            <Categories />
            <FAQ />
        </div>
    );
};

export default App;

