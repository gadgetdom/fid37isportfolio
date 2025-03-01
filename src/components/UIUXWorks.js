import React from 'react';
import { motion } from 'framer-motion';

const UIUXWorks = () => {
    const projects = [
        {
            title: "Cloud Migration Project",
            description: "Led the migration of legacy systems to AWS cloud infrastructure.",
            tech: "AWS, Terraform, Docker",
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "CI/CD Pipeline Implementation",
            description: "Developed automated deployment pipelines for microservices architecture.",
            tech: "Jenkins, Kubernetes, GitLab",
            link: "https://github.com/yourusername/project2"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="myworks-card"
                    whileHover={{ scale: 1.02 }}
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
