import { products, type Product, type ProductSpecification } from "./products";
import { testimonials, type Testimonial } from "./testimonials";
import { blogs, type BlogPost } from "./blogs";
import { galleryItems, type GalleryItem } from "./gallery";
import { countryList, countries, type CountryExport } from "./countries";
import { teamMembers, type TeamMember } from "./team";
import { serviceList, type ServiceItem } from "./services";
import { faqList, faqs, type FAQItem } from "./faq";

export {
  products,
  type Product,
  type ProductSpecification,
  testimonials,
  type Testimonial,
  blogs,
  type BlogPost,
  galleryItems,
  type GalleryItem,
  countryList,
  countries,
  type CountryExport,
  teamMembers,
  type TeamMember,
  serviceList,
  type ServiceItem,
  faqList,
  faqs,
  type FAQItem,
};

export const companyInfo = {
  clientName: "Mr. Avinash Yadav",
  businessName: "Akvera Universal",
  tagline: "Connecting Indian Excellence to Global Markets",
  address: "Kolhapur, Maharashtra, India",
  phone: "+91 902 1300 674",
  email: "info@akverauniversal.com",
  whatsapp: "+91 902 1300 674",
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST (Export operations 24/7)",
  socials: {
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/919021300674",
    email: "mailto:info@akverauniversal.com",
  },
  introduction:
    "Akvera Universal Exporter was built on a simple belief that trade works best when it's built on trust, transparency, and quality. Based in India, we specialize in sourcing and exporting premium agro products, connecting buyers across the globe with authentic, high-quality goods straight from their origin. Every product we export goes through careful selection and quality checks, ensuring that what reaches our clients reflects the standards we stand behind. Our commitment to reliability, timely delivery, and clear communication has helped us build lasting relationships with buyers worldwide. As we grow, our focus remains the same—to be a dependable bridge between Indian markets and the world.",
};

export const processSteps: [string, string][] = [
  ["Sourcing", "Direct origin procurement from verified farms and cooperatives across India's premier growing regions."],
  ["Quality Inspection", "Multi-stage physical checks, Sortex optical grading, and certified laboratory analysis for purity."],
  ["Packaging", "Food-grade, climate-resilient packaging tailored to your pack sizes, branding, and destination rules."],
  ["Documentation", "Meticulous preparation of Bills of Lading, Phytosanitary, Origin, Fumigation, and bank LC documents."],
  ["Container Loading", "Supervised stuffing into clean, desiccated dry or reefer containers at port storage depots."],
  ["Shipping", "Ocean transit on premier global carriers with milestone tracking from Nhava Sheva (JNPT) and Mundra."],
  ["Delivery", "Seamless customs clearance and on-time arrival at your destination port, backed by ongoing support."],
];

export const industriesServed = [
  { name: "Food Industry", description: "Bulk high-purity agricultural ingredients for food processing, flour milling, and packaging plants." },
  { name: "Retail", description: "Consumer-ready and shelf-stable packaged pulses, aromatic spices, and basmati rice for supermarket chains." },
  { name: "Wholesale", description: "Containerized volume consignments for international commodities merchants and trade distributors." },
  { name: "Distributors", description: "Consistent, scheduled seasonal shipments supporting nationwide and regional distribution pipelines." },
  { name: "Importers", description: "A dependable origin partner providing customs-compliant documentation and direct port-to-port logistics." },
  { name: "Manufacturers", description: "Standardized raw materials like yellow maize, sugar, wheat, and oilseeds meeting precise industrial specs." },
  { name: "Hospitality", description: "Top-tier aged grains, whole spices, and culinary staples for luxury hotels, catering groups, and airlines." },
  { name: "Restaurants", description: "Authentic, origin-certified Indian spices and staples delivering unmatched flavor consistency to professional kitchens." },
];

export const statistics = [
  { value: "500+", label: "Clients Globally", subtitle: "Trusted by importers in 35+ countries" },
  { value: "35+", label: "Countries Served", subtitle: "Spanning Middle East, Europe, Americas & Asia" },
  { value: "100+", label: "Products Exported", subtitle: "Grains, pulses, spices, fresh produce & sugar" },
  { value: "99%", label: "Customer Satisfaction", subtitle: "On-time delivery & zero-defect compliance" },
];

export const whyChooseUs = [
  { title: "Premium Quality", text: "Sortex cleaned, laboratory tested, and sourced straight from origin farms." },
  { title: "Global Standards", text: "Compliance with FSSAI, US FDA, APEDA, ISO 22000, and European import regulations." },
  { title: "Reliable Supply Chain", text: "Consistent year-round inventory backed by modern warehousing and direct farm networks." },
  { title: "Timely Delivery", text: "Fast turnaround from Nhava Sheva (JNPT) and Mundra ports with real-time transit tracking." },
  { title: "Transparent Communication", text: "Direct updates from founder Mr. Avinash Yadav and team at every step of your order." },
  { title: "Competitive Pricing", text: "Eliminating middlemen through direct origin procurement for optimal commercial margins." },
];

export const modules = [
  "Products",
  "Categories",
  "Countries",
  "Export Destinations",
  "Gallery",
  "Blogs",
  "Testimonials",
  "FAQs",
  "Quality Certificates",
  "Export Process",
  "Services",
  "Team Members",
  "Homepage Banner",
  "Hero Slider",
  "Contact Requests",
  "Quote Requests",
  "Newsletter Subscribers",
  "Site Settings",
  "Profile",
  "Change Password",
  "Media Library",
  "SEO Settings",
  "Menu Management",
  "Footer Management",
  "Theme Settings",
  "Analytics Dashboard",
  "Activity Logs",
  "Notifications",
];

export const moduleSlug = (name: string) => name.toLowerCase().replaceAll(" ", "-");

export type DemoRow = { id: string; name: string; detail: string; status: boolean };

export const initialModules: Record<string, DemoRow[]> = Object.fromEntries(
  modules.map((name) => {
    let rows: string[][] = [[`${name} sample`, "Active record in Akvera Universal workspace"]];
    if (name === "Categories") rows = [...new Set(products.map((p) => p.category))].map((c) => [c, "Active agro product category"]);
    if (["Countries", "Export Destinations"].includes(name)) rows = countryList.map((c) => [c.name, `${c.region} · ${c.ports.join(", ")}`]);
    if (name === "Blogs") rows = blogs.map((b) => [b.title, `${b.category} · ${b.date} · ${b.readTime}`]);
    if (name === "FAQs") rows = faqList.map((f) => [f.question, f.answer]);
    if (name === "Testimonials") rows = testimonials.map((t) => [t.name, `${t.company} (${t.country}) · 5 Stars`]);
    if (name === "Export Process") rows = processSteps;
    if (name === "Team Members") rows = teamMembers.map((m) => [m.name, `${m.role} · ${m.location}`]);
    if (name === "Services") rows = serviceList.map((s) => [s.title, s.description]);
    if (name === "Contact Requests")
      rows = [
        ["Ahmed Al Mansoori", "info@gulfoasis.ae · UAE · Inquiring about 50 MT Basmati Rice to Jebel Ali · Pending proforma invoice"],
        ["James Wilson", "j.wilson@ukfooddist.co.uk · UK · Inquiring about 10 MT Turmeric and Cumin · Organic requirements"],
        ["Daniel Tan", "daniel@singaporetrading.sg · Singapore · Inquiring about Red Chilli and Garlic · In transit"],
      ];
    if (name === "Quote Requests")
      rows = [
        ["Gulf Oasis Trading", "25 MT 1121 Basmati Rice · CIF Jebel Ali · Need BOPP 10kg bags"],
        ["Red Sea Agro Imports", "50 MT Golden Sharbati Wheat · CFR Jeddah · Jumbo bags"],
        ["Albion Fine Foods Ltd", "15 MT Sortex Cumin Seeds & Malabar Black Pepper · FOB Nhava Sheva"],
        ["Pacific Foods Singapore", "20 MT Fresh Nashik Red Onions · 40ft Reefer Container"],
      ];
    if (name === "Newsletter Subscribers")
      rows = [
        ["procurement@gulffoods.ae", "Subscribed via corporate portal · Verified trade buyer"],
        ["importer@eurograins.de", "Subscribed via global market insights · Verified European buyer"],
        ["sourcing@asiacommodities.sg", "Subscribed via product catalogue"],
      ];
    if (name === "Quality Certificates")
      rows = [
        ["FSSAI Food Safety Compliance Certificate", "Registration #11524999000123 · Government of India Food Authority"],
        ["APEDA Export Registration Certificate", "Agricultural & Processed Food Products Export Development Authority"],
        ["Spices Board of India Mandatory Registration", "Registered Agro Commodity Exporter Certificate"],
        ["ISO 22000:2018 Food Safety Management", "Audited sorting, handling, and export packaging processes"],
        ["Phytosanitary & Fumigation Protocol Standard", "National Plant Protection Organization (NPPO) compliance"],
      ];
    if (name === "Gallery" || name === "Media Library")
      rows = galleryItems.map((g) => [g.title, `${g.category} · ${g.description}`]);
    if (name === "Homepage Banner" || name === "Hero Slider")
      rows = [
        ["Connecting Indian Excellence to Global Markets", "Active Primary Hero Banner · High-res ocean container backdrop"],
        ["Trusted Origin Agro Sourcing from Maharashtra", "Secondary Slider Banner · Farm and harvest focus"],
        ["Sortex Cleaned Indian Spices to 35+ Nations", "Tertiary Slider Banner · Spice export highlights"],
      ];
    if (name === "Site Settings")
      rows = [
        ["Company Name", "Akvera Universal"],
        ["Managing Director", "Mr. Avinash Yadav"],
        ["Registered Address", "Kolhapur, Maharashtra, India"],
        ["Official Email", "info@akverauniversal.com"],
        ["Direct Phone / WhatsApp", "+91 902 1300 674"],
      ];
    if (name === "SEO Settings")
      rows = [
        ["Primary Meta Title", "Akvera Universal | Premium Indian Agro Exporter"],
        ["Meta Description", "Connecting Indian Excellence to Global Markets. Premium agro exports delivered with trust, quality, and transparency."],
        ["Target Keywords", "Indian agro exports, Basmati rice exporter, Indian spices wholesale, Kolhapur Maharashtra exporter, agro commodities India"],
      ];
    if (name === "Menu Management")
      rows = [
        ["Main Header Navigation", "Home, About, Products, Industries, Export Process, Quality, Gallery, Blog, Testimonials, FAQ, Contact"],
        ["Footer Quick Links", "Products, Industries, Process, Quality, Testimonials, FAQ, Sitemap, Privacy, Terms"],
      ];
    if (name === "Footer Management")
      rows = [
        ["Copyright Notice", "© 2026 Akvera Universal. All rights reserved."],
        ["Admin Login Link", "Rendered securely at bottom right footer with route redirect to /admin/login"],
      ];
    if (name === "Theme Settings")
      rows = [
        ["Primary Color", "Deep Forest Green (#1E5631)"],
        ["Secondary Color", "Natural Leaf Green (#4CAF50)"],
        ["Accent Color", "Golden Wheat (#D4A017)"],
        ["Background Color", "Off White (#FAFAF7) / Dark (#1B1B1B)"],
      ];
    if (name === "Analytics Dashboard")
      rows = [
        ["Total Monthly Export Volume", "1,850 Metric Tonnes"],
        ["Active Container Shipments", "28 FCL Containers in Transit"],
        ["Annual Customer Retention", "94.6% Repeat Global Buyers"],
        ["Average Port Dispatch Time", "12 Calendar Days"],
      ];
    if (name === "Activity Logs")
      rows = [
        ["Product catalogue updated", "Added Sortex Cleaned Sesame Seeds · Admin user · 10 mins ago"],
        ["Quote request reviewed", "Al Mansoori (UAE) proforma generated · Admin user · 1 hour ago"],
        ["Phytosanitary certificate uploaded", "Consignment #AKV-2026-88 · 3 hours ago"],
        ["Shipment departed JNPT", "Vessel MSC LORETTA loaded with 4x40ft Basmati · Yesterday"],
      ];
    if (name === "Notifications")
      rows = [
        ["New Quote Request Received", "Gulf Oasis Foodstuff requested quote for 25 MT Basmati · 15 mins ago"],
        ["Bill of Lading Confirmed", "Shipping line issued BL for Container #MSCU4920194 · 2 hours ago"],
        ["New Newsletter Subscriber", "procurement@gulffoods.ae joined updates list · 4 hours ago"],
      ];
    if (name === "Profile")
      rows = [
        ["Name", "Mr. Avinash Yadav"],
        ["Role", "Managing Director & Chief Export Officer"],
        ["Location", "Kolhapur, Maharashtra, India"],
        ["Email", "info@akverauniversal.com"],
      ];
    if (name === "Change Password")
      rows = [
        ["Password Security", "Demo administrator session authenticated · No reset required in demo"],
      ];

    return [
      moduleSlug(name),
      rows.map((r, i) => ({
        id: `${moduleSlug(name)}-${i}`,
        name: r[0],
        detail: r[1],
        status: true,
      })),
    ];
  })
);
