import { Shield, Award, IndianRupee, FileCheck, GraduationCap, School, Plane, HeartHandshake, BookOpen } from 'lucide-react'

export const countries = [
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    fee: "₹15–20 Lakhs (Approx)",
    universities: "5+ NMC Approved Universities",
    duration: "5 + 1 Years",
    desc: "Affordable NMC-recognized medical education with excellent FMGE preparation and Indian-friendly campus life.",
    slug: "uzbekistan",
    livingCost: "₹8,000–12,000/mo (Approx)",
    language: "English Medium",
    recognition: "NMC · WHO · WFME Recognized",
    topUnis: [
      "Tashkent Medical Academy",
      "Samarkand State Medical University",
      "Bukhara State Medical Institute",
      "Andijan State Medical Institute",
      "Fergana Medical Institute",
    ],
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    fee: "₹18–25 Lakhs (Approx)",
    universities: "4+ NMC Approved Universities",
    duration: "6 + 1 Years",
    desc: "World-class medical infrastructure with globally ranked institutions and modern teaching hospitals.",
    slug: "kazakhstan",
    livingCost: "₹10,000–15,000/mo (Approx)",
    language: "English Medium",
    recognition: "NMC · WHO Recognized",
    topUnis: [
      "Kazakh National Medical University",
      "Astana Medical University",
      "Semey Medical University",
      "Karaganda Medical University",
    ],
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    fee: "₹15–22 Lakhs (Approx)",
    universities: "3+ NMC Approved Universities",
    duration: "5 + 1 Years",
    desc: "English-medium programs with high FMGE success rates and a large Indian student community.",
    slug: "kyrgyzstan",
    livingCost: "₹7,000–10,000/mo (Approx)",
    language: "English Medium",
    recognition: "NMC · WHO Recognized",
    topUnis: [
      "Kyrgyz State Medical Academy",
      "Osh State University",
      "International School of Medicine",
    ],
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    fee: "₹20–30 Lakhs (Approx)",
    universities: "10+ NMC Approved Universities",
    duration: "6 Years",
    desc: "Premier medical education with world-renowned faculty, advanced research facilities, and global recognition.",
    slug: "russia",
    livingCost: "₹12,000–18,000/mo (Approx)",
    language: "English Medium",
    recognition: "NMC · WHO · WFME Recognized",
    topUnis: [
      "Peoples Friendship University",
      "Kazan Federal University",
      "Crimea Federal University",
      "Bashkir State Medical University",
      "Orenburg State Medical University",
    ],
  },
]

export const whyChooseUs = [
  {
    icon: <Shield size={22} className="text-brand-gold" />,
    title: "No Donation Required",
    desc: "100% transparent admission process with zero hidden charges or capitation fees.",
  },
  {
    icon: <Award size={22} className="text-brand-gold" />,
    title: "NMC & WHO Recognized",
    desc: "All partner universities are approved by NMC and recognized by WHO with higher FMGE pass rates.",
  },
  {
    icon: <IndianRupee size={22} className="text-brand-gold" />,
    title: "Affordable Fees",
    desc: "Complete MBBS programs starting from just ₹15 Lakhs (Approx) — a fraction of private college costs in India.",
  },
  {
    icon: <FileCheck size={22} className="text-brand-gold" />,
    title: "Hassle-Free Process",
    desc: "End-to-end support from university selection and visa processing to travel and post-arrival assistance.",
  },
]

export const services = [
  {
    icon: <GraduationCap size={22} className="text-brand-blue" />,
    title: "Admission Guidance",
    desc: "Complete support from university selection to enrollment confirmation and documentation.",
  },
  {
    icon: <School size={22} className="text-brand-blue" />,
    title: "University Selection",
    desc: "Personalized university recommendations based on your academic profile, budget, and career goals.",
  },
  {
    icon: <FileCheck size={22} className="text-brand-blue" />,
    title: "Visa Assistance",
    desc: "End-to-end visa processing, documentation support, and embassy interview preparation.",
  },
  {
    icon: <Plane size={22} className="text-brand-blue" />,
    title: "Travel & Accommodation",
    desc: "Flight booking, hostel arrangement, airport pickup, and settling-in coordination.",
  },
  {
    icon: <HeartHandshake size={22} className="text-brand-blue" />,
    title: "Post-Arrival Support",
    desc: "On-ground assistance for local registration, bank account setup, and ongoing campus support.",
  },
  {
    icon: <BookOpen size={22} className="text-brand-blue" />,
    title: "FMGE/NExT Coaching",
    desc: "Guidance and exam preparation resources to help you clear licensing exams and practice in India.",
  },
]

export const testimonials = [
  {
    name: "Aadya",
    university: "North India",
    text: "MedWeg Abroad turned my medical dream into reality. From shortlisting the right foreign medical universities to handling the document verification, their team was incredibly professional. I never felt lost during the entire process.",
    initials: "AA",
  },
  {
    name: "Aditi",
    university: "South India",
    text: "Choosing MedWeg Abroad was the best decision I made for my medical career. They guided me through the university applications efficiently and ensured all my paperwork was flawless.",
    initials: "AD",
  },
  {
    name: "Anwesha",
    university: "East India",
    text: "I was highly skeptical about studying medicine abroad initially, but the counselors at MedWeg cleared all my doubts. They mapped out a brilliant path for my future career.",
    initials: "AN",
  },
  {
    name: "Jinal",
    university: "West India",
    text: "The entire team is exceptionally knowledgeable about international medical curricula. They helped me pick a university that has a fantastic track record for licensing exam passing rates.",
    initials: "JI",
  },
  {
    name: "Hassam Ali",
    university: "Featured Student",
    text: "MedWeg provided exceptional support right from day one. Their team made sure my academic transcripts and visa files were processed without a single delay. A highly professional experience.",
    initials: "HA",
  },
  {
    name: "Ilyas Muhammad",
    university: "Featured Student",
    text: "The technical guidance and deep understanding of university infrastructures they offer is unmatched. They don't just find you a seat; they ensure you land in an environment built for strong clinical and academic growth.",
    initials: "IM",
  },
  {
    name: "Aarav",
    university: "Global Student",
    text: "MedWeg provides top-tier consultation. Their systematic approach to applications saves a lot of time, and their student support network is very strong.",
    initials: "AA",
  },
  {
    name: "Myra",
    university: "North India",
    text: "The visa processing stage can be so stressful, but the team at MedWeg handled it flawlessly. They kept me updated at every step, and my visa came through without a single hiccup.",
    initials: "MY",
  },
  {
    name: "Ravi Kumar",
    university: "Featured Student",
    text: "They made a highly complex international admission process incredibly simple for my family. Their step-by-step assistance is the reason I am studying at a top medical university today.",
    initials: "RK",
  }
]

export const stats = [
  { stat: "500+", title: "Students Placed", desc: "Across 4 countries worldwide" },
  { stat: "100%", title: "Transparent Process", desc: "No hidden fees or charges" },
  { stat: "4", title: "Partner Countries", desc: "NMC & WHO recognized" },
  { stat: "24/7", title: "Support Available", desc: "Before, during, and after" },
]

export const feeInclusions = [
  "University tuition fees",
  "Hostel accommodation",
  "Admission processing",
  "Visa assistance",
  "Airport pickup",
  "Local registration support",
]
