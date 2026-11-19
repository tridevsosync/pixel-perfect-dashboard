import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/blog")({
  head: () => pageHead("Export insights", "Practical perspectives on Indian agro products, packaging, and global trade."),
  component: BlogPage,
});
