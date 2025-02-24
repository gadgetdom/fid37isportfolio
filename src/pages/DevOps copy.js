import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const DevOps = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="DevOps" />
            <div className="max-w-4xl mx-auto text-left">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                        A DevOps Engineer passionate about building and optimizing
                        efficient development pipelines. I specialize in cloud infrastructure, automation,
                        and implementing CI/CD practices.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-bold text-[#4CAF50]">DevOps</h3>
                            <p>Infrastructure as Code, CI/CD, Cloud Services</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-bold text-[#4CAF50]">Cloud</h3>
                            <p>AWS, Azure, Google Cloud Platform</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-bold text-[#4CAF50]">Automation</h3>
                            <p>Jenkins, GitHub Actions, Ansible</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto text-left">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold text-[#2C6B2F] mb-4">DevOps Practices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-[#4CAF50] mb-3">Continuous Integration</h3>
                            <p className="text-gray-700 mb-4">
                                Implementing automated testing and integration processes to ensure code quality
                                and reliability.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#4CAF50] mb-3">Continuous Deployment</h3>
                            <p className="text-gray-700 mb-4">
                                Automating deployment processes to deliver software updates quickly and safely.
                            </p>
                        </div>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/your-devops-video-id"
                        className="w-full h-96 rounded-lg mt-6"
                        title="DevOps Overview"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
};

export default DevOps;