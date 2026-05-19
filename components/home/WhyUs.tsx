'use client';

import { Shield, Users, Clock, Star, Heart, Award } from 'lucide-react';
import { stats, whyChooseUs } from '@/lib/data';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeader from '@/components/ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Users, Clock, Star, Heart, Award,
};

export default function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#0a0a0f]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 py-12 px-10 rounded-2xl glass-card border border-white/8">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Header */}
        <SectionHeader
          badge="Why Choose Us"
          title="Travel With"
          titleHighlight="Confidence"
          description="We're not just a travel agency. We're your companions in experiencing Banaras the way it deserves to be experienced."
          className="mb-16"
        />

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <div
                key={item.title}
                className="group glass-card-hover rounded-xl p-6 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
