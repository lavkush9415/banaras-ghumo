'use client';

import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Gallery() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1117]" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="Gallery"
          title="Through the"
          titleHighlight="Lens"
          description="Banaras captured in its most cinematic moments — raw, beautiful, eternal."
          className="mb-16"
        />

        {/* Pinterest/Bento Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridAutoRows: '200px',
          }}
        >
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`group relative rounded-xl overflow-hidden border border-white/8 cursor-pointer img-zoom-container ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-sm font-medium">{img.alt}</p>
                <p className="text-slate-400 text-xs mt-0.5">Varanasi, India</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
