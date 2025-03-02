import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

// Convert parseString to promise-based
const parseXml = promisify(parseString);

export default async function handler(req, res) {
    try {
        const { username = '@mistarfid' } = req.query;

        // Fetch the RSS feed from Medium
        const mediumRssUrl = `https://medium.com/feed/${username}`;
        const response = await axios.get(mediumRssUrl);

        // Parse the XML response
        const result = await parseXml(response.data);

        // Extract the items from the feed
        const items = result.rss.channel[0].item;

        // Transform the data to the format our frontend expects
        const posts = items.map((item, index) => {
            // Extract the first image from the content if available
            const contentEncoded = item['content:encoded'] ? item['content:encoded'][0] : '';
            const imageMatch = contentEncoded.match(/<img[^>]+src="([^">]+)"/);
            const imageUrl = imageMatch ? imageMatch[1] : '/api/placeholder/400/300';

            // Extract a snippet of text for the preview
            const contentText = contentEncoded.replace(/<[^>]+>/g, ''); // Remove HTML tags
            const contentPreview = contentText.substring(0, 150) + '...';

            // Estimate reading time (average reading speed: 200 words per minute)
            const wordCount = contentText.split(/\s+/).length;
            const readingTime = Math.max(1, Math.round(wordCount / 200));

            return {
                id: index.toString(),
                title: item.title[0],
                publishedAt: new Date(item.pubDate[0]).toISOString().split('T')[0], // Format as YYYY-MM-DD
                content: contentPreview,
                readingTime: readingTime,
                image: imageUrl,
                link: item.link[0]
            };
        });

        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching Medium posts:', error);
        res.status(500).json({ error: 'Failed to fetch Medium posts' });
    }
}