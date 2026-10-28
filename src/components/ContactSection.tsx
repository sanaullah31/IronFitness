import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, FITNESS_PROGRAMS } from '../data/gymData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    interestedProgram: 'Strength Training',
    interestedPlan: 'plan-pro',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().replace(/\D/g, '').length < 8) {
      errs.phoneNumber = 'Please enter a valid phone number (at least 8 digits)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side processing & dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      interestedProgram: 'Strength Training',
      interestedPlan: 'plan-pro',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#111111] border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF3030] mb-2">
            Get In Touch · Visit The Compound
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide text-white">
            CONTACT &amp; LOCATION
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Have questions about memberships, private coaching, or need to schedule a walk-in tour? Drop us a line or chat with our front desk on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details, Hours & Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#171717] border border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#FF3030]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Facility Address</h4>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#FF3030] hover:underline font-semibold mt-2"
                  >
                    <span>Get driving directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#171717] border border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#FF3030]" />
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operating Hours</h4>
                  <div className="mt-2 space-y-1 text-xs sm:text-sm text-neutral-300">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Monday – Friday:</span>
                      <span className="font-semibold text-white">{BUSINESS_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Saturday – Sunday:</span>
                      <span className="font-semibold text-white">{BUSINESS_INFO.hours.weekends}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Holidays:</span>
                      <span className="font-semibold text-white">{BUSINESS_INFO.hours.holidays}</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-2 font-mono">
                    *24/7 keycard access active for PRO and ELITE tier members
                  </div>
                </div>
              </div>

              {/* Quick Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="p-4 rounded-xl bg-[#171717] border border-neutral-800 hover:border-[#FF3030]/50 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-800 group-hover:bg-red-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-4 h-4 text-[#FF3030]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-semibold">Direct Call</div>
                    <div className="text-xs font-bold text-white">{BUSINESS_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#171717] border border-neutral-800 hover:border-emerald-500/50 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center shrink-0 transition-colors">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase font-semibold">WhatsApp Chat</div>
                    <div className="text-xs font-bold text-emerald-400">Instant Reply</div>
                  </div>
                </a>
              </div>

            </div>

            {/* Google Map Frame */}
            <div className="rounded-xl overflow-hidden border border-neutral-800 h-52 sm:h-64 relative bg-neutral-900">
              <iframe
                title="IronFit Gym &amp; Fitness Club Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105753.84759600984!2d-118.4117325!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba02425da9f9%3A0x6b107b39a3de857!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-2 left-2 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded text-[11px] font-semibold text-white border border-neutral-700">
                450 Ironworks Blvd, Metro City
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Membership & Inquiry Form */}
          <div className="lg:col-span-7 bg-[#171717] border border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-white">
                  INQUIRY RECEIVED, {formData.fullName.toUpperCase()}!
                </h3>
                <p className="mt-3 text-neutral-300 text-sm max-w-md">
                  Thank you for reaching out to IronFit. Our membership advisor has received your details for{' '}
                  <span className="text-[#FF3030] font-semibold">{formData.interestedProgram}</span>. We will call or WhatsApp you within 2 business hours.
                </p>

                {/* Instant WhatsApp Shortcut */}
                <div className="mt-8 p-4 bg-neutral-900 rounded-xl border border-neutral-800 w-full max-w-md">
                  <p className="text-xs text-neutral-400 mb-3">
                    Want an immediate answer? Open your ticket directly with our front desk:
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20IronFit!%20My%20name%20is%20${encodeURIComponent(formData.fullName)}.%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.interestedProgram)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF3030] mb-1">
                    Direct Membership &amp; Program Inquiry
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase">
                    CLAIM YOUR SPOT / ASK A QUESTION
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill out the form below. We will reach out to confirm your pass and program schedule.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                    Full Name <span className="text-[#FF3030]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Marcus Phoenix"
                    className={`w-full px-4 py-3 bg-[#0E0E0E] text-white text-sm rounded-lg border ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <div className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number <span className="text-[#FF3030]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 bg-[#0E0E0E] text-white text-sm rounded-lg border ${
                        errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.phoneNumber && (
                      <div className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phoneNumber}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                      Email Address <span className="text-[#FF3030]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@example.com"
                      className={`w-full px-4 py-3 bg-[#0E0E0E] text-white text-sm rounded-lg border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-neutral-800 focus:border-[#FF3030]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <label htmlFor="interestedProgram" className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                    Interested Fitness Program
                  </label>
                  <select
                    id="interestedProgram"
                    value={formData.interestedProgram}
                    onChange={(e) => setFormData({ ...formData, interestedProgram: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0E0E0E] text-white text-sm rounded-lg border border-neutral-800 focus:border-[#FF3030] focus:outline-none transition-colors"
                  >
                    {FITNESS_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.name} className="bg-neutral-900 text-white">
                        {prog.name} ({prog.duration})
                      </option>
                    ))}
                    <option value="General Gym Membership (PRO)" className="bg-neutral-900 text-white">
                      General Gym Membership (PRO)
                    </option>
                    <option value="Free 1-Day Trial Pass" className="bg-neutral-900 text-white">
                      Free 1-Day Trial Pass
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                    Your Goals or Questions <span className="text-neutral-500 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness background, injuries, or what you want to achieve..."
                    className="w-full px-4 py-3 bg-[#0E0E0E] text-white text-sm rounded-lg border border-neutral-800 focus:border-[#FF3030] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#FF3030] hover:bg-red-600 disabled:opacity-50 text-white font-bold text-sm uppercase tracking-wider rounded-lg glow-red transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY &amp; CLAIM PASS</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  We respect your privacy. No spam. You can opt-out of communications at any time.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
