'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, ArrowRight, Filter } from 'lucide-react';
import { tourPackages } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

const categories = ['All', 'Weekend', 'Extended', 'Specialty', 'Premium', 'Family'];

const badgeColors: Record<string, string> = {
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  green: 'bg-green-500/20 text-green-300 border-green-500/30',
  gold: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  teal: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
};

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? tourPackages
    : tourPackages.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Tour Packages"
            title="Find Your"
            titleHighlight="Perfect Journey"
            description="Six handcrafted packages, each a different lens through which to discover Banaras."
          />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'bg-white/5 text-slate-400 border border-white/8 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400">No packages found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111827] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 img-zoom-container overflow-hidden flex-shrink-0">
                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/20 to-transparent" />

                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${badgeColors[pkg.badgeColor] || badgeColors.cyan}`}>
                      {pkg.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">{pkg.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                        <span className="text-white text-xs font-semibold">{pkg.rating}</span>
                        <span className="text-slate-500 text-xs">({pkg.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-white text-xl mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                      {pkg.highlights.map((h) => (
                        <span key={h} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-[10px]">
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/8">
                      <div>
                        <span className="text-cyan-400 font-bold text-xl">{pkg.price}</span>
                        <span className="text-slate-500 text-xs ml-1">/ person</span>
                        <div className="text-slate-500 text-xs line-through">{pkg.originalPrice}</div>
                      </div>
                      <Link href="/contact" className="btn-primary text-xs px-4 py-2">
                        Book Now
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
