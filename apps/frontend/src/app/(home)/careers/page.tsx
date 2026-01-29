'use client';

import { SimpleFooter } from '@/components/home/simple-footer';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const values = [
  {
    title: "Move Fast",
    description: "We build quickly and learn as we go. Speed isn't a bonus—it's how we work."
  },
  {
    title: "Ideas Over Egos",
    description: "The best idea wins, no matter who suggests it. No office politics, just honest debate."
  },
  {
    title: "Build for Tomorrow",
    description: "We're making things that will matter in ten years, not just what's trendy today."
  },
  {
    title: "Embrace Change",
    description: "New places bring new ideas. We believe staying on the move keeps us creative."
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-muted border border-border">
              <span className="text-sm font-medium text-foreground">Careers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance">
              Build fast. Work anywhere.
            </h1>
            
            <p className="text-foreground text-[1.375rem] md:text-[1.5rem] leading-[1.6] tracking-[-0.025em] font-medium max-w-2xl opacity-50">
              Eight people across three continents, building AI workers that actually work. 
              Remote-first, travel-friendly, obsessed with shipping.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12">
              How we work
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Open positions
            </h2>
            <div className="max-w-xl mx-auto space-y-4">
              <p className="text-muted-foreground">
                We don't have any open roles at the moment, but we're always growing.
              </p>
              <p className="text-muted-foreground">
                Check back soon or reach out if you think you'd be a great fit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Want to join our tribe?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're always looking for exceptional people. If you're passionate about AI and want to be part of what we're building, reach out.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" variant="outline">
                <a href="mailto:marko@kortix.com">
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}