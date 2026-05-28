import { J as jsxRuntimeExports } from "./server-BjXA4Xi1.js";
import { h as heroDog, d as dog2, a as dog3 } from "./hero-dog-pd94Yg79.js";
import { m as motion } from "./router-BtmUyx1w.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Our story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: "Fashion made for every wagging tail." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "PawWear was created with one simple idea — pets deserve style, comfort, and love too. From cozy hoodies to playful accessories, every product is designed to make your furry friend look adorable while feeling comfortable all day long. Crafted with care and inspired by pet lovers, our collections bring fashion and happiness together for every pup." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-4", children: [heroDog, dog2, dog3].map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src, alt: "", loading: "lazy", initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: `rounded-3xl object-cover aspect-[4/5] ${i === 1 ? "md:translate-y-12" : ""}` }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream border-y border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl leading-tight", children: [
        "Our mission is the boring kind: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "make better stuff." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use organic cotton, recycled fleece and OEKO-TEX certified dyes. Every fabric is tested for skin-safety. Every fit goes through 30+ real-world dogs before launch." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We don't drop 200 SKUs a season. We design 8. They come back in new colors. They get better each year. That's it." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-12", children: "The pack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-6", children: [{
        name: "Anaya M.",
        role: "Founder & Designer",
        dog: "Biscuit · Beagle"
      }, {
        name: "Devansh R.",
        role: "Operations",
        dog: "Loki · Husky"
      }, {
        name: "Priya S.",
        role: "Fabric Lead",
        dog: "Pasta · Frenchie"
      }, {
        name: "Karan V.",
        role: "Community",
        dog: "Mochi · Pomeranian"
      }].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "rounded-3xl bg-card border border-border p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-2xl bg-gradient-to-br from-sand to-accent mb-4 grid place-items-center text-5xl", children: "🐾" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: m.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mt-2", children: m.dog })
      ] }, m.name)) })
    ] })
  ] });
}
export {
  About as component
};
