import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../styles/Archives.css';

const Archives = () => {
    const [open, setOpen] = useState(false);
    const [currentSlides, setCurrentSlides] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const archives = [
        {
            year: "2023",
            images: [
                "/img/archive/2023/1.png",
                "/img/archive/2023/2.png",
                "/img/archive/2023/3.png",
                "/img/archive/2023/4.png",
                "/img/archive/2023/5.png",
            ]
        },
        {
            year: "2022",
            images: [
                "/img/archive/2022/a.png",
                "/img/archive/2022/b.png",
                "/img/archive/2022/c.png",
                "/img/archive/2022/d.png",
                "/img/archive/2022/e.png",
                "/img/archive/2022/f.png",
                "/img/archive/2022/g.png",
                "/img/archive/2022/h.png",
                "/img/archive/2022/i.png"
            ]
        },
        {
            year: "2021",
            images: [
                "/img/archive/2021/1.png",
                "/img/archive/2021/2.png",
                "/img/archive/2021/3.png",
                "/img/archive/2021/4.png",
                "/img/archive/2021/5.png",
                "/img/archive/2021/6.png",
                "/img/archive/2021/7.png",
                "/img/archive/2021/8.png",
                "/img/archive/2021/9.png",
                "/img/archive/2021/10.png",
                "/img/archive/2021/11.png",
            ]
        }
    ];

    const handleImageClick = (yearImages, index) => {
        const slides = yearImages.map(image => ({ src: image }));
        setCurrentSlides(slides);
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="Archives" />
            <div className="archives-container">
                {archives.map((yearGroup, index) => (
                    <div key={index} className="archive-section">
                        <h2 className="archive-year">{yearGroup.year} <span className="year-line"></span></h2>
                        <div className="archive-grid">
                            {yearGroup.images.map((image, imgIndex) => (
                                <motion.div
                                    key={imgIndex}
                                    className="archive-item"
                                    whileHover={{ rotate: [0, -2, 2, -2, 2, 0] }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => handleImageClick(yearGroup.images, imgIndex)}
                                >
                                    <img src={image} alt={`Archive ${yearGroup.year}`} className="archive-image" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Lightbox open={open} close={() => setOpen(false)} slides={currentSlides} index={currentIndex} />
        </motion.div>
    );
};

export default Archives;
