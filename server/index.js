import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Post from './models/Post.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// Properly encode the username and password in case they contain special characters like '@'
const username = encodeURIComponent('bigwintiktok4_db_user');
const password = encodeURIComponent('adminadmin123123');
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.wqst94k.mongodb.net/bigwin_blog`;

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
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// 2. Get a single post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post', error });
  }
});

// 3. Create a new post (Admin)
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, excerpt, metaTitle, metaDescription, metaKeywords, author, published } = req.body;
    
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
      published
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Error creating post', error: error.message });
  }
});

// 4. Update an existing post (Admin)
app.put('/api/posts/:slug', async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
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
app.delete('/api/posts/:slug', async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ slug: req.params.slug });
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
