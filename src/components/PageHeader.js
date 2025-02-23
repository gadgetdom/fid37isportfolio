import React, { useContext } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import UserContext from '../UserContext'; // Import context
import '../styles/PageHeader.css';

const PageHeader = ({ title }) => {
    const { username, phoneNumber } = useContext(UserContext); // Access global username & phone

    return (
        <motion.div  
            initial={{ opacity: 0, y: -20 }}  
            animate={{ opacity: 1, y: 0 }}  
            className="content-container"
        >  
            <div className="page-header">
                <h1 className="title">{title}</h1>
                <div className="icons">  
                    <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href={`https://twitter.com/${username}`} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="icon" />
                    </a>
                    <a href={`https://linkedin.com/in/${username}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default PageHeader;
