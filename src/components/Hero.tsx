import React from 'react';
import { ArrowRight, ChevronDown, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExplorePrograms }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with High-Impact Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_gym_workout_1793170255787.jpg"
          alt="Athlete performing heavy deadlift at IronFit Gym"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-in motion-safe:fade-in duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Multi-tier gradient overlay ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/85" />
        <div className="absolute inset-0 bg-radial-[at_top_right] from-red-600/15 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20 flex flex-col items-center text-center">
        {/* Subtle Brand Kicker - Clean unboxed text */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <Flame className="w-3.5 h-3.5 text-[#FF3030] animate-pulse" />
          <span>{BUSINESS_INFO.tagline}</span>
        </div>

        {/* Main Display Headline in Bebas Neue */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl leading-[0.95] uppercase drop-shadow-md">
          YOUR BODY. YOUR LIMITS.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3030] via-red-500 to-orange-500">
            YOUR LEGACY.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
          {BUSINESS_INFO.heroSubheadline}
        </p>

        {/* Primary Call to Actions */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#FF3030] hover:bg-red-600 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-md glow-red hover:glow-red-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExplorePrograms}
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white hover:text-white font-semibold text-sm sm:text-base uppercase tracking-wider rounded-md border border-neutral-700 hover:border-neutral-500 transition-all duration-200 cursor-pointer"
          >
            EXPLORE PROGRAMS
          </button>
        </div>

        {/* 3 Fitness Statistics - Clean unboxed typographic layout with tabular numerals */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="font-display text-4xl sm:text-5xl text-white tracking-wider tabular-nums group-hover:text-[#FF3030] transition-colors">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-neutral-200 uppercase tracking-wide mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-500 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onExplorePrograms}
          className="hidden md:flex flex-col items-center gap-1.5 text-neutral-500 hover:text-white transition-colors mt-12 cursor-pointer"
          aria-label="Scroll down to programs"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#FF3030]" />
        </button>
      </div>
    </section>
  );
};
