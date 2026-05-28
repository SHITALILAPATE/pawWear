import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, Upload, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/customize")({
  component: Customize,
  head: () => ({
    meta: [
      { title: "Customize · PawWear" },
      { name: "description", content: "Design a one-of-one tee for your dog. Upload a photo, pick a color, add their name." },
    ],
  }),
});

const shirtColors = [
  { name: "Cream", value: "oklch(0.96 0.02 75)" },
  { name: "Sunset", value: "oklch(0.72 0.16 45)" },
  { name: "Cocoa", value: "oklch(0.4 0.05 45)" },
  { name: "Sand", value: "oklch(0.86 0.06 70)" },
  { name: "Ink", value: "oklch(0.22 0.02 50)" },
];

function Customize() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState("Simba");
  const [text, setText] = useState("Good Boy");
  const [shirt, setShirt] = useState(shirtColors[1]);
  const previewRef = useRef<HTMLDivElement>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const textColor = shirt.name === "Cream" || shirt.name === "Sand" ? "oklch(0.25 0.03 50)" : "oklch(0.99 0.005 75)";

  return (
    <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
      <header className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" /> Studio
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">Design their fit.</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Upload a photo, set the color, add a name. We'll print it on our softest cotton and ship in 5 days.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-8 order-2 lg:order-1">
          <div>
            <p className="text-sm font-semibold mb-3">1. Upload a dog photo</p>
            <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-border hover:border-primary p-8 text-center transition">
              <input type="file" accept="image/*" className="hidden" onChange={onFile} />
              <Upload className="h-6 w-6 mx-auto text-muted-foreground" />
              <p className="mt-2 text-sm font-medium">{photo ? "Change photo" : "Click or drop a photo"}</p>
              <p className="text-xs text-muted-foreground mt-1">PNG or JPG, up to 10MB</p>
            </label>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">2. Dog's name</p>
            <input
              value={name}
              maxLength={20}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-full border border-border bg-background px-5 py-3 outline-none focus:border-primary transition"
              placeholder="Mochi"
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">3. Custom line</p>
            <input
              value={text}
              maxLength={28}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-full border border-border bg-background px-5 py-3 outline-none focus:border-primary transition"
              placeholder="Best Boy"
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">4. Shirt color</p>
            <div className="flex flex-wrap gap-3">
              {shirtColors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setShirt(c)}
                  aria-label={c.name}
                  className={`relative h-12 w-12 rounded-full border-2 transition ${shirt.name === c.name ? "border-foreground scale-110" : "border-border"}`}
                  style={{ background: c.value }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Selected: {shirt.name}</p>
          </div>

          <button
            onClick={() => toast.success("Preview saved to your library 🎉")}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-semibold hover:bg-primary transition"
          >
            <Download className="h-4 w-4" /> Save preview
          </button>
        </div>

        <div className="order-1 lg:order-2 sticky top-24 self-start">
          <div ref={previewRef} className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-cream to-sand p-12 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[78%] aspect-[4/5]"
              style={{ filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.15))" }}
            >
              {/* Shirt silhouette */}
              <svg viewBox="0 0 200 220" className="absolute inset-0 w-full h-full">
                <path
                  d="M40 30 L70 10 Q100 35 130 10 L160 30 L185 60 L160 80 L160 200 Q160 215 145 215 L55 215 Q40 215 40 200 L40 80 L15 60 Z"
                  fill={shirt.value}
                  stroke="oklch(0.85 0.03 60)"
                  strokeWidth="1"
                />
              </svg>
              {/* Print area */}
              <div className="absolute top-[28%] left-[22%] right-[22%] bottom-[18%] flex flex-col items-center justify-center gap-2 text-center" style={{ color: textColor }}>
                {photo ? (
                  <img src={photo} alt="Your dog" className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-4 ring-white/40" />
                ) : (
                  <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-black/10 grid place-items-center text-3xl">🐶</div>
                )}
                <p className="font-display text-2xl md:text-3xl leading-tight">{name || "Your Pup"}</p>
                <p className="text-xs md:text-sm font-medium opacity-90 max-w-[10ch] leading-tight">{text}</p>
              </div>
            </motion.div>
          </div>
          <p className="text-center mt-4 text-sm text-muted-foreground">Live preview · updates as you design</p>
        </div>
      </div>
    </section>
  );
}
