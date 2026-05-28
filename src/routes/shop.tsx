import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop · PawWear" },
      { name: "description", content: "Browse cozy hoodies, jackets, tees and accessories for dogs of every size." },
    ],
  }),
});

const categories = [
  { id: "all", label: "All" },
  { id: "hoodies", label: "Hoodies" },
  { id: "tees", label: "Tees" },
  { id: "jackets", label: "Jackets" },
  { id: "accessories", label: "Accessories" },
] as const;

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Cream", "Cocoa", "Sand", "Sunset", "White"];

function Shop() {
  const [cat, setCat] = useState<string>("all");
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (size && !p.sizes.includes(size as any)) return false;
      if (color && !p.colors.some((c) => c.toLowerCase().includes(color.toLowerCase()))) return false;
      return true;
    });
  }, [cat, size, color]);

  return (
    <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shop all</p>
        <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[0.95]">The collection</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          {filtered.length} pieces · designed in small batches with sustainable materials.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap items-center gap-3 sticky top-16 md:top-20 z-30 py-3 bg-background/80 backdrop-blur -mx-2 px-2">
        <div className="flex flex-wrap gap-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                cat === c.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-accent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="hidden md:block h-6 w-px bg-border mx-2" />
        <Select label="Size" value={size} onChange={setSize} options={sizes} />
        <Select label="Color" value={color} onChange={setColor} options={colors} />
        {(size || color) && (
          <button onClick={() => { setSize(null); setColor(null); }} className="text-sm text-muted-foreground underline">
            Clear
          </button>
        )}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
      {filtered.length === 0 && (
        <p className="py-24 text-center text-muted-foreground">No matches — try clearing filters.</p>
      )}
    </section>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string | null; onChange: (v: string | null) => void; options: string[] }) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value || null)}
      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium"
    >
      <option value="">{label}: Any</option>
      {options.map((o) => <option key={o} value={o}>{label}: {o}</option>)}
    </select>
  );
}
