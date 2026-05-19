'use client';

import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="Testimonials"
          title="What Travelers"
          titleHighlight="Say"
          description="Real stories from real travelers who experienced Banaras with us."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`group glass-card-hover rounded-2xl p-7 cursor-default ${
                i === 0 ? 'md:row-span-1' : ''
              }`}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs truncate">{t.location}</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-medium whitespace-nowrap">
                  {t.trip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
