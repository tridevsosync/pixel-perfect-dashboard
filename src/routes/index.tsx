import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Globe2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import hero from "@/assets/export-hero.jpg.asset.json";
import warehouse from "@/assets/quality-warehouse.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand, ProductCard, SiteShell } from "@/components/site";
import { products, processSteps } from "@/mock/data";
import { useDemo } from "@/mock/store";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/")({
  head: () => pageHead("Indian Agro Exports", "Akvera Universal connects global buyers with carefully sourced Indian agro products through trusted, transparent export partnerships."),
  component: HomePage,
});

function HomePage() {
  const { openQuote } = useDemo();
  const featured = products.slice(0, 4);
  return (
    <SiteShell>
      <section className="hero" aria-labelledby="home-title">
        <img className="hero-photo" src={hero.url} alt="Agricultural cargo prepared for international export" width={1800} height={1200} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container-wide hero-content reveal">
          <div className="hero-label"><Globe2 size={14} /> ROOTED IN INDIA · CONNECTED TO THE WORLD</div>
          <h1 id="home-title">Connecting Indian excellence to <em>global markets.</em></h1>
          <p className="hero-copy">Premium agro exports delivered with trust, quality, and transparency. A dependable bridge between Indian markets and buyers around the world.</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={() => openQuote()}>Get a Quote <ArrowRight /></Button>
            <Button variant="heroOutline" size="lg" asChild><Link to="/products">Explore Products <ArrowRight /></Link></Button>
          </div>
          <div className="hero-trust">
            <span><Check /> Carefully sourced</span><span><Check /> Quality checked</span><span><Check /> Clear communication</span>
          </div>
        </div>
        <a className="hero-scroll" href="#our-products" aria-label="Scroll to our products"><span>DISCOVER AKVERA</span><ArrowDown size={16} /></a>
        <div className="hero-caption"><span className="size-1.5 rounded-full bg-accent" /> A world of opportunity, sourced in India</div>
      </section>

      <section className="stats-strip" aria-label="Akvera Universal at a glance">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {[["16", "Products in our catalogue", PackageCheck], ["15", "Markets represented", Globe2], ["7", "Steps in our export process", Truck], ["India", "Our trusted origin", ShieldCheck]].map(([value, label, Icon]) => {
            const StatIcon = Icon as typeof PackageCheck;
            return <div className="stat" key={String(label)}><span className="stat-icon"><StatIcon size={20} /></span><div><p className="stat-number">{String(value)}</p><p className="stat-label">{String(label)}</p></div></div>;
          })}
        </div>
      </section>

      <section className="section-band" id="our-products">
        <div className="container-wide">
          <div className="section-heading-row">
            <div><p className="eyebrow">Carefully selected at origin</p><h2 className="section-title">The finest of Indian agriculture.</h2><p className="section-copy mt-3 max-w-2xl">Authentic products, thoughtfully sourced and prepared to meet your market’s needs.</p></div>
            <Button variant="outline" asChild><Link to="/products">View all products <ArrowRight /></Link></Button>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </div>
      </section>

      <section className="section-band bg-muted">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
          <div className="relative"><img className="about-photo" src={warehouse.url} alt="Careful inspection of agricultural goods before export" width={1200} height={900} loading="lazy" /><div className="about-badge"><span className="block font-display text-2xl font-semibold">From origin</span><span className="mt-1 block text-xs">With care at every step</span></div></div>
          <div><p className="eyebrow">A partner you can count on</p><h2 className="section-title">Built on trust.<br />Connected by quality.</h2><p className="section-copy mt-5">Trade works best when it’s built on trust, transparency, and quality. From careful product selection to clear communication, we work to make every connection between India and your market dependable.</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{[["Thoughtful sourcing", "Authentic products, carefully selected."], ["Reliable supply", "A clear process from origin to shipment."], ["Quality checks", "Standards agreed for your requirements."], ["Open communication", "Updates and clarity at every step."]].map(([title, text]) => <div className="flex gap-3" key={title}><span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check size={15} /></span><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p></div></div>)}</div><Button asChild className="mt-7"><Link to="/about">Discover our story <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-wide">
          <div className="section-heading-row"><div><p className="eyebrow">A transparent journey</p><h2 className="section-title">From source to shipment.</h2><p className="section-copy mt-3 max-w-2xl">A considered process keeps quality and communication in focus, all the way to your destination.</p></div><Button variant="outline" asChild><Link to="/export-process">Explore our process <ArrowRight /></Link></Button></div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{processSteps.slice(0, 4).map(([title, detail], index) => <article className="process-step" key={title}><span className="mb-4 block text-xs font-semibold text-primary">STEP 0{index + 1}</span><h3 className="text-base font-semibold">{title}</h3><p className="section-copy mt-2 text-xs">{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="section-band bg-muted">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-center"><div><p className="eyebrow">Your market, our commitment</p><h2 className="section-title">A dependable bridge between India and the world.</h2><p className="section-copy mt-4">Whether you’re an importer, wholesaler, retailer, or manufacturer, let’s talk about the products and requirements that matter to your business.</p><Button asChild className="mt-6"><Link to="/industries">Who we serve <ArrowRight /></Link></Button></div><div className="grid grid-cols-2 gap-px border bg-border sm:grid-cols-3">{["UAE", "Saudi Arabia", "Singapore", "United Kingdom", "Canada", "Australia"].map((country) => <Link className="market-tile" key={country} to="/countries"> <Globe2 size={17} />{country}</Link>)}</div></div>
      </section>
      <CtaBand />
    </SiteShell>
  );
}
