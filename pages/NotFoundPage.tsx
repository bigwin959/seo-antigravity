import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Home, Search, BookOpen, MessageCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gray-950">
            <SEO metadata={{
                title: t('404.title', { defaultValue: '404 - Page Not Found' }),
                description: t('404.desc', { defaultValue: 'The page you are looking for might have been moved or deleted.' }),
                noindex: true
            }} />

            <div className="max-w-2xl w-full text-center">
                <div className="relative mb-8">
                    <h1 className="text-[150px] font-black text-gray-900 leading-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-brand text-black font-black text-2xl px-6 py-2 rounded-lg rotate-[-5deg] shadow-xl">
                            OOPS!
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                    {t('404.heading', { defaultValue: "Looks like you're lost!" })}
                </h2>
                <p className="text-gray-400 text-lg mb-12">
                    {t('404.subheading', { defaultValue: "The page you are looking for is not available or has been moved." })}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    <LocalizedLink to="/" className="flex items-center justify-center gap-3 bg-brand hover:bg-white text-black font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-brand/20">
                        <Home className="w-5 h-5" /> {t('nav.home')}
                    </LocalizedLink>
                    <LocalizedLink to="/guides" className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all border border-gray-700">
                        <BookOpen className="w-5 h-5" /> {t('nav.guides')}
                    </LocalizedLink>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8">
                    <p className="text-gray-500 mb-4">{t('404.needHelp', { defaultValue: "Need immediate help?" })}</p>
                    <div className="flex justify-center gap-6">
                        <LocalizedLink to="/contact" className="text-brand hover:text-white transition-colors flex items-center gap-2 font-bold">
                            <MessageCircle className="w-5 h-5" /> {t('nav.contact')}
                        </LocalizedLink>
                        <LocalizedLink to="/blog" className="text-brand hover:text-white transition-colors flex items-center gap-2 font-bold">
                            <Search className="w-5 h-5" /> {t('nav.blog')}
                        </LocalizedLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
