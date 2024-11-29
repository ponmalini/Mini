import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NamingCeremony.css';
import Namingcard from './Namingcard';
const NamingCeremony = () => {
    const images = [
        "https://balloonpro.in/wp-content/uploads/2023/06/20210306_092227.jpg",
        "https://i.pinimg.com/originals/f5/e2/d2/f5e2d29196fdbe769b8b5da1f50d445f.jpg",
        "https://takerentpe.com/media/images/products/2023/04/11_66XSOal.jpg",
        "https://5.imimg.com/data5/GLADMIN/Default/2021/10/LF/IT/LM/48807917/baby-shower-decorations-in-hadapsar-pune-1000x1000.jpg"
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const navigateTo = (path) => {
        navigate(path);
    };

    const toggleServices = () => {
        setIsServiceVisible((prevVisible) => !prevVisible);
    };

    return (
        <div className="NamingCeremony-container">
            {/* Navbar */}
            <nav className="navbar2">
                <h2>Event Plus</h2>
                <ul className="navbar-list2">
                    <li onClick={() => navigateTo('/home')}>Home</li>
                    <li className="services-menu" onClick={toggleServices}>
                        Services
                        {isServiceVisible && (
                            <ul className="dropdown">
                                <li onClick={() => navigateTo('/WeddingDecor')}>Wedding Decors</li>
                                <li onClick={() => navigateTo('/NamingCeremony')}>Naming-ceremony</li>
                                <li onClick={() => navigateTo('/BirthdayParties')}>Birthday-parties</li>
                                <li onClick={() => navigateTo('/ProductLaunch')}>Product Launch</li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => navigateTo('/about')}>About Us</li>
                    <li onClick={() => navigateTo('/contact')}>Contact Us</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header className="hero-section2">
                <div className="hero-images2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={`image ${index === currentImage ? "active" : ""}`}
                        />
                    ))}
                </div>
            </header>

            {/* Service Details */}
            <div className="service-details">
                <div className='service paddingleft_20'>
                    <h4>Service</h4>
                    <h1 style={{fontSize:"xxx-large"}} >NamingCeremony</h1>
                    <p style={{color:"#958a8a",fontstyle: "italic",fontsize: "larger"}}>
                        Event Plus Management Pvt. Ltd. – is a Mumbai-based Event Planning & Naming Ceremony company.
                         <br/>
                         <br/>
                        Having officially started the journey 5 years ago, we may sound young, but our team comprises
                        young members who each bring close to a decade of experience in consumer services, events, and marketing.
                        <br/>
                        <br/>
                        We transform your special occasion into an unforgettable experience.
                    </p>
                </div>
                <div className='service borderradius_20'>
                    <img
                        src="https://deowgxgt4vwfe.cloudfront.net/uploads/1690269424_original.jpg"
                        alt="NamingCeremony"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
            <div className="service-details">
                <div className='service borderradius_20'>
                    <img
                        src="https://www.autumnstonephotography.co.uk/wp-content/uploads/2020/04/Indian-Hindu-Naming-Ceremony-Photography-Namkaran-Service-43.jpg"
                        alt="NamingCeremony"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className='service paddingleft_20'>
                    <p style={{ paddingLeft:"20px",fontsize:"20px",fontWeight:"bold",color:"#4a4a4a", textAlign:"left",marginBottom:"20px" }}>We are empanelled across various hotels across Mumbai, Pune and Goa including</p>
                    <ul style={{listStyle:"none",padding:"0",margin:"20px"}}>
                        <li>VIVANTA BY TAJ PRESIDENT</li>
                        <li>VIVANTA BY TAJ TURBHE</li>
                        <li>HOTEL FOUR SEASONS</li>
                        <li>THE LALIT</li>
                        <li>THE ORCHID HOTEL</li>
                    </ul>
                </div>
            </div>
            <div className='bottom'>
                <h5 style={{ textAlign: "center", color: "gray" }}>SERVICES</h5>
                <h2>Naming Ceremony Services</h2>
            </div>
             {/* Card Component */}
             <Namingcard />
        </div >
    );
};

export default NamingCeremony;
