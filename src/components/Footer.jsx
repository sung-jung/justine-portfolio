import React from "react";
import "./cssStyles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Justine Lusung. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
