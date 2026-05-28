import { T as reactExports, J as jsxRuntimeExports } from "./server-BjXA4Xi1.js";
import { R as Route, u as useCart, p as products, m as motion, M as Minus, P as Plus, H as Heart, L as Link } from "./router-BtmUyx1w.js";
import { P as ProductCard } from "./ProductCard-CndJ5Tvj.js";
import { a as Star, T as Truck, S as ShieldCheck, A as ArrowRight } from "./truck-D24Re3LB.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ProductPage() {
  const {
    product
  } = Route.useLoaderData();
  const {
    add,
    wishlist,
    toggleWish,
    setOpen
  } = useCart();
  const [size, setSize] = reactExports.useState(product.sizes[Math.floor(product.sizes.length / 2)]);
  const [qty, setQty] = reactExports.useState(1);
  const wished = wishlist.includes(product.id);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-12 grid md:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.5
      }, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-[2rem] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-4 gap-3", children: [product.image, product.image, product.image, product.image].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "aspect-square rounded-2xl overflow-hidden bg-secondary border border-border hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5,
        delay: 0.1
      }, className: "md:py-6", children: [
        product.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase", children: product.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-4xl md:text-5xl leading-tight", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-primary", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "128 reviews" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-2xl font-semibold", children: [
          "₹",
          product.price.toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mb-3", children: "Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.sizes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSize("S"), className: `min-w-12 px-4 py-3 rounded-xl border text-sm font-semibold transition ${size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`, children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium mb-3", children: "Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: product.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-4 py-2 text-sm", children: c }, c)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-12 w-12 place-items-center", onClick: () => setQty((q) => Math.max(1, q - 1)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-semibold", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-12 w-12 place-items-center", onClick: () => setQty((q) => q + 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => add(product, size, qty), className: "flex-1 rounded-full bg-foreground text-background py-4 font-semibold hover:bg-primary transition", children: [
            "Add to cart · ₹",
            (product.price * qty).toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWish(product.id), className: `grid h-12 w-12 place-items-center rounded-full border border-border transition ${wished ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`, "aria-label": "Wishlist", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-5 w-5 ${wished && "fill-current"}` }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          add(product, size, qty);
          setOpen(true);
        }, className: "mt-3 w-full rounded-full bg-primary text-primary-foreground py-4 font-semibold hover:bg-primary/90 transition", children: "Buy it now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Free shipping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Over ₹1,499" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "30-day returns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "No questions asked" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream border-y border-border py-16 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-8", children: "Reviews" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        n: "Maya R.",
        t: "Fits Bruno (15kg corgi) perfectly. Super soft."
      }, {
        n: "Karan D.",
        t: "Shipping was 2 days. Quality > Amazon stuff."
      }, {
        n: "Anjali P.",
        t: "Looks even better in person. Buying another color."
      }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-background p-6 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-primary", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm leading-relaxed", children: [
          '"',
          r.t,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground font-medium", children: [
          "— ",
          r.n
        ] })
      ] }, r.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "You may also love" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-sm font-semibold inline-flex items-center gap-1", children: [
          "All products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: related.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
    ] })
  ] });
}
export {
  ProductPage as component
};
