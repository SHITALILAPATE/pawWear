import { J as jsxRuntimeExports, T as reactExports } from "./server-BjXA4Xi1.js";
import { a as createLucideIcon, t as toast, I as Instagram, F as Facebook, T as Twitter, A as AnimatePresence, m as motion } from "./router-BtmUyx1w.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const faqs = [{
  q: "How do I find the right size for my dog?",
  a: "Measure the neck-to-tail length and chest girth. Our size guide on every product page maps your measurements to XS–XL with breed examples."
}, {
  q: "How long does shipping take?",
  a: "Stocked pieces ship in 1–2 days and arrive within 3–5 days. Custom items take 5–7 days to produce."
}, {
  q: "What's your return policy?",
  a: "30 days, no questions asked. We'll send a free return label and refund within 3 days of receiving the item."
}, {
  q: "Are the dyes and fabrics safe?",
  a: "Yes — all materials are OEKO-TEX certified and skin-safety tested for dogs with sensitive coats."
}];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mx-auto max-w-7xl py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary", children: "Say hi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-5xl md:text-7xl leading-[0.95]", children: "Let's talk fits." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Questions, custom orders or just want to send pictures of your pup? We're all ears." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        toast.success("Message sent! We'll reply within 24h.");
        e.target.reset();
      }, className: "rounded-3xl bg-card border border-border p-8 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 6, maxLength: 1e3, className: "w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition", children: "Send message" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [{
          icon: Mail,
          t: "Email",
          v: "hello@pawwear.studio"
        }, {
          icon: MessageCircle,
          t: "Live chat",
          v: "Weekdays · 10am – 7pm IST"
        }, {
          icon: MapPin,
          t: "Studio",
          v: "Indiranagar, Bengaluru"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-secondary p-6 flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-background text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: c.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.v })
          ] })
        ] }, c.t)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-foreground text-background p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: "Follow the pack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: [Instagram, Facebook, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-8", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border divide-y divide-border overflow-hidden", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { ...f }, i)) })
    ] })
  ] });
}
function Field({
  label,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, className: "w-full rounded-full border border-border bg-background px-4 py-3 outline-none focus:border-primary transition" })
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen((o) => !o), className: "w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 shrink-0 transition-transform ${open && "rotate-180"}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      height: 0,
      opacity: 0
    }, animate: {
      height: "auto",
      opacity: 1
    }, exit: {
      height: 0,
      opacity: 0
    }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-muted-foreground", children: a }) }) })
  ] });
}
export {
  Contact as component
};
