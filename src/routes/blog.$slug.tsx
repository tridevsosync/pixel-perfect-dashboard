import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/blog/$slug")({
  head: () => pageHead("Export article", "Read practical perspectives from Akvera Universal on Indian agricultural exports."),
  component: ArticleRoute,
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return <ArticlePage slug={slug} />;
}
