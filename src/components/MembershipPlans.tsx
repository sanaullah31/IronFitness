import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, X, Shield, Sparkles, HelpCircle } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="py-20 lg:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
            Transparent Pricing · Zero Hidden Fees
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
            MEMBERSHIP TIERS
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Choose the tier that matches your dedication level. All memberships include full facility orientation and access to our member app.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#171717] rounded-lg border border-neutral-800">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-md transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-md transition-all flex items-center gap-2 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#FF3030] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-mono">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPriceMonthly : plan.monthlyPrice;
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-[#161616] border-2 border-[#FF3030] shadow-2xl shadow-red-950/40 lg:-translate-y-2'
                    : 'bg-[#121212] border border-neutral-800 hover:border-neutral-700'
                } p-7 sm:p-8`}
              >
                {/* Recommended Badge for PRO Plan */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF3030] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>RECOMMENDED BY ATHLETES</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400 uppercase">
                      {billingCycle === 'annual' ? 'Billed annually' : 'Monthly rolling'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-neutral-400 leading-normal min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Block with Tabular Numerals */}
                  <div className="mt-6 pb-6 border-b border-neutral-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-neutral-400">$</span>
                      <span className="font-display text-5xl sm:text-6xl text-white tracking-tight tabular-nums font-bold">
                        {price}
                      </span>
                      <span className="text-neutral-400 text-sm">/ month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-[11px] text-[#FF3030] mt-1 font-medium">
                        Save ${ (plan.monthlyPrice - plan.annualPriceMonthly) * 12 } per year
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3.5">
                    <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                      Included in {plan.name}:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-red-500/20 text-[#FF3030] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 border-t border-neutral-800/60 mt-3">
                        {plan.notIncluded.map((item, nIdx) => (
                          <div key={nIdx} className="flex items-start gap-2.5 text-xs text-neutral-500 line-through">
                            <X className="w-3.5 h-3.5 text-neutral-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Plan Terms & CTA */}
                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 px-4 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isPro
                        ? 'bg-[#FF3030] hover:bg-red-600 text-white glow-red hover:glow-red-lg'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    Choose {plan.name} Plan
                  </button>

                  <div className="mt-3.5 flex items-start gap-1.5 text-[11px] text-neutral-400">
                    <Shield className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{plan.terms}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 text-center text-xs text-neutral-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#FF3030]" />
          <span>
            Questions about corporate plans or student discounts?{' '}
            <a href="#contact" className="text-[#FF3030] underline hover:text-white transition-colors">
              Speak with our membership team.
            </a>
          </span>
        </div>

      </div>
    </section>
  );
};
