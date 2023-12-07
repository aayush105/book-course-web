import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="about-container">
            <div className="social-links">
                <p className="text-white">Copyright ⓒ {year}, Aayush Shrestha</p>
                <h3>Connect with me:</h3>
                <div className="social-icons">
                    <a href="https://github.com/aayush105">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/aayushrestha/">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://twitter.com/aayushrestha5">
                        <FaTwitter className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
