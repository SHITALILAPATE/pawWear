import { T as reactExports, J as jsxRuntimeExports } from "./server-BjXA4Xi1.js";
import { a as createLucideIcon, t as toast, m as motion } from "./router-BtmUyx1w.js";
import { S as Sparkles } from "./sparkles-Bu2aCwJ6.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const shirtColors = [{
  name: "Cream",
  value: "oklch(0.96 0.02 75)"
}, {
  name: "Sunset",
  value: "oklch(0.72 0.16 45)"
}, {
  name: "Cocoa",
  value: "oklch(0.4 0.05 45)"
}, {
  name: "Sand",
  value: "oklch(0.86 0.06 70)"
}, {
  name: "Ink",
  value: "oklch(0.22 0.02 50)"
}];
function Customize() {
  const [photo, setPhoto] = reactExports.useState(null);
  const [name, setName] = reactExports.useState("Simba");
  const [text, setText] = reactExports.useState("Good Boy");
  const [shirt, setShirt] = reactExports.useState(shirtColors[1]);
  const previewRef = reactExports.useRef(null);
  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result);
    reader.readAsDataURL(file);
  };
  const textColor = shirt.name === "Cream" || shirt.name === "Sand" ? "oklch(0.25 0.03 50)" : "oklch(0.99 0.005 75)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-12 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " Studio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: "Design their fit." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Upload a photo, set the color, add a name. We'll print it on our softest cotton and ship in 5 days." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "1. Upload a dog photo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block cursor-pointer rounded-3xl border-2 border-dashed border-border hover:border-primary p-8 text-center transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: onFile }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-6 w-6 mx-auto text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium", children: photo ? "Change photo" : "Click or drop a photo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG or JPG, up to 10MB" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "2. Dog's name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, maxLength: 20, onChange: (e) => setName(e.target.value), className: "w-full rounded-full border border-border bg-background px-5 py-3 outline-none focus:border-primary transition", placeholder: "Mochi" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "3. Custom line" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: text, maxLength: 28, onChange: (e) => setText(e.target.value), className: "w-full rounded-full border border-border bg-background px-5 py-3 outline-none focus:border-primary transition", placeholder: "Best Boy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "4. Shirt color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: shirtColors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShirt(c), "aria-label": c.name, className: `relative h-12 w-12 rounded-full border-2 transition ${shirt.name === c.name ? "border-foreground scale-110" : "border-border"}`, style: {
            background: c.value
          } }, c.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Selected: ",
            shirt.name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toast.success("Preview saved to your library 🎉"), className: "inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-semibold hover:bg-primary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Save preview"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2 sticky top-24 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: previewRef, className: "relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-cream to-sand p-12 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
          y: [0, -10, 0]
        }, transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "relative w-[78%] aspect-[4/5]", style: {
          filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.15))"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 200 220", className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 30 L70 10 Q100 35 130 10 L160 30 L185 60 L160 80 L160 200 Q160 215 145 215 L55 215 Q40 215 40 200 L40 80 L15 60 Z", fill: shirt.value, stroke: "oklch(0.85 0.03 60)", strokeWidth: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-[28%] left-[22%] right-[22%] bottom-[18%] flex flex-col items-center justify-center gap-2 text-center", style: {
            color: textColor
          }, children: [
            photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo, alt: "Your dog", className: "h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-4 ring-white/40" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 md:h-24 md:w-24 rounded-full bg-black/10 grid place-items-center text-3xl", children: "🐶" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl leading-tight", children: name || "Your Pup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs md:text-sm font-medium opacity-90 max-w-[10ch] leading-tight", children: text })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mt-4 text-sm text-muted-foreground", children: "Live preview · updates as you design" })
      ] })
    ] })
  ] });
}
export {
  Customize as component
};
