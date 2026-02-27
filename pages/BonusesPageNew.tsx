import React, { useState, useEffect } from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Gift,
    Trophy,
    TrendingUp,
    Users,
    Smartphone,
    Zap,
    Calendar,
    Percent,
    Crown,
    Target,
    Share2,
    BarChart3,
    Flame,
    ExternalLink,
    CheckCircle2,
    AlertTriangle,
    Clock,
    Coins,
    Star,
    Award,
    Sparkles,
    ChevronDown,
    ChevronUp,
    Gamepad2,
    DollarSign,
    TrendingDown
} from 'lucide-react';

// Promotions metadata (content is loaded via t())
const allPromotions = [
    { id: 1, key: 'promo1', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { id: 2, key: 'promo2', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { id: 3, key: 'promo3', icon: Gamepad2, color: 'from-green-500 to-emerald-500' },
    { id: 4, key: 'promo4', icon: Trophy, color: 'from-orange-500 to-red-500' },
    { id: 5, key: 'promo5', icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
    { id: 6, key: 'promo6', icon: Calendar, color: 'from-indigo-500 to-purple-500' },
    { id: 7, key: 'promo7', icon: Star, color: 'from-red-500 to-pink-500' },
    { id: 8, key: 'promo8', icon: Percent, color: 'from-teal-500 to-green-500' },
    { id: 9, key: 'promo9', icon: TrendingDown, color: 'from-cyan-500 to-blue-500' },
    { id: 10, key: 'promo10', icon: Crown, color: 'from-yellow-500 to-amber-500' },
    { id: 11, key: 'promo11', icon: Users, color: 'from-pink-500 to-rose-500' },
    { id: 12, key: 'promo12', icon: Share2, color: 'from-violet-500 to-purple-500' }
];

// Recursive content renderer component
const ContentRenderer: React.FC<{ content: any; depth?: number }> = ({ content, depth = 0 }) => {
    if (!content || typeof content !== 'object') return null;

    const renderArray = (arr: any[], type: string) => {
        if (!arr || !Array.isArray(arr) || arr.length === 0) return null;

        if (type === 'steps' || type === 'howTo') {
            return (
                <div className="space-y-4">
                    {arr.map((step: any, i: number) => (
                        <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-black font-bold flex items-center justify-center text-sm">
                                {step.number || step.step || i + 1}
                            </div>
                            <div className="flex-1">
                                <h6 className="font-bold text-white text-sm mb-1">{step.title}</h6>
                                <p className="text-gray-400 text-xs leading-relaxed">{step.desc || step.description}</p>
                                {step.tip && <p className="text-brand text-xs italic mt-2">💡 {step.tip}</p>}
                                {step.important && <p className="text-yellow-400 text-xs font-bold mt-2">⚠️ {step.important}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        // Generic handling for string arrays or mixed arrays
        if (arr.every((item: any) => typeof item === 'string')) {
            return (
                <ul className="space-y-2 mt-2">
                    {arr.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        }

        // Default card rendering for object arrays
        return (
            <div className="grid grid-cols-1 gap-3">
                {arr.map((item: any, i: number) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 h-full">
                        {item.number && (
                            <span className="inline-block w-6 h-6 rounded-full bg-brand text-black font-bold text-xs flex items-center justify-center mb-2">{item.number}</span>
                        )}
                        {item.month && (
                            <span className="inline-block px-2 py-1 bg-brand/20 text-brand text-xs font-bold rounded mb-2">{item.month}</span>
                        )}
                        {(item.title || item.name || item.event || item.mistake || item.benefit || item.label || item.level || item.requirement || item.aspect || item.type) && (
                            <h6 className="font-bold text-white text-sm mb-2">
                                {item.title || item.name || item.event || item.mistake || item.benefit || item.label || item.level || item.requirement || item.aspect || item.type}
                            </h6>
                        )}
                        {item.value && <p className="text-brand text-xs font-bold mb-1">{item.value}</p>}
                        {item.prizePool && <p className="text-brand text-xs font-bold mb-1">{item.prizePool}</p>}
                        {(item.desc || item.description || item.explanation || item.content) && (
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {item.desc || item.description || item.explanation || item.content}
                            </p>
                        )}
                        {item.q && item.a && (
                            <div className="mt-2">
                                <p className="text-white text-sm font-bold mb-1">Q: {item.q}</p>
                                <p className="text-gray-400 text-xs">A: {item.a}</p>
                            </div>
                        )}
                        {item.consequence && <p className="text-red-400 text-xs mt-2">❌ {item.consequence}</p>}
                        {item.solution && <p className="text-green-400 text-xs mt-2">✅ {item.solution}</p>}
                        {item.example && <p className="text-brand text-xs italic mt-2">Example: {item.example}</p>}
                        {item.prizes && <p className="text-yellow-400 text-xs mt-1">Prizes: {item.prizes}</p>}
                        {item.frequency && <p className="text-gray-500 text-[10px] mt-1 italic">{item.frequency}</p>}
                        {item.estimatedTime && <p className="text-gray-500 text-[10px] mt-1 italic">{item.estimatedTime}</p>}
                    </div>
                ))}
            </div>
        );
    };

    const skipKeys = [
        'title', 'intro', 'desc', 'description', 'content', 'badge', 'tagline', 'subtitle',
        'steps', 'items', 'reasons', 'strategies', 'tips', 'benefits', 'specifications',
        'mistakes', 'guidelines', 'events', 'markets', 'features', 'amounts', 'awards',
        'requirements', 'notes', 'usage', 'wagering', 'value'
    ];

    return (
        <div className={depth > 0 ? "mt-4 space-y-4" : "space-y-4"}>
            {/* Title */}
            {content.title && depth === 0 && (
                <h5 className="text-md md:text-lg font-bold text-white mb-3">{content.title}</h5>
            )}
            {content.title && depth > 0 && (
                <h6 className="text-sm md:text-md font-bold text-white mb-2 mt-3">{content.title}</h6>
            )}

            {/* Subtitle/Badge labels */}
            {content.subtitle && <h6 className="text-white font-bold text-sm mb-2">{content.subtitle}</h6>}
            {content.tagline && <p className="text-brand text-xs italic mb-2">{content.tagline}</p>}

            {/* Text content */}
            {content.intro && <p className="text-gray-300 text-sm leading-relaxed mb-3">{content.intro}</p>}
            {content.desc && <p className="text-gray-300 text-sm leading-relaxed mb-3">{content.desc}</p>}
            {content.description && <p className="text-gray-300 text-sm leading-relaxed mb-3">{content.description}</p>}
            {content.content && typeof content.content === 'string' && (
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{content.content}</p>
            )}

            {/* Key-Value special fields */}
            {content.value && <p className="text-brand font-bold text-sm">Value: {content.value}</p>}
            {content.wagering && <p className="text-yellow-400 text-xs bg-yellow-400/10 p-2 rounded border border-yellow-400/20">Wagering: {content.wagering}</p>}
            {content.usage && <p className="text-blue-300 text-xs italic">Usage: {content.usage}</p>}

            {/* Arrays */}
            {content.steps && Array.isArray(content.steps) && renderArray(content.steps, 'steps')}
            {content.items && Array.isArray(content.items) && renderArray(content.items, 'items')}
            {content.reasons && Array.isArray(content.reasons) && renderArray(content.reasons, 'reasons')}
            {content.strategies && Array.isArray(content.strategies) && renderArray(content.strategies, 'strategies')}
            {content.tips && Array.isArray(content.tips) && renderArray(content.tips, 'tips')}
            {content.benefits && Array.isArray(content.benefits) && renderArray(content.benefits, 'benefits')}
            {content.features && Array.isArray(content.features) && renderArray(content.features, 'features')}
            {content.amounts && Array.isArray(content.amounts) && renderArray(content.amounts, 'amounts')}
            {content.specifications && Array.isArray(content.specifications) && renderArray(content.specifications, 'specifications')}
            {content.mistakes && Array.isArray(content.mistakes) && renderArray(content.mistakes, 'mistakes')}
            {content.guidelines && Array.isArray(content.guidelines) && renderArray(content.guidelines, 'guidelines')}
            {content.events && Array.isArray(content.events) && renderArray(content.events, 'events')}
            {content.markets && Array.isArray(content.markets) && renderArray(content.markets, 'markets')}
            {content.awards && Array.isArray(content.awards) && renderArray(content.awards, 'awards')}
            {content.notes && Array.isArray(content.notes) && renderArray(content.notes, 'notes')}
            {content.requirements && Array.isArray(content.requirements) && renderArray(content.requirements, 'requirements')}

            {/* Nested objects */}
            {Object.entries(content).map(([key, value]: [string, any]) => {
                if (skipKeys.includes(key) || !value || typeof value !== 'object' || Array.isArray(value)) return null;

                return (
                    <div key={key} className="mt-4 pl-4 border-l-2 border-brand/30">
                        <ContentRenderer content={value} depth={depth + 1} />
                    </div>
                );
            })}
        </div>
    );
};

const BonusesPageNew: React.FC = () => {
    const { t } = useTranslation();
    const { type } = useParams<{ type: string }>();
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        if (type) {
            const promo = allPromotions.find(p => p.key === type);
            if (promo) {
                setExpandedId(promo.id);
                // Scroll to the element after a short delay to ensure rendering
                setTimeout(() => {
                    const element = document.getElementById(type);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
        }
    }, [type]);

    const leaderboardData = t('bonusesPage.leaderboard', { returnObjects: true }) as any;
    const tournamentData = t('bonusesPage.tournament', { returnObjects: true }) as any;

    // Safety check for translations
    if (!leaderboardData || typeof leaderboardData === 'string' || !tournamentData || typeof tournamentData === 'string') {
        return <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <>
            <SEO
                metadata={{
                    title: t('bonusesPage.seo.title'),
                    description: t('bonusesPage.seo.description'),
                    keywords: t('bonusesPage.seo.keywords', { returnObjects: true }) as string[],
                    ogType: 'website',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": t('bonusesPage.seo.title'),
                        "description": t('bonusesPage.seo.description')
                    }
                }}
            />

            <Breadcrumbs items={[{ label: t('nav.home'), path: '/' }, { label: t('nav.promotions'), path: '/promotions' }]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
                {/* HERO SECTION */}
                <section className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 p-8 md:p-16 text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <span className="inline-block px-4 py-1 bg-brand/10 border border-brand/30 rounded-full text-brand font-bold text-sm uppercase tracking-wider mb-6">
                            {t('bonusesPage.hero.badge')}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('bonusesPage.hero.title')} <br />
                            <span className="text-brand">{t('bonusesPage.hero.subtitle')}</span>
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <a href={OFFICIAL_DOMAIN} className="bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-brand/50 hover:scale-105 active:scale-95">
                                {t('bonusesPage.hero.cta')}
                            </a>
                            <LocalizedLink to="/promotions-today" className="bg-white/5 border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95">
                                {t('bonusesPage.hero.ctaToday')}
                            </LocalizedLink>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {Object.entries(t('bonusesPage.hero.stats', { returnObjects: true }) as any).map(([key, stat]: any) => (
                                <div key={key} className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm hover:border-brand/30 transition-colors">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{t('bonusesPage.intro.title')}</h2>
                    <p className="text-gray-400 text-md leading-relaxed mb-4">
                        {t('bonusesPage.intro.p1')}
                    </p>
                    <p className="text-gray-400 text-md leading-relaxed">
                        {t('bonusesPage.intro.p2')}
                    </p>
                </section>

                {/* PROMOTIONS GRID */}
                <section id="all-promos">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            {t('bonusesPage.promosSection.title')} <span className="text-gray-500 font-normal text-lg">{t('bonusesPage.promosSection.count', { count: allPromotions.length })}</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {allPromotions.map((promo) => {
                            const isExpanded = expandedId === promo.id;
                            const Icon = promo.icon;
                            const promoData = t(`promos.${promo.key}`, { returnObjects: true }) as any;

                            if (!promoData || typeof promoData === 'string') return null;

                            return (
                                <div key={promo.id} id={promo.key} className="bg-gray-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-brand/30 transition-all">
                                    <div className={`p-4 md:p-8 flex items-center justify-between cursor-pointer transition-all ${isExpanded ? 'bg-white/5' : 'hover:bg-white/5'}`} onClick={() => setExpandedId(isExpanded ? null : promo.id)}>
                                        <div className="flex items-center gap-4 md:gap-6">
                                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${promo.color} flex items-center justify-center text-white shadow-lg`}>
                                                <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>
                                            <div>
                                                <span className="text-brand text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 block">{promoData.badge}</span>
                                                <h3 className="text-md md:text-lg font-bold text-white">{promoData.title}</h3>
                                            </div>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-transform ${isExpanded ? 'rotate-180 bg-brand text-black border-brand' : ''}`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className="p-4 md:p-8 border-t border-white/5 bg-gray-900/50 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                                            <div className="space-y-8 text-left">
                                                <div>
                                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{promoData.subtitle}</h4>
                                                    <p className="text-brand text-md font-medium italic mb-6">{promoData.tagline}</p>
                                                    {promoData.overview && <ContentRenderer content={promoData.overview} />}
                                                </div>

                                                {(promoData.howItWorks || promoData.howToClaim || promoData.howToJoin) && (
                                                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                                                        <ContentRenderer content={promoData.howItWorks || promoData.howToClaim || promoData.howToJoin} />
                                                    </div>
                                                )}

                                                {promoData.prizes && (
                                                    <div className="bg-gradient-to-br from-brand/10 to-transparent rounded-2xl p-6 md:p-8 border border-brand/20">
                                                        <ContentRenderer content={promoData.prizes} />
                                                    </div>
                                                )}
                                                {promoData.rewards && (
                                                    <div className="bg-gradient-to-br from-brand/10 to-transparent rounded-2xl p-6 md:p-8 border border-brand/20">
                                                        <ContentRenderer content={promoData.rewards} />
                                                    </div>
                                                )}
                                                {promoData.bonusDetails && (
                                                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                                                        <ContentRenderer content={promoData.bonusDetails} />
                                                    </div>
                                                )}

                                                {(promoData.importantNotes || promoData.requirements || promoData.terms) && (
                                                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8">
                                                        <div className="flex items-center gap-2 text-red-400 font-bold mb-4 text-sm uppercase tracking-wider">
                                                            <AlertTriangle className="w-5 h-5" />
                                                            {promoData.requirements?.title || promoData.importantNotes?.title || promoData.terms?.title || t('bonusesPage.labels.requirements')}
                                                        </div>
                                                        <ContentRenderer content={promoData.importantNotes || promoData.requirements || promoData.terms} />
                                                    </div>
                                                )}

                                                {promoData.eligibility && (
                                                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                                                        <ContentRenderer content={promoData.eligibility} />
                                                    </div>
                                                )}

                                                {promoData.whyParticipate && (
                                                    <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 md:p-8">
                                                        <ContentRenderer content={promoData.whyParticipate} />
                                                    </div>
                                                )}

                                                {promoData.frequency && (
                                                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                                                        <ContentRenderer content={promoData.frequency} />
                                                    </div>
                                                )}

                                                {promoData.tips && (
                                                    <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 md:p-8">
                                                        <div className="flex items-center gap-2 text-green-400 font-bold mb-4 text-sm uppercase tracking-wider">
                                                            <Zap className="w-5 h-5" />
                                                            {promoData.tips?.title || t('bonusesPage.labels.proTips')}
                                                        </div>
                                                        <ContentRenderer content={promoData.tips} />
                                                    </div>
                                                )}
                                            </div>

                                            {/* FAQ Section */}
                                            {promoData.faq && promoData.faq.items && (
                                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                                    <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                        <Award className="w-5 h-5 text-brand" />
                                                        {promoData.faq.title || (t('faq.title') === 'faq.title' ? 'Frequently Asked Questions' : t('faq.title'))}
                                                    </h5>
                                                    <div className="space-y-4">
                                                        {promoData.faq.items.map((item: any, i: number) => (
                                                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                                <h6 className="font-bold text-white text-sm mb-2">Q: {item.q}</h6>
                                                                <p className="text-gray-400 text-xs leading-relaxed">A: {item.a}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* CTA Buttons */}
                                            <div className="flex flex-wrap gap-3 pt-4">
                                                <a
                                                    href={OFFICIAL_DOMAIN}
                                                    target="_blank"
                                                    rel="nofollow noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg text-sm hover:scale-105"
                                                >
                                                    {promoData.cta.primary} <ExternalLink className="w-4 h-4" />
                                                </a>
                                                {promoData.cta.secondary && (
                                                    <button className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white hover:bg-white/10 font-bold py-3 px-6 rounded-full transition-all text-sm">
                                                        {promoData.cta.secondary}
                                                    </button>
                                                )}
                                            </div>

                                            {/* Footer Note */}
                                            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                                                <p className="text-xs text-yellow-200 leading-relaxed flex items-start gap-2">
                                                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    <span>{promoData.cta.footer}</span>
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* LEADERBOARD SECTION */}
                <section>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 font-bold text-sm uppercase tracking-wider mb-4">
                            {leaderboardData.badge}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {leaderboardData.title}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {leaderboardData.subtitle}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            {leaderboardData.overview.intro}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {leaderboardData.overview.leaderboardTypes.types.slice(0, 4).map((type: any, i: number) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                                    <h4 className="text-white font-bold mb-2">{type.type}</h4>
                                    <p className="text-gray-400 text-sm mb-2">{type.description}</p>
                                    <p className="text-brand text-xs font-bold">{type.prizes}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <a
                                href={OFFICIAL_DOMAIN}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transition-all shadow-lg text-sm"
                            >
                                {t('bonusesPage.leaderboard.cta')} <BarChart3 className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* TOURNAMENT SECTION */}
                <section>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-500 font-bold text-sm uppercase tracking-wider mb-4">
                            {tournamentData.badge}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {tournamentData.title}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {tournamentData.subtitle}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            {tournamentData.overview.intro}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {tournamentData.overview.tournamentTypes.types.slice(0, 4).map((type: any, i: number) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-white font-bold">{type.type}</h4>
                                        <Trophy className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2">{type.description}</p>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-brand font-bold">{type.prizePool}</span>
                                        <span className="text-gray-500">{type.frequency}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <a
                                href={OFFICIAL_DOMAIN}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg text-sm"
                            >
                                {t('bonusesPage.tournament.cta')} <Trophy className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="relative bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 rounded-2xl p-12 text-center border border-brand/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t('bonusesPage.finalCta.title')}
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                            {t('bonusesPage.finalCta.description')}
                        </p>
                        <a
                            href={OFFICIAL_DOMAIN}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-brand/50 hover:scale-105"
                        >
                            {t('bonusesPage.finalCta.cta')} <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </section>

            </div>
        </>
    );
};

export default BonusesPageNew;
