export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  experience: string;
  phone?: string;
  email?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "avinash-yadav",
    name: "Mr. Avinash Yadav",
    role: "Founder & Managing Director",
    bio: "Visionary agricultural entrepreneur dedicated to establishing an unshakeable bridge of trust between Indian agricultural producers and global commodity markets.",
    location: "Kolhapur, Maharashtra, India",
    experience: "15+ Years in Agro Trade",
    phone: "+91 902 1300 674",
    email: "avinash@akverauniversal.com",
  },
  {
    id: "priya-deshmukh",
    name: "Priya Deshmukh",
    role: "Head of International Trade & Documentation",
    bio: "Oversees international sales contracts, bank letters of credit, customs compliance, and port clearance across global trade hubs.",
    location: "Mumbai / Kolhapur, India",
    experience: "11+ Years in Export Logistics",
    email: "trade@akverauniversal.com",
  },
  {
    id: "rajesh-patil",
    name: "Rajesh Patil",
    role: "Chief Quality Officer & Senior Agronomist",
    bio: "Leads field inspections, farm-gate quality assessments, moisture calibrations, and third-party laboratory verification (SGS/Bureau Veritas).",
    location: "Kolhapur, Maharashtra, India",
    experience: "14+ Years in Post-Harvest Quality",
    email: "quality@akverauniversal.com",
  },
  {
    id: "sunil-kulkarni",
    name: "Sunil Kulkarni",
    role: "Director of Supply Chain & Ocean Freight",
    bio: "Manages vessel chartering, container stuffing, reefer temperature integrity, and freight forwarder coordination at Nhava Sheva and Mundra ports.",
    location: "JNPT / Mumbai, India",
    experience: "12+ Years in Maritime Logistics",
    email: "logistics@akverauniversal.com",
  },
];
