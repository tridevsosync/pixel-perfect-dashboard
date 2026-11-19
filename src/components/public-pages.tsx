import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Factory,
  FileText,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Ship,
  Sparkles,
  Sprout,
  Star,
  Store,
  Truck,
  Utensils,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  CtaBand,
  InquiryForm,
  Modal,
  PageBanner,
  ProductCard,
  ProductPhoto,
  SiteShell,
  TestimonialCard,
} from "./site";
import {
  blogs,
  countries,
  countryList,
  faqList,
  galleryItems,
  processSteps,
  teamMembers,
  testimonials,
  whyChooseUs,
  industriesServed,
  companyInfo,
} from "@/mock/data";
import { useDemo } from "@/mock/store";
import heroAsset from "@/assets/export-hero.jpg.asset.json";
import warehouseAsset from "@/assets/quality-warehouse.jpg.asset.json";
import collectionAsset from "@/assets/product-collection.jpg.asset.json";

const getAssetUrl = (asset: unknown, fallback: string) =>
  typeof asset === "object" && asset && "url" in asset
    ? (asset as { url: string }).url
    : String(asset || fallback);

export function AboutPage() {
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );

  return (
    <SiteShell>
      <PageBanner
        title="Our Story & Heritage"
        subtitle="Rooted in Indian agriculture. Built on transparent trade. Connected to the world."
      />

      {/* Company Story & Founder Message */}
      <section className="section-band">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={warehouse}
              alt="Careful agricultural quality inspection in Maharashtra"
              className="about-photo w-full rounded-2xl object-cover shadow-xl"
              width={1200}
              height={912}
              loading="lazy"
            />
            <div className="about-badge absolute -bottom-6 -left-6 rounded-2xl border-4 border-background bg-primary p-6 text-primary-foreground shadow-2xl">
              <span className="block font-display text-2xl font-bold text-accent">Mr. Avinash Yadav</span>
              <span className="mt-1 block text-xs font-semibold">Founder & Managing Director</span>
              <p className="mt-2 text-[11px] opacity-80">Kolhapur, Maharashtra, India</p>
            </div>
          </div>

          <div>
            <div className="eyebrow">Akvera Universal Exporter</div>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">
              A Dependable Bridge Between Indian Markets and the World.
            </h2>
            <p className="section-copy mt-5 text-sm leading-relaxed text-muted-foreground">
              {companyInfo.introduction}
            </p>
            <p className="section-copy mt-3 text-sm leading-relaxed text-muted-foreground">
              Operating out of Kolhapur, Maharashtra—a region renowned for agricultural abundance—we bridge the gap
              between diligent Indian farming communities and global food importers requiring consistent Sortex
              specifications, reliable moisture control, and international phytosanitary certificates.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card p-4 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Value</span>
                <h3 className="mt-1 text-sm font-bold">Uncompromising Quality</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sortex optical sorting and independent pre-shipment laboratory inspections on every batch.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-4 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Core Value</span>
                <h3 className="mt-1 text-sm font-bold">Absolute Transparency</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Clear proforma terms, transparent freight costs, and real-time container transit notices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="section-band bg-muted/40">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Guiding Principles</p>
            <h2 className="section-title text-3xl font-bold">Mission, Vision & Core Values</h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "Our Mission",
                "To connect international buyers with India's finest agricultural products through dependable sourcing, ethical contracts, and consistent quality.",
                Sprout,
              ],
              [
                "Our Vision",
                "To be the benchmark Indian agro-export partner recognized globally for integrity, traceability, and customer-first execution.",
                Globe2,
              ],
              [
                "Our Core Values",
                "Trust, Transparency, Quality, Timely Delivery, and Clear Communication at every touchpoint from farm gate to ocean vessel.",
                ShieldCheck,
              ],
            ].map(([title, desc, Icon]) => {
              const I = Icon as typeof Sprout;
              return (
                <div key={title as string} className="rounded-2xl border bg-card p-8 shadow-sm">
                  <div className="feature-icon mb-4 grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                    <I size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{title as string}</h3>
                  <p className="section-copy mt-3 text-xs leading-relaxed sm:text-sm">{desc as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="section-band">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Why Partner With Akvera</p>
            <h2 className="section-title text-3xl font-bold">Engineered for International Standards</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary text-primary font-bold">
                    ✓
                  </span>
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Executive Team */}
      <section className="section-band bg-muted/40">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Leadership Team</p>
            <h2 className="section-title text-3xl font-bold">The People Behind Akvera Universal</h2>
            <p className="section-copy mx-auto mt-2 max-w-xl text-xs sm:text-sm">
              Experienced agronomists, international trade specialists, and maritime logistics coordinators.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="grid size-14 place-items-center rounded-2xl bg-secondary font-bold text-lg text-primary">
                  {member.name
                    .split(" ")
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{member.name}</h3>
                <p className="text-xs font-semibold text-primary">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                <div className="mt-4 border-t pt-3 text-[11px] text-muted-foreground space-y-1">
                  <p className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-accent" /> {member.location}
                  </p>
                  <p className="text-accent font-medium">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function ProductsPage() {
  const { products } = useDemo();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("featured");

  const categories = ["All Products", ...new Set(products.map((p) => p.category))];

  let filtered = products.filter(
    (p) =>
      p.status &&
      (category === "All Products" || p.category === category) &&
      `${p.name} ${p.origin} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase())
  );

  if (sort === "name") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "category") {
    filtered = [...filtered].sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <SiteShell>
      <PageBanner
        title="Our Export Catalogue"
        subtitle="16+ premium agro commodities sourced directly from origin, Sortex graded, and packaged for global transit."
      />

      <section className="section-band">
        <div className="container-wide">
          {/* Controls Bar */}
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(c)}
                  className="text-xs font-semibold"
                >
                  {c}
                </Button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex flex-wrap gap-3 sm:w-auto">
              <label className="relative min-w-0 flex-1 sm:w-64">
                <Search className="absolute left-3 top-3 text-muted-foreground" size={15} />
                <input
                  className="field pl-9 text-xs"
                  aria-label="Search products"
                  placeholder="Search rice, spices, wheat..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>

              <select
                className="field w-36 text-xs"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured Order</option>
                <option value="name">Name A–Z</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          <p className="mb-6 text-xs font-medium text-muted-foreground">
            Displaying {filtered.length} export-grade products
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {!filtered.length && (
            <div className="py-20 text-center">
              <Search className="mx-auto mb-4 size-10 text-muted-foreground" />
              <h3 className="text-lg font-bold">No matching products found</h3>
              <p className="mt-1 text-xs text-muted-foreground">Try adjusting your search query or category filter.</p>
              <Button
                variant="link"
                onClick={() => {
                  setQuery("");
                  setCategory("All Products");
                }}
                className="mt-3 text-xs"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function ProductDetailPage({ slug }: { slug: string }) {
  const { products, openQuote } = useDemo();
  const p = products.find((item) => item.id === slug && item.status);
  const [activeTab, setActiveTab] = useState<"specifications" | "packaging" | "shipping" | "quality">(
    "specifications"
  );

  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );

  if (!p) {
    return (
      <SiteShell>
        <PageBanner
          title="Product Unavailable"
          subtitle="The requested agro commodity record could not be found or has been updated."
        />
        <div className="container-wide py-16 text-center">
          <Button asChild>
            <Link to="/products">
              Return to Products Catalogue <ArrowRight size={15} />
            </Link>
          </Button>
        </div>
      </SiteShell>
    );
  }

  function downloadBrochure() {
    if (!p) return;
    const content = `AKVERA UNIVERSAL EXPORTER
Kolhapur, Maharashtra, India
Phone: +91 902 1300 674 | Email: info@akverauniversal.com
Web: https://akverauniversal.com

============================================================
OFFICIAL PRODUCT SPECIFICATION SHEET
============================================================

Product Name: ${p.name}
Category: ${p.category}
Origin: ${p.origin}
Export Quality Grade: ${p.qualityGrade}
Availability: ${p.availability}
Shipping Terms: ${p.shippingTerms}
Packaging Options: ${p.packaging}
Export Destinations: ${p.countriesExported?.join(", ") || "Global Markets"}

DESCRIPTION:
${p.description}

TECHNICAL SPECIFICATIONS:
${p.specifications?.map((s) => `- ${s.label}: ${s.value}`).join("\n") || "Available on request"}

FOOD SAFETY & CERTIFICATION STANDARDS:
${p.qualityStandards}

For commercial contract enquiries, container bookings, and forward price quotes:
Contact: Mr. Avinash Yadav (Managing Director)
Direct Phone / WhatsApp: +91 902 1300 674
Email: info@akverauniversal.com
============================================================
Akvera Universal Exporter · Built on Trust, Transparency & Quality.
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Akvera-Universal-${p.id}-Specification.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const related = products.filter((x) => x.id !== slug && x.status).slice(0, 4);

  return (
    <SiteShell>
      <PageBanner
        title={p.name}
        subtitle={`${p.category} · Export grade commodity sourced from ${p.origin}`}
      />

      <section className="section-band">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          {/* Gallery View */}
          <div>
            <div className="overflow-hidden rounded-2xl border bg-muted shadow-md">
              <ProductPhoto product={p} className="!aspect-square w-full" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="overflow-hidden rounded-xl border">
                <ProductPhoto product={p} className="!aspect-video w-full" />
              </div>
              <div className="overflow-hidden rounded-xl border">
                <img src={warehouse} alt="Storage and inspection" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl border">
                <img src={hero} alt="Maritime export logistics" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Details & Specs */}
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
                {p.category}
              </span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                {p.qualityGrade}
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-foreground">{p.name}</h2>
            <p className="section-copy mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <dl className="mt-6 grid grid-cols-[130px_1fr] gap-3 border-y py-6 text-xs">
              <dt className="font-semibold text-muted-foreground">Origin</dt>
              <dd className="font-medium text-foreground">{p.origin}</dd>
              <dt className="font-semibold text-muted-foreground">Packaging</dt>
              <dd className="font-medium text-foreground">{p.packaging}</dd>
              <dt className="font-semibold text-muted-foreground">Availability</dt>
              <dd className="font-medium text-primary">{p.availability}</dd>
              <dt className="font-semibold text-muted-foreground">Shipping Terms</dt>
              <dd className="font-medium text-foreground">{p.shippingTerms}</dd>
              <dt className="font-semibold text-muted-foreground">Top Destinations</dt>
              <dd className="font-medium text-foreground">{p.countriesExported?.join(", ")}</dd>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => openQuote(p.name)} className="h-12 px-7 font-semibold">
                Request an Export Quote <ArrowRight size={16} />
              </Button>
              <Button variant="outline" onClick={downloadBrochure} className="h-12 px-6 font-semibold">
                <Download size={16} /> Download Brochure
              </Button>
            </div>

            {/* Interactive Tabs */}
            <div className="mt-10 border-b">
              <div className="flex flex-wrap gap-3">
                {[
                  ["specifications", "Specifications"],
                  ["packaging", "Packaging Options"],
                  ["shipping", "Shipping & Incoterms"],
                  ["quality", "Quality Standards"],
                ].map(([tabKey, label]) => (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey as typeof activeTab)}
                    className={`border-b-2 pb-3 text-xs font-bold transition-colors ${
                      activeTab === tabKey
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border bg-card p-6 shadow-sm">
              {activeTab === "specifications" && (
                <div>
                  <h3 className="text-sm font-bold text-foreground">Technical Crop Specifications</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
                    {p.specifications?.map((spec) => (
                      <div key={spec.label} className="rounded-lg bg-muted/50 p-3">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <p className="mt-1 font-bold text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "packaging" && (
                <div>
                  <h3 className="text-sm font-bold text-foreground">Packaging & Private Labelling</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Available in {p.packaging}. Customized packaging options include multi-wall kraft paper sacks,
                    BOPP printed bags, vacuum nitrogen flushed pouches, and container jumbo totes. We accommodate buyer
                    branding, barcodes, and destination language nutritional labeling.
                  </p>
                </div>
              )}

              {activeTab === "shipping" && (
                <div>
                  <h3 className="text-sm font-bold text-foreground">Ocean Logistics & Incoterms</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Exported under {p.shippingTerms}. Container stuffing is conducted under supervised port storage at
                    Nhava Sheva (JNPT) or Mundra port. Active temperature tracking in 40ft reefer containers is
                    deployed for fresh perishables.
                  </p>
                </div>
              )}

              {activeTab === "quality" && (
                <div>
                  <h3 className="text-sm font-bold text-foreground">Food Safety & Compliance</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Compliant with {p.qualityStandards}. Each consignment is accompanied by a Certificate of Origin,
                    Phytosanitary inspection, and independent laboratory test results from SGS or Bureau Veritas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-band bg-muted/40">
        <div className="container-wide">
          <h2 className="section-title text-2xl font-bold">Related Indian Agro Products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function IndustriesPage() {
  const icons = [Factory, Store, Package, Truck, Globe2, Factory, Utensils, Utensils];

  return (
    <SiteShell>
      <PageBanner
        title="Industries We Serve"
        subtitle="Customized procurement contracts, private labelling, and reliable scheduling for diverse commercial sectors."
      />

      <section className="section-band">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industriesServed.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article key={item.name} className="rounded-xl border bg-card p-7 shadow-sm">
                <div className="feature-icon mb-4 grid size-12 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon size={24} />
                </div>
                <h2 className="text-lg font-bold text-foreground">{item.name}</h2>
                <p className="section-copy mt-3 text-xs leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function ProcessPage() {
  const [selected, setSelected] = useState(0);

  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );

  return (
    <SiteShell>
      <PageBanner
        title="Our 7-Step Export Process"
        subtitle="From farm sourcing to destination delivery — an orchestrated, transparent, quality-checked journey."
      />

      <section className="section-band">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-3">
            {processSteps.map(([title, desc], idx) => (
              <button
                key={title}
                type="button"
                onClick={() => setSelected(idx)}
                className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${
                  selected === idx
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`grid size-7 place-items-center rounded-full text-xs font-bold ${
                      selected === idx ? "bg-accent text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className={`line-clamp-1 text-xs ${selected === idx ? "opacity-85" : "text-muted-foreground"}`}>
                      {desc}
                    </p>
                  </div>
                </div>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>

          <div>
            <img
              src={selected < 3 ? warehouse : hero}
              alt={processSteps[selected][0]}
              className="aspect-[1.5] w-full rounded-2xl object-cover shadow-lg"
              width={900}
              height={600}
              loading="lazy"
            />
            <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
                STAGE 0{selected + 1} OF 07
              </span>
              <h2 className="mt-3 text-2xl font-bold">{processSteps[selected][0]}</h2>
              <p className="section-copy mt-3 text-sm leading-relaxed">{processSteps[selected][1]}</p>
              <div className="mt-5 space-y-2 border-t pt-4 text-xs text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Supervised execution and digital milestone logging
                </p>
                <p className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Pre-shipment laboratory analysis and phytosanitary clearance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function QualityPage() {
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );

  return (
    <SiteShell>
      <PageBanner
        title="Quality Assurance & Compliance"
        subtitle="Laboratory testing, Sortex purity, strict moisture calibrations, and international certification standards."
      />

      <section className="section-band">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our Unshakable Pledge</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">
              Quality is Never An Afterthought.
            </h2>
            <p className="section-copy mt-5 text-sm leading-relaxed text-muted-foreground">
              Every agro commodity consigned through Akvera Universal undergoes strict physical grading, optical
              sorting, and laboratory testing. We align crop parameters with destination food authorities prior to
              contract acceptance.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Sortex Cleaned Optical Purity</span>
                  <span className="text-primary">99.8%</span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary w-[99.8%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Moisture Tolerance Parameter</span>
                  <span className="text-primary">100% Export Compliant</span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-leaf w-[100%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Aflatoxin & Heavy Metals Screening</span>
                  <span className="text-primary">Zero Tolerance</span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-accent w-[100%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold">
                  <span>Container Stuffing Inspection Pass Rate</span>
                  <span className="text-primary">99.5%</span>
                </div>
                <div className="mt-2 h-2.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary w-[99.5%]" />
                </div>
              </div>
            </div>
          </div>

          <img
            src={warehouse}
            alt="Quality inspection at Akvera Universal"
            className="about-photo w-full rounded-2xl object-cover shadow-xl"
            width={1200}
            height={912}
            loading="lazy"
          />
        </div>
      </section>

      {/* 6 Inspection Pillars */}
      <section className="section-band bg-muted/40">
        <div className="container-wide">
          <div className="text-center">
            <p className="eyebrow mx-auto justify-center">Quality Framework</p>
            <h2 className="section-title text-3xl font-bold">Six Pillars of Quality Verification</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Laboratory Testing", "Full chemical, microbial, moisture, and seed purity testing arranged via SGS or Geo-Chem."],
              ["Quality Inspection", "Optical color-sorting and foreign matter removal eliminating discolored grains and dust."],
              ["Export Standards", "Adherence to US FDA, European Union, and Gulf GSO standard commodity parameters."],
              ["Packaging Integrity", "Multi-wall kraft paper, heavy-duty PP sacks, and vacuum packing to prevent humidity damage."],
              ["International Compliance", "Phytosanitary inspection, Fumigation certificates, and Chamber of Commerce Origin documentation."],
              ["Traceability", "Complete farm-gate and batch traceability ensuring unadulterated single-origin consistency."],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="feature-icon mb-4 grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="section-copy mt-2 text-xs leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [modalItem, setModalItem] = useState<(typeof galleryItems)[number] | null>(null);

  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );
  const collection = getAssetUrl(
    collectionAsset,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
  );

  const getImage = (key: string) => {
    if (key === "warehouse") return warehouse;
    if (key === "collection") return collection;
    return hero;
  };

  const categories = ["All", ...new Set(galleryItems.map((g) => g.category))];
  const items = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <SiteShell>
      <PageBanner
        title="Modern Masonry Gallery"
        subtitle="A visual journey across our warehouse operations, packaging lines, export container terminals, and products."
      />

      <section className="section-band">
        <div className="container-wide">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                key={c}
                size="sm"
                variant={filter === c ? "default" : "outline"}
                onClick={() => setFilter(c)}
                className="text-xs font-semibold"
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-lg"
                onClick={() => setModalItem(item)}
              >
                <div className="aspect-[1.3] overflow-hidden bg-muted">
                  <img
                    src={getImage(item.imageKey)}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {modalItem && (
        <Modal title={modalItem.title} onClose={() => setModalItem(null)}>
          <div className="overflow-hidden rounded-xl">
            <img src={getImage(modalItem.imageKey)} alt={modalItem.title} className="w-full object-cover" />
          </div>
          <div className="mt-4">
            <span className="rounded bg-secondary px-2.5 py-0.5 text-xs font-bold text-primary">
              {modalItem.category}
            </span>
            <p className="mt-3 text-sm text-foreground">{modalItem.description}</p>
          </div>
        </Modal>
      )}

      <CtaBand />
    </SiteShell>
  );
}

export function BlogPage() {
  const [query, setQuery] = useState("");

  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );
  const collection = getAssetUrl(
    collectionAsset,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
  );

  const getImage = (key: string) => {
    if (key === "warehouse") return warehouse;
    if (key === "products") return collection;
    return hero;
  };

  const filtered = blogs.filter((b) =>
    `${b.title} ${b.category} ${b.intro}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteShell>
      <PageBanner
        title="Agro Export Insights & Guides"
        subtitle="Practical export guides, maritime container packaging tips, and international commodity market updates."
      />

      <section className="section-band">
        <div className="container-wide">
          <div className="mb-8 max-w-sm">
            <input
              className="field text-xs"
              placeholder="Search insights..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {filtered.map((blog) => (
              <article key={blog.id} className="flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm">
                <div>
                  <div className="aspect-[1.6] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={getImage(blog.image)}
                      alt={blog.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span>{blog.category}</span>
                    <span className="text-muted-foreground">{blog.readTime}</span>
                  </div>
                  <h2 className="mt-2 text-base font-bold text-foreground">
                    <Link to="/blog/$slug" params={{ slug: blog.id }}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{blog.intro}</p>
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

      <CtaBand />
    </SiteShell>
  );
}

export function ArticlePage({ slug }: { slug: string }) {
  const b = blogs.find((item) => item.id === slug);

  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );
  const warehouse = getAssetUrl(
    warehouseAsset,
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80"
  );
  const collection = getAssetUrl(
    collectionAsset,
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80"
  );

  const getImage = (key: string) => {
    if (key === "warehouse") return warehouse;
    if (key === "products") return collection;
    return hero;
  };

  if (!b) {
    return (
      <SiteShell>
        <PageBanner title="Article Unavailable" subtitle="The requested editorial article was not found." />
        <div className="container-wide py-16 text-center">
          <Button asChild>
            <Link to="/blog">All Insights</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <article className="container-wide max-w-4xl py-14">
        <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">
          ← Back to All Articles
        </Link>
        <div className="eyebrow mt-6">
          {b.category} · {b.date} · {b.readTime}
        </div>
        <h1 className="text-3xl font-extrabold sm:text-4xl text-foreground leading-tight">{b.title}</h1>
        <p className="mt-3 text-xs font-semibold text-muted-foreground">Author: {b.author}</p>
        <p className="section-copy mt-4 text-base font-medium">{b.intro}</p>

        <img
          src={getImage(b.image)}
          alt={b.title}
          className="my-8 aspect-[1.8] w-full rounded-2xl object-cover shadow-lg"
        />

        <div className="space-y-5 text-sm leading-relaxed text-foreground/90">
          {b.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      <CtaBand />
    </SiteShell>
  );
}

export function TestimonialsPage() {
  const [index, setIndex] = useState(0);

  return (
    <SiteShell>
      <PageBanner
        title="Global Client Testimonials"
        subtitle="Trusted relationships across UAE, Saudi Arabia, Singapore, UK, USA, Italy, and Canada."
      />

      <section className="section-band">
        <div className="container-wide">
          {/* Active Highlight */}
          <div className="mx-auto max-w-3xl">
            <TestimonialCard {...testimonials[index]} />
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`size-3 rounded-full transition-all ${
                    index === i ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of All Testimonials */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filtered = faqList.filter((f) =>
    `${f.question} ${f.answer} ${f.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteShell>
      <PageBanner
        title="15 Frequently Asked Questions"
        subtitle="Full transparency on ordering, laboratory inspections, ocean shipping terms, and payment methods."
      />

      <section className="section-band">
        <div className="container-wide max-w-4xl">
          <input
            className="field mb-8 text-xs"
            placeholder="Search FAQs by question or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="divide-y rounded-2xl border bg-card p-6 shadow-sm">
            {filtered.map((item, i) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-foreground transition-colors hover:text-primary"
                  aria-expanded={open === i}
                >
                  <span>
                    <span className="mr-2 text-primary">Q{item.id}.</span> {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${open === i ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm pl-6">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Contact Akvera Universal"
        subtitle="Connect with founder Mr. Avinash Yadav and our commercial trade desk in Kolhapur, Maharashtra, India."
      />

      <section className="section-band">
        <div className="container-wide grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <p className="eyebrow">Your Global Sourcing Partner</p>
            <h2 className="section-title text-3xl font-extrabold sm:text-4xl">We Are Ready to Assist You</h2>
            <p className="section-copy mt-4 text-sm leading-relaxed text-muted-foreground">
              Whether you need sample dispatches, proforma quotations, container allocations, or destination
              import compliance guidance, our team is accessible 24/7.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 rounded-xl border bg-card p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="text-xs font-bold">Corporate Headquarters</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border bg-card p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <Phone size={18} />
                </span>
                <div>
                  <h3 className="text-xs font-bold">Direct Phone / WhatsApp</h3>
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
                  <h3 className="text-xs font-bold">Official Email</h3>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="mt-1 block text-xs font-semibold text-primary hover:underline"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-6 rounded-xl border bg-card p-5 shadow-sm text-center">
              <MapPin className="mx-auto size-7 text-primary mb-2" />
              <h4 className="text-xs font-bold text-foreground">Kolhapur, Maharashtra, India</h4>
              <p className="text-[11px] text-muted-foreground mt-1">
                Premier western Indian agro corridor connecting to JNPT Nhava Sheva & Mumbai ports
              </p>
              <a
                href="https://www.google.com/maps/search/Kolhapur+Maharashtra+India"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded bg-secondary px-3 py-1.5 text-xs font-bold text-primary"
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Send an Official Commercial Enquiry</h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Please provide your volume, packaging, and destination requirements.
            </p>
            <div className="mt-6">
              <InquiryForm kind="contact" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function CountriesPage() {
  const [selected, setSelected] = useState(countryList[0]);
  const hero = getAssetUrl(
    heroAsset,
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  );

  return (
    <SiteShell>
      <PageBanner
        title="Our Global Export Reach"
        subtitle="Delivering Indian agro excellence across 15+ core destination markets."
      />

      <section className="section-band">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {countryList.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelected(c)}
                className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                  selected.id === c.id
                    ? "border-primary bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-xs font-bold">{c.code}</span>
                <div className="mt-3">
                  <p className="text-sm font-bold">{c.name}</p>
                  <p className={`text-[10px] ${selected.id === c.id ? "opacity-80" : "text-muted-foreground"}`}>
                    {c.region}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <img
                src={hero}
                alt="Ocean vessel container logistics from India"
                className="aspect-[1.6] w-full rounded-xl object-cover shadow-md"
              />
              <div className="mt-6">
                <span className="rounded bg-secondary px-2.5 py-0.5 text-xs font-bold text-primary">
                  {selected.region}
                </span>
                <h2 className="mt-2 text-2xl font-bold">India → {selected.name}</h2>
                <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Ports:</span> {selected.ports.join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Estimated Transit:</span> {selected.transitDays}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Key Products:</span>{" "}
                    {selected.topProducts.join(", ")}
                  </p>
                  <p className="mt-3 leading-relaxed">{selected.description}</p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-6 font-semibold">
              <Link to="/contact">Discuss Shipments to {selected.name} →</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

export function LegalPage({ kind }: { kind: "privacy" | "terms" | "sitemap" }) {
  const title = kind === "privacy" ? "Privacy Policy" : kind === "terms" ? "Terms & Conditions" : "Sitemap";

  return (
    <SiteShell>
      <PageBanner title={title} subtitle="Akvera Universal · Corporate Trade & Export Documentation" />

      <section className="section-band">
        <div className="container-wide max-w-4xl space-y-6 text-xs sm:text-sm leading-relaxed text-foreground/90">
          {kind === "sitemap" ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Industries", "/industries"],
                ["Export Process", "/export-process"],
                ["Quality Assurance", "/quality"],
                ["Gallery", "/gallery"],
                ["Blog", "/blog"],
                ["Testimonials", "/testimonials"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
                ["Countries", "/countries"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms"],
                ["Admin Login", "/admin/login"],
              ].map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="rounded-lg border bg-card p-3 font-semibold text-primary transition-colors hover:bg-muted"
                >
                  {name} →
                </Link>
              ))}
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-foreground">
                {kind === "privacy" ? "Data Protection & Privacy Policy" : "Commercial Terms & Conditions"}
              </h2>
              <p>
                {kind === "privacy"
                  ? "At Akvera Universal, we prioritize the confidentiality of our global buyers and trade partners. Any contact inquiries, specifications, volume requests, and commercial documentation submitted through this portal are handled with stringent commercial confidence. We never share customer data with unauthorized third parties."
                  : "All agricultural commodity quotations, proforma invoices, and export sales confirmations issued by Akvera Universal are governed by standard International Chamber of Commerce (ICC) Incoterms 2020. Final contract specifications, payment terms (including Letters of Credit), and shipping schedules must be mutually confirmed prior to container booking."}
              </p>
              <h3 className="text-lg font-bold text-foreground">Jurisdiction & Contact</h3>
              <p>
                Official communication regarding contracts, phytosanitary requirements, or data privacy should be
                addressed to Mr. Avinash Yadav at info@akverauniversal.com or +91 902 1300 674.
              </p>
            </>
          )}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
