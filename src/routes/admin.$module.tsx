import { createFileRoute } from "@tanstack/react-router";
import { AdminModulePage } from "@/components/admin-pages";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/admin/$module")({
  head: () => pageHead("Dashboard module", "Manage illustrative Akvera Universal portfolio content in this session-only demo."),
  component: AdminModuleRoute,
});

function AdminModuleRoute() {
  const { module } = Route.useParams();
  return <AdminModulePage module={module} />;
}
