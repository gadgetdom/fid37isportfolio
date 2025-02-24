import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCheck } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ name }) => {
    const [firstName, lastName] = name.split(" ");
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Function to handle link clicks
    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-name">
                    <Link 
                        to="/" 
                        className="text-xl font-bold text-[#2C6B2F] no-underline" 
                        style={{ textDecoration: "none" }}
                        onClick={handleLinkClick} // Close menu when logo is clicked
                    >
                        <span className="name-first">{firstName}</span>{" "}
                        <span className="name-last">{lastName}</span>
                    </Link>
                </div>

                <div 
                    className="hamburger md:hidden" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <FaTimes size={24} className="text-[#4CAF50]" />
                    ) : (
                        <FaBars size={24} className="text-[#4CAF50]" />
                    )}
                </div>

                {/* Right-aligned Menu */}
                <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
                    {[
                        { path: "/devops", label: "DevOps" },
                        { path: "/work", label: "My Works" },
                        { path: "/blog", label: "Blog" },
                        { path: "/archives", label: "Archives" }
                    ].map(({ path, label }) => (
                        <Link 
                            key={path} 
                            to={path} 
                            className={`nav-link ${
                                location.pathname === path ? "active text-[#2C6B2F]" : ""
                            }`}
                            onClick={handleLinkClick} // Close menu when any link is clicked
                        >
                            {label}{" "}
                            {location.pathname === path && (
                                <FaCheck className="check-mark" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;