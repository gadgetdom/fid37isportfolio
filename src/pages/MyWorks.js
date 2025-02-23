import React, { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import UIUXWorks from './UIUXWorks';
import FrontendWorks from './FrontendWorks';
import { FaBars } from 'react-icons/fa';

const MyWorks = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Handle mobile menu selection
    const handleMenuSelect = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
        >
            <PageHeader title="All Works" />
            
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
                {/* Mobile Menu Button */}
                <div className="md:hidden mb-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex items-center space-x-2 bg-[#4CAF50] text-white px-4 py-2 rounded-md"
                    >
                        <FaBars />
                        <span>Menu</span>
                    </button>
                </div>

                {/* Side Menu - Desktop always visible, Mobile conditional */}
                <div className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } md:block md:w-64 flex-shrink-0 mb-6 md:mb-0`}>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <h2 className="text-xl font-bold text-[#2C6B2F] mb-4">Categories</h2>
                        <nav className="flex flex-col space-y-2">
                            <NavLink
                                to="ui-ux"
                                onClick={() => handleMenuSelect('ui-ux')}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-md transition-colors ${
                                        isActive
                                            ? 'bg-[#4CAF50] text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                    }`
                                }
                            >
                                UI/UX
                            </NavLink>
                            <NavLink
                                to="frontend"
                                onClick={() => handleMenuSelect('frontend')}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-md transition-colors ${
                                        isActive
                                            ? 'bg-[#4CAF50] text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                    }`
                                }
                            >
                                Frontend
                            </NavLink>
                        </nav>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow md:ml-6">
                    <Routes>
                        <Route path="ui-ux" element={<UIUXWorks />} />
                        <Route path="frontend" element={<FrontendWorks />} />
                    </Routes>
                </div>
            </div>
        </motion.div>
    );
};

export default MyWorks;