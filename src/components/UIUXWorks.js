import React, { useState } from "react";
import "../styles/UIUXWorks.css"; 

const UIUXWorks = ({ projects = [] }) => {
    const exampleProjects = [
        {
            title: "Project One",
            description:
                "This is a long description for project one. It contains detailed information about the design process, decisions made, and the overall impact. This will be truncated if too long.",
            tool: "Figma",
            images: ["img/few1.png", "img/gg.png", "img/few1.png", "img/gg.png"],
            prototypeLink: "https://example.com/prototype1",
        },
    ];

    const projectsToRender = projects.length > 0 ? projects : exampleProjects;
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [imagePreview, setImagePreview] = useState({
        isOpen: false,
        projectIndex: 0,
        imageIndex: 0,
    });

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const openImagePreview = (projectIndex) => {
        setImagePreview({ isOpen: true, projectIndex, imageIndex: 0 });
    };

    const closeImagePreview = () => {
        setImagePreview({ ...imagePreview, isOpen: false });
    };

    const handleNextImage = () => {
        setImagePreview((prev) => ({
            ...prev,
            imageIndex:
                (prev.imageIndex + 1) %
                projectsToRender[prev.projectIndex].images.length,
        }));
    };

    const handlePrevImage = () => {
        setImagePreview((prev) => ({
            ...prev,
            imageIndex:
                (prev.imageIndex - 1 +
                    projectsToRender[prev.projectIndex].images.length) %
                projectsToRender[prev.projectIndex].images.length,
        }));
    };

    return (
        <>
            <div className="uiuxworks-container">
                {projectsToRender.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    const truncatedDescription = project.description.slice(0, 100);
                    return (
                        <div className="uiuxworks-card" key={index}>
                            {/* Image Preview Container */}
                            <div className="uiuxworks-image-container">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="uiuxworks-image"
                                    onClick={() => openImagePreview(index)}
                                />
                                <span className="image-count">{project.images.length} Images</span>
                            </div>

                            {/* Details Section */}
                            <div className="uiuxworks-overlay" onClick={(e) => e.stopPropagation()}>
                                <div className="uiuxworks-info">
                                    {/* Left Column: Title & Description */}
                                    <div className="uiuxworks-text">
                                        <h3>{project.title}</h3>
                                        <p>
                                            {isExpanded
                                                ? project.description
                                                : `${truncatedDescription}...`}
                                        </p>
                                        <button
                                            className="uiuxworks-view-more"
                                            onClick={() => toggleExpand(index)}
                                        >
                                            {isExpanded ? "View Less" : "View More"}
                                        </button>
                                    </div>

                                    {/* Right Column: Tool & Button */}
                                    <div className="uiuxworks-actions">
                                        <span className="uiuxworks-tool">Tool: {project.tool}</span>
                                        <a
                                            href={project.prototypeLink}
                                            className="uiuxworks-button"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Prototype
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Inline Image Preview */}
                            {imagePreview.isOpen && imagePreview.projectIndex === index && (
                                <div className="inline-preview">
                                    <button className="inline-preview-close" onClick={closeImagePreview}>
                                        ✕
                                    </button>
                                    <button className="inline-preview-nav left" onClick={handlePrevImage}>
                                        ◀
                                    </button>
                                    <img
                                        src={
                                            projectsToRender[imagePreview.projectIndex].images[
                                            imagePreview.imageIndex
                                            ]
                                        }
                                        alt="Project preview"
                                        className="inline-preview-image"
                                    />
                                    <button className="inline-preview-nav right" onClick={handleNextImage}>
                                        ▶
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default UIUXWorks;
