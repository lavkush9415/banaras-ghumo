'use client';

import Link from 'next/link';
import { Compass, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data';

const footerLinks = {
  explore: [
    { href: '/tours', label: 'Tour Packages' },
    { href: '/hotels', label: 'Luxury Hotels' },
    { href: '/services', label: 'Our Services' },
    { href: '/about', label: 'Our Story' },
    { href: '/contact', label: 'Contact Us' },
  ],
  experiences: [
    { href: '/tours', label: 'Sunrise Boat Ride' },
    { href: '/tours', label: 'Night Ganga Aarti' },
    { href: '/tours', label: 'Temple Trails' },
    { href: '/tours', label: 'Street Food Walks' },
    { href: '/tours', label: 'Photography Tours' },
  ],
};

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Get Banaras in Your Inbox
              </h3>
              <p className="text-slate-400 text-sm">
                Exclusive deals, hidden spots, and travel stories — curated weekly.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="luxury-input flex-1 lg:w-64 text-sm"
              />
              <button className="btn-primary flex items-center gap-2 text-sm whitespace-nowrap px-5 py-3">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl">Banaras</span>
                <span className="font-display font-bold text-xl gradient-text ml-1">Ghumo</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              See Banaras Beyond The Ordinary. Premium travel experiences crafted for curious souls who seek depth over destinations.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Experiences</h4>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Shivala Ghat<br />Varanasi, UP — 221001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+917607956595" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  +91 76079 56595
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:hello@banarasghumo.in" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  hello@banarasghumo.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Banaras Ghumo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
