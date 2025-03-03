import React, { useState, useMemo } from 'react';
import '../styles/Home.css';
import gg from '../assets/gg.png';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import CertificationSec from '../components/Certifications';

const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [bgImage, setBgImage] = useState('');

    const skills = useMemo(() => [
        'Devops', 'Scripting', 'Product Mgmt', 'Testing', 'Scrum Master',
        'JavaScript', 'Git', 'Figma', 'HTML/CSS', 'ICT Support', 'Automation', 'JIRA', 'Monday.com'
    ], []);
    const services = [
        { name: 'IT Support Consulting', description: 'Providing expert IT support and consulting services.' },
        { name: 'Web Application Design', description: 'Designing user-friendly and responsive web applications.' },
        { name: 'Mobile App Design', description: 'Creating intuitive and engaging mobile app designs.' },
        { name: 'SoftWare Testing', description: 'Ensuring your software is robust and reliable through meticulous testing and analysis' },
        { name: 'QA Consulting', description: 'Providing expert consultation to refine your quality assurance processes and deliver flawless products.' },
        { name: 'Frontend Development', description: 'Building efficient and scalable frontend applications.' },
        { name: 'Product Management', description: 'Expertise in product management and agile methodologies.' }
    ];


    const handleMouseEnter = () => {
        const bgImages = ['url(/path/to/abstract1.jpg)', 'url(/path/to/abstract2.jpg)', 'url(/path/to/abstract3.jpg)'];
        const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
        setBgImage(randomImage);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="home-container mx-auto text-center w-full px-4 sm:px-6 md:max-w-4xl"
        >
            <PageHeader title="About Me" />
            <section
                className="first-section flex flex-col items-center"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {hovered && (
                    <div className="image-column">
                        <img src={gg} alt="Descriptive Alt" />
                    </div>
                )}
                <div className={`text-column ${hovered ? 'shifted' : ''} max-w-2xl`}>
                    <p>
                        With over four years of experience as a Software Tester, I specialize in manual and automated QA, ensuring top-notch functionality. My skills span computer troubleshooting, UX research, UI/UX design, and frontend development (HTML, CSS, JavaScript), with additional expertise in graphic design, product management, and Scrum Master roles.
                    </p>
                    <p>
                        Currently exploring DevOps to enhance my full-stack capabilities, I’m passionate about creating user-centered tech solutions. My holistic understanding of the product lifecycle helps me bridge gaps between development, design, and business needs, ensuring high-quality software products.

                    </p>
                </div>
            </section>

            {/* Second Section - Skills */}
            <section className="skills-section">
    <h1>Skills</h1>
    <h5>My Range of Skills and Competencies</h5>
    <div className="skills-container">
        {[0, 1, 2].map((rowIndex) => {
            // Get skills for this row
            const rowSkills = skills.slice(
                (rowIndex * Math.ceil(skills.length / 3)),
                ((rowIndex + 1) * Math.ceil(skills.length / 3))
            );
            
            // Ensure we have enough items to fill the screen
            const displaySkills = [...rowSkills, ...rowSkills, ...rowSkills, ...rowSkills];
            
            // Determine direction based on row index
            const isEvenRow = rowIndex % 2 === 0;
            
            // Adjust duration - faster for better experience
            // Middle row slightly faster to prevent clustering
            const duration = rowIndex === 1 ? 15 : 18;
            
            return (
                <div 
                    key={rowIndex} 
                    className="skills-row-wrapper" 
                    style={{ 
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                        marginBottom: '20px'
                    }}
                >
                    {/* We need two identical rows for the seamless effect */}
                    <div style={{ 
                        display: 'flex',
                        width: '200%',
                        position: 'relative'
                    }}>
                        {/* First copy of skills */}
                        <motion.div
                            className="skills-row"
                            style={{
                                display: 'flex',
                                width: '100%'
                            }}
                            initial={{ x: isEvenRow ? '0%' : '-100%' }}
                            animate={{ x: isEvenRow ? '-100%' : '0%' }}
                            transition={{
                                ease: "linear",
                                duration: duration,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        >
                            {displaySkills.map((skill, index) => (
                                <div 
                                    key={`${rowIndex}-a-${index}`} 
                                    className="skill-box"
                                    style={{
                                        padding: '8px 16px',
                                        margin: '0 8px',
                                        background: '#f0f0f0',
                                        borderRadius: '4px',
                                        whiteSpace: 'nowrap',
                                        // Fixed width instead of flex to prevent clustering on mobile
                                        minWidth: '120px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <span>{skill || `Skill ${rowIndex * 10 + index + 1}`}</span>
                                </div>
                            ))}
                        </motion.div>
                        
                        {/* Second copy of skills (identical) - creates the infinite loop effect */}
                        <motion.div
                            className="skills-row"
                            style={{
                                display: 'flex',
                                width: '100%',
                                position: 'absolute',
                                left: isEvenRow ? '100%' : '-100%'
                            }}
                            initial={{ x: isEvenRow ? '0%' : '-100%' }}
                            animate={{ x: isEvenRow ? '-100%' : '0%' }}
                            transition={{
                                ease: "linear",
                                duration: duration,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                        >
                            {displaySkills.map((skill, index) => (
                                <div 
                                    key={`${rowIndex}-b-${index}`} 
                                    className="skill-box"
                                    style={{
                                        padding: '8px 16px',
                                        margin: '0 8px',
                                        background: '#f0f0f0',
                                        borderRadius: '4px',
                                        whiteSpace: 'nowrap',
                                        // Fixed width instead of flex to prevent clustering on mobile
                                        minWidth: '120px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <span>{skill || `Skill ${rowIndex * 10 + index + 1}`}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            );
        })}
    </div>
</section>


            {/* New Section - Services */}
            <section
                className="services-section"
                style={{ backgroundImage: bgImage }}
                onMouseEnter={handleMouseEnter}
            >
                <h1>Services</h1>
                <h5>Empowering Your Vision with my Skills</h5>
                <div className="services-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="certifications-section">
                <h1>Certifications</h1>
                <h4>Showcasing the Pinnacle of Achievement: My Badge of Expertise and Certifications</h4>
                <CertificationSec />
            </section>
        </motion.div>
    );
};

export default Home;
