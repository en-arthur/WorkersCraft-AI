/**
 * Site metadata configuration - SIMPLE AND WORKING
 */

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.workerscraft.ai';

export const siteMetadata = {
  name: 'WorkersCraft AI',
  title: 'WorkersCraft AI: Premium Agentic Workforce Platform',
  description: 'WorkersCraft AI is a premium, enterprise-grade "Agentic Workforce" platform. It moves beyond simple chatbots to provide a suite of autonomous Digital Workers designed to execute complex work operations from start to finish.',
  keywords: ['WorkersCraft AI', 'Agentic Workforce', 'Digital Workers', 'AI automation', 'enterprise AI', 'autonomous AI', 'AI workers', 'workflow automation'],
  url: baseUrl,
};
