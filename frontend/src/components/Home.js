import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
    const images = [
        "https://i.pinimg.com/originals/38/76/38/38763887c13ae78918a94681a7044f2e.jpg",
        "https://balloonpro.in/wp-content/uploads/2023/06/20210306_092227.jpg",
        "https://thequick-witted.com/wp-content/uploads/2020/10/birthday-party-halls-for-rent-lovely-interior-design-banquet-hall-of-birthday-party-halls-for-rent.jpg",
        "https://cdn.encoreglobal.com/wp-content/uploads/sites/5/2022/11/09095139/Car-Launch-Event-Nissan_0007_MA424.jpg"
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const experienceRef = useRef(null);
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const toggleServices = () => {
        setIsServiceVisible((prev) => !prev);
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <h2>Event Plus</h2>
                <ul className="navbar-list">
                    <li onClick={() => navigateTo('/Home')}>Home</li>
                    <li className="services-menu" onClick={toggleServices}>
                        Services
                        {isServiceVisible && (
                            <ul className='dropdown'>
                                <li onClick={() => navigateTo('/WeddingDecor')}>Wedding Decors</li>
                                <li onClick={() => navigateTo('/NamingCeremony')}>Naming-ceremony</li>
                                <li onClick={() => navigateTo('/BirthdayParties')}>Birthday-parties</li>
                                <li onClick={() => navigateTo('/ProductLaunch')}>Product Launch</li>
                            </ul>
                        )}
                    </li>
        
                    <li onClick={() => navigateTo('/About')}>About Us</li>
                    <li onClick={() => navigateTo('/Contact')}>Contact Us</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
               <div className="hero-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                             src={image}
                            alt={`Slide ${index}`}
                            className={`image ${index === currentImage ? "active" : ""}`}
                        />
                    ))}
                    <h1>India's Leading Event & Wedding Management Company</h1>
                    <p>Creating memorable experiences for your special occasions</p>
                    <button className="cta-button" onClick={() => navigateTo('/Contact')}>Let's talk - Send a message</button>
                </div>
            </header>

            {/* Experience Section */}
            <div className="experience-section" ref={experienceRef}>
                <div className="experience-left">
                    <p>
                        Providing experiences that make you cherish memories for a lifetime.<br />
                        Impactful & transformational events that turn your success into unforgettable moments.
                    </p>
                </div>
                <div className="experience-right">
                    <span className="experience-years">50</span>
                    <span className="experience-text">+ years of experience</span>
                </div>
            </div>

            {/* Card Component */}
            <Card />
            {/* Footer section*/}
            <Footer/>
        </div>
    );
};

export default Home;


