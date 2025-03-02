import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import '../styles/DevOps.css'; // Import external CSS

const DevOps = () => {
    const projects = {
        Linux: [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            },
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        "Bash Scripting": [
            {
                ttitle: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        Networking: [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            },
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        "Ci/CD": [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        Docker: [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            },
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        "Containerization": [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        AWS: [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            },
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        "Kubernetes": [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        GitOps: [
            {
                ttitle: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            },
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ],
        "Ansible": [
            {
                title: "Watch Out for update as this is my current drive",
                description: "",
                tech: "",
                link: ""
            }
        ]



    };

    const [selectedCategory, setSelectedCategory] = useState('Linux');
    const [isMobile, setIsMobile] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setDropdownOpen(false); // Close dropdown when selecting an option
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <PageHeader title="DevOps" />
            <div className="devops-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row relative">
                {/* Content Area */}
                <div className="devops-content md:w-3/4">
                    {/* Mobile Dropdown */}
                    {isMobile && (
                        <div className="mobile-menu-dropdown mb-6">
                            <div className="selected-menu-header flex justify-between items-center p-3 border rounded cursor-pointer bg-white" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span className="font-medium">{selectedCategory}</span>
                                <span className={`transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                            </div>
                            {dropdownOpen && (
                                <div className="menu-dropdown-content border rounded mt-1 max-h-48 overflow-y-auto bg-white shadow-lg">
                                    {Object.keys(projects).map((category) => (
                                        <div key={category} className={`p-3 cursor-pointer hover:bg-gray-100 ${selectedCategory === category ? 'bg-gray-100 font-medium text-[#4CAF50]' : ''}`} onClick={() => handleCategorySelect(category)}>
                                            {category}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects[selectedCategory].map((project, index) => (
                            <motion.div key={index} className="devops-card" whileHover={{ scale: 1.02 }}>
                                <h3 className="text-xl font-bold text-[#2C6B2F] mb-3">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <p className="text-[#4CAF50] font-medium mb-3">{project.tech}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project →</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Vertical Menu on Right Side */}
                <div className="devops-menu hidden md:block md:w-1/4 pl-6">
                    <h3 className="text-lg font-bold mb-4">Skills</h3>
                    <ul className="space-y-3">
                        {Object.keys(projects).map((category) => (
                            <li key={category}>
                                <button className={selectedCategory === category ? 'active' : ''} onClick={() => handleCategorySelect(category)}>
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default DevOps;
