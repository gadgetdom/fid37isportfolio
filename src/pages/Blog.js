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
                // Fetch from your API route instead of directly from RSS2JSON
                const response = await axios.get('/api/medium-posts');
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
            // Fallback data to display if API fails
            const fallbackPosts = [
                {
                    id: '1',
                    title: "Getting Started with DevOps",
                    publishedAt: "2024-02-20",
                    content: "Learn the fundamental principles and practices of DevOps. DevOps is a set of practices that combines software development and IT operations...",
                    readingTime: 5,
                    image: "/api/placeholder/400/300",
                    link: "#"
                },
                {
                    id: '2',
                    title: "CI/CD Best Practices",
                    publishedAt: "2024-02-15",
                    content: "Explore the best practices for implementing CI/CD pipelines. Continuous Integration and Continuous Deployment (CI/CD) are essential practices in modern software development...",
                    readingTime: 7,
                    image: "/api/placeholder/400/300",
                    link: "#"
                },
                {
                    id: '3',
                    title: "Cloud Architecture Patterns",
                    publishedAt: "2024-02-10",
                    content: "Understanding common cloud architecture patterns and their applications. Cloud architecture patterns provide reusable solutions to common problems in cloud computing...",
                    readingTime: 6,
                    image: "/api/placeholder/400/300",
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
                        <p className="text-yellow-700">
                            {error} — Showing fallback content.
                        </p>
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
                            {/* Title section */}
                            <h2 className="text-2xl font-bold text-[#2C6B2F] mb-4">{post.title}</h2>
                            
                            {/* Content section - 60/40 grid */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                {/* Post content - 60% */}
                                <div className="md:col-span-3">
                                    <p className="text-gray-700">{post.content}</p>
                                </div>
                                
                                {/* Image - 40% */}
                                <div className="md:col-span-2">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                            
                            {/* Meta information */}
                            <div className="flex flex-wrap items-center mt-4 pt-2 border-t border-gray-100">
                                <span className="text-gray-600">{post.publishedAt}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-600">{post.readingTime} min read</span>
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
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
};

export default Blog;