'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1117]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHeader
          badge="FAQ"
          title="Common"
          titleHighlight="Questions"
          description="Everything you need to know before your Banaras journey."
          className="mb-16"
        />

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-xl border transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? 'border-cyan-500/25 shadow-lg shadow-cyan-500/5'
                    : 'border-white/8 hover:border-white/15'
                }`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <div className="flex items-center justify-between p-5">
                  <h3
                    className={`font-medium text-sm lg:text-base pr-4 transition-colors duration-300 ${
                      isOpen ? 'text-cyan-300' : 'text-white'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-cyan-500/20 border border-cyan-500/30 rotate-180'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen ? 'text-cyan-400' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[200px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5">
                    <div className="h-px bg-white/5 mb-4" />
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
