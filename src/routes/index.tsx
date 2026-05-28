import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Truck, ShieldCheck, Heart } from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "PawWear — Fashion for your best friend" },
      { name: "description", content: "Premium hoodies, jackets, tees and accessories designed for modern dogs." },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Trending />
      <Personalize />
      <Recommend />
      <Reviews />
      <Gallery />
      <Newsletter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.92_0.06_60),transparent_60%)]" />
      <div className="container-px mx-auto max-w-7xl pt-12 md:pt-20 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-2 text-xs font-medium"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            New Autumn drop · Free shipping over ₹1,499
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-7xl xl:text-8xl leading-[0.95]"
          >
            Fashion for your{" "}
            <span className="italic text-primary">best friend</span> 🐶
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-md"
          >
            Soft, sustainable, ridiculously cute. PawWear designs cozy essentials
            that move with your pup — from sunrise walks to weekend brunches.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold shadow-soft hover:bg-primary transition-colors"
            >
              Shop now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/customize"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-4 font-semibold hover:bg-background transition"
            >
              Customize outfit
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "12k+", v: "Happy pups" },
              { k: "4.9★", v: "Avg. rating" },
              { k: "30d", v: "Easy returns" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl bg-background/70 backdrop-blur border border-border p-4"
              >
                <p className="font-display text-2xl">{s.k}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.v}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[oklch(0.88_0.1_55)] to-[oklch(0.78_0.16_45)] blur-3xl opacity-50" />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <img
              src={heroDog}
              alt="Puppy in a cream knit hoodie"
              width={1024}
              height={1024}
              className="h-full w-full object-cover rounded-[2.5rem] shadow-glow"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-2 md:-left-8 top-10 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
                <Heart className="h-4 w-4 fill-current" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Loved by</p>
                <p className="text-sm font-semibold">12,438 dogs</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-2 md:-right-6 bottom-12 rounded-2xl bg-background/95 backdrop-blur border border-border p-4 shadow-soft"
          >
            <div className="flex gap-1 text-primary">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-xs mt-1.5 font-medium">"Couldn't be cuter"</p>
            <p className="text-[11px] text-muted-foreground">— Vogue Pets</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Free shipping over ₹1,499", "Organic cotton", "Vet approved fits", "Crafted in small batches", "30-day easy returns", "Cozy & breathable"];
  return (
    <div className="border-y border-border bg-foreground text-background py-4 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-sm font-medium tracking-wide flex items-center gap-12">
            {t} <span className="text-primary">🐾</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Trending() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="Trending"
          title={<>This week's<br/>most-loved pieces</>}
        />
        <Link to="/shop" className="group inline-flex items-center gap-1 text-sm font-semibold">
          View all <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 4).map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Personalize() {
  return (
    <section className="container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.88_0.08_55)] to-[oklch(0.75_0.16_40)] p-10 md:p-16 text-foreground">
        <div className="grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Make it personal</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
              Design a one-of-one tee with your pup's face on it.
            </h2>
            <p className="mt-4 max-w-md opacity-80">
              Upload a photo, pick a color, add their name. We'll print it on
              our softest cotton — shipped in 5 days.
            </p>
            <Link
              to="/customize"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 font-semibold"
            >
              Start customizing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[dog1, dog2, dog3].map((d, i) => (
              <motion.img
                key={i}
                src={d}
                alt=""
                loading="lazy"
                className="rounded-2xl object-cover aspect-[3/4] shadow-soft"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Recommend() {
  const breeds = [
    { name: "Small breeds", desc: "Chihuahua, Pomeranian, Yorkie", icon: "🐕" },
    { name: "Medium breeds", desc: "Beagle, Corgi, Frenchie", icon: "🦮" },
    { name: "Large breeds", desc: "Lab, Retriever, Husky", icon: "🐕‍🦺" },
  ];
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <SectionHeading
        eyebrow="AI Stylist"
        title={<>Fits, hand-picked<br/>for your breed</>}
        subtitle="Our recommendation engine learns from 10,000+ dogs to suggest the perfect fit and silhouette for your pup."
      />
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {breeds.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition"
          >
            <div className="text-4xl">{b.icon}</div>
            <h3 className="mt-6 font-display text-2xl">{b.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            <Link to="/shop" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary transition">
              See recommendations <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const data = [
    { name: "Aisha & Mochi", text: "The hoodie quality is unreal. Mochi refuses to take it off.", rating: 5 },
    { name: "Rohan & Biscuit", text: "Customized tee arrived in 4 days. Stitching is perfect.", rating: 5 },
    { name: "Priya & Loki", text: "Finally a brand that makes premium clothes for big breeds.", rating: 5 },
  ];
  return (
    <section className="bg-cream border-y border-border py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Reviews" title="Pup-approved by thousands" align="center" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {data.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-background p-8 border border-border"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 font-display text-xl leading-snug">"{r.text}"</p>
              <footer className="mt-6 text-sm text-muted-foreground">— {r.name}</footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {[
            { icon: Truck, t: "Free shipping", d: "On orders over ₹1,499" },
            { icon: ShieldCheck, t: "Vet approved", d: "Tested for safety & comfort" },
            { icon: Heart, t: "30-day returns", d: "If they don't love it, we'll take it back" },
          ].map((f) => (
            <div key={f.t} className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{f.t}</p>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [dog1, dog2, dog3, dog1, dog2, dog3];
  return (
    <section className="container-px mx-auto max-w-7xl py-24">
      <SectionHeading eyebrow="@pawwear" title="From our community" align="center" />
      <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-3">
        {imgs.map((src, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="block relative overflow-hidden rounded-2xl aspect-square group"
          >
            <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <div className="rounded-[2.5rem] bg-foreground text-background p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-md">
            Join the pack. Get 15% off your first order.
          </h2>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full md:w-auto items-center gap-2 bg-background/10 backdrop-blur p-2 rounded-full"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="bg-transparent outline-none px-4 py-3 text-sm flex-1 md:w-64 placeholder:text-background/60"
          />
          <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition whitespace-nowrap">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
