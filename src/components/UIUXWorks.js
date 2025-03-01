import React, { useState } from 'react';  
import '../styles/UIUXWorks.css';

const UIUXWorks = ({ projects = [] }) => { 

    const defaultProjects = [  
        {  
            title: "Project One",  
            description: "Description for project one.",  
            images: [  
                "https://example.com/image1.jpg",  
                "https://example.com/image2.jpg",  
            ],  
            prototypeLink: "https://example.com/prototype1"  
        },  
        // ... more projects  
    ];  
    
    projects = projects.length ? projects : defaultProjects;

    const [lightbox, setLightbox] = useState({  
        isOpen: false,  
        projectIndex: 0,  
        imageIndex: 0,  
    });  

    const openLightbox = (index) => {  
        setLightbox({ isOpen: true, projectIndex: index, imageIndex: 0 });  
    };  

    const closeLightbox = () => {  
        setLightbox({ ...lightbox, isOpen: false });  
    };  

    const handleNext = () => {  
        setLightbox((prev) => ({  
            ...prev,  
            imageIndex: (prev.imageIndex + 1) % projects[prev.projectIndex].images.length,  
        }));  
    };  

    const handlePrev = () => {  
        setLightbox((prev) => ({  
            ...prev,  
            imageIndex: (prev.imageIndex - 1 + projects[prev.projectIndex].images.length) % projects[prev.projectIndex].images.length,  
        }));  
    };  

    return (  
        <>  
            <div className="works-container">  
                {projects.length > 0 ? (  
                    projects.map((project, index) => (  
                        <div className="myworks-card" key={index}>  
                            <img   
                                src={project.images[0]} // Use the first image for the card preview  
                                alt={project.title}  
                                onClick={() => openLightbox(index)}  
                            />  
                            <div className="overlay">  
                                <h3>{project.title}</h3>  
                                <p>{project.description}</p>  
                                <a href={project.prototypeLink} className="view-prototype" target="_blank" rel="noopener noreferrer">View Prototype</a>  
                            </div>  
                        </div>  
                    ))  
                ) : (  
                    <p>No projects available</p> // Message for no projects  
                )}  
            </div>  

            {lightbox.isOpen && (  
                <div className="lightbox-overlay" onClick={closeLightbox}>  
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>  
                        <img   
                            src={projects[lightbox.projectIndex].images[lightbox.imageIndex]}   
                            alt={projects[lightbox.projectIndex].title}  
                        />  
                        <button className="close" onClick={closeLightbox}>✕</button>  
                        <button className="left" onClick={handlePrev}>◀</button>  
                        <button className="right" onClick={handleNext}>▶</button>  
                        <div className="counter">  
                            {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex].images.length}  
                        </div>  
                    </div>  
                </div>  
            )}  
        </>  
    );  
};  

export default UIUXWorks;  