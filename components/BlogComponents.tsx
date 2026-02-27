import React from 'react';
import { LocalizedLink } from './LocalizedLink';
import { BookOpen, ExternalLink } from 'lucide-react';

// Table of Contents Component
interface TocItem {
    id: string;
    title: string;
    level?: number;
}

interface TableOfContentsProps {
    items: TocItem[];
    title?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, title = "Table of Contents" }) => {
    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-brand" />
                <h3 className="text-white font-bold">{title}</h3>
            </div>
            <nav className="space-y-2">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block text-gray-400 hover:text-brand transition-colors text-sm ${item.level === 2 ? 'pl-4' : ''
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {item.title}
                    </a>
                ))}
            </nav>
        </div>
    );
};

// Related Articles Component
interface RelatedArticle {
    title: string;
    path: string;
    description: string;
    readTime?: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
    title?: string;
    readMoreText?: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles, title = "Related Articles", readMoreText = "Read More" }) => {
    return (
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">{title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <LocalizedLink
                        key={index}
                        to={article.path}
                        className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand transition-colors group"
                    >
                        <h3 className="text-white font-bold mb-2 group-hover:text-brand transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{article.description}</p>
                        {article.readTime && (
                            <span className="text-xs text-gray-500">{article.readTime} read</span>
                        )}
                        <div className="flex items-center text-brand text-sm font-bold mt-3">
                            {readMoreText} <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                    </LocalizedLink>
                ))}
            </div>
        </section>
    );
};

// Helpful Feedback Component
interface HelpfulFeedbackProps {
    question?: string;
    yesText?: string;
    noText?: string;
    thankYouText?: string;
    improveText?: string;
}

export const HelpfulFeedback: React.FC<HelpfulFeedbackProps> = ({
    question = "Was this article helpful?",
    yesText = "👍 Yes",
    noText = "👎 No",
    thankYouText = "✅ Thank you for your feedback!",
    improveText = "📝 We'll work on improving this content."
}) => {
    const [feedback, setFeedback] = React.useState<'yes' | 'no' | null>(null);

    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
            {feedback === null ? (
                <>
                    <p className="text-gray-300 mb-4">{question}</p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setFeedback('yes')}
                            className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-full transition-colors"
                        >
                            {yesText}
                        </button>
                        <button
                            onClick={() => setFeedback('no')}
                            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-colors"
                        >
                            {noText}
                        </button>
                    </div>
                </>
            ) : (
                <p className="text-brand font-bold">
                    {feedback === 'yes'
                        ? thankYouText
                        : improveText}
                </p>
            )}
        </div>
    );
};

// Quick Links Component
interface QuickLink {
    label: string;
    path: string;
    external?: boolean;
}

interface QuickLinksProps {
    links: QuickLink[];
    title?: string;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ links, title = "🔗 Quick Links" }) => {
    return (
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-white font-bold mb-4">{title}</h4>
            <div className="flex flex-wrap gap-3">
                {links.map((link, index) => (
                    link.external ? (
                        <a
                            key={index}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-bold"
                        >
                            {link.label} <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                    ) : (
                        <LocalizedLink
                            key={index}
                            to={link.path}
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-bold"
                        >
                            {link.label} <ExternalLink className="w-3 h-3 ml-1" />
                        </LocalizedLink>
                    )
                ))}
            </div>
        </div>
    );
};
