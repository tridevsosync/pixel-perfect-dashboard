export type Product = { id: string; name: string; category: string; origin: string; description: string; packaging: string; image: number; status: boolean };
export const products: Product[] = [
  ["Basmati Rice", "Grains & Cereals", "Punjab & Haryana", "Aromatic, long-grain basmati, carefully aged for exceptional taste and texture."],
  ["Premium Wheat", "Grains & Cereals", "Madhya Pradesh", "Golden, nutrient-rich wheat sourced from India's finest growing regions."],
  ["Yellow Maize", "Grains & Cereals", "Maharashtra", "Uniform golden kernels, selected for food processing and animal feed."],
  ["Indian Spices", "Spices", "Across India", "Authentic, vibrant spices with rich aromas and consistent quality."],
  ["Turmeric", "Spices", "Maharashtra", "Naturally vibrant turmeric with a rich aroma, available whole or ground."],
  ["Red Chilli", "Spices", "Andhra Pradesh", "Sun-dried chillies with bold colour and a distinctive, full-bodied heat."],
  ["Cumin Seeds", "Spices", "Gujarat", "Clean, aromatic cumin seeds, carefully sorted for international buyers."],
  ["Black Pepper", "Spices", "Kerala", "Full-bodied peppercorns from the lush spice-growing regions of southern India."],
  ["Indian Pulses", "Pulses & Legumes", "Madhya Pradesh", "Protein-rich lentils and pulses, expertly graded and hygienically packed."],
  ["Fresh Red Onion", "Fresh Produce", "Maharashtra", "Firm, fresh red onions with excellent shelf life and consistent sizing."],
  ["Fresh Garlic", "Fresh Produce", "Madhya Pradesh", "Aromatic white garlic bulbs selected for freshness and uniform quality."],
  ["Groundnuts", "Pulses & Legumes", "Gujarat", "Premium groundnuts with excellent flavour, available shelled and unshelled."],
  ["Pearl Millets", "Grains & Cereals", "Rajasthan", "Wholesome millets, sustainably sourced and carefully cleaned."],
  ["Refined Sugar", "Other Products", "Maharashtra", "Fine white sugar with uniform crystal size and dependable quality."],
  ["Organic Mung Beans", "Organic", "Maharashtra", "Naturally grown mung beans, responsibly sourced from trusted growers."],
  ["Indian Tea", "Other Products", "Assam", "Rich, fragrant tea leaves sourced from renowned Indian tea estates."],
].map((p, i) => ({ id: p[0].toLowerCase().replaceAll(" ", "-"), name: p[0], category: p[1], origin: p[2], description: p[3], packaging: "5 kg / 25 kg / 50 kg · Custom packaging", image: i, status: true }));
export const countries = ["UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Singapore", "Malaysia", "United Kingdom", "USA", "Canada", "Australia", "South Africa", "Germany", "France", "Italy"];
export const processSteps = [
  ["Sourcing", "Partnering with trusted growers at the origin."],
  ["Quality inspection", "Every batch checked for purity and consistency."],
  ["Packaging", "Secure packaging tailored to your requirements."],
  ["Documentation", "Clear, complete export and shipping documents."],
  ["Container loading", "Careful handling and supervised loading."],
  ["Shipping", "Reliable freight partners and shipment updates."],
  ["Delivery", "Your products, delivered with care."],
];
export const testimonials = [
  { name: "Ahmed Al Mansoori", country: "United Arab Emirates", role: "Food importer", text: "Consistent quality, clear communication, and deliveries we can count on. Akvera has become a trusted part of our supply chain." },
  { name: "Sarah Mitchell", country: "United Kingdom", role: "Wholesale distributor", text: "Their attention to product quality and packaging really stands out. An excellent partner for sourcing authentic Indian agro products." },
  { name: "Daniel Tan", country: "Singapore", role: "Procurement manager", text: "From our first enquiry to our latest shipment, the team has been professional, responsive, and genuinely committed to our business." },
];
export const blogs = [
  { id: "indian-agro-exports", title: "Why the world is choosing Indian agro products", category: "Global Trade", date: "12 November 2026", image: "products", intro: "From aromatic basmati to exceptional spices, India brings diversity, quality, and heritage to the global table.", body: "India's diverse agricultural landscape supports a remarkable range of products. For international buyers, this means access to distinctive varieties, experienced growers, and well-established sourcing networks. Choosing the right export partner begins with clear specifications, transparent communication, and careful attention to quality. At Akvera Universal, we bring these principles together, helping buyers select products that suit their markets and requirements." },
  { id: "export-packaging", title: "Better packaging. Fresher products. Stronger partnerships.", category: "Packaging", date: "5 November 2026", image: "warehouse", intro: "A practical look at protecting agricultural products throughout their export journey.", body: "Export packaging should protect against moisture, handling damage, and contamination. Selecting the appropriate material and pack size depends on the product, destination, and journey. Grain sacks, food-grade liners, and well-ventilated produce packaging each have different roles. Buyers should agree on labelling and packaging specifications before shipment, including batch information and destination requirements." },
  { id: "export-guide", title: "Your guide to a seamless export journey", category: "Export Guide", date: "28 October 2026", image: "ship", intro: "The key steps that take a product from Indian farms to your doorstep.", body: "A successful shipment starts with a detailed enquiry. Share the product, quantity, quality parameters, packaging, and destination. Your export partner can then confirm availability and prepare a quotation. Once terms are agreed, sourcing, inspection, packing, and documentation begin. Regular progress updates and a reliable logistics partner help make the journey transparent from order to delivery." },
];
export const faqs = [
  ["What products does Akvera Universal export?", "We source and export rice, wheat, maize, spices, pulses, fresh produce, groundnuts, millets, sugar, and other agricultural products from India."],
  ["How can I request a quotation?", "Use the Get Quote button, or contact us at info@akverauniversal.com with your product, quantity, packaging, and destination requirements."],
  ["Which countries do you serve?", "Our sample destination network covers the Middle East, Asia, Europe, North America, Africa, and Australia. Contact us to discuss your destination."],
  ["What is the minimum order quantity?", "Minimum order quantities vary by product and packaging. Our team will confirm the suitable order size in your quotation."],
  ["Can you provide custom packaging?", "Yes. We can discuss pack sizes, materials, private labelling, and destination-specific requirements."],
  ["How do you ensure product quality?", "Products undergo careful selection, batch inspections, packaging checks, and specification reviews before dispatch."],
  ["Are product samples available?", "Sample availability, shipping arrangements, and costs can be discussed with our team before a bulk order."],
  ["What shipping options are available?", "Sea freight is commonly used for bulk shipments. Other arrangements depend on product, order size, and destination."],
  ["How long does delivery take?", "Lead times depend on sourcing, packaging, shipment availability, and the destination. An estimated timeline is included in your quotation."],
  ["What documents accompany a shipment?", "Documentation is arranged according to the shipment and destination requirements. These may include invoices, packing lists, and origin documentation."],
  ["Do you offer organic products?", "Organic sourcing options can be discussed. Any specific certification requirement must be confirmed before placing an order."],
  ["What payment terms do you offer?", "Payment terms are agreed individually during the quotation and order confirmation process."],
  ["Can I track my shipment?", "Our team provides shipping details and progress updates through the shipment journey."],
  ["Do you work with distributors and wholesalers?", "Yes. We welcome enquiries from importers, distributors, wholesalers, food manufacturers, and retailers."],
  ["Where is your company based?", "Akvera Universal is based in Kolhapur, Maharashtra, India. Contact Mr. Avinash Yadav on +91 902 1300 674."],
];
export const modules = ["Products", "Categories", "Countries", "Export Destinations", "Gallery", "Blogs", "Testimonials", "FAQs", "Quality Certificates", "Export Process", "Services", "Team Members", "Homepage Banner", "Hero Slider", "Contact Requests", "Quote Requests", "Newsletter Subscribers", "Site Settings", "Profile", "Change Password", "Media Library", "SEO Settings", "Menu Management", "Footer Management", "Theme Settings", "Analytics Dashboard", "Activity Logs", "Notifications"];
export const moduleSlug = (name: string) => name.toLowerCase().replaceAll(" ", "-");
export type DemoRow = { id: string; name: string; detail: string; status: boolean };
export const initialModules: Record<string, DemoRow[]> = Object.fromEntries(modules.map(name => {
  let rows: string[][] = [[`${name} sample`, "Demo content for Akvera Universal"]];
  if (name === "Categories") rows = [...new Set(products.map(p => p.category))].map(c => [c, "Product category"]);
  if (["Countries", "Export Destinations"].includes(name)) rows = countries.map(c => [c, "International export market"]);
  if (name === "Blogs") rows = blogs.map(b => [b.title, b.intro]);
  if (name === "FAQs") rows = faqs;
  if (name === "Testimonials") rows = testimonials.map(t => [t.name, t.text]);
  if (name === "Export Process") rows = processSteps;
  if (name === "Team Members") rows = [["Mr. Avinash Yadav", "Founder · Akvera Universal"]];
  if (name === "Services") rows = [["Agro sourcing", "Premium product sourcing"], ["Export logistics", "End-to-end shipment coordination"], ["Custom packaging", "Packaging for your market"]];
  if (name === "Contact Requests") rows = [["James Wilson", "Rice enquiry · United Kingdom"], ["Fatima Hassan", "Spices enquiry · UAE"]];
  if (name === "Quote Requests") rows = [["Al Noor Trading", "25 MT Basmati Rice · Dubai"], ["Pacific Foods", "10 MT Indian Spices · Singapore"]];
  if (name === "Newsletter Subscribers") rows = [["buyer@example.com", "Sample subscriber"]];
  if (name === "Quality Certificates") rows = [["Product specification review", "Sample quality document · Not a verified certificate"], ["Batch inspection report", "Sample inspection document"]];
  if (name === "Gallery" || name === "Media Library") rows = [["Quality inspection", "Warehouse image"], ["Global shipping", "Cargo ship image"], ["Product collection", "Indian agro products"]];
  if (name === "Notifications") rows = [["New product enquiry", "A sample enquiry was received"], ["Shipment update", "Sample shipment ready for dispatch"]];
  if (name === "Activity Logs") rows = [["Product catalogue updated", "Demo administrator · Today"], ["Quote request reviewed", "Demo administrator · Yesterday"]];
  return [moduleSlug(name), rows.map((r,i) => ({ id: `${moduleSlug(name)}-${i}`, name: r[0], detail: r[1], status: true }))];
}));