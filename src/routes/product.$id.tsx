import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, ShieldCheck, Truck, ArrowRight, Star } from "lucide-react";
import { findProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = findProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} · PawWear` },
      { name: "description", content: loaderData?.product.description ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p className="text-muted-foreground">Product not found.</p>
      <Link to="/shop" className="mt-4 inline-block underline">Back to shop</Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, wishlist, toggleWish, setOpen } = useCart();
  const [size, setSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)]);
  const [qty, setQty] = useState(1);
  const wished = wishlist.includes(product.id);

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-12 grid md:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[product.image, product.image, product.image, product.image].map((src, i) => (
              <button key={i} className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-border hover:border-primary transition">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:py-6"
        >
          {product.tag && (
            <span className="inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold tracking-wide uppercase">
              {product.tag}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl md:text-5xl leading-tight">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex gap-0.5 text-primary">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <span className="text-sm text-muted-foreground">128 reviews</span>
          </div>
          <p className="mt-6 text-2xl font-semibold">₹{product.price.toLocaleString()}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s: string) => (
                <button
                  key={s}
                 onClick={() => setSize("S")}
                  className={`min-w-12 px-4 py-3 rounded-xl border text-sm font-semibold transition ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >{s}</button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium mb-3">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c: string) => (
                <span key={c} className="rounded-full border border-border px-4 py-2 text-sm">{c}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center border border-border rounded-full">
              <button className="grid h-12 w-12 place-items-center" onClick={() => setQty(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <button className="grid h-12 w-12 place-items-center" onClick={() => setQty(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => add(product, size, qty)}
              className="flex-1 rounded-full bg-foreground text-background py-4 font-semibold hover:bg-primary transition"
            >
              Add to cart · ₹{(product.price * qty).toLocaleString()}
            </button>
            <button
              onClick={() => toggleWish(product.id)}
              className={`grid h-12 w-12 place-items-center rounded-full border border-border transition ${wished ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`}
              aria-label="Wishlist"
            >
              <Heart className={`h-5 w-5 ${wished && "fill-current"}`} />
            </button>
          </div>
          <button
            onClick={() => { add(product, size, qty); setOpen(true); }}
            className="mt-3 w-full rounded-full bg-primary text-primary-foreground py-4 font-semibold hover:bg-primary/90 transition"
          >
            Buy it now
          </button>

          <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-border">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-semibold">Free shipping</p>
                <p className="text-xs text-muted-foreground">Over ₹1,499</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-semibold">30-day returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-cream border-y border-border py-16 mt-12">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl mb-8">Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Maya R.", t: "Fits Bruno (15kg corgi) perfectly. Super soft." },
              { n: "Karan D.", t: "Shipping was 2 days. Quality > Amazon stuff." },
              { n: "Anjali P.", t: "Looks even better in person. Buying another color." },
            ].map((r) => (
              <div key={r.n} className="rounded-3xl bg-background p-6 border border-border">
                <div className="flex gap-0.5 text-primary">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed">"{r.t}"</p>
                <p className="mt-4 text-xs text-muted-foreground font-medium">— {r.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl">You may also love</h2>
          <Link to="/shop" className="text-sm font-semibold inline-flex items-center gap-1">
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
