import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const Blog = () => {
    const posts = [
        {
            title: "Getting Started with DevOps",
            date: "2024-02-20",
            excerpt: "Learn the fundamental principles and practices of DevOps...",
            readTime: "5 min read"
        },
        {
            title: "CI/CD Best Practices",
            date: "2024-02-15",
            excerpt: "Explore the best practices for implementing CI/CD pipelines...",
            readTime: "7 min read"
        },
        {
            title: "Cloud Architecture Patterns",
            date: "2024-02-10",
            excerpt: "Understanding common cloud architecture patterns and their applications...",
            readTime: "6 min read"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader title="Blog" />
            <div className="max-w-4xl mx-auto text-left">
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 mb-6"
                        whileHover={{ scale: 1.01 }}
                    >
                        <h2 className="text-2xl font-bold text-[#2C6B2F] mb-2">{post.title}</h2>
                        <div className="flex space-x-4 text-gray-600 mb-4">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <p className="text-gray-700">{post.excerpt}</p>
                        <button className="mt-4 text-[#4CAF50] hover:text-[#2C6B2F] font-medium">
                            Read More →
                        </button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Blog;