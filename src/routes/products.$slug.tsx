import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/products/$slug")({
  head: () => pageHead("Product details", "Explore product origin, packaging, and export specifications from Akvera Universal."),
  component: ProductRoute,
});

function ProductRoute() {
  const { slug } = Route.useParams();
  return <ProductDetailPage slug={slug} />;
}
