import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import Post from './models/Post.js';

// Load .env from project root
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // For WYSIWYG editor content that might have base64 images

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
// 1. Get all published blog posts (frontend)
app.get('/api/posts', async (req, res) => {
  try {
    if (req.query.slug) {
      const post = await Post.findOne({ slug: req.query.slug });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json(post);
    }

    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// (Endpoint consolidated into GET /api/posts?slug=... above)

// 3. Create a new post (Admin)
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published, ctaLinks } = req.body;

    // Auto-generate slug from title if not provided
    let slug = req.body.slug;
    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const newPost = new Post({
      title,
      slug,
      content,
      excerpt,
      metaTitle,
      metaDescription,
      metaKeywords,
      author,
      published,
      ctaLinks
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});

// 4. Update an existing post (Admin)
app.put('/api/posts', async (req, res) => {
  try {
    if (!req.query.slug) return res.status(400).json({ message: 'Slug query parameter required' });
    const post = await Post.findOneAndUpdate(
      { slug: req.query.slug },
      req.body,
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
});

// 5. Delete a post (Admin)
app.delete('/api/posts', async (req, res) => {
  try {
    if (!req.query.slug) return res.status(400).json({ message: 'Slug query parameter required' });
    const post = await Post.findOneAndDelete({ slug: req.query.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
