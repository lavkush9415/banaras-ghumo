'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle, Phone, User, Sparkles } from 'lucide-react';

const interests = [
  'Sunrise Boat Ride',
  'Night Ganga Aarti',
  'Temple Trails',
  'Street Food Walk',
  'Heritage Tour',
  'Photography Tour',
  'Luxury Package',
  'Custom Itinerary',
];

export default function CallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('callbackModalSeen');
      if (!seen) setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('callbackModalSeen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
      setForm({ name: '', phone: '', interest: '' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className="glass-card rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl shadow-cyan-500/10"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
                      Free Consultation
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Plan Your Perfect Banaras Trip
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Leave your details. We'll call back within 15 minutes.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300 flex-shrink-0 ml-4"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Gradient divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-6" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="luxury-input pl-10 text-sm"
                  />
                </div>

                <div>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    required
                    className="luxury-input text-sm appearance-none cursor-pointer"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <option value="" disabled style={{ background: '#111827' }}>
                      Travel Interest
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i} style={{ background: '#111827' }}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full py-3.5 text-sm mt-2">
                  Request Callback →
                </button>
              </form>

              <p className="text-slate-500 text-xs text-center mt-4">
                No spam. We'll only call once to understand your requirements.
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Request Received!
              </h3>
              <p className="text-slate-400 text-sm">
                Our travel expert will call you within 15 minutes. Get ready to explore Banaras!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
