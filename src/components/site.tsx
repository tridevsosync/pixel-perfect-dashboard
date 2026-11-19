import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Globe2,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Package,
  Phone,
  ShieldCheck,
  Sprout,
  Star,
  Sun,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { useDemo } from "@/mock/store";
import { companyInfo, type Product } from "@/mock/data";
import productAsset from "@/assets/product-collection.jpg.asset.json";

export const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["Export Process", "/export-process"],
  ["Quality", "/quality"],
  ["Gallery", "/gallery"],
  ["Blog", "/blog"],
  ["Testimonials", "/testimonials"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

export function Brand() {
  return (
    <span className="group flex items-center gap-2.5">
      <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-105">
        <Sprout className="size-6 text-accent" strokeWidth={2} />
      </span>
      <span>
        <span className="brand-name block text-xl font-bold tracking-tight">
          Akvera<span className="text-accent">.</span>
        </span>
        <span className="brand-sub block text-[9px] font-semibold uppercase tracking-[2.5px] text-muted-foreground">
          Universal Exports
        </span>
      </span>
    </span>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { openQuote, dark, toggleDark, setRecords } = useDemo();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
      <header
        className={`site-header transition-all duration-300 ${
          isHome && !scrolled ? "over-hero" : "scrolled shadow-sm"
        }`}
      >
        <div className="container-wide flex h-full items-center justify-between gap-4">
          <Link to="/" aria-label="Akvera Universal Home">
            <Brand />
          </Link>

          <nav className="desktop-nav flex items-center gap-3 xl:gap-5" aria-label="Main navigation">
            {navItems.map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={`nav-link text-xs font-semibold tracking-wide transition-colors ${
                  pathname === path ? "active text-accent" : "hover:text-accent"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDark}
              className="size-9 rounded-full text-foreground/80 hover:text-accent"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </Button>

            <Button
              variant="hero"
              size="sm"
              onClick={() => openQuote()}
              className="h-10 px-4 text-xs font-semibold shadow-sm"
            >
              Get a Quote <ArrowRight size={14} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="mobile-nav-toggle hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {menu && (
          <nav className="mobile-menu grid grid-cols-2 gap-3 border-b bg-card p-5 shadow-xl" aria-label="Mobile navigation">
            {navItems.map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={`rounded px-3 py-2 text-xs font-medium transition-colors ${
                  pathname === path ? "bg-primary/10 font-bold text-primary" : "text-foreground hover:bg-muted"
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="col-span-2 mt-3 flex items-center justify-between border-t pt-3">
              <Button variant="outline" size="sm" onClick={toggleDark} className="text-xs">
                {dark ? "Light Mode" : "Dark Mode"}
              </Button>
              <Button size="sm" onClick={() => { setMenu(false); openQuote(); }} className="text-xs">
                Request Quote
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="site-footer border-t border-border/20 pt-16">
        <div className="container-wide grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.4fr]">
          <div>
            <Link to="/" aria-label="Akvera Universal Home">
              <Brand />
            </Link>
            <p className="mt-5 max-w-sm text-xs leading-relaxed opacity-80">
              {companyInfo.introduction}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={companyInfo.socials.email}
                aria-label="Email Akvera Universal"
                className="grid size-9 place-items-center rounded-full border border-border/40 bg-card/10 transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
              </a>
              <a
                href={companyInfo.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Akvera Universal"
                className="grid size-9 place-items-center rounded-full border border-border/40 bg-card/10 transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                aria-label="Call Akvera Universal"
                className="grid size-9 place-items-center rounded-full border border-border/40 bg-card/10 transition-colors hover:border-accent hover:text-accent"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-border/40 bg-card/10 transition-colors hover:border-accent hover:text-accent"
              >
                <Globe2 size={16} />
              </a>
            </div>
            <div className="mt-5 text-[11px] opacity-75">
              <p className="font-semibold">{companyInfo.clientName} · Founder</p>
              <p className="mt-0.5">{companyInfo.workingHours}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">Quick Navigation</h3>
            <div className="flex flex-col gap-2.5 text-xs opacity-85">
              {navItems.map(([name, path]) => (
                <Link key={path} to={path} className="transition-colors hover:text-accent">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">Top Export Products</h3>
            <div className="flex flex-col gap-2.5 text-xs opacity-85">
              <Link to="/products/$slug" params={{ slug: "basmati-rice" }} className="hover:text-accent">
                Basmati Rice (1121 & Traditional)
              </Link>
              <Link to="/products/$slug" params={{ slug: "premium-wheat" }} className="hover:text-accent">
                Golden Sharbati Wheat
              </Link>
              <Link to="/products/$slug" params={{ slug: "turmeric" }} className="hover:text-accent">
                High-Curcumin Turmeric
              </Link>
              <Link to="/products/$slug" params={{ slug: "red-chilli" }} className="hover:text-accent">
                Guntur Dried Red Chilli
              </Link>
              <Link to="/products/$slug" params={{ slug: "cumin-seeds" }} className="hover:text-accent">
                Sortex Cleaned Cumin
              </Link>
              <Link to="/products/$slug" params={{ slug: "black-pepper" }} className="hover:text-accent">
                Malabar Black Pepper
              </Link>
              <Link to="/products/$slug" params={{ slug: "fresh-onion" }} className="hover:text-accent">
                Nashik Fresh Red Onions
              </Link>
              <Link to="/products" className="font-semibold text-accent underline underline-offset-4">
                View All 16+ Products →
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">Direct Contact & Updates</h3>
            <p className="text-xs leading-relaxed opacity-85">
              Receive export crop market reports, harvest forecasts, and global spot prices.
            </p>
            <form
              className="mt-4 flex"
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email")?.toString() || "";
                setRecords((r) => ({
                  ...r,
                  "newsletter-subscribers": [
                    ...r["newsletter-subscribers"],
                    { id: crypto.randomUUID(), name: email, detail: "Website demo subscription", status: true },
                  ],
                }));
                setNewsletter(true);
              }}
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your business email"
                aria-label="Newsletter email"
                className="field min-w-0 rounded-r-none text-xs"
              />
              <Button
                variant="hero"
                size="icon"
                type="submit"
                className="h-[42px] shrink-0 rounded-l-none"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={16} />
              </Button>
            </form>
            {newsletter && (
              <p className="mt-2 text-xs font-semibold text-accent" role="status">
                ✓ Thank you. You have been added to the Akvera updates list.
              </p>
            )}
            <div className="mt-6 space-y-2 border-t border-border/20 pt-4 text-xs opacity-85">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-accent" /> {companyInfo.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-accent" /> {companyInfo.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-accent" /> {companyInfo.email}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-line">
          <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-6 text-[11px]">
            <p className="opacity-80">
              © {new Date().getFullYear()} {companyInfo.businessName}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="hover:text-accent">
                Sitemap
              </Link>
              <Button variant="ghost" size="sm" onClick={toggleDark} className="h-6 px-1 text-[11px] opacity-80 hover:text-accent">
                {dark ? "Light Mode" : "Dark Mode"}
              </Button>
              <Link
                to="/admin/login"
                className="inline-flex items-center gap-1 rounded bg-accent/20 px-2 py-0.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Admin Login →
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="floating-contact">
        <Button
          asChild
          className="size-11 rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-emerald-700"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <a href={companyInfo.socials.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={22} />
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="size-11 rounded-full border-border bg-card shadow-md transition-transform hover:scale-110"
          aria-label="Call Akvera Universal"
          title="Call us directly"
        >
          <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>
            <Phone size={19} className="text-primary" />
          </a>
        </Button>
        <Button
          variant="outline"
          asChild
          className="size-11 rounded-full border-border bg-card shadow-md transition-transform hover:scale-110"
          aria-label="Email Akvera Universal"
          title="Write an email"
        >
          <a href={companyInfo.socials.email}>
            <Mail size={19} className="text-primary" />
          </a>
        </Button>
        {scrolled && (
          <Button
            variant="outline"
            className="size-11 rounded-full border-border bg-card shadow-md transition-transform hover:scale-110"
            aria-label="Scroll to top"
            title="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={19} />
          </Button>
        )}
      </div>

      <QuoteModal />
    </div>
  );
}

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    function key(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const els = ref.current?.querySelectorAll<HTMLElement>(
          'button,input,select,textarea,a[href],[tabindex="0"]'
        );
        if (!els?.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", key);
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="modal-box"
        ref={ref}
        tabIndex={-1}
      >
        <div className="mb-6 flex items-center justify-between gap-4 border-b pb-4">
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close dialog"
            onClick={onClose}
            className="size-8 rounded-full"
          >
            <X size={18} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}

function QuoteModal() {
  const { quoteOpen, setQuoteOpen, quoteProduct } = useDemo();
  if (!quoteOpen) return null;
  return (
    <Modal title="Request an Official Export Quote" onClose={() => setQuoteOpen(false)}>
      <InquiryForm kind="quote" product={quoteProduct} />
    </Modal>
  );
}

export function InquiryForm({
  kind = "contact",
  product = "",
}: {
  kind?: "quote" | "contact";
  product?: string;
}) {
  const { products, setRecords } = useDemo();
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-secondary text-primary">
          <Check size={32} />
        </div>
        <h3 className="text-xl font-bold">Thank you for your enquiry.</h3>
        <p className="section-copy mt-3">
          Your {kind === "quote" ? "quotation request" : "message"} has been logged directly into the
          demo administrator workspace.
        </p>
        <p className="mt-4 text-xs font-medium text-accent">
          Mr. Avinash Yadav and our international sales team will review your requirements.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const name = f.get("name")?.toString() || "";
        const email = f.get("email")?.toString() || "";
        const phone = f.get("phone")?.toString() || "";
        const company = f.get("company")?.toString() || "";
        const country = f.get("country")?.toString() || "";
        const prod = f.get("product")?.toString() || product || "General Agro Enquiry";
        const quantity = f.get("quantity")?.toString() || "";
        const message = f.get("message")?.toString() || "";

        const key = kind === "quote" ? "quote-requests" : "contact-requests";
        const detail = `${email} · ${phone} · ${company} (${country}) · ${prod} · ${quantity} · ${message}`;

        setRecords((r) => ({
          ...r,
          [key]: [
            ...r[key],
            { id: crypto.randomUUID(), name: `${name} (${company || country})`, detail, status: true },
          ],
        }));
        setSuccess(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="field-label">Full Name *</span>
          <input className="field" name="name" placeholder="e.g. Ahmed Al Mansoori" required />
        </label>
        <label>
          <span className="field-label">Business Email *</span>
          <input className="field" name="email" type="email" placeholder="buyer@company.com" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="field-label">Phone / WhatsApp *</span>
          <input className="field" name="phone" placeholder="+971 50 123 4567" required />
        </label>
        <label>
          <span className="field-label">Company Name</span>
          <input className="field" name="company" placeholder="e.g. Gulf Oasis Foodstuff LLC" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="field-label">Destination Country & Port *</span>
          <input className="field" name="country" placeholder="e.g. UAE (Jebel Ali Port)" required />
        </label>
        {kind === "quote" ? (
          <label>
            <span className="field-label">Commodity *</span>
            <select className="field" name="product" defaultValue={product} required>
              <option value="">Select an Agro Commodity</option>
              {products
                .filter((p) => p.status)
                .map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.category})
                  </option>
                ))}
            </select>
          </label>
        ) : (
          <label>
            <span className="field-label">Subject / Product</span>
            <input className="field" name="product" placeholder="e.g. Basmati Rice or Spices Inquiry" />
          </label>
        )}
      </div>

      {kind === "quote" && (
        <label>
          <span className="field-label">Required Quantity (Metric Tonnes / Containers) *</span>
          <input className="field" name="quantity" placeholder="e.g. 50 Metric Tonnes (2 x 40ft FCL)" required />
        </label>
      )}

      <label>
        <span className="field-label">Packaging & Quality Requirements *</span>
        <textarea
          className="field min-h-24"
          name="message"
          placeholder="Specify pack size (e.g. 10kg/25kg/50kg), Incoterm (FOB/CIF), Sortex purity, or crop specifications..."
          required
        />
      </label>

      <Button type="submit" className="h-11 font-semibold">
        {kind === "quote" ? "Request Official Quotation" : "Submit Enquiry"} <ArrowRight size={16} />
      </Button>
    </form>
  );
}

export function PageBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="page-banner">
      <div className="container-wide">
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronDown size={12} className="-rotate-90" />
          <span className="font-medium text-foreground">{title}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="section-copy mt-3 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}

const fallbackUrls = [
  "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&w=600&q=80",
];

export function ProductPhoto({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const assetUrl =
    typeof productAsset === "object" && productAsset && "url" in productAsset
      ? (productAsset as { url: string }).url
      : String(productAsset);

  return (
    <div className={`product-photo crop-${product.image % 16} ${className}`}>
      <img
        src={assetUrl}
        alt={product.name}
        loading="lazy"
        width={1024}
        height={1024}
        onError={(e) => {
          e.currentTarget.src = fallbackUrls[product.image % fallbackUrls.length];
        }}
      />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const assetUrl =
    typeof productAsset === "object" && productAsset && "url" in productAsset
      ? (productAsset as { url: string }).url
      : String(productAsset);

  return (
    <article className="product-card group flex flex-col justify-between">
      <div>
        <Link to="/products/$slug" params={{ slug: product.id }} aria-label={`View ${product.name}`}>
          <div className={`product-photo crop-${product.image % 16}`}>
            <img
              src={assetUrl}
              alt={product.name}
              loading="lazy"
              width={1024}
              height={1024}
              onError={(e) => {
                e.currentTarget.src = fallbackUrls[product.image % fallbackUrls.length];
              }}
            />
            <span className="photo-badge flex items-center gap-1">
              <ShieldCheck size={11} /> EXPORT QUALITY
            </span>
          </div>
        </Link>
        <div className="p-5">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-primary">
            <span>{product.category}</span>
            <span className="text-muted-foreground">{product.qualityGrade.split(" ")[0]}</span>
          </div>
          <h3 className="mb-2 mt-1.5 text-base font-bold transition-colors group-hover:text-primary">
            <Link to="/products/$slug" params={{ slug: product.id }}>
              {product.name}
            </Link>
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-3 space-y-1.5 rounded bg-muted/50 p-2.5 text-[11px]">
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <Package size={12} className="shrink-0 text-primary" />
              <span className="truncate">{product.packaging}</span>
            </p>
            {product.countriesExported && (
              <p className="flex items-center gap-1.5 text-muted-foreground">
                <Globe2 size={12} className="shrink-0 text-accent" />
                <span className="truncate">Exported to: {product.countriesExported.slice(0, 3).join(", ")}...</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t px-5 py-3">
        <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <MapPin size={12} className="text-primary" /> {product.origin.split(",")[0]}
        </span>
        <Link
          to="/products/$slug"
          params={{ slug: product.id }}
          className="flex items-center gap-1 text-xs font-semibold text-primary transition-transform hover:translate-x-0.5"
        >
          View Details <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}

export function CtaBand() {
  const { openQuote } = useDemo();
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-[2px] text-accent">
            Your Trusted Indian Agro Export Partner
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl">Let’s Build a Dependable Global Supply Chain.</h2>
          <p className="mt-2 max-w-xl text-xs opacity-85 sm:text-sm">
            Direct origin sourcing, Sortex optical grading, international compliance, and transparent freight
            management from Kolhapur, Maharashtra to your port.
          </p>
        </div>
        <Button
          variant="hero"
          onClick={() => openQuote()}
          className="h-12 shrink-0 px-7 text-xs font-semibold shadow-lg"
        >
          Request an Export Quote <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}

export function TestimonialCard({
  name,
  company,
  country,
  role,
  text,
  rating = 5,
}: {
  name: string;
  company?: string;
  country: string;
  role: string;
  text: string;
  rating?: number;
}) {
  return (
    <article className="rounded-lg border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex gap-1 text-accent">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="text-xs leading-relaxed text-foreground/90 sm:text-sm">“{text}”</p>
      <div className="mt-6 flex items-center gap-3 border-t pt-5">
        <div className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary font-bold text-primary">
          {name
            .split(" ")
            .map((s) => s[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <h3 className="text-xs font-bold sm:text-sm">{name}</h3>
          <p className="text-[11px] text-muted-foreground">
            {role} {company ? `· ${company}` : ""} ({country})
          </p>
        </div>
      </div>
    </article>
  );
}

export const trustIcons = { Globe2, Leaf, ShieldCheck, Sprout };
