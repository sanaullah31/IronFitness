import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [type]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8 text-left max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2 text-[#FF3030]">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">Security &amp; Data Transparency</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white">
              PRIVACY POLICY
            </h3>
            <p className="text-neutral-400">
              Last updated: October 2026. {BUSINESS_INFO.name} is dedicated to protecting the personal information of our club members and site visitors.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">1. Information We Collect</h4>
            <p>
              We collect details submitted through our contact and membership forms, including full name, phone number, email address, fitness preferences, and inquiry notes to administer facility access and answer inquiries.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">2. How We Use Your Details</h4>
            <p>
              Information is used exclusively to contact you regarding your requested passes, membership options, scheduling orientation sessions, and emergency safety notifications. We never sell or lease member information to external marketers.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">3. Direct Messaging (WhatsApp &amp; SMS)</h4>
            <p>
              By opting into WhatsApp or SMS updates, you receive booking confirmations and schedule alerts. You may text STOP or message our front desk at any moment to cancel automated notifications.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">4. Data Storage &amp; Protection</h4>
            <p>
              All customer interactions are protected with encrypted transmission protocols and secure servers located in compliant regional data facilities.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2 text-[#FF3030]">
              <FileText className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wider text-xs">Facility &amp; Membership Rules</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase text-white">
              TERMS AND CONDITIONS
            </h3>
            <p className="text-neutral-400">
              Last updated: October 2026. By accessing {BUSINESS_INFO.name} facilities or enrolling online, you agree to these membership standards.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">1. Facility Etiquette &amp; Safety</h4>
            <p>
              All members must re-rack plates and dumbbells after use, wipe down benches, and wear appropriate athletic footwear. Liquid chalk is welcome; dropping barbells outside of designated rubberized lifting platforms is prohibited.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">2. Membership Cancellations &amp; Pauses</h4>
            <p>
              Monthly memberships may be cancelled with 30 days written or digital notice prior to the next billing cycle. Members in good standing may pause their active subscription for up to 60 days per calendar year.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">3. 7-Day Satisfaction Guarantee</h4>
            <p>
              If a newly enrolled member is dissatisfied within 7 days of their initial registration, they may request a 100% refund of their initial month’s dues.
            </p>

            <h4 className="font-bold text-white uppercase text-xs pt-2">4. Physical Readiness &amp; Assumption of Risk</h4>
            <p>
              Physical exercise entails inherent bodily exertion. Members acknowledge they are in appropriate health or have received physician clearance prior to participating in strenuous athletic activities.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-800 hover:bg-[#FF3030] text-white text-xs font-bold uppercase rounded transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
