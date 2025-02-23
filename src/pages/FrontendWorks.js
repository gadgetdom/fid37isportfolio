import React from 'react';
import { motion } from 'framer-motion';

const FrontendWorks = () => {
    const frontendProjects = [
        {
            title: "React Dashboard",
            description: "Modern dashboard application built with React and real-time data visualization.",
            tech: "React, TypeScript, Tailwind CSS",
            link: "https://github.com/yourusername/react-dashboard"
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website showcasing modern web development practices.",
            tech: "Next.js, Framer Motion, Styled Components",
            link: "https://github.com/yourusername/portfolio"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frontendProjects.map((project, index) => (
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

export default FrontendWorks;