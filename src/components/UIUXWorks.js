import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/UIUXWorks.css";

const UIUXWorks = ({ projects = [] }) => {
    const exampleProjects = [
        {
            title: "Mystic Bulk SMS Web App",
            description:
                "I designed a web application for a client who needed a platform where users could purchase SMS units and send bulk messages for their businesses or events. The project was successfully delivered, and the client was highly satisfied with the outcome.",
            tool: "Figma",
            images: [
                "/img/UIXWorks/myst/1.png",
                "/img/UIXWorks/myst/2.png",
                "/img/UIXWorks/myst/3.png",
                "/img/UIXWorks/myst/4.png",
                "/img/UIXWorks/myst/5.png",
            ],
            prototypeLink: "https://example.com/prototype1",
        },
        {
            title: "Hirelez Web Application",
            description:
                "I conducted UX research and designed a platform that allows users to seamlessly connect with skilled workers in their area, negotiate prices, agree on terms, make payments, and rate the worker upon job completion. The client was thrilled with the results and highly satisfied with the final product.",
            tool: "Figma",
            images: [
                "/img/UIXWorks/hirz/1.png",
                "/img/UIXWorks/hirz/2.png",
                "/img/UIXWorks/hirz/3.png",
                "/img/UIXWorks/hirz/4.png",
                "/img/UIXWorks/hirz/5.png",
            ],
            prototypeLink: "https://example.com/prototype1",
        },
    ];

    const projectsToRender = projects.length > 0 ? projects : exampleProjects;
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [lightbox, setLightbox] = useState({ isOpen: false, slides: [] });

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const openLightbox = (images) => {
        setLightbox({ isOpen: true, slides: images.map(src => ({ src })) });
    };

    return (
        <div className="uiuxworks-container">
            {projectsToRender.map((project, index) => {
                const isExpanded = expandedIndex === index;
                const truncatedDescription = project.description.slice(0, 100);
                return (
                    <div className="uiuxworks-card" key={index}>
                        <div className="uiuxworks-image-wrapper">
                            <div className="image-count-badge">{project.images.length} Images</div>
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="uiuxworks-image"
                                onClick={() => openLightbox(project.images)}
                            />
                        </div>

                        <div className="uiuxworks-details">
                            <h3 className="project-title">{project.title}</h3>
                            
                            <div className="project-description">
                                <p>
                                    {isExpanded
                                        ? project.description
                                        : `${truncatedDescription}...`}
                                </p>
                                <button
                                    className="view-more-btn"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {isExpanded ? "View Less" : "View More"}
                                </button>
                            </div>
                            
                            <div className="project-footer">
                                <span className="tool-badge">Tool: {project.tool}</span>
                                <a
                                    href={project.prototypeLink}
                                    className="prototype-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Prototype
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}

            {lightbox.isOpen && (
                <Lightbox
                    open={lightbox.isOpen}
                    close={() => setLightbox({ isOpen: false, slides: [] })}
                    slides={lightbox.slides}
                />
            )}
        </div>
    );
};

export default UIUXWorks;
