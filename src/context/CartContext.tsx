import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import type { Product } from "@/data/products";

export type CartItem = { product: Product; size: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (product: Product, size: string, qty?: number) => void;
  remove: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  wishlist: string[];
  toggleWish: (id: string) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const add: CartCtx["add"] = (product, size, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.product.id === product.id && x.size === size);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { product, size, qty }];
    });
    toast.success(`${product.name} added to cart`, { description: `Size ${size}` });
    setOpen(true);
  };

  const remove: CartCtx["remove"] = (id, size) =>
    setItems((p) => p.filter((x) => !(x.product.id === id && x.size === size)));

  const setQty: CartCtx["setQty"] = (id, size, qty) =>
    setItems((p) =>
      p.map((x) => (x.product.id === id && x.size === size ? { ...x, qty: Math.max(1, qty) } : x)),
    );

  const toggleWish = (id: string) => {
    setWishlist((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((s, x) => s + x.qty, 0);
    const total = items.reduce((s, x) => s + x.qty * x.product.price, 0);
    return {
      items,
      add,
      remove,
      setQty,
      clear: () => setItems([]),
      count,
      total,
      open,
      setOpen,
      wishlist,
      toggleWish,
    };
  }, [items, open, wishlist]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
}
