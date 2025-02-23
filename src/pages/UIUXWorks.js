import React from 'react';
import { motion } from 'framer-motion';

const UIUXWorks = () => {
    const uiuxProjects = [
        {
            title: "E-commerce Redesign",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            tech: "Figma, Adobe XD, Protopie",
            link: "https://your-portfolio.com/ecommerce-redesign"
        },
        {
            title: "Mobile Banking App",
            description: "User interface design for a mobile banking application with focus on accessibility and security.",
            tech: "Sketch, InVision, Principle",
            link: "https://your-portfolio.com/banking-app"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiuxProjects.map((project, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-bold text-[#2C6B2F] mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <p className="text-[#4CAF50] font-medium mb-3">{project.tech}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        View Project →
                    </a>
                </motion.div>
            ))}
        </div>
    );
};

export default UIUXWorks;