import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LocalizedLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'en';

    const localizePath = (path: string) => {
        if (typeof path !== 'string') return path;
        // Skip external links
        if (path.startsWith('http') || path.startsWith('//')) return path;

        const separator = path.includes('?') ? '&' : '?';
        // Remove existing lang if any (optional but safer)
        const cleanPath = path.split('?')[0];
        const params = new URLSearchParams(path.split('?')[1] || '');
        params.set('lang', currentLang);

        return `${cleanPath}?${params.toString()}`;
    };

    const localizedTo = typeof to === 'string' ? localizePath(to) : to;

    return (
        <NavLink to={localizedTo} {...props}>
            {children}
        </NavLink>
    );
};
