import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#111111] border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
            Proven Results &amp; Member Voices
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
            TRANSFORMATION STORIES
          </h2>
          <p className="mt-3 text-neutral-400 text-xs sm:text-sm">
            Sample illustrative athlete milestones from our active community. Real members, quantified progress.
          </p>
        </div>

        {/* Testimonials 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-xl bg-[#171717] border border-neutral-800 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF3030] text-[#FF3030]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700 group-hover:text-[#FF3030]/60 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Milestone */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF3030] mb-3">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{testimonial.achievement}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-xs text-white">
                    {testimonial.avatarSeed}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-neutral-400">{testimonial.role} · {testimonial.goal}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Note */}
        <div className="mt-12 text-center text-[11px] text-neutral-400">
          *Individual results vary based on starting composition, dietary adherence, and workout frequency.
        </div>

      </div>
    </section>
  );
};
