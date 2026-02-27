import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminWysiwyg from '../components/AdminWysiwyg';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Save, AlertCircle } from 'lucide-react';

const AdminBlogEdit: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isNew = !slug;

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    author: 'Admin',
    excerpt: '',
    content: '<p>Start writing your awesome blog post here...</p>',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    published: true,
  });

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isNew) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/posts/${slug}`);
      if (!res.ok) throw new Error('Failed to fetch post');
      const data = await res.json();
      setFormData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url = isNew ? '/api/posts' : `/api/posts/${slug}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to save post');
      }

      const savedData = await res.json();
      navigate('/admin/blog');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Helmet>
        <title>Admin - {isNew ? 'New Post' : 'Edit Post'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => navigate('/admin/blog')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to list
        </button>
        <h1 className="text-3xl font-bold text-white">
          {isNew ? 'Create New Post' : 'Edit Post'}
        </h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex flex-col items-center gap-3 text-red-200">
          <AlertCircle className="text-red-400" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-brand pb-2 border-b border-gray-800">Content Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                  placeholder="The Best Winning Strategies for 2024"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Content *</label>
                <p className="text-xs text-gray-500 mb-2 mt-1">
                  Styles here match the live website. Write and format your post confidently!
                </p>
                <AdminWysiwyg content={formData.content} onChange={handleEditorChange} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                  placeholder="A short summary of the post..."
                />
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-brand pb-2 border-b border-gray-800">Publishing</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                    className="w-5 h-5 text-brand bg-slate-800 border-gray-700 rounded focus:ring-brand accent-brand"
                  />
                  <label htmlFor="published" className="text-white">Published (Visible)</label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">URL Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                  placeholder="leave empty to auto-generate"
                />
              </div>

              <div className="pt-4 mt-4 border-t border-gray-800">
                <button
                  type="submit"
                  disabled={saving}
                  className="w-full flex justify-center items-center gap-2 bg-brand text-black font-bold py-3 px-4 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50"
                >
                  <Save size={20} />
                  {saving ? 'Saving...' : (isNew ? 'Publish Post' : 'Save Changes')}
                </button>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl space-y-4">
              <h2 className="text-xl font-bold text-brand pb-2 border-b border-gray-800">SEO Meta Data</h2>
              <p className="text-xs text-gray-400 mb-2">Enhance your rankings on Google!</p>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Meta Description</label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Keywords</label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={formData.metaKeywords}
                  onChange={handleChange}
                  placeholder="casino, slots, bet"
                  className="w-full bg-slate-800 border-gray-700 rounded-md shadow-sm focus:border-brand focus:ring-brand text-white p-2"
                />
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AdminBlogEdit;
