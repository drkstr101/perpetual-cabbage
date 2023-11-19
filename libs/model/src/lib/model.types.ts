type Markdown = string;

export type MetaTagProperty =
  | 'og:title'
  | 'og:type'
  | 'og:image'
  | 'og:image:alt'
  | 'og:url'
  | 'og:description'
  | 'og:locale'
  | 'og:site_name'
  | 'og:video'
  | 'twitter:card'
  | 'twitter:site'
  | 'twitter:creator'
  | 'twitter:description'
  | 'twitter:title'
  | 'twitter:image'
  | 'twitter:image:alt'
  | 'twitter:player';

export interface ButtonProps {
  __metadata: { modelName: 'Button' };
  label?: string;
  url?: string;
  theme?: 'default' | 'outline';
}

export interface MetaTagProps {
  __metadata: { modelName: 'MetaTag' };
  property: MetaTagProperty;
  content: string;
}

export interface ConfigProps {
  __metadata: { modelName: 'Config' };
  favicon?: string;
  defaultTitle?: string;
  defaultSocialImage?: string;
  defaultMetaTags?: MetaTagProps[];
}

export interface HeroProps {
  __metadata: { modelName: 'Hero' };
  heading?: string;
  body?: Markdown;
  image?: { src: string; alt?: string };
  button?: ButtonProps;
  theme?: 'imgLeft' | 'imgRight';
}

export interface StatsProps {
  __metadata: { modelName: 'Stats' };
  heading?: string;
  body?: Markdown;
  stats?: { label: string; value: string }[];
  theme?: 'primary' | 'dark';
}

export type ISectionProps = HeroProps | StatsProps;

export interface PageProps {
  __metadata: { id: string; slug: string; modelName: 'Page' };
  title: string;
  sections?: ISectionProps[];
}
