'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { WorkersCraftLogo } from '@/components/sidebar/kortix-logo';
import { ThemeToggle } from '@/components/home/theme-toggle';
import { useGitHubStars } from '@/hooks/utils';

export function SimpleFooter() {
  const currentYear = new Date().getFullYear();
  const { formattedStars, loading: starsLoading } = useGitHubStars('en-arthur', 'WorkersCraft-AI');

  return (
    <footer className="w-full bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <WorkersCraftLogo size={24} />
            </Link>
            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/workerscraft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="size-4 text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
            </div>

            {/* Theme toggle only (English only, no language switcher) */}
            <div className="flex items-center gap-1 pt-2">
              <ThemeToggle variant="compact" />
            </div>
          </div>

          {/* Link columns from site config */}
          {siteConfig.footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      {...(link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} WorkersCraft AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
