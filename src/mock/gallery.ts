export type GalleryItem = {
  id: string;
  title: string;
  category: "Warehouse" | "Packaging" | "Exports" | "Products" | "Containers" | "Quality Inspection" | "Office";
  description: string;
  imageKey: "warehouse" | "hero" | "collection";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Central Sorting & Warehouse Facility",
    category: "Warehouse",
    description: "Modern humidity-controlled warehousing in Maharashtra designed for safe storage of bulk grains and spices.",
    imageKey: "warehouse",
  },
  {
    id: "gal-2",
    title: "Automated Vacuum & Multi-Wall Packaging",
    category: "Packaging",
    description: "Hygienic food-grade packaging lines tailored for retail pouches and export-ready PP woven sacks.",
    imageKey: "collection",
  },
  {
    id: "gal-3",
    title: "Container Vessel Loading at JNPT Nhava Sheva",
    category: "Exports",
    description: "Heavy maritime container operations transferring Indian agro shipments onto international cargo carriers.",
    imageKey: "hero",
  },
  {
    id: "gal-4",
    title: "Sortex Cleaned Indian Spices & Grains",
    category: "Products",
    description: "Vibrant harvest of premium golden turmeric, bold black pepper, cumin seeds, and aged Basmati grains.",
    imageKey: "collection",
  },
  {
    id: "gal-5",
    title: "20ft & 40ft Reefer and Dry Containers",
    category: "Containers",
    description: "Supervised container stuffing and container seal verification prior to port customs clearance.",
    imageKey: "hero",
  },
  {
    id: "gal-6",
    title: "Laboratory Analytical & Moisture Testing",
    category: "Quality Inspection",
    description: "Rigorous pre-shipment quality inspection verifying purity, moisture tolerances, and seed count parameters.",
    imageKey: "warehouse",
  },
  {
    id: "gal-7",
    title: "Corporate Trade & Export Desk",
    category: "Office",
    description: "Executive offices and client consultation suite in Kolhapur, Maharashtra coordinating global trade operations.",
    imageKey: "warehouse",
  },
  {
    id: "gal-8",
    title: "Bulk Grain Palletizing & Pre-Stowage",
    category: "Warehouse",
    description: "Precision palletization ensuring optimal cargo stabilization during maritime container voyages.",
    imageKey: "warehouse",
  },
  {
    id: "gal-9",
    title: "Custom Private Label Export Sacks",
    category: "Packaging",
    description: "Client-branded packaging customized with international nutritional facts and destination barcodes.",
    imageKey: "collection",
  },
];
