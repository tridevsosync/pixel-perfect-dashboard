import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownWideNarrow,
  ArrowLeft,
  ArrowRight,
  Bell,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  FileText,
  Globe2,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Pencil,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Modal, Brand } from "@/components/site";
import { modules, moduleSlug, type DemoRow, type Product } from "@/mock/data";
import { useDemo } from "@/mock/store";

const moduleIcons = [
  Package, Box, Globe2, Globe2, ClipboardList, FileText, Users, CircleHelp,
  ShieldCheck, Activity, Box, Users, FileText, FileText, ClipboardList,
  ClipboardList, Users, Box, Users, ShieldCheck, Box, FileText, ClipboardList,
  FileText, ShieldCheck, Activity, Activity, Bell,
];

function AdminShell({ children, title }: { children: ReactNode; title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="admin-shell min-h-screen">
      <aside className={`admin-sidebar p-5 ${open ? "is-open" : ""}`}>
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" aria-label="Akvera Universal home"><Brand /></Link>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Close dashboard menu" onClick={() => setOpen(false)}><X /></Button>
        </div>
        <p className="mb-3 px-4 text-[9px] font-semibold uppercase tracking-[2px] opacity-55">Workspace</p>
        <Link to="/admin/" className="admin-nav mb-2"><LayoutDashboard size={16} />Overview</Link>
        <p className="mb-3 mt-6 px-4 text-[9px] font-semibold uppercase tracking-[2px] opacity-55">Content & activity</p>
        <nav className="grid gap-1" aria-label="Dashboard sections">
          {modules.map((name, index) => {
            const Icon = moduleIcons[index] ?? Box;
            return <Link key={name} to="/admin/$module" params={{ module: moduleSlug(name) }} className="admin-nav"><Icon size={15} />{name}</Link>;
          })}
        </nav>
        <div className="mt-8 border-t border-sidebar-border pt-4">
          <Link to="/" className="admin-nav"><ArrowLeft size={15} />Back to website</Link>
        </div>
      </aside>
      <div className="admin-main min-h-screen">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b bg-card px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open dashboard menu" onClick={() => setOpen(true)}><Menu /></Button>
            <div><p className="text-[10px] text-muted-foreground">Akvera Universal · Demo workspace</p><h1 className="text-sm font-semibold">{title}</h1></div>
          </div>
          <div className="flex items-center gap-2"><span className="hidden text-xs text-muted-foreground sm:inline">Demo administrator</span><span className="grid size-9 place-items-center rounded-full bg-secondary text-primary"><Users size={16} /></span></div>
        </header>
        <main className="mx-auto max-w-[1440px] p-5 sm:p-8">{children}</main>
        <p className="px-5 pb-6 text-center text-[10px] text-muted-foreground sm:px-8">Demo only · Changes are temporary and reset when the page is refreshed.</p>
      </div>
    </div>
  );
}

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [notice, setNotice] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(true);
    void navigate({ to: "/admin/" });
  }
  return (
    <main className="grid min-h-screen place-items-center bg-muted p-5">
      <section className="w-full max-w-md border bg-card p-7 sm:p-9">
        <Link to="/" aria-label="Akvera Universal home"><Brand /></Link>
        <p className="eyebrow mt-10">Demo workspace</p>
        <h1 className="text-2xl font-semibold">Administrator sign in</h1>
        <p className="section-copy mt-3">Open the sample dashboard to explore the portfolio controls.</p>
        <form className="mt-7 grid gap-4" onSubmit={submit}>
          <label><span className="field-label">Email</span><input className="field" type="email" name="email" autoComplete="username" placeholder="name@company.com" required /></label>
          <label><span className="field-label">Password</span><input className="field" type="password" name="password" autoComplete="current-password" placeholder="Enter any demo password" required /></label>
          {notice && <p role="status" className="text-xs text-primary">This is a demonstration. No account or password was checked.</p>}
          <Button type="submit" className="mt-2 h-11">Open dashboard<ArrowRight /></Button>
        </form>
        <p className="mt-5 text-center text-[10px] text-muted-foreground">No account is created and no credentials are stored.</p>
      </section>
    </main>
  );
}

function Stat({ label, value, icon: Icon, change }: { label: string; value: string; icon: typeof Package; change: string }) {
  return <article className="border bg-card p-5"><div className="flex items-start justify-between gap-2"><div><p className="text-xs text-muted-foreground">{label}</p><p className="mt-3 text-2xl font-semibold">{value}</p></div><span className="grid size-10 place-items-center rounded bg-secondary text-primary"><Icon size={19} /></span></div><p className="mt-3 text-[10px] text-muted-foreground">{change}</p></article>;
}

export function AdminOverview() {
  const { products, records } = useDemo();
  const quotes = records["quote-requests"] ?? [];
  const enquiries = records["contact-requests"] ?? [];
  const activity = records["activity-logs"] ?? [];
  return <AdminShell title="Overview">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Your workspace</p><h2 className="section-title">Good morning.</h2><p className="section-copy mt-2">A snapshot of the Akvera Universal demo catalogue.</p></div><Button asChild variant="outline"><Link to="/">View website<ArrowRight /></Link></Button></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <Stat label="Listed products" value={String(products.filter((product) => product.status).length)} icon={Package} change="Sample catalogue items" />
      <Stat label="Quote requests" value={String(quotes.length)} icon={ClipboardList} change="Illustrative demo entries" />
      <Stat label="Contact enquiries" value={String(enquiries.length)} icon={Users} change="Illustrative demo entries" />
      <Stat label="Export destinations" value={String((records.countries ?? []).length)} icon={Globe2} change="Sample market list" />
    </div>
    <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
      <section className="border bg-card"><div className="flex items-center justify-between gap-3 border-b px-5 py-4"><div><h3 className="text-sm font-semibold">Latest quote requests</h3><p className="mt-1 text-[10px] text-muted-foreground">Temporary sample submissions</p></div><Button asChild variant="link" size="sm"><Link to="/admin/$module" params={{ module: "quote-requests" }}>View all<ArrowRight /></Link></Button></div>
        <div className="divide-y">{quotes.slice(0, 5).map((item) => <div key={item.id} className="flex items-center justify-between gap-4 px-5 py-4"><div className="min-w-0"><p className="truncate text-xs font-medium">{item.name}</p><p className="mt-1 truncate text-[10px] text-muted-foreground">{item.detail}</p></div><span className="shrink-0 text-[9px] text-primary">{item.status ? "New" : "Reviewed"}</span></div>)}</div>
      </section>
      <section className="border bg-card"><div className="border-b px-5 py-4"><h3 className="text-sm font-semibold">Recent activity</h3><p className="mt-1 text-[10px] text-muted-foreground">Sample workspace history</p></div><div className="divide-y">{activity.slice(0, 5).map((item) => <div key={item.id} className="flex gap-3 px-5 py-4"><span className="grid size-8 shrink-0 place-items-center rounded bg-secondary text-primary"><Activity size={15} /></span><div><p className="text-xs font-medium">{item.name}</p><p className="mt-1 text-[10px] text-muted-foreground">{item.detail}</p></div></div>)}</div></section>
    </div>
    <section className="mt-8 border bg-card"><div className="flex flex-wrap items-center justify-between gap-3 border-b px-5 py-4"><div><h3 className="text-sm font-semibold">Popular products</h3><p className="mt-1 text-[10px] text-muted-foreground">Sample items in the live catalogue preview</p></div><Button asChild variant="outline" size="sm"><Link to="/admin/$module" params={{ module: "products" }}>Manage products<ArrowRight /></Link></Button></div>
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product) => <div key={product.id} className="bg-card p-5"><p className="text-xs font-medium">{product.name}</p><p className="mt-2 text-[10px] text-muted-foreground">{product.category} · {product.origin}</p></div>)}</div>
    </section>
  </AdminShell>;
}

type Editor = { mode: "add" | "edit" | "view"; row?: DemoRow };
const pageSize = 8;

function productToRow(product: Product): DemoRow {
  return { id: product.id, name: product.name, detail: `${product.category} · ${product.origin} · ${product.description}`, status: product.status };
}

export function AdminModulePage({ module }: { module: string }) {
  const { products, setProducts, records, setRecords } = useDemo();
  const moduleName = modules.find((name) => moduleSlug(name) === module) ?? "Content";
  const isProducts = module === "products";
  const rows = isProducts ? products.map(productToRow) : records[module] ?? [];
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "name">("newest");
  const [page, setPage] = useState(1);
  const [editor, setEditor] = useState<Editor | null>(null);
  const [pendingDelete, setPendingDelete] = useState<DemoRow | null>(null);
  const filtered = useMemo(() => {
    const result = rows.filter((row) => `${row.name} ${row.detail}`.toLowerCase().includes(query.trim().toLowerCase()));
    return sort === "name" ? [...result].sort((left, right) => left.name.localeCompare(right.name)) : result;
  }, [query, rows, sort]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);

  function saveRow(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editor || editor.mode === "view") return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const detail = String(form.get("detail") ?? "").trim();
    const status = form.get("status") === "on";
    if (!name) return;
    if (isProducts) {
      setProducts((current) => {
        if (editor.mode === "edit" && editor.row) {
          return current.map((product) => product.id === editor.row?.id ? { ...product, name, description: detail, status } : product);
        }
        const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Date.now()}`;
        return [...current, { id, name, category: "Other Products", origin: "India", description: detail, packaging: "Packaging confirmed on enquiry", image: current.length % 16, status }];
      });
    } else {
      setRecords((current) => {
        const list = current[module] ?? [];
        if (editor.mode === "edit" && editor.row) return { ...current, [module]: list.map((row) => row.id === editor.row?.id ? { ...row, name, detail, status } : row) };
        return { ...current, [module]: [...list, { id: crypto.randomUUID(), name, detail, status }] };
      });
    }
    setEditor(null);
  }

  function removeRow(row: DemoRow) {
    if (isProducts) setProducts((current) => current.filter((product) => product.id !== row.id));
    else setRecords((current) => ({ ...current, [module]: (current[module] ?? []).filter((item) => item.id !== row.id) }));
    setPendingDelete(null);
  }

  function toggleStatus(row: DemoRow) {
    if (isProducts) setProducts((current) => current.map((product) => product.id === row.id ? { ...product, status: !product.status } : product));
    else setRecords((current) => ({ ...current, [module]: (current[module] ?? []).map((item) => item.id === row.id ? { ...item, status: !item.status } : item) }));
  }

  return <AdminShell title={moduleName}>
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Content management</p><h2 className="section-title">{moduleName}</h2><p className="section-copy mt-2">Review and update this session’s sample {moduleName.toLowerCase()}.</p></div><Button onClick={() => setEditor({ mode: "add" })}><Plus />Add {moduleName === "Products" ? "product" : "item"}</Button></div>
    <section className="border bg-card">
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between"><label className="relative min-w-0 sm:max-w-sm"><Search className="absolute left-3 top-3 text-muted-foreground" size={15} /><input className="field pl-9" aria-label={`Search ${moduleName}`} placeholder={`Search ${moduleName.toLowerCase()}…`} value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} /></label><label className="flex items-center gap-2 text-xs text-muted-foreground"><ArrowDownWideNarrow size={15} /><span>Sort</span><select className="field w-36 py-2" aria-label="Sort items" value={sort} onChange={(event) => setSort(event.target.value as "newest" | "name")}><option value="newest">Default order</option><option value="name">Name A–Z</option></select></label></div>
      <div className="overflow-x-auto"><table className="admin-table min-w-[680px]"><thead><tr><th>Name</th><th>Details</th><th>Status</th><th className="text-right">Actions</th></tr></thead><tbody>
        {pageRows.map((row) => <tr key={row.id}><td className="max-w-52 font-medium">{row.name}</td><td className="max-w-lg text-muted-foreground"><span className="line-clamp-2">{row.detail}</span></td><td><Button size="sm" variant={row.status ? "secondary" : "outline"} className="h-7" aria-label={`Set ${row.name} ${row.status ? "inactive" : "active"}`} onClick={() => toggleStatus(row)}>{row.status ? "Active" : "Inactive"}</Button></td><td><div className="flex justify-end gap-1"><Button size="icon" variant="ghost" aria-label={`View ${row.name}`} onClick={() => setEditor({ mode: "view", row })}><Search /></Button><Button size="icon" variant="ghost" aria-label={`Edit ${row.name}`} onClick={() => setEditor({ mode: "edit", row })}><Pencil /></Button><Button size="icon" variant="ghost" aria-label={`Delete ${row.name}`} onClick={() => setPendingDelete(row)}><Trash2 /></Button></div></td></tr>)}
        {!pageRows.length && <tr><td colSpan={4} className="py-12 text-center text-xs text-muted-foreground">No matching items.</td></tr>}
      </tbody></table></div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3"><p className="text-[10px] text-muted-foreground">{filtered.length ? `Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, filtered.length)} of ${filtered.length}` : "No items"}</p><div className="flex items-center gap-2"><Button size="icon" variant="outline" aria-label="Previous page" disabled={page <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))}><ChevronLeft /></Button><span className="min-w-16 text-center text-[10px]">Page {page} of {pageCount}</span><Button size="icon" variant="outline" aria-label="Next page" disabled={page >= pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))}><ChevronRight /></Button></div></div>
    </section>
    {editor && <Modal title={editor.mode === "view" ? "Item details" : editor.mode === "edit" ? "Edit item" : "Add item"} onClose={() => setEditor(null)}>
      {editor.mode === "view" ? <div><h3 className="text-base font-semibold">{editor.row?.name}</h3><p className="section-copy mt-3">{editor.row?.detail}</p><p className="mt-5 text-xs">Status: {editor.row?.status ? "Active" : "Inactive"}</p></div> : <form className="grid gap-4" onSubmit={saveRow}><label><span className="field-label">Name *</span><input className="field" name="name" required defaultValue={editor.row?.name ?? ""} /></label><label><span className="field-label">Details</span><textarea className="field min-h-28" name="detail" defaultValue={isProducts && editor.row ? products.find((product) => product.id === editor.row?.id)?.description ?? editor.row.detail : editor.row?.detail ?? ""} /></label><label className="flex items-center gap-3 text-xs"><input type="checkbox" name="status" defaultChecked={editor.row?.status ?? true} />Active</label><div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={() => setEditor(null)}>Cancel</Button><Button type="submit">Save changes<Check /></Button></div></form>}
    </Modal>}
    {pendingDelete && <Modal title="Delete this item?" onClose={() => setPendingDelete(null)}><p className="section-copy">“{pendingDelete.name}” will be removed from this temporary demo list.</p><div className="mt-6 flex justify-end gap-2"><Button variant="outline" onClick={() => setPendingDelete(null)}>Cancel</Button><Button variant="destructive" onClick={() => removeRow(pendingDelete)}><Trash2 />Delete</Button></div></Modal>}
  </AdminShell>;
}