import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './weddingDecor.css';
import Weddingcard from './Weddingcard';
const WeddingDecor = () => {
    const images = [
        "https://i.pinimg.com/originals/38/76/38/38763887c13ae78918a94681a7044f2e.jpg",
        "https://i.pinimg.com/originals/0e/24/bc/0e24bc05dbd998afd5fd5e0a66dcc4f2.jpg",
        "https://thequick-witted.com/wp-content/uploads/2020/10/birthday-party-halls-for-rent-lovely-interior-design-banquet-hall-of-birthday-party-halls-for-rent.jpg",
        "https://cdn.encoreglobal.com/wp-content/uploads/sites/5/2022/11/09095139/Car-Launch-Event-Nissan_0007_MA424.jpg"
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
        <div className="weddingDecor-container">
            {/* Navbar */}
            <nav className="navbar1">
                <h2>Event Plus</h2>
                <ul className="navbar-list1">
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
            <header className="hero-section1">
                <div className="hero-images1">
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
                    <h1 style={{fontSize:"xxx-large"}}>Wedding Decor</h1>
                    <p style={{color:"#958a8a",fontstyle: "italic",fontsize: "larger"}}>
                        Event Plus Management Pvt. Ltd. – is a Mumbai-based Event Planning & Wedding décor company.
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
                        src="https://png.pngtree.com/thumb_back/fw800/background/20240105/pngtree-beautiful-wedding-arch-decorated-with-fresh-flowers-image_15571544.jpg"
                        alt="WeddingDecor"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
            <div className="service-details">
            <div className='service borderradius_20'>
                    <img
                        src="https://i.pinimg.com/originals/e3/55/44/e35544ff5a7ed78ec1095aa9662e8cb2.jpg"
                        alt="WeddingDecor"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className='service paddingleft_20'>

                    <h3 style={{ paddingLeft: "20px",fontsize:"20px",fontWeight:"bold",color:"#4a4a4a", textAlign:"left",marginBottom:"20px"}}>We are empanelled across various hotels across Mumbai, Pune and Goa including</h3>
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
                <h2>Wedding Decor Services</h2>
            </div>
            {/* Card Component */}
            <Weddingcard />
        </div>
    );
};

export default WeddingDecor;
