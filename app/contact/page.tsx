'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Twitter, Facebook, Send, CheckCircle, User } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 5000);
  };

  const interests = [
    'Tour Package', 'Boat Ride', 'Temple Tour', 'Hotel Booking',
    'Cab Service', 'Airport Pickup', 'Custom Itinerary',
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-[#0a0a0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader
            badge="Contact Us"
            title="Let's Plan Your"
            titleHighlight="Banaras Story"
            description="Reach out and our travel expert will get back to you within 15 minutes during business hours."
          />
        </div>
      </section>

      {/* Main contact section */}
      <section className="pb-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              {[
                { icon: Phone, title: 'Call Us', lines: ['+91 7607956595', '+91 7607956595'], link: 'tel:+917607956595' },
                { icon: Mail, title: 'Email', lines: ['hello@banarasghumo.in', 'bookings@banarasghumo.in'], link: 'mailto:hello@banarasghumo.in' },
                { icon: MapPin, title: 'Visit Us', lines: ['D-14, Assi Ghat Area', 'Varanasi, UP — 221005'], link: '#map' },
                { icon: Clock, title: 'Hours', lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'], link: null },
              ].map(({ icon: Icon, title, lines, link }) => (
                <div key={title} className="glass-card-hover rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-slate-400 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/917607956595?text=Hi%2C%20I%20want%20to%20plan%20a%20trip%20to%20Banaras!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">WhatsApp Us</p>
                  <p className="text-slate-400 text-xs">Fastest response — usually under 5 min</p>
                </div>
                <Send className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social links */}
              <div className="glass-card rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-4">Follow Our Journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', href: '#' },
                    { icon: Twitter, label: 'Twitter', href: '#' },
                    { icon: Facebook, label: 'Facebook', href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex-1 flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/8 hover:border-cyan-400/30 hover:text-cyan-400 text-slate-400 transition-all duration-300 text-xs"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8 border border-white/10">
                {!submitted ? (
                  <>
                    <h2 className="font-display font-bold text-2xl text-white mb-2">Send Us a Message</h2>
                    <p className="text-slate-400 text-sm mb-8">
                      Fill out the form and we'll create a personalized itinerary for you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="luxury-input pl-10 text-sm"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            className="luxury-input pl-10 text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="luxury-input pl-10 text-sm"
                        />
                      </div>

                      <select
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="luxury-input text-sm appearance-none cursor-pointer"
                        style={{ background: 'rgba(255,255,255,0.05)' }}
                      >
                        <option value="" style={{ background: '#111827' }}>What are you interested in?</option>
                        {interests.map((i) => (
                          <option key={i} value={i} style={{ background: '#111827' }}>{i}</option>
                        ))}
                      </select>

                      <textarea
                        placeholder="Tell us about your dream Banaras experience..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="luxury-input text-sm resize-none"
                      />

                      <button type="submit" className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. Our travel expert will contact you within 15 minutes during business hours.
                    </p>
                  </div>
                )}
              </div>

              {/* Google Maps embed */}
              <div id="map" className="mt-6 rounded-2xl overflow-hidden border border-white/8 h-56">
                <iframe
                  title="Banaras Ghumo Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57576.48984897527!2d82.93415105!3d25.31670825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de3a5e07f7b%3A0x2d7c15ea6dbd5e0!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
