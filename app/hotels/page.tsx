'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Users } from 'lucide-react';
import { hotels } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';



export default function HotelsPage() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Luxury Hotels"
            title="Stay in"
            titleHighlight="Style"
            description="Curated luxury and boutique hotels — each handpicked for comfort, location, and that indescribable Banaras atmosphere."
          />
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111827] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col cursor-pointer"
                onClick={() => setSelectedHotel(selectedHotel === hotel.id ? null : hotel.id)}
              >
                {/* Image */}
                <div className="relative h-56 img-zoom-container overflow-hidden flex-shrink-0">
                  <Image
                    src={hotel.image}
                    alt={`Hotel in ${hotel.location}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] font-bold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
                    {hotel.badge}
                  </div>

                  {/* Rating overlay */}
                  <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-xl border border-white/15">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                      <span className="text-white text-xs font-bold">{hotel.rating}</span>
                    </div>
                    <p className="text-slate-400 text-[9px]">{hotel.reviewCount} reviews</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{hotel.location}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {hotel.amenities.slice(0, 5).map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-[10px]"
                      >
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-500 text-[10px]">
                        +{hotel.amenities.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Room types */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      selectedHotel === hotel.id ? 'max-h-40 mb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="space-y-2">
                      {hotel.roomTypes.map((room) => (
                        <div
                          key={room.type}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/8"
                        >
                          <div>
                            <p className="text-white text-xs font-medium">{room.type}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Users className="w-3 h-3 text-slate-500" />
                              <span className="text-slate-500 text-xs">{room.guests} Guests</span>
                            </div>
                          </div>
                          <span className="text-cyan-400 text-sm font-bold">{room.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/8 mt-auto">
                    <div>
                      <span className="text-slate-400 text-xs">From</span>
                      <div>
                        <span className="text-cyan-400 font-bold text-xl">{hotel.pricePerNight}</span>
                        <span className="text-slate-500 text-xs ml-1">/ night</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-2 rounded-lg text-xs bg-white/5 border border-white/10 text-slate-300 hover:border-white/20 transition-colors"
                      >
                        {selectedHotel === hotel.id ? 'Hide Rooms' : 'View Rooms'}
                      </button>
                      <Link href="/contact" className="btn-primary text-xs px-4 py-2" onClick={(e) => e.stopPropagation()}>
                        Book
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
