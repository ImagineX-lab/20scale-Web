export type Lang = 'si' | 'en';

export function getLang(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'si';
}

export const ui = {
  si: {
    // Navigation
    'nav.home': 'මුල් පිටුව',
    'nav.solutions': 'විසඳුම්',
    'nav.pricing': 'මිල ගණන්',
    'nav.process': 'අපි වැඩ කරන ආකාරය',
    'nav.about': 'අප ගැන',
    'nav.faq': 'ප්‍රශ්න',
    'nav.contact': 'සම්බන්ධ වන්න',
    'nav.switchLang': 'EN',
    'nav.openMenu': 'මෙනුව විවෘත කරන්න',
    'nav.closeMenu': 'මෙනුව වසන්න',

    // Footer
    'footer.tagline': 'ඔබේ ව්‍යාපාරය ඉදිරියට ගෙනයන මෘදුකාංග විසඳුම්',
    'footer.email': '20scalesolutions@gmail.com',
    'footer.copyright': '© 2025 20Scale Solutions. සියලු හිමිකම් ඇවිරිණි.',
    'footer.location': 'ශ්‍රී ලංකාව',

    // Pages
    'page.home.heading': '20Scale',
    'page.home.sub': 'ඔබේ ව්‍යාපාරය ඉදිරියට ගෙනයන මෘදුකාංග විසඳුම්',
    'page.home.cta': 'English version',
    'page.home.ctaLink': '/en',

    // SEO
    'seo.defaultTitle': '20Scale | ව්‍යාපාර සඳහා Software Solutions',
    'seo.defaultDesc': 'POS පද්ධති, inventory management සහ custom software solutions.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.process': 'Our Process',
    'nav.about': 'About Us',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.switchLang': 'SI',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // Footer
    'footer.tagline': 'Practical Software Solutions for Growing Businesses',
    'footer.email': '20scalesolutions@gmail.com',
    'footer.copyright': '© 2025 20Scale Solutions. All rights reserved.',
    'footer.location': 'Sri Lanka',

    // Pages
    'page.home.heading': '20Scale',
    'page.home.sub': 'Practical Software Solutions for Growing Businesses',
    'page.home.cta': 'සිංහල',
    'page.home.ctaLink': '/',

    // SEO
    'seo.defaultTitle': '20Scale | Software Solutions for Businesses',
    'seo.defaultDesc': 'POS systems, inventory management and custom software solutions for businesses.',
  },
} as const;

type UiKeys = keyof typeof ui['si'];

export function t(lang: Lang, key: UiKeys): string {
  return ui[lang][key] ?? ui['si'][key] ?? key;
}

/** Given a URL and target lang, return the equivalent URL in that language. */
export function switchLangUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'en') {
    // si → en: prepend /en if not already there
    if (path.startsWith('/en')) return path;
    return '/en' + (path === '/' ? '' : path);
  } else {
    // en → si: strip /en prefix
    if (!path.startsWith('/en')) return path;
    const stripped = path.slice(3);
    return stripped === '' ? '/' : stripped;
  }
}
