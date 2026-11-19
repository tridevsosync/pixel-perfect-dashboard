import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Akvera Universal", "Contact Mr. Avinash Yadav in Kolhapur, Maharashtra, about Indian agro exports."),
  component: ContactPage,
});
