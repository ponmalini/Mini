import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();



    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-links">
                    <button onClick={() => navigate('/About')}>About Us</button>
                    <button onClick={() => navigate('/WeddingDecor')}>WeddingDecor</button>
                    <button onClick={() => navigate('/NamingCeremony')}>NamingCeremony</button>
                    <button onClick={() => navigate('/BirthdayParties')}>BirthdayParties</button>
                    <button onClick={() => navigate('/Contact-us')}>Contact Us</button>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png'style={{width:"30px",verticalAlign:"middle"}}></img>Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src='https://www.freepnglogos.com/uploads/pics-photos-instagram-logo-png-4.png'style={{width:"30px",verticalAlign:"middle"}}></img>Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src='https://logos-world.net/wp-content/uploads/2020/04/Twitter-Symbol.png'style={{width:"30px",verticalAlign:"middle"}}></img>Twitter</a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Event Plus. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
