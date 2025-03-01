import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import '../styles/MyWorks.css'; // Import external CSS
import UIUXWorks from '../components/UIUXWorks';
import FrontendWorks from '../components/FrontendWorks';

const MyWorks = () => {
    const [selectedCategory, setSelectedCategory] = useState('UI_UX');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="My Works" />
            <div className="myworks-container">
                
                {/* Sidebar */}
                <div className="myworks-sidebar">
                    <h3 className="text-lg font-bold mb-4">Works</h3>
                    <ul className="space-y-3">
                        {['UI_UX', 'Frontend'].map((category) => (
                            <li key={category}>
                                <button
                                    className={`${
                                        selectedCategory === category ? 'active' : ''
                                    }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area */}
                <div className="myworks-content">
                    {selectedCategory === 'UI_UX' && <UIUXWorks />}
                    {selectedCategory === 'Frontend' && <FrontendWorks />}
                </div>
            </div>
        </motion.div>
    );
};

export default MyWorks;
