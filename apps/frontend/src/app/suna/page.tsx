import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'WorkersCraft AI - AI digital worker platform',
  description: 'WorkersCraft AI. WorkersCraft AI is a premium, enterprise-grade "Agentic Workforce" platform that moves beyond simple chatbots to provide autonomous Digital Workers.',
  keywords: [
    'WorkersCraft AI',
    'WorkersCraft AI assistant',
    'WorkersCraft AI',
    'where is WorkersCraft AI',
    'WorkersCraft AI',
    'AI assistant',
    'Agentic Workforce',
    'Digital Workers',
    'AI automation',
    'enterprise AI',
    'autonomous AI',
  ],
  openGraph: {
    title: 'WorkersCraft AI',
    description: 'WorkersCraft AI- Premium Agentic Workforce Platform with autonomous Digital Workers.',
    type: 'website',
    url: 'https://www.workerscraft.com',
    siteName: 'WorkersCraft AI',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'WorkersCraft AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkersCraft AI',
    description: 'WorkersCraft AI - Premium Agentic Workforce Platform with autonomous Digital Workers.',
    images: ['/banner.png'],
  },
  alternates: {
    canonical: 'https://www.workerscraft.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SunaPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'WorkersCraft AI',
            alternateName: ['WorkersCraft AI', 'Digital Workers', 'Autonomous AI Agent'],
            url: 'https://www.workerscraft.com',
            logo: 'https://www.workerscraft.com/favicon.png',
            sameAs: [
              'https://github.com/kortix-ai',
              'https://x.com/kortix',
              'https://linkedin.com/company/kortix',
            ],
            description:
              'WorkersCraft AI is platform that provides users with AI Digital workers that helps you accomplish real-world tasks through natural conversation.',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.workerscraft.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'WorkersCraft AI',
                item: 'https://www.workerscraft.com/suna',
              },
            ],
          }),
        }}
      />

      <main className="w-full relative overflow-hidden bg-background">
        <div className="relative flex flex-col items-center w-full px-4 sm:px-6">
          {/* Hero Section with Logo */}
          <div className="relative z-10 pt-16 sm:pt-24 md:pt-32 mx-auto h-full w-full max-w-6xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-8 sm:pt-20 max-w-4xl mx-auto pb-10">
              {/* Kortix Symbol with grain texture */}
              <div className="relative mb-8 sm:mb-12" style={{ width: '80px', height: '80px' }}>
                <Image
                  src="/kortix-symbol.svg"
                  alt="Kortix"
                  fill
                  className="object-contain dark:invert"
                  priority
                  style={{ mixBlendMode: 'normal' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/grain-texture.png)',
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.6,
                    maskImage: 'url(/kortix-symbol.svg)',
                    WebkitMaskImage: 'url(/kortix-symbol.svg)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-center">
                WorkersCraft AI
              </h1>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-3xl mx-auto px-2 sm:px-0 pb-16">
              <Link
                href="/"
                className="flex h-12 items-center justify-center w-full sm:w-auto px-8 text-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm font-medium"
              >
                Go to WorkersCraft AI
                <ArrowRight className="ml-2 size-4" />
              </Link>
              
            </div>
          </div>

          

              


              

          {/* Footer Wordmark Section */}
          <div className="relative w-full mx-auto overflow-hidden pb-20 sm:pb-32">
            <div className="relative w-full max-w-5xl mx-auto aspect-[1150/344] px-8 md:px-16">
              <div className="relative w-full h-full" style={{ isolation: 'isolate' }}>
                <Image
                  src="/wordmark.svg"
                  alt="Kortix"
                  fill
                  className="object-contain dark:invert opacity-10"
                  priority
                  style={{ mixBlendMode: 'normal' }}
                />
                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/grain-texture.png)',
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.6,
                    maskImage: 'url(/wordmark.svg)',
                    WebkitMaskImage: 'url(/wordmark.svg)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>

          {/* SEO Footer Text */}
          <div className="relative z-10 text-center max-w-2xl mx-auto pb-20 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground/60 leading-relaxed font-medium">
              Looking for Suna? You've found us. Kortix is the evolution of Suna — the same open
              source AI assistant and generalist AI worker, now with a name that better represents
              our vision. For users searching for "Suna AI", "Suna assistant", "Suna.so", "where is
              Suna", or "Kortix Suna" — this is the official continuation of the Suna project under
              the Kortix brand.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
