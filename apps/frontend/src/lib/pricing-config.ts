import { config } from '@/lib/config';

interface UpgradePlan {
  /** @deprecated */
  hours: string;
  price: string;
  tierKey: string;  // Backend tier key
}

export interface PricingTier {
  name: string;
  price: string;
  yearlyPrice?: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  isPopular: boolean;
  /** @deprecated */
  hours: string;
  features: string[];
  disabledFeatures?: string[];
  baseCredits?: number;
  bonusCredits?: number;
  tierKey: string;  // Backend tier key (e.g., 'tier_2_20', 'free')
  upgradePlans: UpgradePlan[];
  hidden?: boolean;
  billingPeriod?: 'monthly' | 'yearly';
  originalYearlyPrice?: string;
  discountPercentage?: number;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Plus',
    price: '$30',
    description: 'Best for individuals and small teams',
    buttonText: 'Get started',
    buttonColor: 'bg-primary text-white dark:text-black',
    isPopular: false,
    hours: '3 hours',
    baseCredits: 3000,
    bonusCredits: 3000,
    features: [
      'CREDITS_BONUS:3000:6000',
      'Unlimited Chats',
      '3 concurrent runs - Run multiple Chats simultaneously',
      '7 custom AI Workers - Create WorkersCraft AI Digital Workers with custom Knowledge, Tools & Integrations',
      '5 scheduled triggers - Run at 9am daily, every Monday, first of month...',
      '25 app triggers - Auto-respond to new emails, Slack messages, form submissions...',
      '100+ Integrations - Google Drive, Slack, Notion, Gmail, Calendar, GitHub & more',
      'WorkersCraft AI Advanced mode - Strongest autonomy & decision-making capabilities',
    ],
    tierKey: config.SUBSCRIPTION_TIERS.TIER_2_20.tierKey,
    upgradePlans: [],
  },
  {
    name: 'Pro',
    price: '$50',
    description: 'Ideal for growing businesses',
    buttonText: 'Get started',
    buttonColor: 'bg-secondary text-white',
    isPopular: true,
    hours: '5 hours',
    baseCredits: 5000,
    bonusCredits: 5000,
    features: [
      'CREDITS_BONUS:5000:10000',
      'Unlimited Chats',
      '5 concurrent runs - Run multiple Chats simultaneously',
      '25 custom AI Workers - Create WorkersCraft AI Digital Workers with custom Knowledge, Tools & Integrations',
      '10 scheduled triggers - Run at 9am daily, every Monday, first of month...',
      '50 app triggers - Auto-respond to new emails, Slack messages, form submissions...',
      '100+ Integrations - Google Drive, Slack, Notion, Gmail, Calendar, GitHub & more',
      'WorkersCraft AI Advanced mode - Strongest autonomy & decision-making capabilities',
    ],
    tierKey: config.SUBSCRIPTION_TIERS.TIER_6_50.tierKey,
    upgradePlans: [],
  },
  {
    name: 'Business',
    price: '$200',
    description: 'For established businesses',
    buttonText: 'Get started',
    buttonColor: 'bg-secondary text-white',
    isPopular: false,
    hours: '20 hours',
    baseCredits: 20000,
    bonusCredits: 20000,
    features: [
      'CREDITS_BONUS:20000:40000',
      'Unlimited Chats',
      '20 concurrent runs - Run multiple Chats simultaneously',
      '110 custom AI Workers - Create WorkersCraft AI Digital Workers with custom Knowledge, Tools & Integrations',
      '50 scheduled triggers - Run at 9am daily, every Monday, first of month...',
      '200 app triggers - Auto-respond to new emails, Slack messages, form submissions...',
      '100+ Integrations - Google Drive, Slack, Notion, Gmail, Calendar, GitHub & more',
      'WorkersCraft AI Advanced mode - Strongest autonomy & decision-making capabilities',
      'Can purchase additional credits',
    ],
    tierKey: config.SUBSCRIPTION_TIERS.TIER_25_200.tierKey,
    upgradePlans: [],
  },
];

