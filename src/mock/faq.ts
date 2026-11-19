export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: "General" | "Quality" | "Shipping" | "Ordering";
};

export const faqList: FAQItem[] = [
  {
    id: 1,
    question: "What agricultural products does Akvera Universal specialize in exporting?",
    answer: "We source and export a premium selection of Indian agro commodities including Basmati and Non-Basmati Rice, Wheat (Sharbati & Milling), Yellow Maize, Indian Spices (Turmeric, Guntur Red Chilli, Cumin, Black Pepper, Cardamom), Pulses & Lentils, Fresh Red Onions, Garlic, Groundnuts (Peanuts), Millets, Cane Sugar (ICUMSA 45), and certified organic pulses.",
    category: "General",
  },
  {
    id: 2,
    question: "How can I request an official price quotation or proforma invoice?",
    answer: "You can click any 'Get Quote' button on our website, fill out our quick enquiry form, or write directly to info@akverauniversal.com. Please include the product name, target volume/quantity (e.g., in metric tonnes or container loads), desired packaging, destination port, and preferred Incoterm (FOB, CFR, or CIF). Our team responds within 24 hours.",
    category: "Ordering",
  },
  {
    id: 3,
    question: "Which countries and global ports do you currently export to?",
    answer: "Our established shipping network spans over 35 countries across the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait), Southeast Asia (Singapore, Malaysia, Indonesia), Europe (United Kingdom, Germany, France, Italy, Netherlands), North America (USA, Canada), Africa (South Africa), and Australia. Shipments depart primarily through Nhava Sheva (JNPT) and Mundra ports.",
    category: "Shipping",
  },
  {
    id: 4,
    question: "What is the Minimum Order Quantity (MOQ) for FCL and LCL shipments?",
    answer: "Our standard commercial MOQ is one 20-foot Full Container Load (FCL), which typically holds 18 to 26 metric tonnes depending on the commodity density. For high-value spices, air-freight consignments or consolidated mixed-container orders can be accommodated by prior arrangement.",
    category: "Ordering",
  },
  {
    id: 5,
    question: "Can Akvera Universal provide customized packaging and buyer private-labelling?",
    answer: "Yes, absolutely. We offer complete custom packaging solutions ranging from 500g and 1kg retail consumer pouches to 5kg, 10kg, 25kg, and 50kg PP, BOPP, and jute bags, as well as 1-tonne jumbo bags. We can print your company logo, destination barcodes, nutritional labeling, and brand artwork according to your country's regulatory guidelines.",
    category: "Ordering",
  },
  {
    id: 6,
    question: "How do you ensure strict product quality and international food safety?",
    answer: "Quality assurance begins at origin through direct farm-gate procurement and state-of-the-art optical Sortex cleaning. Prior to dispatch, each lot undergoes moisture verification, foreign matter screening, and microbiological testing. We also coordinate independent pre-shipment inspections with globally recognized agencies like SGS, Bureau Veritas, or Geo-Chem as requested by the buyer.",
    category: "Quality",
  },
  {
    id: 7,
    question: "Are commercial product samples available before signing a purchase contract?",
    answer: "Yes, we gladly provide genuine product samples to verified commercial importers, wholesalers, and food manufacturers. Samples are dispatched via DHL or FedEx international courier, accompanied by a preliminary specification sheet.",
    category: "Quality",
  },
  {
    id: 8,
    question: "What international shipping terms (Incoterms) and transport modes do you support?",
    answer: "We support standard ICC Incoterms 2020 including FOB (Free On Board Indian ports), CFR (Cost and Freight), and CIF (Cost, Insurance, and Freight destination port). Most agricultural cargo is transported via ocean container freight in 20ft dry containers, 40ft high-cube containers, or refrigerated (reefer) containers for fresh produce.",
    category: "Shipping",
  },
  {
    id: 9,
    question: "What is the typical lead time from contract confirmation to vessel departure?",
    answer: "Standard dispatch lead time is between 10 to 18 business days from receipt of the advance payment or confirmed Letter of Credit (LC). This timeframe covers product grading, custom bagging, port drayage, container stuffing, and customs clearance.",
    category: "Shipping",
  },
  {
    id: 10,
    question: "What documentation accompanies an export shipment?",
    answer: "Every shipment is accompanied by a full set of certified export documents: Commercial Invoice, Packing List, Clean On-Board Ocean Bill of Lading, Certificate of Origin (Chamber of Commerce or COO), Phytosanitary Certificate issued by Indian Plant Quarantine, Certificate of Fumigation, and Independent Quality & Weight Inspection Certificate.",
    category: "Shipping",
  },
  {
    id: 11,
    question: "Do you supply certified organic and pesticide-tested agro commodities?",
    answer: "Yes, we supply certified organic grains, pulses, and spices sourced from certified organic farms conforming to NPOP (India Organic), USDA Organic, and EU Organic standards. Certificates of Analysis (COA) detailing residue testing are provided with each organic batch.",
    category: "Quality",
  },
  {
    id: 12,
    question: "What payment terms and currencies does Akvera Universal accept?",
    answer: "We generally accept Irrevocable Documentary Letter of Credit (LC at sight) issued by a prime international bank, or Telegraphic Transfer (T/T) with an advance deposit and balance against copy of the original shipping documents. Quotations and transactions are conducted in US Dollars (USD), Euros (EUR), or UAE Dirhams (AED).",
    category: "Ordering",
  },
  {
    id: 13,
    question: "How can clients track shipment milestones and container transit?",
    answer: "Upon vessel departure, our export logistics desk transmits the container numbers, shipping line booking reference, and vessel tracking link. We issue regular milestone notices for container gate-in, vessel departure, transshipment hubs, and estimated date of arrival (ETA) at the destination port.",
    category: "Shipping",
  },
  {
    id: 14,
    question: "Do you enter into annual supply contracts with wholesalers and manufacturers?",
    answer: "Yes. Many of our established clients in the Gulf, Southeast Asia, and Europe maintain long-term annual or seasonal supply agreements with us. This allows them to lock in guaranteed quantity allocations and benefit from forward-contract pricing stability.",
    category: "General",
  },
  {
    id: 15,
    question: "Where is Akvera Universal based and how can we connect with executive leadership?",
    answer: "Akvera Universal is headquartered in Kolhapur, Maharashtra, India — situated centrally in one of India's richest agricultural production zones with close transit access to Mumbai's international shipping ports. You can contact our founder, Mr. Avinash Yadav, directly by phone or WhatsApp at +91 902 1300 674, or schedule an in-person or video consultation via info@akverauniversal.com.",
    category: "General",
  },
];

export const faqs: [string, string][] = faqList.map((f) => [f.question, f.answer]);
