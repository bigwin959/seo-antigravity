import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, Facebook, Mail, Headphones } from 'lucide-react';
import { CONTACT_INFO, BRAND_NAME } from '../constants';

interface ContactMethod {
  name: string;
  icon: React.ElementType;
  link: string;
  description: string;
  color: string;
  available: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods: ContactMethod[] = [
    {
      name: t('contact.methods.livechat.name'),
      icon: Headphones,
      link: CONTACT_INFO.livechat,
      description: t('contact.methods.livechat.desc'),
      color: 'from-brand to-yellow-300',
      available: t('contact.methods.livechat.available')
    },
    {
      name: t('contact.methods.telegram.name'),
      icon: Send,
      link: CONTACT_INFO.telegram,
      description: t('contact.methods.telegram.desc'),
      color: 'from-blue-500 to-blue-400',
      available: t('contact.methods.telegram.available')
    },
    {
      name: t('contact.methods.whatsapp.name'),
      icon: MessageCircle,
      link: CONTACT_INFO.whatsapp,
      description: t('contact.methods.whatsapp.desc'),
      color: 'from-green-500 to-green-400',
      available: t('contact.methods.whatsapp.available')
    },
    {
      name: t('contact.methods.facebook.name'),
      icon: Facebook,
      link: CONTACT_INFO.facebook,
      description: t('contact.methods.facebook.desc'),
      color: 'from-blue-600 to-blue-500',
      available: t('contact.methods.facebook.available')
    },
    {
      name: t('contact.methods.email.name'),
      icon: Mail,
      link: `mailto:${CONTACT_INFO.email}`,
      description: t('contact.methods.email.desc'),
      color: 'from-gray-600 to-gray-500',
      available: t('contact.methods.email.available')
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-4 py-2 rounded-full mb-4">
            <Headphones className="w-5 h-5 text-brand" />
            <span className="text-brand text-sm font-bold">{t('contact.header.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('contact.header.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.header.desc')}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 border border-gray-700 hover:border-gray-600 rounded-2xl p-6 transition-all hover:transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                  <div className="inline-flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-400 font-medium">{method.available}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-brand text-3xl font-bold mb-2">{t('contact.quickInfo.response.value')}</div>
            <p className="text-gray-400 text-sm">{t('contact.quickInfo.response.label')}</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-brand text-3xl font-bold mb-2">{t('contact.quickInfo.availability.value')}</div>
            <p className="text-gray-400 text-sm">{t('contact.quickInfo.availability.label')}</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center">
            <div className="text-brand text-3xl font-bold mb-2">{t('contact.quickInfo.languages.value')}</div>
            <p className="text-gray-400 text-sm">{t('contact.quickInfo.languages.label')}</p>
          </div>
        </div>

        {/* Common Questions */}
        <div className="mt-12 bg-gray-800/30 border border-gray-700/50 rounded-xl p-8">
          <h3 className="text-white font-bold text-xl mb-6 text-center">{t('contact.commonTopics.title')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {(t('contact.commonTopics.items', { returnObjects: true }) as string[]).map((topic, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span className="text-gray-300 text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t('contact.note', { brand: BRAND_NAME })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
