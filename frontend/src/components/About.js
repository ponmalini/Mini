import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Footer from './Footer';
const About = () => {
    const navigate = useNavigate();
    const [isServiceVisible, setIsServiceVisible] = useState(false);
    const navigateTo = (path) => {
        navigate(path);
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
            <div className='About-content'>
                <h1 style={{ fontWeight: "bold", fontSize: "70px", textAlign: "center", marginBottom: "10px" }}>About.</h1>
                <div className='About-container'>
                    We are one of the leading Event Management & Wedding Planning  companies in India. We are Event Plus and we celebrate your love, romance, success, money, health & wellbeing. By organizing powerful  & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!
                </div>
            </div>
            <div className='img'>
                <img src='https://th.bing.com/th/id/OIP.UIqYmvMFMNILcPnwCl0AZAAAAA?rs=1&pid=ImgDetMain' style={{ width: "350px", height: "350px" }}></img>
                <img src='https://cdn.cherishx.com/uploads/1690280041_large.jpg' style={{ width: "350px", height: "350px" }}></img>
                <img src='https://i.pinimg.com/736x/a8/02/44/a802444d67d6289db6f954a3496fc612--naming-ceremony-party-at.jpg' style={{ width: "350px", height: "350px" }}></img>
            </div>
            <div style={{ display: "flex", marginTop: "100px", }}>
                <div className='About1 paddingleft_20'>
                    <h5 style={{backgroundColor:"gray",width:"80px",borderRadius:"50px",padding:"5px"}}>VISION</h5>
                    <h1 style={{fontSize:"xxx-large"}} >Driven By A Good Vision</h1>
                    <p style={{color:"#958a8a",fontstyle: "italic",fontsize: "larger"}}>
                        Our vision is to establish ourselves as the foremost event management company in India,
                        <br/>
                        dedicated to crafting experiences that etch cherished memories into the tapestry of your life.
                        <br/>
                        <br/>
                        We aspire to create impactful and transformational events that not only celebrate your success but also translate it into tangible value.
                        <br/>
                        <br/>
                         Our commitment is to consistently meet and exceed your expectations, fueled by a combination of excellent ideas and flawless execution.
                        We envision a future where every event we undertake becomes a milestone in your journey, leaving an indelible mark on your memory lane that lasts a lifetime.</p>
                </div>
                <div className='About1 borderradius_20'>
                    <img
                        src="https://th.bing.com/th/id/OIP.CSlVftImHfdv0xldgUx3PQHaLH?rs=1&pid=ImgDetMain"
                        alt="WeddingDecor"
                        style={{ width: "500px", height: "500px", marginRight: "500px", borderRadius: "10px" }}
                    />
                </div>
            </div>
            <div style={{ display: "flex", marginTop: "100px", }}>
                <div className='About1 borderradius_20'>
                    <img
                        src="https://th.bing.com/th/id/OIP.CSlVftImHfdv0xldgUx3PQHaLH?rs=1&pid=ImgDetMain"
                        alt="WeddingDecor"
                        style={{ width: "500px", height: "500px", marginRight: "500px", borderRadius: "10px" }}
                    />
                </div>
                <div className='About1 paddingleft_20'>
                    <h5 style={{backgroundColor:"gray",width:"80px",borderRadius:"10px",padding:"5px"}}>WORK</h5>
                    <h1 style={{ fontWeight: "bold", fontSize: "70px", textAlign: "center", marginBottom: "10px" }}>What We Do?</h1>
                    <p style={{color:"#958a8a",fontstyle: "italic",fontsize: "larger"}}>
                        We specialize in creating award-winning events, positioning ourselves among the top event planning companies
                        in the country. 
                        <br/>
                        As your comprehensive event planner, we serve as your go-to resource for all your significant
                        occasions. Our approach involves starting from scratch, meticulously crafting a unique blueprint tailored
                        to your specific needs.
                        <br/>
                        <br/>
                         With our unwavering commitment, we provide 24/7 assistance to ensure every detail
                        is seamlessly executed. Our overarching mission is to transform your dream into a reality, making your aspirations our guiding purpose in every event we undertake</p>
                </div>
            </div>
               {/* Footer section*/}
            <Footer/>
        </div>
    )
}

export default About