import { pricingTiers, type PricingTier } from '@/lib/pricing-config';

// Re-export for backward compatibility
export type { PricingTier } from '@/lib/pricing-config';

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  nav: {
    links: [
      { id: 1, name: 'Home', href: '/' },
      { id: 2, name: 'About', href: '/about' },
      { id: 3, name: 'Careers', href: '/careers' },
    ],
  },
  hero: {
    description:
      'WorkersCraft AI is a premium, enterprise-grade "Agentic Workforce" platform. It moves beyond simple chatbots to provide a suite of autonomous Digital Workers designed to execute complex work operations from start to finish.',
  },
  cloudPricingItems: pricingTiers,
  footerLinks: [
    {
      title: 'WorkersCraft AI',
      links: [
        { id: 1, title: 'About', url: '/about' },
        { id: 2, title: 'Careers', url: '/careers' },
        { id: 3, title: 'Support', url: '/support' },
        { id: 4, title: 'Contact', url: 'mailto:hey@workerscraft.ai' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { id: 8, title: 'Privacy Policy', url: '/legal?tab=privacy' },
        { id: 9, title: 'Terms of Service', url: '/legal?tab=terms' },
        { id: 10, title: 'License', url: 'https://github.com/en-arthur/WorkersCraft-AI/blob/main/LICENSE' },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
