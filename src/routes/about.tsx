import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import dog1 from "@/assets/dog-1.jpg";
import dog2 from "@/assets/dog-2.jpg";
import dog3 from "@/assets/dog-3.jpg";
import heroDog from "@/assets/hero-dog.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About · PawWear" },
      { name: "description", content: "How PawWear designs sustainable, premium dog fashion in small batches." },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our story</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Fashion made for every wagging tail.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
             PawWear was created with one simple idea — pets deserve style,
             comfort, and love too. From cozy hoodies to playful accessories, every
             product is designed to make your furry friend look adorable while feeling
             comfortable all day long. Crafted with care and inspired by pet lovers,
             our collections bring fashion and happiness together for every pup.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {[heroDog, dog2, dog3].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl object-cover aspect-[4/5] ${i === 1 ? "md:translate-y-12" : ""}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-cream border-y border-border py-24">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Our mission is the boring kind: <span className="italic text-primary">make better stuff.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>We use organic cotton, recycled fleece and OEKO-TEX certified dyes. Every fabric is tested for skin-safety. Every fit goes through 30+ real-world dogs before launch.</p>
            <p>We don't drop 200 SKUs a season. We design 8. They come back in new colors. They get better each year. That's it.</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <h2 className="font-display text-4xl mb-12">The pack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Anaya M.", role: "Founder & Designer", dog: "Biscuit · Beagle" },
            { name: "Devansh R.", role: "Operations", dog: "Loki · Husky" },
            { name: "Priya S.", role: "Fabric Lead", dog: "Pasta · Frenchie" },
            { name: "Karan V.", role: "Community", dog: "Mochi · Pomeranian" },
          ].map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border p-6"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-sand to-accent mb-4 grid place-items-center text-5xl">
                🐾
              </div>
              <p className="font-display text-xl">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
              <p className="text-xs text-primary font-medium mt-2">{m.dog}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
