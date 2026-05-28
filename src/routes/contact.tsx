import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, ChevronDown, Instagram, Facebook, Twitter } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact · PawWear" },
      { name: "description", content: "Get in touch with PawWear. We respond within 24 hours." },
    ],
  }),
});

const faqs = [
  { q: "How do I find the right size for my dog?", a: "Measure the neck-to-tail length and chest girth. Our size guide on every product page maps your measurements to XS–XL with breed examples." },
  { q: "How long does shipping take?", a: "Stocked pieces ship in 1–2 days and arrive within 3–5 days. Custom items take 5–7 days to produce." },
  { q: "What's your return policy?", a: "30 days, no questions asked. We'll send a free return label and refund within 3 days of receiving the item." },
  { q: "Are the dyes and fabrics safe?", a: "Yes — all materials are OEKO-TEX certified and skin-safety tested for dogs with sensitive coats." },
];

function Contact() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Say hi</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">Let's talk fits.</h1>
        <p className="mt-4 text-muted-foreground text-lg">Questions, custom orders or just want to send pictures of your pup? We're all ears.</p>
      </header>

      <div className="mt-12 grid lg:grid-cols-2 gap-10">
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll reply within 24h."); (e.target as HTMLFormElement).reset(); }}
          className="rounded-3xl bg-card border border-border p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={6}
              maxLength={1000}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button className="rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:bg-primary transition">
            Send message
          </button>
        </form>

        <div className="space-y-4">
          {[
            { icon: Mail, t: "Email", v: "hello@pawwear.studio" },
            { icon: MessageCircle, t: "Live chat", v: "Weekdays · 10am – 7pm IST" },
            { icon: MapPin, t: "Studio", v: "Indiranagar, Bengaluru" },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl bg-secondary p-6 flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-background text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{c.t}</p>
                <p className="text-sm text-muted-foreground">{c.v}</p>
              </div>
            </div>
          ))}
          <div className="rounded-3xl bg-foreground text-background p-6">
            <p className="font-display text-xl">Follow the pack</p>
            <div className="mt-4 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-background/10 hover:bg-primary transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-4xl md:text-5xl mb-8">FAQ</h2>
        <div className="rounded-3xl border border-border divide-y divide-border overflow-hidden">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-full border border-border bg-background px-4 py-3 outline-none focus:border-primary transition"
      />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-secondary/50 transition">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open && "rotate-180"}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
