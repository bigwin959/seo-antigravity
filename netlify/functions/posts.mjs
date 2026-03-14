import { connectToDatabase, Post } from './lib/db.mjs';

export default async function handler(req, context) {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    if (req.method === 'OPTIONS') {
        return new Response('', { status: 204, headers });
    }

    try {
        await connectToDatabase();

        if (req.method === 'GET') {
            const posts = await Post.find().sort({ createdAt: -1 });
            return new Response(JSON.stringify(posts), { status: 200, headers });
        }

        if (req.method === 'POST') {
            const body = await req.json();
            let { title, slug, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published, ctaLinks } = body;

            if (!slug) {
                slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            }

            const post = new Post({ title, slug, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published, ctaLinks });
            const saved = await post.save();
            return new Response(JSON.stringify(saved), { status: 201, headers });
        }

        return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405, headers });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), { status: 500, headers });
    }
}
