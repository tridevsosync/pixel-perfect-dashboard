export type Testimonial = {
  id: string;
  name: string;
  company: string;
  country: string;
  role: string;
  rating: number;
  text: string;
  avatarText: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ahmed-al-mansoori",
    name: "Ahmed Al Mansoori",
    company: "Gulf Oasis Foodstuff LLC",
    country: "United Arab Emirates",
    role: "Senior Procurement Director",
    rating: 5,
    text: "Consistent quality, clear communication, and deliveries we can count on month after month. Akvera Universal has become a reliable cornerstone of our Dubai dry food supply chain. Their Basmati Rice and Cumin are always pristine.",
    avatarText: "AM",
  },
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    company: "Albion Fine Foods Ltd",
    country: "United Kingdom",
    role: "Import & Supply Chain Head",
    rating: 5,
    text: "Their attention to product cleanliness, Sortex grading, and export packaging really stands out. An exceptional partner for sourcing authentic Indian agro products compliant with UK and European food safety standards.",
    avatarText: "SM",
  },
  {
    id: "daniel-tan",
    name: "Daniel Tan",
    company: "Asia Pacific Commodities Pte",
    country: "Singapore",
    role: "Managing Director",
    rating: 5,
    text: "From our first container enquiry to our ongoing monthly contracts, Mr. Avinash Yadav and his team have been transparent, responsive, and genuinely committed to our partnership. Documentation is always spot on.",
    avatarText: "DT",
  },
  {
    id: "omar-al-hassan",
    name: "Omar Al-Hassan",
    company: "Red Sea Agro Imports",
    country: "Saudi Arabia",
    role: "Commercial Purchasing Manager",
    rating: 5,
    text: "Shipments arrive on time with complete laboratory phytosanitary certificates. When shipping perishables like Nashik onions and whole spices to Jeddah, having Akvera's reliable origin inspection gives us total peace of mind.",
    avatarText: "OH",
  },
  {
    id: "elena-rossi",
    name: "Elena Rossi",
    company: "Mediterranea Spezie SRL",
    country: "Italy",
    role: "Quality & Sourcing Specialist",
    rating: 5,
    text: "Akvera's Malabar black pepper and Salem turmeric exceeded our stringent organoleptic and microbiological testing criteria. It is rare to find an exporter who communicates with this level of honesty and technical rigor.",
    avatarText: "ER",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    company: "Great Northern Grains",
    country: "Canada",
    role: "Commodities Broker",
    rating: 5,
    text: "Superb transit times and impeccably clean grain lots. Sourcing millets and pulses from India used to be unpredictable until we contracted with Akvera Universal. Highly recommended to any international distributor.",
    avatarText: "MV",
  },
];
