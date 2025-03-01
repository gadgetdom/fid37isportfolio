import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/FrontendWorks.css';

const FrontendWorks = () => {
    const projects = [
        {
            title: "Baobab Partners",
            description: "I optimized the UI/UX of my previous company to increase user engagement and interaction.",
            tech: "Html, CSS, React, JavaScript",
            link: "https://baobabpartners.netlify.app/",
            images: [
                "img/few1.png",
                "img/gg.png",
                "img/few1.png",
                "img/gg.png"
            ]
        }, 
        {
            title: "Phyls Gadgets",
            description: "I designed and developed an E-commerce web application that enables users to effortlessly find and purchase high-quality, durable gadgets.",
            tech: "Html, CSS, React, JavaScript",
            link: "https://phylsgadgets.netlify.app/",
            images: [
                "img/few1.png",
                "img/gg.png",
                "img/few1.png"
            ]
        }
    ];

    const [imageIndexes, setImageIndexes] = useState(new Array(projects.length).fill(0));

    const handleNext = (projectIndex) => {
        setImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projects[projectIndex].images.length;
            return newIndexes;
        });
    };

    const handlePrev = (projectIndex) => {
        setImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
            return newIndexes;
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="myworks-card grid grid-cols-1 md:grid-cols-2 gap-6"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Image Slider */}
                    <div className="image-slider relative w-full h-64 flex items-center justify-center bg-gray-200 overflow-hidden">
                        <img 
                            src={project.images[imageIndexes[index]]} 
                            alt={project.title} 
                            className="w-full h-full object-cover cursor-pointer rounded-md"
                            onClick={() => window.open(project.images[imageIndexes[index]], '_blank')}
                        />
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded" onClick={() => handlePrev(index)}>◀</button>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded" onClick={() => handleNext(index)}>▶</button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded">
                            {imageIndexes[index] + 1} / {project.images.length}
                        </div>
                    </div>
                    
                    {/* Project Info */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2C6B2F] mb-3">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <p className="text-[#4CAF50] font-medium mb-3">{project.tech}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Visit Website →
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FrontendWorks;
