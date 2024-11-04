import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 className="brand-name">Shofy.</h2>
                    <p>We are a dynamic team of full stack developers and designers crafting high-quality web applications.</p>
                    <div className="social-icons">
                        <a href="#">   <FaFacebook /></a>
                        <a href="#">  <FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    <div>
                        <h4>My Account</h4>
                        <ul>
                            <li>Track Orders</li>
                            <li>Shipping</li>
                            <li>Wishlist</li>
                            <li>My Account</li>
                            <li>Order History</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Information</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Latest News</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h4>Talk To Us</h4>
                    <p>Got Questions? Call us</p>
                    <p className="contact-phone">+91 0000000000</p>
                    <p><i className="fas fa-envelope"></i> Test@gmail.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> 79 Sleepy Hollow St. Jamaica, Jeddah 1432</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2024 All Rights Reserved | by Ali Nawaz ❤️.</p>
            </div>
        </footer>
    );
};

export default Footer;
