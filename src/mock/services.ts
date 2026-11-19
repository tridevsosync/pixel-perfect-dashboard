export type ServiceItem = {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  description: string;
  deliverables: string[];
};

export const serviceList: ServiceItem[] = [
  {
    id: "farm-gate-sourcing",
    title: "Direct Origin Sourcing",
    iconName: "Sprout",
    tagline: "Farm-gate procurement across fertile Indian agricultural corridors",
    description: "Eliminating intermediaries by contracting directly with farming cooperatives and verified processors in Maharashtra, Gujarat, Punjab, and Madhya Pradesh.",
    deliverables: ["Batch traceability", "Farm audits", "Seasonal price hedging", "Pesticide monitoring"],
  },
  {
    id: "quality-assurance",
    title: "Rigorous Quality Inspection",
    iconName: "ShieldCheck",
    tagline: "Laboratory testing and Sortex cleaning for zero-defect consignments",
    description: "Every shipment undergoes pre-cleaning, laser optical sorting, moisture analysis, and independent laboratory certification by SGS or Bureau Veritas.",
    deliverables: ["Purity certification", "Moisture verification", "Non-GMO declaration", "Phytosanitary reports"],
  },
  {
    id: "custom-packaging",
    title: "Export & Private Label Packaging",
    iconName: "Package",
    tagline: "Food-grade multi-layer packaging customized to buyer branding",
    description: "Packaging solutions ranging from 1 kg retail consumer pouches to 25/50 kg PP bags and 1 MT jumbo totes, branded with buyer artwork and multilingual labels.",
    deliverables: ["BOPP / Kraft bags", "Vacuum packaging", "Custom barcode labels", "Desiccant protection"],
  },
  {
    id: "export-documentation",
    title: "Comprehensive Export Documentation",
    iconName: "FileText",
    tagline: "Flawless legal, customs, and bank documentation",
    description: "Our dedicated export documentation team prepares Bills of Lading, Certificates of Origin, Phytosanitary certificates, Fumigation certificates, and commercial invoices.",
    deliverables: ["Bill of Lading", "Certificate of Origin", "Bank LC compliance", "Health & phytosanitary docs"],
  },
  {
    id: "ocean-freight",
    title: "Container Freight & Ocean Logistics",
    iconName: "Truck",
    tagline: "Strategic shipping partnerships out of Nhava Sheva (JNPT) and Mundra",
    description: "Contracted allocations with premier shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd) ensuring container availability and timely vessel sailings.",
    deliverables: ["20ft & 40ft FCL", "Reefer container tracking", "Port customs clearance", "Fast transit routing"],
  },
  {
    id: "destination-delivery",
    title: "Global Port & Doorstep Delivery",
    iconName: "Globe2",
    tagline: "Dependable delivery coordination across 35+ international markets",
    description: "Whether shipping on FOB, CIF, or CFR terms, our tracking systems keep international procurement teams informed with vessel milestones until discharge.",
    deliverables: ["Vessel tracking updates", "Discharge port coordination", "Demurrage avoidance", "Post-delivery support"],
  },
];
