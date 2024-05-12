import React from "react";
import "./footer.scss";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-icon">
                    <a href="https://wa.me/+918527573521">
                        <FaWhatsapp />
                    </a>
                </div>
                <div className="footer-icon">
                    <a href="tel: +918527573521">
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
