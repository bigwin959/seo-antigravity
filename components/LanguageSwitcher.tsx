import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        const newParams = new URLSearchParams(searchParams);
        newParams.set('lang', lng);
        setSearchParams(newParams);
    };

    const currentLanguage = i18n.language || 'en';

    const renderFlag = (lng: string) => {
        switch (lng) {
            case 'bn': return 'BN';
            default: return 'EN';
        }
    };

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 text-white hover:text-brand transition-colors p-2 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <Globe className="w-4 h-4 text-brand/70" />
                <span className="text-xs font-bold uppercase tracking-wider">{renderFlag(currentLanguage)}</span>
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] backdrop-blur-md">
                <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center gap-3 ${currentLanguage === 'en' ? 'text-brand' : 'text-gray-300'}`}
                >
                    <span className="text-xs font-bold w-6">EN</span> English
                </button>
                <button
                    onClick={() => changeLanguage('bn')}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-800 flex items-center gap-3 ${currentLanguage === 'bn' ? 'text-brand' : 'text-gray-300'}`}
                >
                    <span className="text-xs font-bold w-6">BN</span> বাংলা
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
