'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, ArrowRight } from 'lucide-react';
import { tourPackages } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

const badgeColors: Record<string, string> = {
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  green: 'bg-green-500/20 text-green-300 border-green-500/30',
  gold: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  teal: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
};

export default function TourPackagesSection() {
  const featured = tourPackages.slice(0, 3);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1117]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badge="Tour Packages"
            title="Curated"
            titleHighlight="Journeys"
            description="Hand-crafted itineraries for every kind of traveler. Choose your Banaras story."
            align="left"
          />
          <Link href="/tours" className="btn-ghost flex items-center gap-2 text-sm whitespace-nowrap">
            All Packages <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111827] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 img-zoom-container overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/20 to-transparent" />

                {/* Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${badgeColors[pkg.badgeColor] || badgeColors.cyan}`}>
                  {pkg.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-[10px]"
                    >
                      {h}
                    </span>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-500 text-[10px]">
                      +{pkg.highlights.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div>
                    <span className="text-cyan-400 font-bold text-xl">{pkg.price}</span>
                    <span className="text-slate-500 text-xs ml-1">/ person</span>
                    <div className="text-slate-500 text-xs line-through">{pkg.originalPrice}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary text-xs px-4 py-2"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Animated bottom glow border */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
