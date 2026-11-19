import { createFileRoute } from "@tanstack/react-router";
import { ProcessPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/export-process")({
  head: () => pageHead("Our export process", "See how Akvera Universal coordinates sourcing, inspection, packaging, documentation, and delivery."),
  component: ProcessPage,
});
