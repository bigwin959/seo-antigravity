import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface Post {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  ctaLinks?: { text: string; url: string }[];
  language?: string;
}

const DynamicBlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts?slug=${encodeURIComponent(slug!)}`);
        if (!response.ok) throw new Error('Post not found');
        const data = await response.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl font-bold text-brand mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="text-black bg-brand px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Helmet>
        <title>{post.metaTitle || `${post.title} | BIGWIN959 Blog`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        {post.metaKeywords && <meta name="keywords" content={post.metaKeywords} />}

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.createdAt} />
        <meta property="article:modified_time" content={post.updatedAt} />
      </Helmet>

      <div className="mb-8">
        <Link to="/blog" className="inline-flex items-center text-brand hover:text-white transition-colors mb-6 font-semibold">
          <ArrowLeft size={16} className="mr-2" />
          {post.language === 'bn' ? 'সব পোস্টে ফিরে যান' : 'Back to all posts'}
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-gray-800 pb-8">
          <div className="flex items-center gap-2">
            <User size={18} className="text-brand" />
            <span>{post.author || (post.language === 'bn' ? 'BIGWIN959 বিশেষজ্ঞ' : 'BIGWIN959 Expert')}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-brand" />
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString(post.language === 'bn' ? 'bn-BD' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </div>

      {/* 
        This is where the magic happens. 
        Because we're using "prose prose-invert prose-brand" classes, 
        the raw HTML from TipTap WYSIWYG editor will be perfectly styled to match the site's design. 
      */}
      <div
        className="prose prose-invert prose-brand prose-lg max-w-none prose-img:rounded-xl prose-img:shadow-2xl prose-a:text-brand hover:prose-a:text-yellow-400 prose-headings:text-white marker:text-brand"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.ctaLinks && post.ctaLinks.length > 0 && (
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-800 pt-8">
          {post.ctaLinks.map((cta, index) => {
            let absoluteUrl = cta.url;
            if (!/^https?:\/\//i.test(absoluteUrl)) {
              absoluteUrl = `https://${absoluteUrl}`;
            }

            return (
              <a
                key={index}
                href={absoluteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-black px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1 w-full max-w-md text-center text-lg"
              >
                {cta.text}
              </a>
            );
          })}
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-gray-800 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {post.language === 'bn' ? 'আপনার জ্ঞান পরীক্ষা করতে প্রস্তুত?' : 'Ready to put your knowledge to the test?'}
        </h3>
        <Link to="/" className="inline-block bg-brand text-black px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1">
          {post.language === 'bn' ? 'BIGWIN959-এ এখন খেলুন' : 'Play Now at BIGWIN959'}
        </Link>
      </div>
    </article>
  );
};

export default DynamicBlogPost;
