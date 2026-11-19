import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/quality")({
  head: () => pageHead("Quality assurance", "Learn about product selection, inspection, packaging checks, and destination requirements."),
  component: QualityPage,
});
