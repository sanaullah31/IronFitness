import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowRight, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface FloatingWhatsAppProps {
  onOpenJoinModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenJoinModal }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on small mobile to prevent layout collision) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-30">
        <div className="relative flex items-center group">
          {/* Dismissable Help Pill */}
          {showTooltip && (
            <div className="mr-3 px-3.5 py-2 bg-[#171717] border border-neutral-700/80 rounded-lg shadow-xl text-xs text-white flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
              <span>Have questions? Chat on WhatsApp</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-neutral-400 hover:text-white p-0.5 rounded cursor-pointer"
                aria-label="Dismiss tooltip"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Glowing WhatsApp Action Button */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer relative"
            aria-label="Chat with IronFit Gym on WhatsApp"
          >
            {/* Ping indicator */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300" />
            </span>
            <MessageCircle className="w-7 h-7 fill-white/20" />
          </a>
        </div>
      </div>

      {/* Mobile Sticky Quick Bar (Adheres strictly to the 15% mobile viewport cap: height is 52px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0E0E0E]/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2 px-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
          aria-label="Call IronFit front desk"
        >
          <Phone className="w-3.5 h-3.5 text-[#FF3030]" />
          <span>Call Us</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenJoinModal}
          className="flex-1 py-2 px-2.5 bg-[#FF3030] hover:bg-red-600 text-white text-xs font-bold uppercase rounded flex items-center justify-center gap-1 transition-colors whitespace-nowrap shadow-sm"
        >
          <span>Join</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );
};
