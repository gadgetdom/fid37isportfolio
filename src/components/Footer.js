import React from 'react';
import '../styles/Footer.css';

const Footer = ({ name }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2C6B2F] text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>© {currentYear} {name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;