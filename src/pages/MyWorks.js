import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const MyWorks = () => {
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
        },
        {
            title: "Infrastructure Automation",
            description: "Created IaC templates for scalable cloud resources.",
            tech: "Terraform, Ansible, AWS",
            link: "https://github.com/yourusername/project3"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="My Works" />
            <div className="max-w-4xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6"
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
        </motion.div>
    );
};

export default MyWorks;