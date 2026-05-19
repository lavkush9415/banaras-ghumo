import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Map, Car, Ship, Landmark, Building, Plane, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Services — Banaras Ghumo',
  description: 'Premium travel services in Varanasi — tours, cabs, boat rides, temple tours, hotel booking, airport pickup.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Map, Car, Ship, Landmark, Building, Plane,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="What We Offer"
            title="Premium Travel"
            titleHighlight="Services"
            description="Every service is crafted with precision, care, and a deep love for the city we call home."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Map;
              const isLarge = i === 0 || i === 1;
              return (
                <div
                  key={service.id}
                  className={`group relative rounded-2xl overflow-hidden border border-white/8 glass-card-hover cursor-pointer ${
                    isLarge ? 'lg:min-h-[420px]' : 'lg:min-h-[320px]'
                  }`}
                >
                  {/* Background Image */}
                  <div className="relative h-48 lg:h-56 img-zoom-container overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-xl glass-card border border-white/15 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-white text-xl mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span className="text-slate-400 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors group/link">
                      Enquire Now <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
