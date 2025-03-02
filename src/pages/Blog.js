import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../styles/Blog.css';

const Blog = () => {
    const [mediumPosts, setMediumPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMobile, setIsMobile] = useState(true);

    // Effect for fetching posts from Medium
    useEffect(() => {
        const fetchMediumPosts = async () => {
            try {
                const mediumUsername = '@mistarfid'; 
                const response = await axios.get(
                    `./api/medium-posts?username=${encodeURIComponent(mediumUsername)}`
                );
                
                if (response.data && Array.isArray(response.data)) {
                    setMediumPosts(response.data);
                } else {
                    throw new Error('Invalid response format');
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
                setError('Failed to load blog posts from Medium');
                setLoading(false);
                loadFallbackData();
            }
        };
        
        const loadFallbackData = () => {
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

        fetchMediumPosts();
    }, []);

    // Separate useEffect for window-related operations
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
            
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
            
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <p className="loading-text">Loading posts from Medium...</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="blog-container"
        >
            <PageHeader title="Blog" />
            <div className="blog-content-wrapper">
                {error && (
                    <div className="error-message">
                        <p>{error} — Showing fallback content.</p>
                    </div>
                )}
                {mediumPosts.length === 0 ? (
                    <p className="no-posts-message">No posts found.</p>
                ) : (
                    <div className="posts-container">
                        {mediumPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                className="post-card"
                                whileHover={{ scale: 1.01 }}
                            >
                                <h2 className="post-title">{post.title}</h2>
                                
                                <div className={`post-content-layout ${isMobile ? 'mobile' : 'desktop'}`}>
                                    {/* Content column - 60% */}
                                    <div className="post-content-column">
                                        <p className="post-content-text">{post.content}</p>
                                        
                                        <div className="post-metadata">
                                            <span>{post.publishedAt}</span>
                                            <span className="metadata-separator">•</span>
                                            <span>{post.readingTime} min read</span>
                                            <div className="read-more-container">
                                                <a 
                                                    href={post.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="read-more-link"
                                                >
                                                    Read More →
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Image column - 40% */}
                                    <div className="post-image-column">
                                        <div className="post-image-container">
                                            <img 
                                                src={post.image} 
                                                alt={post.title}
                                                className="post-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Blog;