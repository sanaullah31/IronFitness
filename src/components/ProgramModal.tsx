import React, { useEffect } from 'react';
import { X, Clock, Zap, CheckCircle2, User, Calendar, ArrowRight } from 'lucide-react';
import { FitnessProgram } from '../types';

interface ProgramModalProps {
  program: FitnessProgram | null;
  onClose: () => void;
  onEnroll: (programName: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onEnroll }) => {
  useEffect(() => {
    if (program) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [program]);

  if (!program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-neutral-800 rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-[#FF3030] text-neutral-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-neutral-900">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF3030]">
              {program.tagline}
            </span>
            <h3 className="font-display text-2xl sm:text-4xl uppercase text-white mt-0.5">
              {program.name}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-neutral-900/80 rounded-lg border border-neutral-800 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF3030]" />
              <span>{program.duration} session</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FF3030]" />
              <span>{program.intensity}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <User className="w-4 h-4 text-[#FF3030]" />
              <span className="truncate">{program.coach}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase text-neutral-400 mb-1 tracking-wider">
              Program Overview
            </h4>
            <p className="text-sm text-neutral-200 leading-relaxed">
              {program.fullDescription}
            </p>
          </div>

          {/* Target Audience */}
          <div>
            <h4 className="text-xs font-bold uppercase text-neutral-400 mb-1 tracking-wider">
              Who This Is For
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              {program.targetAudience}
            </p>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-xs font-bold uppercase text-neutral-400 mb-1 tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FF3030]" />
              <span>Weekly Class Schedule</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-mono">
              {program.schedule}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase text-neutral-400 mb-2.5 tracking-wider">
              Key Program Outcomes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3030] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Programs
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(program.name);
              }}
              className="px-6 py-3 bg-[#FF3030] hover:bg-red-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md glow-red flex items-center gap-2 cursor-pointer"
            >
              <span>Enroll In This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
