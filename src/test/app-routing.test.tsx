import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { products } from "@/mock/products";
import { faqList } from "@/mock/faq";
import { blogs } from "@/mock/blogs";
import { countryList } from "@/mock/countries";
import { modules } from "@/mock/data";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  const routesToTest = [
    "/",
    "/about",
    "/products",
    "/products/basmati-rice",
    "/industries",
    "/export-process",
    "/quality",
    "/gallery",
    "/blog",
    "/blog/export-guide",
    "/testimonials",
    "/faq",
    "/contact",
    "/countries",
    "/privacy-policy",
    "/terms",
    "/sitemap",
    "/admin",
    "/admin/login",
    "/admin/products",
    "/admin/quote-requests",
  ];

  routesToTest.forEach((route) => {
    it(`matches a page for ${route} without root fallback`, () => {
      const matches = router.matchRoutes(route);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  });
});

describe("Akvera Universal Mock Data Integrity", () => {
  it("provides 16+ export agro products with full specifications", () => {
    expect(products.length).toBeGreaterThanOrEqual(16);
    products.forEach((p) => {
      expect(p.id).toBeDefined();
      expect(p.name).toBeDefined();
      expect(p.packaging).toBeDefined();
      expect(p.origin).toContain("India");
    });
  });

  it("provides exactly 15 comprehensive FAQs", () => {
    expect(faqList.length).toBe(15);
  });

  it("provides 15 destination country profiles", () => {
    expect(countryList.length).toBe(15);
    const countryNames = countryList.map((c) => c.name);
    expect(countryNames).toContain("United Arab Emirates");
    expect(countryNames).toContain("Saudi Arabia");
    expect(countryNames).toContain("United Kingdom");
    expect(countryNames).toContain("USA");
  });

  it("covers all 5 requested blog categories", () => {
    const categories = blogs.map((b) => b.category);
    expect(categories).toContain("Export Guide");
    expect(categories).toContain("Packaging Tips");
    expect(categories).toContain("Global Trade");
    expect(categories).toContain("Agro Market");
    expect(categories).toContain("Business News");
  });

  it("covers all 28 admin dashboard modules", () => {
    expect(modules.length).toBe(28);
    expect(modules).toContain("Products");
    expect(modules).toContain("Categories");
    expect(modules).toContain("Countries");
    expect(modules).toContain("Quote Requests");
    expect(modules).toContain("Site Settings");
  });
});
