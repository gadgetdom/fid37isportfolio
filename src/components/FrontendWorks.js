/* eslint-disable react-hooks/exhaustive-deps */
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
    const [expandedDescriptions, setExpandedDescriptions] = useState(new Array(projects.length).fill(false));
    const [lightbox, setLightbox] = useState({ open: false, projectIndex: 0, imageIndex: 0 });

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

    const toggleDescription = (index) => {
        setExpandedDescriptions((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    // Lightbox functions
    const openLightbox = (projectIndex, imageIndex) => {
        setLightbox({
            open: true,
            projectIndex,
            imageIndex: imageIndex
        });
    };

    const closeLightbox = () => {
        setLightbox({ ...lightbox, open: false });
    };

    const nextLightboxImage = () => {
        const projectImages = projects[lightbox.projectIndex].images;
        setLightbox({
            ...lightbox,
            imageIndex: (lightbox.imageIndex + 1) % projectImages.length
        });
    };

    const prevLightboxImage = () => {
        const projectImages = projects[lightbox.projectIndex].images;
        setLightbox({
            ...lightbox,
            imageIndex: (lightbox.imageIndex - 1 + projectImages.length) % projectImages.length
        });
    };

    // Handle keyboard navigation in lightbox
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightbox.open) return;
            
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowRight') nextLightboxImage();
            else if (e.key === 'ArrowLeft') prevLightboxImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightbox]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="myworks-card"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Image Slider with Fixed Height Container */}
                        <div className="image-slider" style={{ 
                            position: 'relative', 
                            height: '300px', // Fixed height for all image containers
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img 
                                src={project.images[imageIndexes[index]]} 
                                alt={project.title} 
                                onClick={() => openLightbox(index, imageIndexes[index])}
                                style={{ 
                                    cursor: 'pointer',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain' // Ensures image maintains aspect ratio
                                }}
                            />
                            
                            {/* Fixed position left button */}
                            <button 
                                className="left" 
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering the lightbox
                                    handlePrev(index);
                                }}
                                style={{ 
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 5,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    border: 'none'
                                }}
                            >
                                ◀
                            </button>
                            
                            {/* Centered Counter */}
                            <div 
                                className="image-counter" 
                                style={{ 
                                    position: 'absolute',
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    bottom: '10px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '3px 8px',
                                    borderRadius: '12px',
                                    fontSize: '14px'
                                }}
                            >
                                {imageIndexes[index] + 1} / {project.images.length}
                            </div>
                            
                            {/* Fixed position right button */}
                            <button 
                                className="right" 
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering the lightbox
                                    handleNext(index);
                                }}
                                style={{ 
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 5,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    border: 'none'
                                }}
                            >
                                ▶
                            </button>
                        </div>
                        
                        {/* Project Info */}
                        <div className="project-info">
                            <h3 className="text-xl font-bold text-[#2C6B2F] mb-3">{project.title}</h3>
                            
                            {/* Expandable Description */}
                            <div className="description-container" style={{ minHeight: '4.5rem' }}>
                                <p className="text-gray-700 mb-1">
                                    {expandedDescriptions[index] 
                                        ? project.description 
                                        : truncateText(project.description, 80)}
                                </p>
                                {project.description.length > 80 && (
                                    <button 
                                        onClick={() => toggleDescription(index)}
                                        className="text-blue-500 text-sm hover:underline focus:outline-none"
                                    >
                                        {expandedDescriptions[index] ? 'Read less' : 'Read more'}
                                    </button>
                                )}
                            </div>
                            
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

            {/* Improved Lightbox Component with Fixed-Position Buttons */}
            {lightbox.open && (
                <div className="lightbox-overlay" 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}
                    onClick={closeLightbox}
                >
                    <div 
                        className="lightbox-content"
                        style={{
                            position: 'relative',
                            width: '80%',
                            height: '80vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={projects[lightbox.projectIndex].images[lightbox.imageIndex]} 
                            alt={projects[lightbox.projectIndex].title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        
                        {/* Close button */}
                        <button
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                backgroundColor: 'transparent',
                                color: 'white',
                                fontSize: '24px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={closeLightbox}
                        >
                            ✕
                        </button>
                        
                        {/* Fixed position navigation buttons */}
                        <button
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                fontSize: '24px',
                                padding: '10px 15px',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                prevLightboxImage();
                            }}
                        >
                            ◀
                        </button>
                        
                        <button
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                fontSize: '24px',
                                padding: '10px 15px',
                                border: 'none',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                nextLightboxImage();
                            }}
                        >
                            ▶
                        </button>
                        
                        {/* Image counter */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-40px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                padding: '5px 10px',
                                borderRadius: '5px'
                            }}
                        >
                            {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex].images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FrontendWorks;