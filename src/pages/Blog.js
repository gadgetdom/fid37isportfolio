import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import axios from 'axios';

const Blog = () => {
    const [mediumPosts, setMediumPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('./api/medium-posts');
                setMediumPosts(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError('Failed to load blog posts');
                setLoading(false);
                fallbackData();
            }
        };
        
        const fallbackData = () => {
            const fallbackPosts = [
                {
                    id: '1',
                    title: "Getting Started with DevOps",
                    publishedAt: "2024-02-20",
                    content: "Learn the fundamental principles and practices of DevOps...",
                    readingTime: 5,
                    image: "/api/placeholder/400/300",
                    link: "#"
                },
                {
                    id: '2',
                    title: "CI/CD Best Practices",
                    publishedAt: "2024-02-15",
                    content: "Explore the best practices for implementing CI/CD pipelines...",
                    readingTime: 7,
                    image: "./img/gg.png",
                    link: "#"
                }
            ];
            setMediumPosts(fallbackPosts);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto py-12 text-center">
                <p className="text-lg">Loading posts from Medium...</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-12"
        >
            <PageHeader title="Blog" />
            <div className="max-w-6xl mx-auto px-4">
                {error && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p className="text-yellow-700">{error} — Showing fallback content.</p>
                    </div>
                )}
                {mediumPosts.length === 0 ? (
                    <p className="text-center py-8">No posts found.</p>
                ) : (
                    mediumPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg p-6 mb-8"
                            whileHover={{ scale: 1.01 }}
                        >
                            <h2 className="text-2xl font-bold text-[#2C6B2F] mb-4">{post.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                                {/* Image - 40% */}
                                <div className="md:col-span-2">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-50 object-cover rounded-lg"
                                    />
                                </div>
                                {/* Content - 60% */}
                                <div className="md:col-span-3 flex flex-col">
                                    <p className="text-gray-700 mb-4">{post.content}</p>
                                    <div className="flex flex-wrap items-center pt-4 border-t border-gray-200 text-sm text-gray-600">
                                        <span>{post.publishedAt}</span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span>{post.readingTime} min read</span>
                                        <div className="ml-auto">
                                            <a 
                                                href={post.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-[#4CAF50] hover:text-[#2C6B2F] font-medium transition-colors"
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
};

export default Blog;
