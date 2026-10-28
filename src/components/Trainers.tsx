import React from 'react';
import { TRAINERS } from '../data/gymData';
import { Award, Calendar, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Trainer } from '../types';

interface TrainersProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#111111] border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
              Masters of the Craft
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
              EXPERT COACHING STAFF
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
              Our coaches aren't just rep counters. They hold accredited sports science degrees, compete at elite levels, and specialize in human biomechanics.
            </p>
          </div>
          <div className="text-xs text-neutral-400 font-mono">
            *Certified coaches available for 1-on-1 and small group training
          </div>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#171717] rounded-xl overflow-hidden border border-neutral-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div>
                {/* Trainer Photo with Scrim */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/20" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-neutral-200 border border-neutral-700/60 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#FF3030]" />
                    <span>{trainer.experienceYears}+ Yrs Exp</span>
                  </div>

                  {/* Social links */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <a
                      href={trainer.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-black/60 hover:bg-[#FF3030] text-neutral-300 hover:text-white transition-colors"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={trainer.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-black/60 hover:bg-[#FF3030] text-neutral-300 hover:text-white transition-colors"
                      aria-label={`${trainer.name} LinkedIn`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <div className="text-xs font-semibold text-[#FF3030] uppercase tracking-wider mb-1">
                    {trainer.specialization}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF3030] transition-colors">
                    {trainer.name}
                  </h3>
                  
                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Certifications unboxed list */}
                  <div className="mt-4 pt-4 border-t border-neutral-800/80 space-y-1.5">
                    <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#FF3030]" />
                      <span>Accreditations</span>
                    </div>
                    <div className="text-xs text-neutral-400 leading-tight">
                      {trainer.certifications.join(' · ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectTrainer(trainer)}
                  className="w-full py-2.5 px-3 bg-neutral-800 hover:bg-[#FF3030] text-white hover:text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
