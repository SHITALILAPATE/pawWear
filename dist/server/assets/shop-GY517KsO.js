import { T as reactExports, J as jsxRuntimeExports } from "./server-CsQiNewT.js";
import { p as products } from "./router-DIguMXS_.js";
import { P as ProductCard } from "./ProductCard-BlleDSFx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const categories = [{
  id: "all",
  label: "All"
}, {
  id: "hoodies",
  label: "Hoodies"
}, {
  id: "tees",
  label: "Tees"
}, {
  id: "jackets",
  label: "Jackets"
}, {
  id: "accessories",
  label: "Accessories"
}];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Cream", "Cocoa", "Sand", "Sunset", "White"];
function Shop() {
  const [cat, setCat] = reactExports.useState("all");
  const [size, setSize] = reactExports.useState(null);
  const [color, setColor] = reactExports.useState(null);
  const filtered = reactExports.useMemo(() => {
    return products.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (size && !p.sizes.includes(size)) return false;
      if (color && !p.colors.some((c) => c.toLowerCase().includes(color.toLowerCase()))) return false;
      return true;
    });
  }, [cat, size, color]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Shop all" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-5xl md:text-7xl leading-[0.95]", children: "The collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground text-lg", children: [
        filtered.length,
        " pieces · designed in small batches with sustainable materials."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3 sticky top-16 md:top-20 z-30 py-3 bg-background/80 backdrop-blur -mx-2 px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c.id), className: `px-4 py-2 rounded-full text-sm font-medium transition ${cat === c.id ? "bg-foreground text-background" : "bg-secondary text-foreground hover:bg-accent"}`, children: c.label }, c.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block h-6 w-px bg-border mx-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Size", value: size, onChange: setSize, options: sizes }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Select, { label: "Color", value: color, onChange: setColor, options: colors }),
      (size || color) && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        setSize(null);
        setColor(null);
      }, className: "text-sm text-muted-foreground underline", children: "Clear" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-24 text-center text-muted-foreground", children: "No matches — try clearing filters." })
  ] });
}
function Select({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: value ?? "", onChange: (e) => onChange(e.target.value || null), className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
      label,
      ": Any"
    ] }),
    options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: o, children: [
      label,
      ": ",
      o
    ] }, o))
  ] });
}
export {
  Shop as component
};
