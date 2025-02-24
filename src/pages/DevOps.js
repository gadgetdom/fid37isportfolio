import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import '../styles/DevOps.css'; // Import external CSS

const DevOps = () => {
    const projects = {
        UI_UX: [
            {
                title: "Cloud Migration Project",
                description: "Led the migration of legacy systems to AWS cloud infrastructure.",
                tech: "AWS, Terraform, Docker",
                link: "https://github.com/yourusername/project1"
            },
            {
                title: "CI/CD Pipeline Implementation",
                description: "Developed automated deployment pipelines for microservices architecture.",
                tech: "Jenkins, Kubernetes, GitLab",
                link: "https://github.com/yourusername/project2"
            }
        ],
        Frontend: [
            {
                title: "Infrastructure Automation",
                description: "Created IaC templates for scalable cloud resources.",
                tech: "Terraform, Ansible, AWS",
                link: "https://github.com/yourusername/project3"
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('UI_UX');
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
        if (isMobile) {
            setDropdownOpen(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <PageHeader title="DevOps" />
            <div className="devops-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row relative">
                {/* Content Area */}
                <div className="devops-content md:w-3/4">
                    {/* Mobile Dropdown */}
                    {isMobile && (
                        <div className="mobile-menu-dropdown mb-6 fixed top-16 right-4 bg-white z-10 px-4 border rounded shadow-lg">
                            <div className="selected-menu-header flex justify-between items-center p-3 border-b cursor-pointer bg-white" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span className="font-medium">Menu</span>
                                <span className="transform transition-transform duration-200" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                            </div>
                            {dropdownOpen && (
                                <div className="menu-dropdown-content border-t max-h-48 overflow-y-auto bg-white">
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
