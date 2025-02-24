import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import '../styles/MyWorks.css'; // Import external CSS

const MyWorks = () => {
    const projects = {
        UI_UX: [
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
        ],
        Frontend: [
            {
                title: "Infrastructure Automation",
                description: "Created IaC templates for scalable cloud resources.",
                tech: "Terraform, Ansible, AWS",
                link: "https://github.com/yourusername/project3"
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('UI_UX');
    const filteredProjects = projects[selectedCategory];

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
                        {Object.keys(projects).map((category) => (
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredProjects.map((project, index) => (
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
                </div>
            </div>
        </motion.div>
    );
};

export default MyWorks;
