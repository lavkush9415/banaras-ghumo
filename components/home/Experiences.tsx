'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { experiences } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Experiences() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d1117]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badge="Curated Experiences"
            title="What Banaras"
            titleHighlight="Offers You"
            description="Each experience is a doorway into the ancient soul of the city — meticulously curated for those who seek depth."
            align="left"
          />
          <Link
            href="/services"
            className="btn-ghost flex items-center gap-2 text-sm whitespace-nowrap"
          >
            View All Experiences <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 glass-card-hover cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 0 ? 'lg:row-span-1' : ''}`}
            >
              {/* Image */}
              <div className="relative h-52 img-zoom-container">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                    {exp.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xl">
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {exp.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold text-sm">{exp.price}</span>
                    <span className="text-slate-600 text-xs">/ person</span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-cyan-500/5 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
