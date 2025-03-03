import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../styles/Blog.css';

const Blog = () => {
    const [mediumPosts, setMediumPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
        }
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mistarfid`,
                    { headers: { 'Cache-Control': 'no-cache' } }
                );

                if (response.data.status !== 'ok') {
                    throw new Error('Failed to fetch posts');
                }

                const processedPosts = response.data.items.map(item => {
                    const imgRegex = /<img[^>]+src="([^"]+)"/;
                    const imgMatch = item.content.match(imgRegex);
                    const imgSrc = imgMatch ? imgMatch[1] : '/api/placeholder/400/300';
                    const strippedContent = stripHtml(item.content);

                    return {
                        id: item.guid,
                        title: item.title,
                        link: item.link,
                        publishedAt: new Date(item.pubDate).toLocaleDateString(),
                        content: strippedContent.length > 200 ? strippedContent.substring(0, 200) + '...' : strippedContent,
                        readingTime: Math.max(1, Math.round(strippedContent.split(/\s+/).length / 200)),
                        image: imgSrc,
                        author: item.author || 'Anonymous',
                    };
                });

                setMediumPosts(processedPosts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Medium posts:", error);
                setError('Failed to load blog posts');
                setLoading(false);
            }
        };

        fetchPosts(); // Fetch immediately
        const interval = setInterval(fetchPosts, 5 * 60 * 1000); // Refresh every 5 minutes

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stripHtml = (html) => {
        return html.replace(/<[^>]*>/g, '').trim();
    };

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