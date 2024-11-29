import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BirthdayParties.css';
import Birthdaycard from './Birthdaycard';
const BirthdayParties = () => {
    const images = [
        "https://th.bing.com/th/id/OIP.YkQHhh-ZISTSZWktxTJXNgAAAA?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.cc3ff75be8da1d2617c83acbd89ccee6?rik=wGGekx9a%2b6AfPA&riu=http%3a%2f%2ftheballoonwala.com%2fcdn%2fshop%2fproducts%2fC1-CnCN45H4j-transformed.jpg%3fv%3d1693397580&ehk=80gFmvG7AC7SxBLJzMtKpl9ObuyQiQ%2bN9wi%2bzTkN9Nc%3d&risl=&pid=ImgRaw&r=0",
        "https://karaspartyideas.com/wp-content/uploads/2020/12/Boho-Rainbow-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com1_-683x1024.jpg",
        "https://hiibangalore.com/wp-content/uploads/2020/08/elegant-birthday-party-decoration-at-home.jpg"
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
        <div className="BirthdayParties-container">
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
                    <h1 style={{fontSize:"xxx-large"}} >BirthdayParties</h1>
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
                        src="https://i.pinimg.com/originals/52/1b/de/521bdeef274be68bfd008f74126c2efb.jpg"
                        alt="BirthdayParties"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
            <div className="service-details">
            <div className='service borderradius_20'>
                    <img
                        src="https://karaspartyideas.com/wp-content/uploads/2016/03/Pink-Gold-1st-Birthday-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com35.jpeg"
                        alt="BirthdayParties"
                        className='borderradius_20'
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className='service paddingleft_20'>

                    <p style={{paddingLeft:"20px",fontsize:"20px",fontWeight:"bold",color:"#4a4a4a", textAlign:"left",marginBottom:"20px" }}>We are empanelled across various hotels across Mumbai, Pune and Goa including</p>
                    <ul style={{listStyle:"none",padding:"0",margin:"20px"}} >
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
                <h2>Birthday Parties Services</h2>
            </div>
            {/* Card Component */}
            <Birthdaycard />
        </div>
    );
};

export default BirthdayParties;
