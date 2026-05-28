import { J as jsxRuntimeExports } from "./server-CsQiNewT.js";
import { m as motion, L as Link, H as Heart, p as products } from "./router-DIguMXS_.js";
import { h as heroDog, d as dog2, a as dog3 } from "./hero-dog-pd94Yg79.js";
import { P as ProductCard } from "./ProductCard-BlleDSFx.js";
import { S as Sparkles } from "./sparkles-CGbzsKPQ.js";
import { A as ArrowRight, a as Star, T as Truck, S as ShieldCheck } from "./truck-DaLKGxMs.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const dog1 = "/assets/dog-1-D68bvNLS.jpg";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl leading-[1.05]", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: subtitle })
      ]
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Trending, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Personalize, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Recommend, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Newsletter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.92_0.06_60),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-20 grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-2 text-xs font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
          "New Autumn drop · Free shipping over ₹1,499"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "mt-6 font-display text-5xl md:text-7xl xl:text-8xl leading-[0.95]", children: [
          "Fashion for your",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "best friend" }),
          " 🐶"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2
        }, className: "mt-6 text-lg text-muted-foreground max-w-md", children: "Soft, sustainable, ridiculously cute. PawWear designs cozy essentials that move with your pup — from sunrise walks to weekend brunches." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.3
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold shadow-soft hover:bg-primary transition-colors", children: [
            "Shop now",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/customize", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-4 font-semibold hover:bg-background transition", children: "Customize outfit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-4 max-w-md", children: [{
          k: "12k+",
          v: "Happy pups"
        }, {
          k: "4.9★",
          v: "Avg. rating"
        }, {
          k: "30d",
          v: "Easy returns"
        }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.5,
          delay: 0.4 + i * 0.1
        }, className: "rounded-2xl bg-background/70 backdrop-blur border border-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.v })
        ] }, s.k)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "relative aspect-square", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full bg-gradient-to-br from-[oklch(0.88_0.1_55)] to-[oklch(0.78_0.16_45)] blur-3xl opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          y: [0, -16, 0]
        }, transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }, className: "relative h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroDog, alt: "Puppy in a cream knit hoodie", width: 1024, height: 1024, className: "h-full w-full object-cover rounded-[2.5rem] shadow-glow" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: -30
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 0.8
        }, className: "absolute -left-2 md:-left-8 top-10 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Loved by" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "12,438 dogs" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 30
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 1
        }, className: "absolute -right-2 md:-right-6 bottom-12 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary", children: [0, 1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1.5 font-medium", children: `"Couldn't be cuter"` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "— Vogue Pets" })
        ] })
      ] })
    ] })
  ] });
}
function Marquee() {
  const items = ["Free shipping over ₹1,499", "Organic cotton", "Vet approved fits", "Crafted in small batches", "30-day easy returns", "Cozy & breathable"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border bg-foreground text-background py-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]", children: [...items, ...items, ...items].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium tracking-wide flex items-center gap-12", children: [
    t,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "🐾" })
  ] }, i)) }) });
}
function Trending() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Trending", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "This week's",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "most-loved pieces"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "group inline-flex items-center gap-1 text-sm font-semibold", children: [
        "View all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: products.slice(0, 4).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p, index: i }, p.id)) })
  ] });
}
function Personalize() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.88_0.08_55)] to-[oklch(0.75_0.16_40)] p-10 md:p-16 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.2em]", children: "Make it personal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-6xl leading-tight", children: "Design a one-of-one tee with your pup's face on it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md opacity-80", children: "Upload a photo, pick a color, add their name. We'll print it on our softest cotton — shipped in 5 days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/customize", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold", children: [
        "Start customizing ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [dog1, dog2, dog3].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: d, alt: "", loading: "lazy", className: "rounded-2xl object-cover aspect-[3/4] shadow-soft", animate: {
      y: [0, -10, 0]
    }, transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5
    } }, i)) })
  ] }) }) });
}
function Recommend() {
  const breeds = [{
    name: "Small breeds",
    desc: "Chihuahua, Pomeranian, Yorkie",
    icon: "🐕"
  }, {
    name: "Medium breeds",
    desc: "Beagle, Corgi, Frenchie",
    icon: "🦮"
  }, {
    name: "Large breeds",
    desc: "Lab, Retriever, Husky",
    icon: "🐕‍🦺"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "AI Stylist", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Fits, hand-picked",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "for your breed"
    ] }), subtitle: "Our recommendation engine learns from 10,000+ dogs to suggest the perfect fit and silhouette for your pup." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: breeds.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "group rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: b.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl", children: b.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: b.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-6 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary transition", children: [
        "See recommendations ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }, b.name)) })
  ] });
}
function Reviews() {
  const data = [{
    name: "Aisha & Mochi",
    text: "The hoodie quality is unreal. Mochi refuses to take it off.",
    rating: 5
  }, {
    name: "Rohan & Biscuit",
    text: "Customized tee arrived in 4 days. Stitching is perfect.",
    rating: 5
  }, {
    name: "Priya & Loki",
    text: "Finally a brand that makes premium clothes for big breeds.",
    rating: 5
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream border-y border-border py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Reviews", title: "Pup-approved by thousands", align: "center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: data.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.blockquote, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "rounded-3xl bg-background p-8 border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary", children: Array.from({
        length: r.rating
      }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-display text-xl leading-snug", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-6 text-sm text-muted-foreground", children: [
        "— ",
        r.name
      ] })
    ] }, r.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-3 gap-6", children: [{
      icon: Truck,
      t: "Free shipping",
      d: "On orders over ₹1,499"
    }, {
      icon: ShieldCheck,
      t: "Vet approved",
      d: "Tested for safety & comfort"
    }, {
      icon: Heart,
      t: "30-day returns",
      d: "If they don't love it, we'll take it back"
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: f.d })
      ] })
    ] }, f.t)) })
  ] }) });
}
function Gallery() {
  const imgs = [dog1, dog2, dog3, dog1, dog2, dog3];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "@pawwear", title: "From our community", align: "center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-6 gap-3", children: imgs.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#", initial: {
      opacity: 0,
      scale: 0.9
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "block relative overflow-hidden rounded-2xl aspect-square group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition" })
    ] }, i)) })
  ] });
}
function Newsletter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mx-auto max-w-7xl py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2.5rem] bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl leading-tight max-w-md", children: "Join the pack. Get 15% off your first order." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "flex w-full md:w-auto items-center gap-2 bg-background/10 backdrop-blur p-2 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, placeholder: "your@email.com", className: "bg-transparent outline-none px-4 py-3 text-sm flex-1 md:w-64 placeholder:text-background/60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition whitespace-nowrap", children: "Sign up" })
    ] })
  ] }) });
}
export {
  Home as component
};
