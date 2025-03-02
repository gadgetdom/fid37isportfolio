import axios from 'axios';

export default async function handler(req, res) {
    try {
        const mediumUsername = "yourusername"; // Replace with your Medium username
        const response = await axios.get(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
        );

        const data = response.data;
        if (data.status !== 'ok') {
            throw new Error(data.message || 'Failed to fetch posts');
        }

        // Process the posts
        const processedPosts = data.items.map(item => {
            // Extract first image URL or use placeholder
            const imgRegex = /<img[^>]+src="([^">]+)"/;
            const imgMatch = item.content.match(imgRegex);
            const imgSrc = imgMatch ? imgMatch[1] : '/api/placeholder/400/300';

            // Create excerpt from content (strip HTML and limit length)
            let excerpt = item.content.replace(/<[^>]*>/g, '');
            excerpt = excerpt.substring(0, 250) + '...';

            // Calculate reading time (rough estimate: 200 words per minute)
            const wordCount = item.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
            const readingTime = Math.max(1, Math.round(wordCount / 200));

            // Format date
            const publishDate = new Date(item.pubDate);
            const formattedDate = publishDate.toLocaleDateString();

            return {
                id: item.guid,
                title: item.title,
                link: item.link,
                publishedAt: formattedDate,
                content: excerpt,
                readingTime: readingTime,
                image: imgSrc,
                author: item.author || 'Anonymous',
                categories: item.categories || []
            };
        });

        // Enable caching for this response (revalidate every hour)
        res.setHeader('Cache-Control', 's-maxage=3600');
        res.status(200).json(processedPosts);
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        res.status(500).json({
            error: 'Failed to fetch posts from Medium',
            message: error.message
        });
    }
}

// 2. Updated Blog component that fetches from your API endpoint
// file: pages/blog.js or components/Blog.js depending on your setup