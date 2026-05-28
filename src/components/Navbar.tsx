import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/customize", label: "Customize" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { count, setOpen, wishlist } = useCart();
  const { location } = useRouterState();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg shadow-soft transition-transform group-hover:rotate-12">
            🐾
          </span>
          <span className="font-display text-xl tracking-tight">PawWear</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button className="hidden md:grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Search">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            onClick={() => setDark((d) => !d)}
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <button className="relative hidden md:grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition" aria-label="Wishlist">
            <Heart className="h-[18px] w-[18px]" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 h-4 min-w-4 px-1 grid place-items-center text-[10px] rounded-full bg-primary text-primary-foreground font-semibold">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary transition"
            aria-label="Cart"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute top-1 right-1 h-4 min-w-4 px-1 grid place-items-center text-[10px] rounded-full bg-primary text-primary-foreground font-semibold">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((m) => !m)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-secondary"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur"
          >
            <div className="container-px mx-auto py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-4 py-3 rounded-lg text-base hover:bg-secondary transition"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
