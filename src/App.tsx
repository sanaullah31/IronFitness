import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MembershipPlans } from './components/MembershipPlans';
import { Trainers } from './components/Trainers';
import { TransformationGallery } from './components/TransformationGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MembershipModal } from './components/MembershipModal';
import { ProgramModal } from './components/ProgramModal';
import { LegalModal } from './components/LegalModal';
import { FitnessProgram, Trainer } from './types';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-pro');
  const [selectedProgramName, setSelectedProgramName] = useState<string>('');
  
  const [activeProgramModal, setActiveProgramModal] = useState<FitnessProgram | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenJoinModal = (planId: string = 'plan-pro', programName: string = '') => {
    setSelectedPlanId(planId);
    setSelectedProgramName(programName);
    setIsJoinModalOpen(true);
  };

  const handleSelectProgram = (program: FitnessProgram) => {
    setActiveProgramModal(program);
  };

  const handleEnrollProgram = (programName: string) => {
    setSelectedProgramName(programName);
    setSelectedPlanId('plan-pro');
    setIsJoinModalOpen(true);
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    setSelectedProgramName(`1-on-1 Coaching with ${trainer.name}`);
    setSelectedPlanId('plan-elite');
    setIsJoinModalOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#FF3030] selection:text-white font-sans overflow-x-hidden pb-14 sm:pb-0">
      {/* Navigation Top Bar */}
      <Navbar onOpenJoinModal={() => handleOpenJoinModal('plan-pro')} />

      <main>
        {/* A. Hero Section */}
        <Hero
          onOpenJoinModal={() => handleOpenJoinModal('plan-pro')}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* B. About Us Section */}
        <About onOpenJoinModal={() => handleOpenJoinModal('plan-pro')} />

        {/* C. Fitness Programs Section */}
        <Programs
          onSelectProgram={handleSelectProgram}
          onEnrollProgram={handleEnrollProgram}
        />

        {/* D. Why Choose IronFit Section */}
        <WhyChooseUs onOpenJoinModal={() => handleOpenJoinModal('plan-pro')} />

        {/* E. Membership Plans Section */}
        <MembershipPlans onSelectPlan={(planId) => handleOpenJoinModal(planId)} />

        {/* F. Expert Trainers Section */}
        <Trainers onSelectTrainer={handleSelectTrainer} />

        {/* G. Transformation & Facility Gallery Section */}
        <TransformationGallery />

        {/* H. Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* I. Contact & Location Section */}
        <ContactSection />
      </main>

      {/* J. Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
        onOpenTermsModal={() => setLegalModalType('terms')}
        onOpenJoinModal={() => handleOpenJoinModal('plan-pro')}
      />

      {/* Floating WhatsApp and Mobile Action Strip */}
      <FloatingWhatsApp onOpenJoinModal={() => handleOpenJoinModal('plan-pro')} />

      {/* Interactive Modals */}
      <MembershipModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        initialPlanId={selectedPlanId}
        initialProgramName={selectedProgramName}
      />

      <ProgramModal
        program={activeProgramModal}
        onClose={() => setActiveProgramModal(null)}
        onEnroll={handleEnrollProgram}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
