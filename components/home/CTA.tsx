'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36 bg-[#0a0a0f]">
      {/* Full bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1800&q=80"
          alt="Banaras CTA"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/95 to-[#0a0a0f]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {/* Pre-heading */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">
            Begin Your Journey
          </span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6">
          Banaras is
          <span className="gradient-text"> Waiting</span>
          <br />
          <span className="text-slate-300 font-light italic text-4xl sm:text-5xl lg:text-6xl">
            For You.
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Every journey to Banaras is different. Every evening on the Ganga is a new story. Let us craft yours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tours" className="btn-primary flex items-center justify-center gap-2 text-base px-8 py-4">
            Explore Packages <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20plan%20a%20trip%20to%20Banaras%21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center justify-center gap-2 text-base px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          {['Free Cancellation', 'Instant Confirmation', '24/7 Support', 'Best Price Guarantee'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
