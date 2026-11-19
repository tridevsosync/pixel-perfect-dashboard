import { createFileRoute } from "@tanstack/react-router";
import { CountriesPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/countries")({
  head: () => pageHead("Global export reach", "Explore sample destinations for Indian agro products from Akvera Universal."),
  component: CountriesPage,
});
