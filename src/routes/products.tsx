import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/products")({
  head: () => pageHead("Premium Indian agro products", "Explore carefully sourced Indian grains, spices, pulses, fresh produce, and other export products."),
  component: ProductsPage,
});
