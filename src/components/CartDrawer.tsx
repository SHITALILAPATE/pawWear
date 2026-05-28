import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export function CartDrawer() {
  const { open, setOpen, items, remove, setQty, total, clear } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-[61] h-full w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-2xl">Your bag</h2>
              <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full grid place-items-center text-center text-muted-foreground">
                  <div>
                    <ShoppingBag className="h-10 w-10 mx-auto opacity-40" />
                    <p className="mt-3">Your bag is empty.</p>
                  </div>
                </div>
              ) : (
                items.map((it) => (
                  <div key={it.product.id + it.size} className="flex gap-4">
                    <img src={it.product.image} alt="" className="h-24 w-24 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between gap-2">
                        <p className="font-medium leading-tight">{it.product.name}</p>
                        <button onClick={() => remove(it.product.id, it.size)} className="text-muted-foreground hover:text-foreground">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Size {it.size}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-border rounded-full">
                          <button className="grid h-7 w-7 place-items-center" onClick={() => setQty(it.product.id, it.size, it.qty - 1)}>
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-5 text-center">{it.qty}</span>
                          <button className="grid h-7 w-7 place-items-center" onClick={() => setQty(it.product.id, it.size, it.qty + 1)}>
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-semibold">₹{(it.product.price * it.qty).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-display text-xl">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => {
                    toast.success("Order placed! 🐾", { description: "This is a demo checkout." });
                    clear();
                    setOpen(false);
                  }}
                  className="w-full rounded-full bg-primary text-primary-foreground py-4 font-semibold hover:bg-primary/90 transition"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
