import React from 'react';
import { 
  Cpu, 
  Award, 
  CalendarCheck, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenJoinModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenJoinModal }) => {
  const benefits = [
    {
      icon: Cpu,
      title: "Modern Fitness Equipment",
      description: "State-of-the-art selectorized machinery, Eleiko Olympic weightlifting racks, calibrated bumper plates, and cardio telemetry consoles."
    },
    {
      icon: Award,
      title: "Certified Personal Trainers",
      description: "Elite CSCS, NASM, and USAW coaches who understand biomechanics, injury prevention, and rapid athletic conditioning."
    },
    {
      icon: CalendarCheck,
      title: "Personalized Workout Plans",
      description: "Bespoke progression maps tailored to your exact body composition, metabolic rate, and personal strength goals."
    },
    {
      icon: HeartHandshake,
      title: "Beginner-Friendly Environment",
      description: "An inclusive, high-support community where every novice receives a complimentary orientation, form guidance, and zero judgment."
    },
    {
      icon: Sparkles,
      title: "Flexible Membership Options",
      description: "No lock-in traps or hidden maintenance dues. Month-to-month flexibility with pause options and a 7-day money-back guarantee."
    },
    {
      icon: ShieldCheck,
      title: "Clean & Well-Maintained Facilities",
      description: "Continuous sanitation cycles, HEPA medical-grade ventilation, spotless executive rain showers, and dry cedar saunas."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#111111] border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
            The IronFit Difference
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
            WHY TRAIN AT IRONFIT?
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            We built IronFit to be the definitive training standard. Here is why over 500 athletes and daily lifters trust us with their physical transformation.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-xl bg-[#171717] border border-neutral-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FF3030]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#FF3030] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Feature Strip */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-neutral-900 via-[#181818] to-neutral-900 border border-neutral-800 p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF3030]">
              Ready to feel the difference?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mt-1">
              CLAIM YOUR FREE 1-DAY ALL-ACCESS VIP PASS
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-2xl">
              Experience our Olympic platforms, infrared sauna, and group coaching with zero commitments. Bring your training shoes; we’ll handle the rest.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF3030]" /> Free equipment tour
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF3030]" /> Full sauna &amp; shower access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#FF3030]" /> Body composition analysis
              </span>
            </div>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="px-8 py-4 bg-[#FF3030] hover:bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded-md glow-red hover:glow-red-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            Claim Free Day Pass
          </button>
        </div>

      </div>
    </section>
  );
};
