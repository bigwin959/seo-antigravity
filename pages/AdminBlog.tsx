import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Post {
  _id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
}

const AdminBlog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await fetch(`/api/posts/${slug}`, { method: 'DELETE' });
        fetchPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Helmet>
        <title>Admin - Manage Blogs</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Manage Blog Posts</h1>
        <button
          onClick={() => navigate('/admin/blog/new')}
          className="flex items-center gap-2 px-4 py-2 bg-brand text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors"
        >
          <Plus size={20} />
          New Post
        </button>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden border border-gray-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-gray-300 border-b border-gray-700">
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No blog posts found. Create one!
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post._id} className="border-b border-gray-800 hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="font-medium text-white">{post.title}</div>
                      <div className="text-sm text-gray-500 truncate max-w-sm">/{post.slug}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${post.published ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => navigate(`/admin/blog/edit/${post.slug}`)}
                          className="p-2 text-brand hover:bg-brand/10 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.slug)}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
