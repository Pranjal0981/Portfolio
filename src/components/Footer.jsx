import React from "react";
import "./footer.scss";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icon">
                    <a href="https://wa.me/1234567890">
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="footer-icon">
                    <a href="tel:+1234567890">
                        <FaPhone />
                    </a>
                </div>
                <div className="footer-icon">
                    <a href="mailto:info@example.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <p>© 2024 ACV Legal Services. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
