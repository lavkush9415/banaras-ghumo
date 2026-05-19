import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us — Banaras Ghumo',
  description: 'The story behind Banaras Ghumo — born from a love of the eternal city.',
};

const timeline = [
  { year: '2016', title: 'The Beginning', desc: 'Two Banarasi brothers with a single boat and a vision — to show the world their city\'s soul.' },
  { year: '2018', title: 'First 1,000 Travelers', desc: 'Grew from boat rides to curated cultural experiences. Word of mouth made us who we are.' },
  { year: '2020', title: 'Survived & Grew Stronger', desc: 'The pandemic tested us. We pivoted to private, intimate experiences and emerged stronger.' },
  { year: '2022', title: 'Award Recognition', desc: 'Recognized by Times Travel as "Most Innovative Tourism Startup" in Uttar Pradesh.' },
  { year: '2024', title: 'Expanded Portfolio', desc: 'Launched luxury packages, hotel partnerships, and private heritage trails. 10,000+ travelers served.' },
  { year: '2025', title: 'Going Global', desc: 'International partnerships, multilingual guides, and a digital-first approach to cultural tourism.' },
];

const team = [
  { name: 'Lavkush Yadav', role: 'Co-Founder & CEO', expertise: 'Cultural Expert & Storyteller', avatar: 'LY' },
  { name: 'Gaurav Singh', role: 'Co-Founder & Head of Operations', expertise: 'Logistics & Local Networks', avatar: 'GS' },
  { name: 'Chanchal Yadav', role: 'Head of Experiences', expertise: 'Curating Unique Journeys', avatar: 'CY' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0f] pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1800&q=80"
            alt="Banaras Ghats"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] to-[#0a0a0f]/70" />
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Born in
              <span className="gradient-text"> Banaras.</span>
              <br />
              <span className="text-slate-300 font-light italic">Made for the World.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              We didn't set out to build a travel company. We set out to share the city we love — and never stopped.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0d1117] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Story sections */}
      <section className="section-padding bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            <div>
              <SectionHeader
                badge="The Philosophy"
                title="Banaras Isn't a"
                titleHighlight="Destination"
                description="It's a state of mind. The oldest living city on Earth doesn't give itself up easily. You need to know where to look, who to ask, and when to simply sit by the river and let it find you."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {['We believe slow travel is the only real travel.', 'We believe every person deserves a personal Banaras.', 'We believe the best guide is a local friend.'].map((belief) => (
                  <div key={belief} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </span>
                    <p className="text-slate-300 text-sm">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden img-zoom-container">
              <Image
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80"
                alt="Temple Banaras"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>

          {/* Timeline */}
          <SectionHeader
            badge="Journey"
            title="Our"
            titleHighlight="Timeline"
            className="mb-16"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 lg:gap-12 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } pl-12 lg:pl-0`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-[#0a0a0f] flex items-center justify-center z-10 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className={`lg:w-1/2 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <span className="text-cyan-400 font-mono text-sm font-bold">{item.year}</span>
                    <h3 className="font-display font-bold text-white text-xl mt-1 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Team"
            title="The People"
            titleHighlight="Behind It"
            description="Banarasis at heart. Travel professionals by craft."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card-hover rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  {member.avatar}
                </div>
                <h3 className="font-display font-bold text-white text-lg">{member.name}</h3>
                <p className="text-cyan-400 text-xs font-semibold mt-1 mb-2">{member.role}</p>
                <p className="text-slate-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0f] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Ready to Experience <span className="gradient-text">Our Banaras?</span>
          </h2>
          <p className="text-slate-400 mb-8">Let us show you the city we've called home for generations.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Planning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
