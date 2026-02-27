import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { useTranslation, Trans } from 'react-i18next';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN, PROVIDERS } from '../constants';
import {
    ShieldCheck, Trophy, Users, Globe, Shield, ExternalLink, CheckCircle,
    Lock, Server, Smartphone, CreditCard, Gamepad2, Target, Zap, TrendingUp,
    Gift, Star, Award, Crown, Sparkles, Calendar, Rocket, AlertTriangle,
    RefreshCw, MessageCircle, HelpCircle, MonitorPlay, Dices, FileCheck,
    Activity, Layers, Flame
} from 'lucide-react';

export const AboutPageComprehensive: React.FC = () => {
    const { t } = useTranslation();
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bigwin959",
        "url": "https://bigwinofficial.com",
        "description": t('about.schema.description'),
        "foundingDate": "2019",
        "sameAs": []
    };

    return (
        <>
            <SEO metadata={{
                title: t('about.seo.title'),
                description: t('about.seo.description'),
                schema: schema
            }} />
            <Breadcrumbs items={[{ label: t('about.hero.title'), path: '/about' }]} />

            {/* HERO */}
            <section className="relative py-24 bg-gradient-to-br from-brand/10 via-gray-900 to-black overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                    <div className="absolute top-20 right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                </div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-5 py-2 rounded-full mb-6">
                        <ShieldCheck className="w-5 h-5 text-brand" />
                        <span className="text-brand text-sm font-bold">{t('about.hero.trusted')}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                        <Trans i18nKey="about.hero.title" components={{ span: <span className="text-brand" /> }}>
                            About <span className="text-brand">Bigwin959</span>
                        </Trans>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                        {t('about.hero.subtitle')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {(t('about.hero.badges', { returnObjects: true }) as string[]).map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                                {[<Trophy className="w-5 h-5 text-brand" />, <Users className="w-5 h-5 text-brand" />, <Globe className="w-5 h-5 text-brand" />, <Shield className="w-5 h-5 text-brand" />][i]}
                                <span className="text-white text-sm font-medium">{badge}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-brand hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-brand/30 flex items-center gap-2">
                            {t('about.hero.cta.visit')} <ExternalLink className="w-5 h-5" />
                        </a>
                        <LocalizedLink to="/providers" className="border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold py-4 px-10 rounded-full transition-colors">
                            {t('about.hero.cta.providers')}
                        </LocalizedLink>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* BRAND AMBASSADOR */}
                <section className="bg-gradient-to-br from-purple-900/30 via-gray-900 to-black border border-purple-600/30 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full"></div>
                                <img
                                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000504/model1.png"
                                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767000504/model1.png 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000504/model1.png 600w"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    width="500"
                                    height="600"
                                    loading="lazy"
                                    alt={t('about.ambassador.imgAlt')}
                                    className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000504/model1.png";
                                    }}
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-brand/30 z-20">
                                    <p className="text-brand font-bold text-lg mb-1">{t('about.ambassador.name')}</p>
                                    <p className="text-white text-sm">{t('about.ambassador.role')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-2 rounded-full mb-4">
                                <Star className="w-5 h-5 text-brand" />
                                <span className="text-brand text-sm font-bold">{t('about.ambassador.role')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                <Trans i18nKey="about.ambassador.title" components={{ span: <span className="text-brand" /> }}>
                                    Payal Rajput Joins <span className="text-brand">Bigwin959</span>
                                </Trans>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                <Trans i18nKey="about.ambassador.desc" components={{ strong: <strong className="text-white" /> }}>
                                    We are proud to announce that renowned actress and entertainment icon <strong className="text-white">Payal Rajput</strong> has officially joined Bigwin959 as our Brand Ambassador. Her association with our platform reinforces our commitment to excellence, entertainment, and responsible gaming.
                                </Trans>
                            </p>
                            <div className="bg-purple-900/20 border border-purple-600/30 rounded-xl p-6 mb-6">
                                <p className="text-gray-300 italic leading-relaxed mb-3">
                                    "{t('about.ambassador.quote')}"
                                </p>
                                <p className="text-brand font-semibold">— {t('about.ambassador.name')}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="space-y-3">
                                    {(t('about.ambassador.bullets', { returnObjects: true }) as string[]).map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRUSTED SINCE 2019 */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-brand pl-6">{t('about.history.title')}</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {t('about.history.desc1')}
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            <Trans i18nKey="about.history.desc2" components={{ strong: <strong className="text-white" /> }}>
                                Our platform is built on a foundation of <strong className="text-white">trust</strong>, <strong className="text-white">integrity</strong>, and <strong className="text-white">player satisfaction</strong>. We are committed to providing a secure, fair, and entertaining gaming environment where players can enjoy their favorite games with complete peace of mind.
                            </Trans>
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            {t('about.history.desc3')}
                        </p>
                        <ul className="space-y-3">
                            {(t('about.history.bullets', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full" />
                        <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
                            <div className="text-center mb-6">
                                <ShieldCheck className="w-20 h-20 text-brand mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">{t('about.history.securityBadge.title')}</h3>
                                <p className="text-gray-400">{t('about.history.securityBadge.subtitle')}</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-4">
                                    {(t('about.history.securityBadge.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <img
                                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000513/Security-Certifications.png"
                                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000513/Security-Certifications.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000513/Security-Certifications.png 800w"
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    width="500" height="300" loading="lazy"
                                    alt={t('about.history.securityBadge.imgAlt')}
                                    className="w-full max-w-md mx-auto h-auto object-contain rounded-lg opacity-70"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PLATFORM TECHNOLOGICAL SAFETY */}
                <section>
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-white mb-4">{t('about.security.title')}</h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.security.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('about.security.encryption.title')}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                {t('about.security.encryption.desc1')}
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                {t('about.security.encryption.desc2')}
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <Server className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('about.security.firewall.title')}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                {t('about.security.firewall.desc1')}
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                {t('about.security.firewall.desc2')}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-brand" />
                            {t('about.security.measures.title')}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {(t('about.security.measures.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                                <div key={i} className="bg-gray-900/50 p-6 rounded-xl">
                                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000514/Security-Technology.png"
                            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000514/Security-Technology.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000514/Security-Technology.png 1200w"
                            sizes="(max-width: 768px) 100vw, 1000px"
                            width="1000" height="600" loading="lazy"
                            alt={t('about.security.imgAlt')}
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl border border-gray-700"
                        />
                    </div>
                </section>

                {/* MADE FOR ASIA & INTERNATIONAL */}
                <section>
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-white mb-4">{t('about.markets.title')}</h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.markets.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-600/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Globe className="w-8 h-8 text-orange-400" />
                                <h3 className="text-2xl font-bold text-white">{t('about.markets.asian.title')}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('about.markets.asian.desc1')}
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('about.markets.asian.desc2')}
                            </p>
                            <div className="space-y-3">
                                {(t('about.markets.asian.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-8 h-8 text-green-400" />
                                <h3 className="text-2xl font-bold text-white">{t('about.markets.inter.title')}</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('about.markets.inter.desc1')}
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {t('about.markets.inter.desc2')}
                            </p>
                            <div className="space-y-3">
                                {(t('about.markets.inter.items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000486/Asia-International-Markets.png"
                            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000486/Asia-International-Markets.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000486/Asia-International-Markets.png 1200w"
                            sizes="(max-width: 768px) 100vw, 1000px"
                            width="1000" height="600" loading="lazy"
                            alt={t('about.markets.imgAlt')}
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl"
                        />
                    </div>
                </section>

                {/* ONE-STOP PLATFORM */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">{t('about.platform.title')}</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.platform.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Sports Betting */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Trophy className="w-8 h-8 text-blue-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.platform.sports.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.sports.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.sports.desc2')}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(t('about.platform.sports.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000515/Sports-Betting.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000515/Sports-Betting.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000515/Sports-Betting.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.platform.sports.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Live Casino */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 flex justify-center md:justify-end">
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767007730/live-casino1.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767007730/live-casino1.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767007730/live-casino1.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.platform.live.imgAlt')}
                                        className="rounded-xl w-full max-w-md h-auto object-contain"
                                    />
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MonitorPlay className="w-8 h-8 text-purple-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.platform.live.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.live.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.live.desc2')}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(t('about.platform.live.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slots */}
                        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Gamepad2 className="w-8 h-8 text-yellow-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.platform.slots.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.slots.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.slots.desc2')}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(t('about.platform.slots.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000514/slot-games.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000514/slot-games.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000514/slot-games.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.platform.slots.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Fishing Games */}
                        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000495/Fishing-Games.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000495/Fishing-Games.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000495/Fishing-Games.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.platform.fishing.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Activity className="w-8 h-8 text-cyan-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.platform.fishing.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.fishing.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.fishing.desc2')}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(t('about.platform.fishing.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Crash Games */}
                        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Rocket className="w-8 h-8 text-red-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.platform.crash.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.crash.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.platform.crash.desc2')}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(t('about.platform.crash.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000490/Crash-Games.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000490/Crash-Games.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000490/Crash-Games.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.platform.crash.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Categories */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <Dices className="w-10 h-10 text-brand mb-4" />
                                <h4 className="text-xl font-bold text-white mb-3">{t('about.platform.poker.title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {t('about.platform.poker.desc')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(t('about.platform.poker.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-brand/20 text-brand rounded text-xs">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <Layers className="w-10 h-10 text-brand mb-4" />
                                <h4 className="text-xl font-bold text-white mb-3">{t('about.platform.virtual.title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {t('about.platform.virtual.desc')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(t('about.platform.virtual.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-brand/20 text-brand rounded text-xs">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800/50 rounded-xl p-6">
                                <Flame className="w-10 h-10 text-brand mb-4" />
                                <h4 className="text-xl font-bold text-white mb-3">{t('about.platform.arcade.title')}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {t('about.platform.arcade.desc')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {(t('about.platform.arcade.tags', { returnObjects: true }) as string[]).map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-brand/20 text-brand rounded text-xs">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 110+ PREMIUM PROVIDERS */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">{t('about.providers.title')}</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.providers.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                        {PROVIDERS.map((provider, i) => (
                            <div key={i} className="rounded-xl p-4 hover:bg-white/5 transition-all group">
                                <div className="aspect-square bg-white/5 rounded-lg mb-3 overflow-hidden flex items-center justify-center p-3">
                                    <img
                                        src={provider.logo}
                                        alt={provider.name}
                                        width="80" height="80" loading="lazy"
                                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                                    />
                                </div>
                                <h4 className="text-white font-bold text-sm text-center mb-1">{provider.name}</h4>
                                <p className="text-gray-500 text-xs text-center line-clamp-2">{provider.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-brand/10 to-yellow-500/10 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">{t('about.providers.why.title')}</h3>
                        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                            {t('about.providers.why.desc')}
                        </p>
                        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {(t('about.providers.why.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                                <div key={i} className="text-center">
                                    {[<FileCheck className="w-8 h-8 text-brand mx-auto mb-2" />, <Shield className="w-8 h-8 text-brand mx-auto mb-2" />, <Sparkles className="w-8 h-8 text-brand mx-auto mb-2" />, <Trophy className="w-8 h-8 text-brand mx-auto mb-2" />][i]}
                                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROMOTIONS & REWARDS */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">{t('about.promotions.title')}</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.promotions.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Free Spins */}
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Zap className="w-8 h-8 text-purple-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.promotions.spins.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.spins.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.spins.desc2')}
                                    </p>
                                    <div className="space-y-2">
                                        {(t('about.promotions.spins.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-purple-400" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000496/Free-Spins-Promotions.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000496/Free-Spins-Promotions.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000496/Free-Spins-Promotions.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.promotions.spins.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Lucky Draw */}
                        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000503/Lucky-Draw-Events.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000503/Lucky-Draw-Events.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000503/Lucky-Draw-Events.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.promotions.lucky.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Gift className="w-8 h-8 text-green-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.promotions.lucky.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.lucky.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.lucky.desc2')}
                                    </p>
                                    <div className="space-y-2">
                                        {(t('about.promotions.lucky.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Golden Egg */}
                        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Crown className="w-8 h-8 text-yellow-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.promotions.egg.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.egg.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.egg.desc2')}
                                    </p>
                                    <div className="space-y-2">
                                        {(t('about.promotions.egg.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-yellow-400" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000500/Golden-Egg-Rewards.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000500/Golden-Egg-Rewards.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000500/Golden-Egg-Rewards.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.promotions.egg.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tournaments */}
                        <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1">
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000498/Gaming-Tournaments.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000498/Gaming-Tournaments.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000498/Gaming-Tournaments.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.promotions.tourney.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Trophy className="w-8 h-8 text-red-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.promotions.tourney.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.tourney.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.tourney.desc2')}
                                    </p>
                                    <div className="space-y-2">
                                        {(t('about.promotions.tourney.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-red-400" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Special Events */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Calendar className="w-8 h-8 text-blue-400" />
                                        <h3 className="text-3xl font-bold text-white">{t('about.promotions.seasonal.title')}</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.seasonal.desc1')}
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {t('about.promotions.seasonal.desc2')}
                                    </p>
                                    <div className="space-y-2">
                                        {(t('about.promotions.seasonal.items', { returnObjects: true }) as string[]).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <CheckCircle className="w-4 h-4 text-blue-400" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000512/Seasonal-Events.png"
                                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000512/Seasonal-Events.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto/v1767000512/Seasonal-Events.png 800w"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                        width="500" height="400" loading="lazy"
                                        alt={t('about.promotions.seasonal.imgAlt')}
                                        className="rounded-xl w-full max-w-lg h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WORLDWIDE EXPANSION & ROADMAP */}
                <section>
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-white mb-4">{t('about.roadmap.title')}</h3>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('about.roadmap.subtitle')}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-brand/10 to-purple-900/10 rounded-2xl p-8 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Globe className="w-6 h-6 text-brand" />
                                    {t('about.roadmap.current.title')}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {t('about.roadmap.current.desc1')}
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {t('about.roadmap.current.desc2')}
                                </p>
                                <div className="space-y-3">
                                    {(t('about.roadmap.current.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Rocket className="w-6 h-6 text-brand" />
                                    {t('about.roadmap.tech.title')}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {t('about.roadmap.tech.desc1')}
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {t('about.roadmap.tech.desc2')}
                                </p>
                                <div className="space-y-3">
                                    {(t('about.roadmap.tech.items', { returnObjects: true }) as string[]).map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 rounded-xl p-6">
                            <TrendingUp className="w-10 h-10 text-brand mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">{t('about.roadmap.newCats.title')}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {t('about.roadmap.newCats.desc')}
                            </p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6">
                            <Star className="w-10 h-10 text-brand mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">{t('about.roadmap.vip.title')}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {t('about.roadmap.vip.desc')}
                            </p>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                            <Users className="w-10 h-10 text-brand mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">{t('about.roadmap.comm.title')}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {t('about.roadmap.comm.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <img
                            src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000497/Future-Roadmap.png"
                            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000497/Future-Roadmap.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000497/Future-Roadmap.png 1200w"
                            sizes="(max-width: 768px) 100vw, 1000px"
                            width="1000" height="600" loading="lazy"
                            alt={t('about.roadmap.imgAlt')}
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-2xl border border-gray-700"
                        />
                    </div>
                </section>

                {/* RESPONSIBLE GAMING */}
                <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-yellow-500" />
                            {t('about.responsible.title')}
                        </h3>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            {t('about.responsible.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {(t('about.responsible.tools', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                            <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">{t('about.responsible.reminders.title')}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {(t('about.responsible.reminders.items', { returnObjects: true }) as string[]).map((text, i) => (
                                <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">{t('about.faq.title')}</h3>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {(t('about.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>).map((item, i) => (
                            <div key={i} className="border-b border-gray-800 pb-4">
                                <h4 className="font-semibold text-white flex items-center gap-2 mb-2"><HelpCircle className="w-5 h-5 text-brand" /> {item.q}</h4>
                                <p className="text-gray-400 text-sm ml-7">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT CTA */}
                <section className="text-center py-12 bg-gradient-to-r from-brand/10 to-yellow-500/10 border border-brand/30 rounded-2xl">
                    <h3 className="text-3xl font-bold text-white mb-6">{t('about.cta.title')}</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        {t('about.cta.subtitle')}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-brand hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-brand/30 flex items-center gap-2">
                            {t('about.cta.join')} <ExternalLink className="w-5 h-5" />
                        </a>
                        <LocalizedLink to="/guides" className="border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold py-4 px-10 rounded-full transition-colors">
                            {t('about.cta.guides')}
                        </LocalizedLink>
                        <button className="border-2 border-gray-600 text-gray-300 hover:border-brand hover:text-brand font-bold py-4 px-10 rounded-full transition-colors flex items-center gap-2">
                            {t('about.cta.support')} <MessageCircle className="w-5 h-5" />
                        </button>
                    </div>
                </section>

            </div>
        </>
    );
};

