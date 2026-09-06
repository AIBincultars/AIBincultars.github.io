export const languages = ['en', 'zh'] as const;

export type Language = (typeof languages)[number];
export type PageKey = 'home' | 'publications' | 'collaborations' | 'projects';

export type LocalizedText = {
  zh: string;
  en: string;
};

export const localize = (value: LocalizedText, language: Language) => value[language];

export const paths: Record<Language, Record<PageKey, string>> = {
  en: {
    home: '/en/',
    publications: '/en/publications/',
    collaborations: '/en/collaborations/',
    projects: '/en/projects/',
  },
  zh: {
    home: '/zh/',
    publications: '/zh/publications/',
    collaborations: '/zh/collaborations/',
    projects: '/zh/projects/',
  },
};

export const siteConfig = {
  url: 'https://aibincultars.github.io',
  languageStorageKey: 'personal-site-language',
} as const;
