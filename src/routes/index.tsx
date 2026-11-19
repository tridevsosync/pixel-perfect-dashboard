import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Factory,
  FileText,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  ShieldCheck,
  Ship,
  Sparkles,
  Sprout,
  Star,
  Store,
  Truck,
  Utensils,
} from "lucide-react";
import heroAsset from "@/assets/export-hero.jpg.asset.json";
import warehouseAsset from "@/assets/quality-warehouse.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand, ProductCard, SiteShell, InquiryForm } from "@/components/site";
import {
  products,
  processSteps,
  whyChooseUs,
  industriesServed,
  countryList,
  testimonials,
  blogs,
  faqList,
  companyInfo,
} from "@/mock/data";
import { useDemo } from "@/mock/store";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Connecting Indian Excellence to Global Markets",
      "Akvera Universal connects global buyers with carefully sourced Indian agro products, spices, grains, and pulses through trusted, transparent export partnerships."
    ),
  component: HomePage,
});

function HomePage() {
  const { openQuote } = useDemo();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroUrl =
    typeof heroAsset === "object" && heroAsset && "url" in heroAsset
      ? (heroAsset as { url: string }).url
      : String(heroAsset);

  const warehouseUrl =
    typeof warehouseAsset === "object" && warehouseAsset && "url" in warehouseAsset
      ? (warehouseAsset as { url: string }).url
      : String(warehouseAsset);

  // Auto-slide testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts =
    activeCategory === "All"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory).slice(0, 8);

  const industryIcons = [Factory, Store, Package, Truck, Globe2, Factory, Utensils, Utensils];

  return (
    <SiteShell>
      {/* 1. HERO SECTION */}
      <section className="hero relative overflow-hidden" aria-labelledby="home-title">
        <img
          className="hero-photo"
          src={heroUrl}
          alt="International container vessel and agricultural export logistics from India"
          width={1800}
          height={1200}
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80";
          }}
        />
        {/* World Map Pattern & Gradient Overlay */}
        <div className="hero-shade absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

        <div className="container-wide hero-content relative z-10 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column */}
            <div className="reveal lg:col-span-7">
              <div className="hero-label inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-accent">
                <Globe2 size={14} /> CONNECTING INDIAN EXCELLENCE TO GLOBAL MARKETS
              </div>
              <h1 id="home-title" className="mt-4 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
                Connecting Indian Excellence to <em className="not-italic text-accent">Global Markets.</em>
              </h1>
              <p className="hero-copy mt-5 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                Premium agro exports delivered with trust, quality, and transparency. Sourcing authentic Basmati
                rice, golden wheat, sortex spices, and pulses straight from origin in Kolhapur, Maharashtra to over
                35 nations worldwide.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => openQuote()}
                  className="h-12 px-7 text-xs font-semibold shadow-lg"
                >
                  Get a Quote <ArrowRight size={16} />
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="h-12 px-7 text-xs font-semibold">
                  <Link to="/products">
                    Explore Products <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>

              <div className="hero-trust mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-accent" /> Carefully Sourced
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-accent" /> Sortex Quality Checked
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-accent" /> Transparent Communication
                </span>
              </div>
            </div>

            {/* Right Column: Beautiful Export Illustration Card & Key Numbers */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-accent text-primary">
                      <Ship size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">Global Logistics</p>
                      <h2 className="text-sm font-semibold text-white">Akvera Universal Export Hub</h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                    <span className="size-1.5 animate-ping rounded-full bg-emerald-400" /> ACTIVE
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-accent">35+</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-300">Countries Served</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">100+</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-300">Products Exported</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-white">500+</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-300">Clients Globally</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-extrabold text-accent">15+</p>
                    <p className="mt-1 text-[11px] font-medium text-slate-300">Years of Experience</p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-accent" /> Nhava Sheva (JNPT) & Mundra
                    </span>
                    <span className="text-[10px] text-accent">Weekly Sailings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave / Scroll Indicator */}
        <a
          className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[9px] font-semibold tracking-widest text-slate-300 transition-opacity hover:opacity-100"
          href="#about-section"
          aria-label="Scroll down to discover Akvera"
        >
          <span>DISCOVER AKVERA</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </section>

      {/* 2. STATS SECTION (ANIMATED COUNTERS) */}
      <section className="stats-strip border-b bg-card">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
          <div className="stat flex items-center gap-4 p-6">
            <span className="stat-icon grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <PackageCheck size={22} />
            </span>
            <div>
              <p className="stat-number text-2xl font-bold sm:text-3xl">500+</p>
              <p className="stat-label text-xs font-medium text-muted-foreground">Satisfied Global Clients</p>
            </div>
          </div>
          <div className="stat flex items-center gap-4 p-6">
            <span className="stat-icon grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Globe2 size={22} />
            </span>
            <div>
              <p className="stat-number text-2xl font-bold sm:text-3xl">35+</p>
              <p className="stat-label text-xs font-medium text-muted-foreground">Export Destinations</p>
            </div>
          </div>
          <div className="stat flex items-center gap-4 p-6">
            <span className="stat-icon grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Sprout size={22} />
            </span>
            <div>
              <p className="stat-number text-2xl font-bold sm:text-3xl">100+</p>
              <p className="stat-label text-xs font-medium text-muted-foreground">Premium Agro Products</p>
            </div>
          </div>
          <div className="stat flex items-center gap-4 p-6">
            <span className="stat-icon grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck size={22} />
            </span>
            <div>
              <p className="stat-number text-2xl font-bold sm:text-3xl">99%</p>
              <p className="stat-label text-xs font-medium text-muted-foreground">Quality & Delivery Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="section-band" id="about-section">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                className="about-photo w-full rounded-2xl object-cover shadow-xl"
                src={warehouseUrl}
                alt="Agricultural processing and quality inspection at Akvera Universal"
                width={1200}
                height={900}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80";
                }}
              />
              <div className="about-badge absolute -bottom-6 -left-6 rounded-2xl border-4 border-background bg-primary p-6 text-primary-foreground shadow-2xl">
                <span className="block font-display text-2xl font-bold text-accent">Mr. Avinash Yadav</span>
                <span className="mt-1 block text-xs font-medium opacity-90">Founder & Managing Director</span>
                <p className="mt-2 text-[11px] leading-relaxed opacity-75">
                  “Built on trust, transparency, and quality straight from Indian origin.”
                </p>
              </div>
            </div>

            <div>
              <div className="eyebrow flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                About Akvera Universal
              </div>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">
                A Dependable Bridge Between Indian Markets and the World.
              </h2>
              <p className="section-copy mt-5 text-sm leading-relaxed text-muted-foreground">
                Akvera Universal Exporter was built on a simple belief that trade works best when it's built on trust,
                transparency, and quality. Based in Kolhapur, Maharashtra, India, we specialize in sourcing and
                exporting premium agro products, connecting buyers across the globe with authentic, high-quality
                goods straight from their origin.
              </p>
              <p className="section-copy mt-3 text-sm leading-relaxed text-muted-foreground">
                Every product we export goes through careful selection, optical Sortex cleaning, and strict quality
                checks, ensuring that what reaches our clients reflects the standards we stand behind.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-foreground">Our Mission</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    To deliver authentic Indian agricultural commodities globally with unwavering integrity and
                    punctual logistics.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-foreground">Our Vision</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    To be the most trusted international partner for Indian spices, grains, pulses, and organic
                    produce worldwide.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="h-11 px-6 font-semibold">
                  <Link to="/about">
                    Discover Our Full Story <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Why Choose Us Cards */}
          <div className="mt-20">
            <div className="text-center">
              <p className="eyebrow mx-auto justify-center">Why Global Buyers Partner With Us</p>
              <h3 className="text-2xl font-bold sm:text-3xl">Engineered for International Reliability</h3>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-full bg-secondary text-primary font-bold">
                      ✓
                    </span>
                    <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                      {card.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS SECTION */}
      <section className="section-band bg-muted/40" id="our-products">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Carefully Selected at Origin</p>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">The Finest of Indian Agriculture</h2>
              <p className="section-copy mt-2 max-w-xl text-xs sm:text-sm">
                Aromatic Basmati rice, high-protein Sharbati wheat, export-grade spices, fresh produce, and organic
                pulses cleaned to Sortex 99.5%+ standards.
              </p>
            </div>
            <Button variant="outline" asChild className="font-semibold">
              <Link to="/products">
                View All 16+ Products <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-semibold"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="section-band">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Tailored Supply Solutions</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Industries We Serve</h2>
            <p className="section-copy mx-auto mt-3 max-w-xl text-xs sm:text-sm">
              Providing flexible pack sizes, private labelling, and scheduled container dispatches for commercial
              partners across key market sectors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesServed.map((ind, i) => {
              const Icon = industryIcons[i % industryIcons.length];
              return (
                <article
                  key={ind.name}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  <div className="feature-icon mb-4 grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ind.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. EXPORT PROCESS TIMELINE */}
      <section className="section-band bg-muted/40" id="export-process">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">A Transparent Journey</p>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">From Farm Origin to Global Port</h2>
              <p className="section-copy mt-2 max-w-xl text-xs sm:text-sm">
                Every consignment follows a strict 7-stage quality and logistics protocol overseen by our dedicated
                trade desk.
              </p>
            </div>
            <Button variant="outline" asChild className="font-semibold">
              <Link to="/export-process">
                Detailed Process Guide <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Timeline Steps Buttons */}
            <div className="space-y-3 lg:col-span-5">
              {processSteps.map(([title, desc], idx) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                    activeStep === idx
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`grid size-7 place-items-center rounded-full text-xs font-bold ${
                        activeStep === idx ? "bg-accent text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{title}</p>
                      <p className={`line-clamp-1 text-xs ${activeStep === idx ? "opacity-85" : "text-muted-foreground"}`}>
                        {desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} className={activeStep === idx ? "text-accent" : "text-muted-foreground"} />
                </button>
              ))}
            </div>

            {/* Active Step Showcase */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-2xl border bg-card p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
                    STAGE 0{activeStep + 1} OF 07
                  </div>
                  <h3 className="mt-4 text-2xl font-bold sm:text-3xl text-foreground">
                    {processSteps[activeStep][0]}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {processSteps[activeStep][1]}
                  </p>
                  <div className="mt-6 space-y-3 border-t pt-5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Check className="size-4 text-primary" /> Full documentation and milestone updates shared with buyer
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="size-4 text-primary" /> Pre-shipment batch testing by SGS / certified laboratory
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="size-4 text-primary" /> Clean container stuffing supervised at port terminals
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between rounded-xl bg-muted/60 p-4">
                  <span className="text-xs font-semibold text-foreground">Need clarification on export procedures?</span>
                  <Button size="sm" onClick={() => openQuote()} className="font-semibold text-xs">
                    Ask Mr. Avinash Yadav
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUALITY ASSURANCE WITH ANIMATED BARS */}
      <section className="section-band" id="quality">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Zero Defect Commitment</p>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Quality Assurance Without Compromise</h2>
              <p className="section-copy mt-4 text-sm leading-relaxed text-muted-foreground">
                International trade requires absolute reliability. Our multi-stage inspection begins at the field
                level and concludes with sealed container inspection prior to loading onto ocean carriers.
              </p>

              {/* Quality Metrics with Progress Bars */}
              <div className="mt-8 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Sortex Optical Purity Standard</span>
                    <span className="text-primary">99.8%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all duration-1000 w-[99.8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Moisture & Humidity Control Tolerance</span>
                    <span className="text-primary">100% Compliant</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-leaf transition-all duration-1000 w-[100%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Microbiological & Aflatoxin Screening</span>
                    <span className="text-primary">Zero Tolerance / Pass</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all duration-1000 w-[100%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold">
                    <span>Phytosanitary & Fumigation Protocol</span>
                    <span className="text-primary">100% Certified</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-accent transition-all duration-1000 w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="outline" className="font-semibold">
                  <Link to="/quality">
                    Explore Quality Certificates & Lab Tests <ArrowRight size={15} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quality Certifications Card */}
            <div className="rounded-2xl border bg-card p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground">International Export Standards</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Consignments conform to destination-specific food safety and customs requirements.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["FSSAI Certified", "Food Safety and Standards Authority of India Registration"],
                  ["APEDA Registered", "Agricultural and Processed Food Products Export Authority"],
                  ["Spices Board of India", "Mandatory quality certification for whole & ground spices"],
                  ["ISO 22000 Standards", "International food safety and hygiene management"],
                  ["US FDA Compliant", "Registration & FSMA aligned inspection reports"],
                  ["Non-GMO Declaration", "Pure authentic Indian agricultural seed origins"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-lg border bg-muted/40 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-primary">
                      <ShieldCheck size={16} /> {title}
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COUNTRIES WE EXPORT (INTERACTIVE WORLD MAP STYLE DESIGN) */}
      <section className="section-band bg-muted/40" id="countries">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Worldwide Network</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Countries We Export To</h2>
            <p className="section-copy mx-auto mt-3 max-w-xl text-xs sm:text-sm">
              Delivering containerized agro cargo from Indian origin to major seaports across 6 continents.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* Country Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8">
              {countryList.map((country) => (
                <button
                  key={country.id}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                    selectedCountry.id === country.id
                      ? "border-primary bg-primary text-primary-foreground shadow-md scale-[1.02]"
                      : "border-border bg-card text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider">{country.code}</span>
                    <Globe2 size={16} className={selectedCountry.id === country.id ? "text-accent" : "text-muted-foreground"} />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-bold">{country.name}</p>
                    <p className={`mt-0.5 text-[10px] ${selectedCountry.id === country.id ? "opacity-80" : "text-muted-foreground"}`}>
                      {country.region}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Country Details Card */}
            <div className="lg:col-span-4">
              <div className="h-full rounded-2xl border bg-card p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase text-primary">Destination Profile</span>
                      <h3 className="text-xl font-bold">{selectedCountry.name}</h3>
                    </div>
                    <span className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-bold text-primary">
                      {selectedCountry.code}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4 text-xs">
                    <div>
                      <span className="font-semibold text-muted-foreground">Primary Seaports:</span>
                      <p className="mt-1 font-medium text-foreground">{selectedCountry.ports.join(", ")}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-muted-foreground">Estimated Ocean Transit:</span>
                      <p className="mt-1 font-medium text-primary">{selectedCountry.transitDays} from JNPT / Mundra</p>
                    </div>

                    <div>
                      <span className="font-semibold text-muted-foreground">Top Exported Commodities:</span>
                      <p className="mt-1 font-medium text-foreground">{selectedCountry.topProducts.join(", ")}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-muted-foreground">Trade Overview:</span>
                      <p className="mt-1 text-muted-foreground leading-relaxed">{selectedCountry.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t pt-5">
                  <Button
                    onClick={() => openQuote(`Export to ${selectedCountry.name}`)}
                    className="w-full font-semibold"
                  >
                    Request Shipping Rates for {selectedCountry.name} <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS (AUTO SLIDING ANIMATION) */}
      <section className="section-band" id="testimonials">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Client Trust Worldwide</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">What Our Global Partners Say</h2>
            <p className="section-copy mx-auto mt-2 max-w-xl text-xs sm:text-sm">
              Real commercial partnerships built on transparent contracts, reliable grain specifications, and clear communication.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-2xl border bg-card p-8 shadow-lg transition-all duration-500">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-5 text-base sm:text-lg leading-relaxed text-foreground font-medium">
                “{testimonials[activeTestimonial].text}”
              </blockquote>

              <div className="mt-8 flex items-center justify-between border-t pt-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-secondary font-bold text-primary">
                    {testimonials[activeTestimonial].avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonials[activeTestimonial].role} · {testimonials[activeTestimonial].company} (
                      {testimonials[activeTestimonial].country})
                    </p>
                  </div>
                </div>

                {/* Testimonial Selectors */}
                <div className="flex gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`size-2.5 rounded-full transition-all ${
                        activeTestimonial === idx ? "w-6 bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BLOG SECTION */}
      <section className="section-band bg-muted/40" id="blog">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Agro Export Intelligence</p>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Latest Market Insights & Guides</h2>
              <p className="section-copy mt-2 max-w-xl text-xs sm:text-sm">
                Practical guides, crop yield forecasts, ocean container packaging techniques, and global trade updates.
              </p>
            </div>
            <Button variant="outline" asChild className="font-semibold">
              <Link to="/blog">
                View All Articles <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span className="rounded bg-secondary px-2.5 py-0.5 text-primary">{blog.category}</span>
                    <span className="text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug transition-colors group-hover:text-primary">
                    <Link to="/blog/$slug" params={{ slug: blog.id }}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{blog.intro}</p>
                </div>

                <div className="mt-5 border-t pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">{blog.date}</span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: blog.id }}
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION (15 QUESTIONS) */}
      <section className="section-band" id="faq">
        <div className="container-wide max-w-4xl">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Got Questions?</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="section-copy mx-auto mt-2 max-w-xl text-xs sm:text-sm">
              Everything you need to know about purchasing, packaging, inspection, and ocean shipping with Akvera Universal.
            </p>
          </div>

          <div className="mt-10 divide-y rounded-2xl border bg-card p-6 shadow-sm">
            {faqList.slice(0, 8).map((faq, i) => (
              <div key={faq.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-foreground transition-colors hover:text-primary"
                  aria-expanded={activeFaq === i}
                >
                  <span>
                    <span className="mr-2 text-primary font-semibold">Q{i + 1}.</span> {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                      activeFaq === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {activeFaq === i && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm pl-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild className="font-semibold">
              <Link to="/faq">
                View All 15 Frequently Asked Questions <ArrowRight size={15} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION WITH GOOGLE MAP PLACEHOLDER */}
      <section className="section-band bg-muted/40" id="contact">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Details & Map */}
            <div className="lg:col-span-5">
              <p className="eyebrow">Get In Touch</p>
              <h2 className="section-title text-3xl font-extrabold sm:text-4xl">Connect With Our Export Desk</h2>
              <p className="section-copy mt-3 text-xs leading-relaxed sm:text-sm">
                Discuss volume contracts, forward pricing, or specific commodity varieties directly with Mr. Avinash Yadav and our commercial trade team.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-xl border bg-card p-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-foreground">Registered Office & Sourcing Base</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border bg-card p-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <Phone size={18} />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-foreground">Direct Export Helpline / WhatsApp</h3>
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                      className="mt-1 block text-xs font-semibold text-primary hover:underline"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border bg-card p-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <Mail size={18} />
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-foreground">Official Commercial Email</h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="mt-1 block text-xs font-semibold text-primary hover:underline"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder Card */}
              <div className="mt-6 overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="relative aspect-[2/1] w-full bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="size-8 text-primary animate-bounce mb-2" />
                  <p className="text-xs font-bold text-foreground">Kolhapur, Maharashtra, India</p>
                  <p className="text-[10px] text-muted-foreground">Premier Agricultural Corridor & Logistics Link</p>
                  <a
                    href="https://www.google.com/maps/search/Kolhapur+Maharashtra+India"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 rounded bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Open Live Interactive Map ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm lg:col-span-7">
              <h3 className="text-2xl font-bold text-foreground">Send an Official Export Enquiry</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Our export desk responds with proforma specifications, packaging advice, and indicative freight rates within 24 hours.
              </p>
              <div className="mt-6">
                <InquiryForm kind="contact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
