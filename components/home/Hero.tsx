'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/3 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300 text-xs font-medium">Now Accepting Bookings for 2025</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Heading */}
            <div>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight">
                <span className="text-white block">See Banaras</span>
                <span className="gradient-text block mt-1">Beyond</span>
                <span className="text-slate-300 font-light italic block mt-1 text-4xl sm:text-5xl lg:text-6xl">
                  The Ordinary
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Where ancient rivers meet cinematic skies. Discover the mystical soul of Banaras through curated luxury experiences crafted for modern travelers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/tours" className="btn-primary flex items-center gap-2 text-base px-6 py-3.5">
                Explore Packages <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-ghost flex items-center gap-2 text-base px-6 py-3.5">
                <Play className="w-4 h-4" /> Our Story
              </Link>
            </div>

            {/* Mini Stats Row */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { icon: Users, value: '12K+', label: 'Travelers' },
                { icon: Star, value: '4.9', label: 'Rating' },
                { icon: Clock, value: '8 Yrs', label: 'Experience' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-white font-bold text-sm">{value}</div>
                    <div className="text-slate-500 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Cinematic Image Collage */}
          <div className="relative w-full h-[500px] lg:h-[700px]">
            {/* Main large image */}
            <div className="absolute right-0 top-0 w-[75%] h-[65%] rounded-2xl overflow-hidden img-zoom-container border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&q=85"
                alt="Ganga Aarti Varanasi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-xl">
                <p className="text-white text-xs font-semibold">🪔 Ganga Aarti — Dashashwamedh Ghat</p>
              </div>
            </div>

            {/* Bottom left image */}
            <div className="absolute left-0 bottom-0 w-[55%] h-[45%] rounded-2xl overflow-hidden img-zoom-container border border-white/10 shadow-xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80"
                alt="Sunrise Boat Ride Varanasi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 glass-card px-3 py-1.5 rounded-lg">
                <p className="text-white text-xs font-medium">🌅 Sunrise Boat Ride</p>
              </div>
            </div>

            {/* Floating glassmorphism card — Rating */}
            <div className="absolute top-[58%] right-[72%] glass-card rounded-xl px-4 py-3 border border-white/10 shadow-lg float-animation z-10">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="text-white text-xs font-bold">4.9/5 Stars</p>
              <p className="text-slate-400 text-[10px]">1,200+ reviews</p>
            </div>

            {/* Floating glassmorphism card — Next tour */}
            <div className="absolute top-8 left-4 glass-card rounded-xl px-4 py-3 border border-white/10 shadow-lg float-delayed z-10">
              <p className="text-cyan-400 text-[10px] font-semibold uppercase tracking-widest mb-1">Next Tour</p>
              <p className="text-white text-xs font-bold">Tonight, 7:00 PM</p>
              <p className="text-slate-400 text-[10px]">Night Aarti Experience</p>
            </div>

            {/* Decorative glow dot grid */}
            <div className="absolute bottom-12 right-4 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-cyan-400" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-slate-400 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
