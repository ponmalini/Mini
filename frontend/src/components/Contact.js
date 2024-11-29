import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Footer from './Footer';
const Contact = () => {
    const navigate = useNavigate();
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const navigateTo = (path) => {
        navigate(path);
    };

    const handleClick = () => {
        alert('send a message!');
      };

    const toggleServices = () => {
        setIsServiceVisible((prevVisible) => !prevVisible);
    };


    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <h2>Event Plus</h2>
                <ul className="navbar-list">
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
                    <li onClick={() => navigateTo('/Contact')}>Contact Us</li>
                </ul>
            </nav>
            <div className='contact-container'>
                <h1 style={{ width: "410px", paddingLeft: "120px", fontSize: "59px", color: "white" }}>We’d love to hear from you.</h1>
                <h3 style={{ paddingTop: "63px", paddingLeft: "215px", width: "174px", color: "darkgray" }}>Connect for collaboration and projects</h3>
            </div>
            <div className='contact-details'>
                <h1 style={{ color: "black", marginLeft: "100px", marginTop: "50px" }}>Send a message</h1>
                <div style={{ marginTop: "40px", }}>
                    <input
                        type="Name"
                        placeholder="Name"
                        required
                        style={{ marginLeft: '100px', width: "700px", }}
                    />
                    <input
                        type="Email"
                        placeholder="Email"
                        required
                        style={{ marginLeft: '100px', width: "700px", marginTop: "20px" }}
                    />
                    <input
                        type="MobileNumber"
                        placeholder="MobileNumber"
                        required
                        style={{ marginLeft: '100px', width: "700px", marginTop: "20px" }}
                    />
                    <input
                        type="Message"
                        placeholder="Message"
                        required
                        style={{ marginLeft: '100px', width: "700px", height: "100px", marginTop: "20px" }}
                    />
                    <div >
                        <button className='button-contact' onClick={handleClick}>Send a message</button>
                    </div>

                </div>
            </div>

            {/* Footer section*/}
            <Footer />
        </div>
    )
}

export default Contact