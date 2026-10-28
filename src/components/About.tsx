import React from 'react';
import { ShieldCheck, Dumbbell, Trophy, Activity, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, GYM_IMAGES } from '../data/gymData';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const pillars = [
    {
      icon: Dumbbell,
      title: "Commercial Olympic Iron",
      desc: "Competition Eleiko barbells, calibrated bumper plates, and precision dumbbell rows up to 150 lbs."
    },
    {
      icon: Trophy,
      title: "Elite Certified Coaches",
      desc: "Every trainer is CSCS or NASM certified with proven athletic backgrounds and scientific programming."
    },
    {
      icon: Activity,
      title: "Science-Driven Protocols",
      desc: "InBody body scans, periodized strength phases, and heart-rate zone conditioning with zero bro-science."
    },
    {
      icon: ShieldCheck,
      title: "Sanitized & Maintained Daily",
      desc: "Medical-grade air purification, spotless locker rooms, and equipment maintained like clockwork."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#111111] border-y border-neutral-800/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src={GYM_IMAGES.facility}
                alt="IronFit Gym & Fitness Club premium training facility"
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0B0B0B]/90 backdrop-blur-md rounded-lg border border-neutral-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#FF3030]">Facility Standard</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">18,000 Sq Ft Athletic Compound</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neutral-400">Open 7 Days</div>
                    <div className="text-sm font-semibold text-white">5:00 AM – 11:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subtle glow backdrop */}
            <div className="absolute -inset-4 bg-red-600/10 rounded-2xl blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-3">
              About IronFit Club
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-white leading-tight">
              {BUSINESS_INFO.aboutHeadline}
            </h2>

            {/* Philosophy Prose */}
            <p className="mt-5 text-base text-neutral-300 leading-relaxed">
              At IronFit, we believe fitness is not a seasonal resolution—it is a lifelong pursuit of strength, discipline, and personal mastery. We stripped away overcrowded machines, broken weights, and gimmick fitness trends to build a sanctuary for those who respect the grind.
            </p>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Whether you are an absolute beginner stepping up to a barbell for the first time or a seasoned competitor dialing in your compound totals, our facility provides the exact equipment, guidance, and camaraderie you need to smash your plateaus.
            </p>

            {/* 4 Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#171717] border border-neutral-800/80 hover:border-red-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-[#FF3030]" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                    </div>
                    <p className="mt-2 text-xs text-neutral-400 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Checklist & CTA */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5 text-xs text-neutral-300">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3030]" />
                  <span>Free initial movement screening & body scan</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3030]" />
                  <span>No pushy sales reps or hidden initiation fees</span>
                </span>
              </div>
              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3 bg-[#FF3030] hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 shadow-md shadow-red-600/20"
              >
                Experience IronFit
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
