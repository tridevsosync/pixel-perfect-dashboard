import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/industries")({
  head: () => pageHead("Industries we serve", "Reliable agricultural sourcing for importers, distributors, wholesalers, retailers, and food businesses."),
  component: IndustriesPage,
});
