import { FitnessProgram, MembershipPlan, Trainer, GalleryItem, Testimonial, FAQItem } from '../types';
import facilityImage from '../assets/images/about_gym_facility_1793170256835.jpg';
import cardioImage from '../assets/images/cardio_functional_fitness_1793170257195.jpg';
import heroImage from '../assets/images/hero_gym_workout_1793170255787.jpg';
import strengthImage from '../assets/images/strength_training_session_1793170256889.jpg';

export const GYM_IMAGES = {
  facility: facilityImage,
  cardio: cardioImage,
  hero: heroImage,
  strength: strengthImage
};

export const BUSINESS_INFO = {
  name: "IronFit Gym & Fitness Club",
  tagline: "Build Strength. Transform Yourself.",
  heroHeadline: "YOUR BODY. YOUR LIMITS. YOUR LEGACY.",
  heroSubheadline: "Train harder, grow stronger, and become the best version of yourself with IronFit Gym & Fitness Club.",
  aboutHeadline: "MORE THAN A GYM. A LIFESTYLE.",
  address: "450 Ironworks Boulevard, Metro City, CA 90210",
  phone: "+1 (555) 476-6348",
  phoneRaw: "+15554766348",
  whatsappNumber: "15554766348",
  whatsappUrl: "https://wa.me/15554766348?text=Hi%20IronFit!%20I%20would%20like%20to%20inquire%20about%20a%20membership%20and%20claim%20a%20free%20gym%20pass.",
  email: "contact@ironfitgym.com",
  hours: {
    weekdays: "5:00 AM – 11:00 PM",
    weekends: "6:00 AM – 9:00 PM",
    holidays: "7:00 AM – 7:00 PM"
  },
  stats: [
    { value: "500+", label: "Happy Members", detail: "Active athletes & transformers" },
    { value: "15+", label: "Expert Trainers", detail: "Certified master coaches" },
    { value: "20+", label: "Training Programs", detail: "Strength, cardio & wellness" }
  ]
};

export const FITNESS_PROGRAMS: FitnessProgram[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    tagline: "Master Compound Lifts & Absolute Power",
    category: "strength",
    shortDescription: "Progressive overload protocols focused on barbell compounds, powerlifting foundations, and neuromuscular density.",
    fullDescription: "Built on periodized barbell training, squat racks, and deadlift platforms. You will learn biomechanically sound squat, bench press, deadlift, and overhead press mechanics to build unbreakable raw strength.",
    intensity: "Intermediate",
    duration: "60 mins",
    keyBenefits: [
      "Targeted compound barbell and dumbbell protocols",
      "Progressive overload tracking system",
      "Form audits and injury prevention coaching",
      "Access to Olympic weightlifting platforms"
    ],
    schedule: "Mon, Wed, Fri · 6:00 AM & 6:00 PM",
    coach: "Marcus Vance, CSCS",
    targetAudience: "Anyone looking to increase maximum physical strength, bone density, and barbell mastery.",
    image: GYM_IMAGES.strength
  },
  {
    id: "weight-loss-fat-burning",
    name: "Weight Loss & Fat Burning",
    tagline: "High-Caloric Expenditure & Metabolic Conditioning",
    category: "cardio",
    shortDescription: "High-energy interval training and functional circuits engineered to torch fat while preserving lean muscle mass.",
    fullDescription: "Combines high-density metabolic resistance training with heart-rate zone intervals. Burn up to 800 kcal per session with dynamic sleds, air bikes, rowing, and kettlebells with guided nutritional targets.",
    intensity: "All Levels",
    duration: "50 mins",
    keyBenefits: [
      "Accelerated metabolic burn and post-exercise oxygen consumption",
      "Lean muscle retention protocols",
      "Heart-rate zone monitoring during workouts",
      "Weekly body composition body-scan tracking"
    ],
    schedule: "Daily · 7:00 AM, 12:00 PM & 5:30 PM",
    coach: "Elena Rostova, CPT",
    targetAudience: "Individuals looking to reduce body fat percentage, boost cardiovascular stamina, and tone muscle.",
    image: GYM_IMAGES.cardio
  },
  {
    id: "personal-training",
    name: "Personal Training",
    tagline: "1-on-1 Dedicated Coaching & Bespoke Programming",
    category: "personal",
    shortDescription: "Custom-tailored fitness blueprints with a dedicated master trainer guiding every rep, set, and nutritional choice.",
    fullDescription: "Your personal fitness concierge. Receive comprehensive movement screening, custom macro calculations, personalized biomechanics tuning, and continuous accountability to guarantee measurable milestones.",
    intensity: "All Levels",
    duration: "60 mins",
    keyBenefits: [
      "100% customized workout and nutrition roadmap",
      "Private 1-on-1 training pods with premium equipment",
      "Postural and mobility corrective exercises",
      "24/7 direct coach messaging on WhatsApp"
    ],
    schedule: "Flexible Booking · Mon–Sun 5:00 AM – 10:00 PM",
    coach: "David Sterling, Head of Performance",
    targetAudience: "Those who want accelerated results, bespoke accountability, or targeted athletic rehabilitation.",
    image: GYM_IMAGES.hero
  },
  {
    id: "bodybuilding",
    name: "Bodybuilding",
    tagline: "Hypertrophy Science & Sculpted Aesthetics",
    category: "strength",
    shortDescription: "Specialized hypertrophy splits designed for symmetrical muscle development, mind-muscle connection, and vascularity.",
    fullDescription: "Designed for classic physique and aesthetic physique enthusiasts. Focus on isolation angles, mechanical tension, drop sets, and time-under-tension using selectorized plate-loaded machines and free weights.",
    intensity: "Advanced",
    duration: "75 mins",
    keyBenefits: [
      "Multi-angle muscle activation and hypertrophy splits",
      "Specialty isolation machinery and cable stations",
      "Nutritional mass-building phase programming",
      "Posing clinic and aesthetic conditioning guidance"
    ],
    schedule: "Mon to Sat · 8:00 AM & 7:00 PM",
    coach: "Marcus Vance & David Sterling",
    targetAudience: "Serious lifters seeking visible muscular hypertrophy, definition, and aesthetic proportion.",
    image: GYM_IMAGES.hero
  },
  {
    id: "cardio-endurance",
    name: "Cardio & Endurance",
    tagline: "Aerobic Capacity & High-Stamina Conditioning",
    category: "cardio",
    shortDescription: "Zone-based aerobic conditioning across Assault runners, Concept2 rowers, SkiErgs, and incline turf sprints.",
    fullDescription: "Build a bulletproof cardiovascular engine. Master steady-state aerobic thresholds, lactate clearance, and VO2 max improvement through structured interval blocks and long-distance conditioning.",
    intensity: "All Levels",
    duration: "45 mins",
    keyBenefits: [
      "VO2 max testing and progression benchmarks",
      "Low-impact high-output cardio equipment suite",
      "Stamina building for marathoners and sports athletes",
      "Guided breathwork and heart-rate recovery"
    ],
    schedule: "Tue, Thu, Sat · 6:30 AM & 6:30 PM",
    coach: "Sarah Chen, Endurance Specialist",
    targetAudience: "Runners, hybrid athletes, and anyone wanting to climb flights of stairs without gasping for breath.",
    image: GYM_IMAGES.cardio
  },
  {
    id: "functional-fitness",
    name: "Functional Fitness",
    tagline: "Athletic Agility, Plyometrics & Core Power",
    category: "functional",
    shortDescription: "Real-world movement mastery integrating kettlebells, sandbags, sled pushes, pull-up rigs, and box jumps.",
    fullDescription: "Train your body to move as a unified athletic machine. Enhance unilateral balance, rotational power, core stability, and joint durability to excel in everyday physical demands and dynamic sports.",
    intensity: "Intermediate",
    duration: "55 mins",
    keyBenefits: [
      "50-meter indoor turf track for sled drives and carries",
      "Rotational power and stability training",
      "Joint resilience and functional mobility work",
      "Multi-planar functional strength challenges"
    ],
    schedule: "Mon, Wed, Fri · 7:30 AM & 5:00 PM",
    coach: "Sarah Chen, CSCS",
    targetAudience: "Athletes, weekend warriors, and active adults seeking injury-free agility and multi-directional strength.",
    image: GYM_IMAGES.facility
  },
  {
    id: "muscle-building",
    name: "Muscle Building",
    tagline: "Systematic Hypertrophy for Natural Gains",
    category: "strength",
    shortDescription: "Science-backed hypertrophy routines utilizing optimal volume tiers, rest intervals, and progressive tension.",
    fullDescription: "Eliminate guesswork from your muscle-building journey. We utilize proven volume science, precise rest period control, and targeted exercise selections to trigger maximum protein synthesis.",
    intensity: "Beginner to Intermediate",
    duration: "60 mins",
    keyBenefits: [
      "Structured 12-week hypertrophy phase blocks",
      "Custom macronutrient and surplus caloric guidance",
      "Compound foundation with machine isolation accessories",
      "Bi-weekly progress check-ins with body calipers"
    ],
    schedule: "Mon, Tue, Thu, Fri · 9:00 AM & 6:30 PM",
    coach: "David Sterling, Head Coach",
    targetAudience: "Hardgainers and beginners wanting to pack on 10–20 lbs of clean lean muscle naturally.",
    image: GYM_IMAGES.strength
  },
  {
    id: "group-fitness-classes",
    name: "Group Fitness Classes",
    tagline: "High-Octane Community Energy & Team Grit",
    category: "group",
    shortDescription: "Coach-led dynamic squad workouts combining rhythmic strength circuits, boxing drills, and team stations.",
    fullDescription: "Feed off the collective adrenaline of a dedicated squad. High-bass athletic playlists, synchronized stations, and supportive team challenges that push you past your perceived physical boundaries.",
    intensity: "All Levels",
    duration: "50 mins",
    keyBenefits: [
      "Infectious team energy and camaraderie",
      "Varied station rotations keeping workouts fresh",
      "Modifications for all fitness levels provided on the fly",
      "Full locker room, towel service, and sauna access included"
    ],
    schedule: "Mon to Sat · 6:00 AM, 9:30 AM & 6:00 PM",
    coach: "Elena Rostova & Team Coaches",
    targetAudience: "Members who thrive in high-energy group atmospheres and love motivational team workouts.",
    image: GYM_IMAGES.facility
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "plan-basic",
    name: "BASIC",
    monthlyPrice: 39,
    annualPriceMonthly: 31,
    tagline: "Essential Access for Independent Lifters",
    description: "Ideal for self-directed athletes who need dependable, state-of-the-art iron and cardio gear.",
    features: [
      "Full gym floor & free weights access",
      "Standard cardio & strength machines",
      "Locker room & high-pressure showers",
      "Free IronFit member mobile app",
      "Initial fitness assessment orientation"
    ],
    notIncluded: [
      "Personal training sessions",
      "Access to recovery sauna & cold plunge",
      "Custom nutrition programming"
    ],
    terms: "Monthly rolling or 12-month commitment. Cancel anytime with 30 days notice. No hidden maintenance charges."
  },
  {
    id: "plan-pro",
    name: "PRO",
    monthlyPrice: 69,
    annualPriceMonthly: 55,
    isPopular: true,
    tagline: "Most Popular · Complete Transformation Package",
    description: "The complete fitness experience with expert workout blueprints, recovery facilities, and all group classes.",
    features: [
      "24/7 Unlimited access to all gym facilities",
      "Unlimited Group Fitness & functional classes",
      "Personalized 8-week workout program updated monthly",
      "Full access to infrared sauna & steam lounge",
      "InBody 570 body composition scans every 30 days",
      "Complimentary locker service & workout towels",
      "1 Complimentary 1-on-1 personal coaching session"
    ],
    terms: "Best overall value. 7-day money-back satisfaction guarantee. Free freeze for up to 60 days per year."
  },
  {
    id: "plan-elite",
    name: "ELITE",
    monthlyPrice: 119,
    annualPriceMonthly: 95,
    tagline: "VIP Access, 1-on-1 Coaching & Priority Care",
    description: "For uncompromising athletes demanding top-tier coaching, bespoke nutrition plans, and VIP perks.",
    features: [
      "Everything in PRO membership tier",
      "4 Dedicated 1-on-1 Personal Training sessions / month",
      "Custom macro & meal prep nutritional roadmap",
      "Priority equipment reservations during peak hours",
      "Full recovery suite (Cold plunge, Sauna, Compression boots)",
      "VIP private locker with laundry service option",
      "Direct WhatsApp concierge support with head trainer",
      "2 Free guest passes every month"
    ],
    terms: "Premier membership tier. Includes personalized physical therapy screening and priority class booking."
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    specialization: "Head Strength Coach & Powerlifting",
    experienceYears: 12,
    bio: "Former collegiate powerlifter and CSCS coach with over a decade specializing in biomechanics, maximal force production, and competitive physique preparation.",
    certifications: ["CSCS (NSCA)", "USA Weightlifting Level 2", "FMS Certified"],
    achievements: ["Coached 40+ state and national powerlifting podiums", "Over 1,200 member transformations"],
    image: GYM_IMAGES.hero,
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    specialization: "Metabolic Conditioning & Weight Loss",
    experienceYears: 8,
    bio: "Specializing in sustainable fat loss and high-octane metabolic circuits. Elena combines heart-rate telemetry with science-backed nutrition to spark long-term results.",
    certifications: ["NASM-CPT", "Precision Nutrition Level 2", "Kettlebell Athletics"],
    achievements: ["Featured wellness keynote coach", "Lost 50 lbs herself before going pro"],
    image: GYM_IMAGES.cardio,
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "david-sterling",
    name: "David Sterling",
    specialization: "Hypertrophy & Physique Architecture",
    experienceYears: 10,
    bio: "Master trainer focused on mind-muscle connection, structural symmetry, and joint-friendly muscle building for executives and busy professionals.",
    certifications: ["ISSA Master Trainer", "BioForce Conditioning Coach", "TRX Master"],
    achievements: ["Men's Physique regional champion", "Authored 12-week hypertrophy guidebook"],
    image: GYM_IMAGES.strength,
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    specialization: "Functional Mobility & Athletic Performance",
    experienceYears: 7,
    bio: "Dedicated to functional longevity and explosive agility. Sarah guides athletes through speed ladders, Olympic pulls, and hip-spine restorative mechanics.",
    certifications: ["EXOS Performance Specialist", "FRC Mobility Coach", "CPR/AED Pro"],
    achievements: ["Trained marathoners & CrossFit competitors", "Post-rehab athletic specialist"],
    image: GYM_IMAGES.facility,
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Barbell Training Arena",
    category: "Weights",
    description: "Deadlift platforms with calibrated competition plates and Eleiko barbells.",
    imageUrl: GYM_IMAGES.hero
  },
  {
    id: "gal-2",
    title: "Olympic Racks & Sled Turf",
    category: "Facility",
    description: "Ultra-clean 50-meter indoor turf track and heavy-duty commercial squat cages.",
    imageUrl: GYM_IMAGES.facility
  },
  {
    id: "gal-3",
    title: "Pair Incline Dumbbell Bench Press",
    category: "Weights",
    description: "Precision dumbbell rows and ergonomic benches ranging from 5 to 150 lbs.",
    imageUrl: GYM_IMAGES.strength
  },
  {
    id: "gal-4",
    title: "Explosive Battle Ropes Zone",
    category: "Functional",
    description: "High-intensity conditioning stations engineered for maximal aerobic endurance.",
    imageUrl: GYM_IMAGES.cardio
  },
  {
    id: "gal-5",
    title: "Powerlifting Deadlift Pit",
    category: "Weights",
    description: "Rubberized shock-absorbent platforms designed for heavy drop deadlifts.",
    imageUrl: GYM_IMAGES.hero
  },
  {
    id: "gal-6",
    title: "Turf Sprint & Agility Zone",
    category: "Functional",
    description: "Marked turf lanes for prowler pushes, farmer carries, and sprint intervals.",
    imageUrl: GYM_IMAGES.facility
  },
  {
    id: "gal-7",
    title: "Kettlebell & Conditioning Area",
    category: "Cardio",
    description: "Cast iron competition kettlebells and medicine ball rebound walls.",
    imageUrl: GYM_IMAGES.strength
  },
  {
    id: "gal-8",
    title: "Group Studio & Recovery Arena",
    category: "Facility",
    description: "Spacious training room with red neon accent lighting and state-of-the-art sound.",
    imageUrl: GYM_IMAGES.cardio
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Jason Bradley",
    role: "Member for 14 Months",
    goal: "Hypertrophy & Strength",
    quote: "IronFit is in a league of its own. The atmosphere isn't like ordinary commercial gyms; there's zero waiting for racks, the equipment is pristine, and the trainers genuinely know their craft. In 1 year, my deadlift shot from 315 to 445 lbs.",
    achievement: "+130 lbs Deadlift & +14 lbs Muscle Mass",
    rating: 5,
    avatarSeed: "JB"
  },
  {
    id: "test-2",
    name: "Victoria Miller",
    role: "Member for 9 Months",
    goal: "Fat Loss & Conditioning",
    quote: "The PRO membership changed my lifestyle completely. The structured functional circuits with Coach Elena helped me drop 32 lbs while actually gaining energy. The 24/7 access and recovery sauna keep me coming back every week.",
    achievement: "-32 lbs Fat Loss & First 10k Completed",
    rating: 5,
    avatarSeed: "VM"
  },
  {
    id: "test-3",
    name: "Marcus Thorne",
    role: "Member for 2 Years",
    goal: "Athletic Longevity",
    quote: "As an executive in my 40s, I needed training that builds raw power without destroying my knees and back. David’s customized programming fixed my posture imbalances and got me into the leanest shape of my adult life.",
    achievement: "Body Fat reduced from 26% to 14%",
    rating: 5,
    avatarSeed: "MT"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Membership",
    question: "How do I sign up and start my membership?",
    answer: "You can click any 'Join Now' or 'Choose Plan' button on this site to submit an inquiry, or message our team instantly on WhatsApp. We offer a complimentary 1-day pass and fitness orientation so you can test the gym before deciding."
  },
  {
    id: "faq-2",
    category: "Facilities",
    question: "What are your operating hours?",
    answer: "IronFit is open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday & Sunday from 6:00 AM to 9:00 PM. PRO and ELITE members receive 24/7 keycard access to the facility."
  },
  {
    id: "faq-3",
    category: "Trainers",
    question: "Are your personal trainers certified?",
    answer: "Every IronFit coach holds accredited master certifications (CSCS, NASM, USAW, Precision Nutrition) and has at least 5+ years of demonstrable coaching experience with real athletic backgrounds."
  },
  {
    id: "faq-4",
    category: "Membership",
    question: "Is there a long-term contract or cancellation penalty?",
    answer: "We offer both flexible monthly rolling memberships and discounted annual commitments. Monthly plans can be cancelled anytime with a simple 30-day notice, and all new members are backed by our 7-day money-back satisfaction guarantee."
  },
  {
    id: "faq-5",
    category: "Facilities",
    question: "What amenities are included with membership?",
    answer: "All members enjoy clean locker rooms, rain showers, filtered water stations, and high-speed Wi-Fi. PRO and ELITE tiers additionally include infrared sauna access, steam rooms, towel service, and cold plunge."
  },
  {
    id: "faq-6",
    category: "Beginners",
    question: "I am a complete beginner. Is IronFit suitable for me?",
    answer: "Absolutely! Over 40% of our members started with zero gym experience. Every new membership includes a 1-on-1 equipment orientation and form walkthrough to ensure you feel confident and safe on day one."
  }
];
