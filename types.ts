export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, any>;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface GameProvider {
  name: string;
  description: string;
  features: string[];
  logo: string;
  website?: string;
}

export interface GuideItem {
  title: string;
  category: 'Registration' | 'Payment' | 'Gameplay' | 'App' | 'Sports';
  slug: string;
}