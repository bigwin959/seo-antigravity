import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'en',
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
  },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  author: {
    type: String,
    default: 'Admin'
  },
  published: {
    type: Boolean,
    default: true
  },
  ctaLinks: [{
    text: String,
    url: String
  }]
}, {
  timestamps: true
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
