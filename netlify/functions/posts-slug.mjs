import { connectToDatabase, Post } from './lib/db.mjs';

export default async function handler(req, context) {
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    };

    if (req.method === 'OPTIONS') {
        return new Response('', { status: 204, headers });
    }

    const slug = context.params.slug;

    try {
        await connectToDatabase();

        if (req.method === 'GET') {
            const post = await Post.findOne({ slug });
            if (!post) return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404, headers });
            return new Response(JSON.stringify(post), { status: 200, headers });
        }

        if (req.method === 'PUT') {
            const body = await req.json();
            const post = await Post.findOneAndUpdate({ slug }, body, { new: true });
            if (!post) return new Response(JSON.stringify({ message: 'Post not found' }), { status: 404, headers });
            return new Response(JSON.stringify(post), { status: 200, headers });
        }

        if (req.method === 'DELETE') {
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

export const config = { path: '/api/posts/:slug' };
