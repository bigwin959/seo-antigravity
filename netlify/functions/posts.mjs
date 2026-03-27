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

        // Handle methods that require a slug
        const url = new URL(req.url);
        const slug = url.searchParams.get('slug');

        if (req.method === 'GET') {
            if (slug) {
                const post = await Post.findOne({ slug });
                if (!post) return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404, headers });
                return new Response(JSON.stringify(post), { status: 200, headers });
            } else {
                const posts = await Post.find().sort({ createdAt: -1 });
                return new Response(JSON.stringify(posts), { status: 200, headers });
            }
        }

        if (req.method === 'POST') {
            const body = await req.json();
            let { title, language, slug, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published, ctaLinks } = body;

            if (!slug) {
                slug = title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/(^-|-$)+/g, '');
                // Fallback if slug is completely empty after replacement
                if (!slug) {
                    slug = Date.now().toString();
                }
            }

            const post = new Post({ title, language, slug, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published, ctaLinks });
            const saved = await post.save();
            return new Response(JSON.stringify(saved), { status: 201, headers });
        }

        if (req.method === 'PUT') {
            if (!slug) return new Response(JSON.stringify({ message: 'Slug query parameter is required' }), { status: 400, headers });
            const body = await req.json();
            const post = await Post.findOneAndUpdate({ slug }, body, { new: true });
            if (!post) return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404, headers });
            return new Response(JSON.stringify(post), { status: 200, headers });
        }

        if (req.method === 'DELETE') {
            if (!slug) return new Response(JSON.stringify({ message: 'Slug query parameter is required' }), { status: 400, headers });
            const post = await Post.findOneAndDelete({ slug });
            if (!post) return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404, headers });
            return new Response(JSON.stringify({ message: 'Post deleted successfully' }), { status: 200, headers });
        }

        return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405, headers });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: error.message }), { status: 500, headers });
    }
}
