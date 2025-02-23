import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-[#2C6B2F]">
                            {name}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#4CAF50]"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/devops" className="nav-link">
                            DevOps
                        </Link>
                        <Link to="/work" className="nav-link">
                            My Works
                        </Link>
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link to="/archives" className="nav-link">
                            Archives
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-4 pb-4">
                            <Link to="/devops" className="nav-link-mobile">
                                About DevOps
                            </Link>
                            <Link to="/work" className="nav-link-mobile">
                                My Works
                            </Link>
                            <Link to="/blog" className="nav-link-mobile">
                                Blog
                            </Link>
                            <Link to="/archives" className="nav-link-mobile">
                                Archives
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
