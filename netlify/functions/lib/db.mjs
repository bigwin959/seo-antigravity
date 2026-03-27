import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    language: { type: String, default: 'en' },
    slug: { type: String, required: true, unique: true },
    content: { type: String, default: '' },
    excerpt: { type: String, default: '' },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaKeywords: { type: String, default: '' },
    author: { type: String, default: 'Admin' },
    published: { type: Boolean, default: true },
    ctaLinks: [{ text: String, url: String }],
}, { timestamps: true });

let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb && mongoose.connection.readyState === 1) return;
    await mongoose.connect(process.env.MONGODB_URI);
    cachedDb = mongoose.connection;
}

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export { connectToDatabase, Post };
