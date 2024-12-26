import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Let's Connect!</h3>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/mohamad-hammoud-663131263/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://www.instagram.com/mohamad_khaled001/profilecard/?igsh=cXV1b2RkMGt4MWJm " target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaInstagram size={30} />
                    </a>
                    <a href="mailto:mohamad.hammoud3344@gmail.com" className="social-link">
                        <FaEnvelope size={30} />
                    </a>
                    <a href="https://github.com/moe3344?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub size={30} />
                    </a>
                </div>
                <p>&copy; 2024 Mohamad Hammoud | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
