import { useState} from 'react';
import '../styles/Home.css';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const Home = () => {
    const [bgImage, setBgImage] = useState('');

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
            <PageHeader title="Archives" />

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
        </motion.div>
    );
};

export default Home;
