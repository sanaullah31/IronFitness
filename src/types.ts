export interface FitnessProgram {
  id: string;
  name: string;
  tagline: string;
  category: 'strength' | 'cardio' | 'personal' | 'functional' | 'group';
  shortDescription: string;
  fullDescription: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | 'Beginner to Intermediate';
  duration: string;
  keyBenefits: string[];
  schedule: string;
  coach: string;
  targetAudience: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: 'BASIC' | 'PRO' | 'ELITE';
  monthlyPrice: number;
  annualPriceMonthly: number;
  isPopular?: boolean;
  tagline: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  terms: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  certifications: string[];
  achievements: string[];
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Weights' | 'Cardio' | 'Functional' | 'Facility';
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  goal: string;
  quote: string;
  achievement: string;
  rating: number;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  interestedProgram: string;
  interestedPlan?: string;
  message: string;
}
