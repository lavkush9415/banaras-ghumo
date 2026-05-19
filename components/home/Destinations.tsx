'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinations } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Destinations() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="Explore"
          title="Iconic"
          titleHighlight="Banaras"
          description="From sacred ghats to timeless temples — these are the places that define the spirit of the eternal city."
          className="mb-16"
        />

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto lg:h-[620px]">
          {/* Large primary card */}
          <div className="group relative lg:col-span-7 rounded-2xl overflow-hidden cursor-pointer border border-white/8 img-zoom-container h-72 lg:h-full">
            <Image
              src={destinations[0].image}
              alt={destinations[0].name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-widest text-white">
              {destinations[0].category}
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400 text-xs font-medium">Varanasi, India</span>
              </div>
              <h3 className="font-display font-bold text-white text-2xl lg:text-3xl mb-2">
                {destinations[0].name}
              </h3>
              <p className="text-slate-300 text-sm mb-4 opacity-80">{destinations[0].description}</p>
              <Link href="/tours" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors group/link">
                Explore <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right 2-row column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 h-auto lg:h-full">
            {destinations.slice(1).map((dest) => (
              <div
                key={dest.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/8 img-zoom-container h-48 lg:flex-1"
                style={{ minHeight: '180px' }}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-[9px] font-semibold uppercase tracking-widest text-white">
                  {dest.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors duration-300">
                    {dest.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 line-clamp-1">{dest.description}</p>
                </div>

                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/tours" className="btn-ghost inline-flex items-center gap-2 text-sm">
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
