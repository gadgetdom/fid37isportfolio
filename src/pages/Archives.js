import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const Archives = () => {
    const archives = [
        {
            year: "2024",
            items: [
                { title: "Cloud Migration Case Study", date: "February 2024" },
                { title: "Kubernetes Workshop Materials", date: "January 2024" }
            ]
        },
        {
            year: "2023",
            items: [
                { title: "DevOps Implementation Guide", date: "December 2023" },
                { title: "AWS Architecture Templates", date: "November 2023" },
                { title: "CI/CD Pipeline Documentation", date: "October 2023" }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="Archives" />
            <div className="max-w-4xl mx-auto text-left">
                {archives.map((yearGroup, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-[#2C6B2F] mb-4">{yearGroup.year}</h2>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            {yearGroup.items.map((item, itemIndex) => (
                                <motion.div
                                    key={itemIndex}
                                    className="mb-4 last:mb-0"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-medium text-[#4CAF50]">
                                            {item.title}
                                        </h3>
                                        <span className="text-gray-600">{item.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Archives;