import React, { useState, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, List, ListOrdered, Quote, ImageIcon, LinkIcon, Undo, Redo } from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const addImage = useCallback(() => {
    const url = window.prompt('URL of the image (or you can use a base64 string):');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL for the link:', previousUrl);
    
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-700 p-2 bg-slate-800 rounded-t-md">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-slate-600' : ''}`}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-slate-600' : ''}`}
        title="Italic"
      >
        <Italic size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('strike') ? 'bg-slate-600' : ''}`}
        title="Strikethrough"
      >
        <Strikethrough size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-slate-600' : ''}`}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-600' : ''}`}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-600' : ''}`}
        title="Heading 3"
      >
        <Heading3 size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('bulletList') ? 'bg-slate-600' : ''}`}
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('orderedList') ? 'bg-slate-600' : ''}`}
        title="Ordered List"
      >
        <ListOrdered size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('blockquote') ? 'bg-slate-600' : ''}`}
        title="Blockquote"
      >
        <Quote size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      <button
        type="button"
        onClick={setLink}
        className={`p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors ${editor.isActive('link') ? 'bg-slate-600' : ''}`}
        title="Link"
      >
        <LinkIcon size={18} />
      </button>
      <button
        type="button"
        onClick={addImage}
        className="p-2 rounded hover:bg-slate-700 text-gray-200 transition-colors"
        title="Image"
      >
        <ImageIcon size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-2 rounded hover:bg-slate-700 text-gray-200 disabled:opacity-50 transition-colors"
        title="Undo"
      >
        <Undo size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-2 rounded hover:bg-slate-700 text-gray-200 disabled:opacity-50 transition-colors"
        title="Redo"
      >
        <Redo size={18} />
      </button>
    </div>
  );
};

export const AdminWysiwyg: React.FC<RichTextEditorProps> = ({ content, onChange }) => {
  const [hasFocus, setHasFocus] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg mx-auto shadow-md my-4',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-brand hover:text-yellow-400 underline decoration-brand underline-offset-4',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onFocus: () => setHasFocus(true),
    onBlur: () => setHasFocus(false),
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-brand max-w-none min-h-[300px] p-4 focus:outline-none',
      },
    },
  });

  return (
    <div className={`border rounded-md bg-slate-800/50 flex flex-col transition-colors ${hasFocus ? 'border-brand' : 'border-gray-700'}`}>
      <MenuBar editor={editor} />
      <div className="bg-[#1e293b] rounded-b-md">
        <EditorContent editor={editor} />
      </div>
      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #9ca3af;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
};

export default AdminWysiwyg;
