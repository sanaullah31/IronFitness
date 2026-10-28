import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO, FITNESS_PROGRAMS } from '../data/gymData';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPrivacyModal, 
  onOpenTermsModal,
  onOpenJoinModal 
}) => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'About IronFit', href: '#about' },
    { label: 'Training Programs', href: '#programs' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Membership Tiers', href: '#memberships' },
    { label: 'Expert Coaches', href: '#trainers' },
    { label: 'Facility Gallery', href: '#gallery' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-neutral-800/80 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/60">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 text-white font-display text-2xl tracking-wider hover:text-[#FF3030] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF3030] flex items-center justify-center text-white shadow-md shadow-red-600/30">
                <Dumbbell className="w-4 h-4 -rotate-45" />
              </div>
              <span>
                IRON<span className="text-[#FF3030]">FIT</span>
              </span>
            </a>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              IronFit Gym &amp; Fitness Club is an athletic compound dedicated to raw strength, body transformation, and elite sports performance. State-of-the-art iron, certified coaches, and an uncompromising community.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF3030] hover:text-[#FF3030] flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF3030] hover:text-[#FF3030] flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF3030] hover:text-[#FF3030] flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#FF3030] hover:text-[#FF3030] flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-neutral-400 hover:text-[#FF3030] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2">
              {FITNESS_PROGRAMS.slice(0, 6).map((prog) => (
                <li key={prog.id}>
                  <a
                    href="#programs"
                    className="text-xs text-neutral-400 hover:text-white transition-colors block truncate"
                  >
                    {prog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Compound Location</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF3030] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF3030] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF3030] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-400">
                Mon–Fri: {BUSINESS_INFO.hours.weekdays}<br />
                Sat–Sun: {BUSINESS_INFO.hours.weekends}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenJoinModal}
              className="text-[#FF3030] hover:underline cursor-pointer"
            >
              Member Portal
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
