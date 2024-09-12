import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration in milliseconds
        let startTime = null;

        // Easing function: easeInOutQuad
        const easingFunction = (t) => {
            t /= duration / 2;
            if (t < 1) return (distance / 2) * t * t + startPosition;
            t--;
            return (-distance / 2) * (t * (t - 2) - 1) + startPosition;
        };

        const scroll = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const position = easingFunction(progress * duration);
            window.scrollTo(0, position);
            if (timeElapsed < duration) {
                window.requestAnimationFrame(scroll);
            }
        };

        window.requestAnimationFrame(scroll);
    }
};

const Navbar = () => {
    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const sections = ['home', 'features', 'about', 'portfolio', 'our-team','testimonial', 'contact-us'];
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7, // 70% visibility
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                observer.observe(sectionElement);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) {
                    observer.unobserve(sectionElement);
                }
            });
        };
    }, []);

    return (
        <header id="header">
            <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#home">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-right">
                        <ul className="nav navbar-nav">
                            <li className={`scroll ${activeId === 'home' ? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('root')}>Home</a>
                            </li>
                            <li className={`scroll ${activeId === 'features' ? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('features')}>Features</a>
                            </li>
                            <li className={`scroll ${activeId === 'about' ? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('about')}>About</a>
                            </li>
                            <li className={`scroll ${activeId === 'portfolio' ? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('portfolio')}>Portfolio</a>
                            </li>
                            <li className={`scroll ${activeId === 'our-team' || activeId==='testimonial'? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('our-team')}>Team</a>
                            </li>
                            <li className={`scroll ${activeId === 'contact-us' ? 'active' : ''}`}>
                                <a onClick={() => handleClickScroll('contact-us')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
