import React, { useState } from 'react';
import { FITNESS_PROGRAMS } from '../data/gymData';
import { FitnessProgram } from '../types';
import { Clock, Zap, ArrowUpRight, Dumbbell } from 'lucide-react';

interface ProgramsProps {
  onSelectProgram: (program: FitnessProgram) => void;
  onEnrollProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram, onEnrollProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength & Hypertrophy' },
    { id: 'cardio', label: 'Fat Loss & Cardio' },
    { id: 'functional', label: 'Functional & Athletic' },
    { id: 'personal', label: 'Personal & Group' }
  ];

  const filteredPrograms = FITNESS_PROGRAMS.filter((prog) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'strength') return prog.category === 'strength';
    if (activeCategory === 'cardio') return prog.category === 'cardio';
    if (activeCategory === 'functional') return prog.category === 'functional';
    if (activeCategory === 'personal') return prog.category === 'personal' || prog.category === 'group';
    return true;
  });

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
              Bespoke Coaching &amp; Training
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
              ENGINEERED FITNESS PROGRAMS
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
              Scientifically structured training splits designed to maximize raw force, burn body fat, and build athletic endurance.
            </p>
          </div>

          {/* Interactive Category Filter - Clean segmented button group */}
          <div className="flex items-center gap-1.5 p-1 bg-[#171717] rounded-lg border border-neutral-800 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF3030] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group bg-[#141414] rounded-xl overflow-hidden border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Image Container with Fallback and Scrim */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image load delay
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                  
                  {/* Clean unboxed metadata chip */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    <Zap className="w-3 h-3 text-[#FF3030]" />
                    <span>{program.intensity}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{program.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{program.coach}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF3030] transition-colors leading-snug">
                    {program.name}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {program.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 border-t border-neutral-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProgram(program)}
                  className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 group/btn cursor-pointer py-1"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3030] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onEnrollProgram(program.name)}
                  className="px-3 py-1.5 text-xs font-bold uppercase bg-[#FF3030]/15 hover:bg-[#FF3030] text-[#FF3030] hover:text-white rounded border border-[#FF3030]/30 hover:border-[#FF3030] transition-all cursor-pointer"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Programming */}
        <div className="mt-12 p-6 sm:p-8 bg-[#161616] border border-neutral-800 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#FF3030]/15 border border-[#FF3030]/30 flex items-center justify-center shrink-0">
              <Dumbbell className="w-6 h-6 text-[#FF3030]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need a Custom Workout &amp; Nutrition Blueprint?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Our Head Performance Coaches build 100% tailored programs around your unique goals and schedule.
              </p>
            </div>
          </div>
          <button
            onClick={() => onEnrollProgram('Custom Training Blueprint')}
            className="w-full md:w-auto px-6 py-3 bg-[#FF3030] hover:bg-red-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md whitespace-nowrap shadow-md cursor-pointer"
          >
            Request Custom Plan
          </button>
        </div>

      </div>
    </section>
  );
};
