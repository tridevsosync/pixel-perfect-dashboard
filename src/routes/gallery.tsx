import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/gallery")({
  head: () => pageHead("Export gallery", "A visual look at agro products, quality checks, and international shipping."),
  component: GalleryPage,
});
