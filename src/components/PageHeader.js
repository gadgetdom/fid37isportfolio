import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PageHeader = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <h1 className="text-3xl font-bold text-[#2C6B2F] mb-4">{title}</h1>
            <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} className="text-[#4CAF50] hover:text-[#2C6B2F]" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} className="text-[#4CAF50] hover:text-[#2C6B2F]" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} className="text-[#4CAF50] hover:text-[#2C6B2F]" />
                </a>
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} className="text-[#4CAF50] hover:text-[#2C6B2F]" />
                </a>
            </div>
        </motion.div>
    );
};

export default PageHeader;