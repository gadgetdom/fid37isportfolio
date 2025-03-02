import axios from 'axios';

export default async function handler(req, res) {
    try {
        const mediumUsername = "mistarfid"; 
        const response = await axios.get(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`
        );

        if (response.data.status !== 'ok') {
            throw new Error(response.data.message || 'Failed to fetch posts');
        }

        const processedPosts = response.data.items.map((item) => {
            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
            const imgSrc = imgMatch ? imgMatch[1] : '/api/placeholder/400/300';

            return {
                id: item.guid,
                title: item.title,
                link: item.link,
                publishedAt: new Date(item.pubDate).toLocaleDateString(),
                content: item.content.replace(/<[^>]*>/g, '').substring(0, 250) + '...',
                readingTime: Math.max(1, Math.round(item.content.split(/\s+/).length / 200)),
                image: imgSrc
            };
        });

        res.setHeader('Cache-Control', 's-maxage=3600');
        res.status(200).json(processedPosts);
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        res.status(500).json({ error: 'Failed to fetch posts from Medium' });
    }
}
