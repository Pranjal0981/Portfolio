import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import supremeCourtLogo from "/supreme_court.jpeg";

import "./footer.scss"; // Import footer styles here

const Footer = () => {
    const handleSupremeCourtClick = () => {
        window.location.href = "https://supremecourtofindia.nic.in/";
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icon">
                    <a href="https://wa.me/+918527573521">
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="footer-icon" onClick={handleSupremeCourtClick}>
                    <img
                        src={supremeCourtLogo}
                        className="supreme_logo"
                        alt="Supreme Court Logo"
                    />
                </div>
                <div className="footer-icon">
                    <a href="tel:+918527573521">
                        <FaPhone />
                    </a>
                </div>
                <div className="footer-icon">
                    <a href="mailto:sanskar@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
            <p>© 2024 ACV Legal Services. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
