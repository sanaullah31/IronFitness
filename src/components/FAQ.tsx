import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/gymData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#0B0B0B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
            Got Questions?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-neutral-400 text-xs sm:text-sm">
            Everything you need to know about joining, training, and equipment at IronFit.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-lg border border-neutral-800 bg-[#141414] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-900/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF3030] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 bg-neutral-950/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
