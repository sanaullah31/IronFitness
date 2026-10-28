import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, AlertCircle, Send, Dumbbell, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  initialProgramName?: string;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = 'plan-pro',
  initialProgramName = ''
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    experienceLevel: 'Intermediate',
    preferredTime: 'Morning (6 AM - 10 AM)',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().replace(/\D/g, '').length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const selectedPlan = MEMBERSHIP_PLANS.find((p) => p.id === selectedPlanId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl uppercase tracking-wide text-white">
              WELCOME TO IRONFIT, {formData.fullName.toUpperCase()}!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto">
              Your registration for the{' '}
              <span className="text-[#FF3030] font-bold">{selectedPlan?.name || 'Membership'}</span>{' '}
              tier has been logged. Our membership coordinator will reach out to activate your access pass.
            </p>

            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800 text-left space-y-3 mt-6">
              <div className="text-xs font-semibold text-neutral-400 uppercase">Fast-Track Onboarding</div>
              <p className="text-xs text-neutral-300">
                You can immediately present your reservation code at the IronFit reception desk or ping us on WhatsApp to confirm right away.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20IronFit!%20I%20just%20reserved%20the%20${encodeURIComponent(selectedPlan?.name || 'Membership')}%20plan.%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly On WhatsApp</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase rounded cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="pr-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF3030]">
                {initialProgramName ? `Program Enrollment: ${initialProgramName}` : 'Membership Registration'}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mt-0.5">
                START YOUR TRANSFORMATION
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Select your preferred tier and leave your details. No immediate charge required today.
              </p>
            </div>

            {/* Plan Selector Buttons */}
            <div>
              <label className="block text-xs font-bold uppercase text-neutral-300 mb-2">
                Selected Plan
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {MEMBERSHIP_PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedPlanId === plan.id
                        ? 'border-[#FF3030] bg-[#FF3030]/10 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase">{plan.name}</div>
                    <div className="text-sm sm:text-base font-display font-bold text-white mt-0.5">
                      ${plan.monthlyPrice}<span className="text-[10px] font-sans font-normal text-neutral-400">/mo</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="modal-name" className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                Full Name <span className="text-[#FF3030]">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Marcus Phoenix"
                className={`w-full px-3.5 py-2.5 bg-[#0B0B0B] text-white text-sm rounded-lg border ${
                  errors.fullName ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                } focus:outline-none`}
              />
              {errors.fullName && (
                <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Phone Number <span className="text-[#FF3030]">*</span>
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-3.5 py-2.5 bg-[#0B0B0B] text-white text-sm rounded-lg border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                  } focus:outline-none`}
                />
                {errors.phoneNumber && (
                  <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Email Address <span className="text-[#FF3030]">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@example.com"
                  className={`w-full px-3.5 py-2.5 bg-[#0B0B0B] text-white text-sm rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                  } focus:outline-none`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Experience & Preferred Schedule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Fitness Experience
                </label>
                <select
                  value={formData.experienceLevel}
                  onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0B0B0B] text-white text-xs rounded-lg border border-neutral-800 focus:border-[#FF3030] focus:outline-none"
                >
                  <option value="Beginner (New to lifting)">Beginner (New to lifting)</option>
                  <option value="Intermediate (1-3 yrs)">Intermediate (1-3 yrs)</option>
                  <option value="Advanced / Competitor">Advanced / Competitor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-neutral-300 mb-1">
                  Preferred Training Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#0B0B0B] text-white text-xs rounded-lg border border-neutral-800 focus:border-[#FF3030] focus:outline-none"
                >
                  <option value="Morning (5 AM - 9 AM)">Early Morning (5 AM - 9 AM)</option>
                  <option value="Mid-day (11 AM - 2 PM)">Mid-day (11 AM - 2 PM)</option>
                  <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
                  <option value="Late Night (9 PM - 11 PM)">Late Night (9 PM - 11 PM)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#FF3030] hover:bg-red-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-lg glow-red transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing request...</span>
                </span>
              ) : (
                <>
                  <span>CONFIRM MEMBERSHIP INQUIRY</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>7-day risk-free satisfaction guarantee. Cancel anytime.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
