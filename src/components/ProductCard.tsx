import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { wishlist, toggleWish, add } = useCart();
  const wished = wishlist.includes(product.id);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="block relative overflow-hidden rounded-3xl bg-secondary aspect-[4/5]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
            {product.tag}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWish(product.id);
          }}
          aria-label="Wishlist"
          className={cn(
            "absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition",
            wished ? "bg-primary text-primary-foreground" : "bg-background/90 hover:bg-background",
          )}
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current")} />
        </button>
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              add(product, product.sizes[Math.floor(product.sizes.length / 2)]);
            }}
            className="w-full rounded-full bg-foreground text-background py-3 text-sm font-semibold hover:bg-primary transition"
          >
            Quick add
          </button>
        </div>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-lg leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 capitalize">{product.colors.join(" · ")}</p>
        </div>
        <p className="font-semibold whitespace-nowrap">₹{product.price.toLocaleString()}</p>
      </div>
    </motion.article>
  );
}
