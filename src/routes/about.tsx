import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/about")({
  head: () => pageHead("Our story", "The Akvera Universal story: a trusted bridge between India’s finest agricultural products and global markets."),
  component: AboutPage,
});
