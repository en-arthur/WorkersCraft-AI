'use client';

import { cn } from '@/lib/utils';

interface DynamicGreetingProps {
  className?: string;
}

/**
 * Static greeting reflecting the WorkersCraft AI platform.
 */
export function DynamicGreeting({ className }: DynamicGreetingProps) {
  return (
    <p className={cn('tracking-tight', className)}>
      Build with your AI Workforce
    </p>
  );
}
