import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text/mark element, no clutter) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-display text-2xl sm:text-3xl tracking-wider hover:text-[#FF3030] transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#FF3030] flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 -rotate-45" />
            </div>
            <span>
              IRON<span className="text-[#FF3030]">FIT</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-line, clean, hover states) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white hover:underline underline-offset-8 decoration-[#FF3030] decoration-2 transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF3030]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenJoinModal('plan-pro')}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#FF3030] hover:bg-red-600 text-white rounded-md shadow-lg shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenJoinModal('plan-pro')}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold uppercase bg-[#FF3030] text-white rounded shadow-sm whitespace-nowrap"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-md border border-neutral-800 bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-[#FF3030]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF3030]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212]/98 border-b border-neutral-800 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-neutral-300 hover:text-[#FF3030] py-2 border-b border-neutral-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal('plan-pro');
              }}
              className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider bg-[#FF3030] text-white rounded-md shadow-lg shadow-red-600/20"
            >
              Claim Free Gym Pass / Join
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 px-1">
              <span>Open today: {BUSINESS_INFO.hours.weekdays}</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#FF3030] font-semibold">
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
