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
                "/img/UIXWorks/myst/2.jpg",
                "/img/UIXWorks/myst/3.png",
                "/img/UIXWorks/myst/4.png",
                "/img/UIXWorks/myst/5.jpg",
            ],
            prototypeLink: "https://www.figma.com/proto/B0I9GJUrGD4w8NN3M48lor/Mystique-Web-App?page-id=0%3A1&node-id=12-3&viewport=365%2C274%2C0.02&t=4KlxMCIXn0DCAJTw-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=12%3A3&show-proto-sidebar=1",
        },
        {
            title: "Hirelez Web Application",
            description:
                "I conducted UX research and designed a platform that allows users to seamlessly connect with skilled workers in their area, negotiate prices, agree on terms, make payments, and rate the worker upon job completion. The client was thrilled with the results and highly satisfied with the final product.",
            tool: "Figma",
            images: [
                "/img/UIXWorks/hirz/1.png",
                "/img/UIXWorks/hirz/2.png",
                "/img/UIXWorks/hirz/3.jpg",
                "/img/UIXWorks/hirz/4.png",
                "/img/UIXWorks/hirz/5.png",
            ],
            prototypeLink: "https://www.figma.com/proto/wxLm6o5qLce2mHSjP6zgNB/Hirelez?page-id=0%3A1&node-id=143-1&viewport=656%2C227%2C0.07&t=WdIYjotKzr6yvt0R-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=102%3A2&show-proto-sidebar=1",
        },
        {
            title: "Saftra Escrow",
            description:
                "Ideveloped a web application for a challenge program aimed at reducing online shopping scams by serving as a trusted mediator between buyers and sellers throughout the transaction process.",
            tool: "Figma",
            images: [
                "/img/UIXWorks/uiux-1/1.png",
                "/img/UIXWorks/uiux-1/2.png",
                "/img/UIXWorks/uiux-1/3.jpg",
                "/img/UIXWorks/uiux-1/4.png",
                "/img/UIXWorks/uiux-1/5.png",
                
            ],
            prototypeLink: "https://www.figma.com/proto/CnvkJPJanb4Rj3T3zwPRTg/Safetra?page-id=4%3A2&node-id=4-36&starting-point-node-id=4%3A36&show-proto-sidebar=1&scaling=scale-down&content-scaling=fixed&t=C4Tk4C3fv4MCNTsO-1",
        },
        {
            title: "PayEYE Escrow ",
            description:
                "I Designed a Mobile application for a challenge program aimed at reducing online shopping scams by serving as a trusted mediator between buyers and sellers throughout the transaction process.",
            tool: "Figma",
            images: [
                "/img/UIXWorks/uiux-2/a.png",
                "/img/UIXWorks/uiux-2/1.png",
                "/img/UIXWorks/uiux-2/2.png",
                "/img/UIXWorks/uiux-2/3.png",
                "/img/UIXWorks/uiux-2/b.png",
                "/img/UIXWorks/uiux-2/c.png"
                
            ],
            prototypeLink: "https://www.figma.com/proto/Dw54eSZHczPaoLqDvvbF3N/Pay-Eye?page-id=0%3A1&node-id=11-294&starting-point-node-id=11%3A294&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&t=8zC3pTpwlk6fQvDY-1",
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
