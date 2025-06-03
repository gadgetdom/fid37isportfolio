import React from 'react';
import '../styles/Footer.css';

const Footer = ({ name }) => {
    const currentYear = 2022; // hard-coded

    return (
        <footer className="bg-[#61c466] text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>© {currentYear} {name}. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;