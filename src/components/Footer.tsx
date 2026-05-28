import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-cream">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              🐾
            </span>
            <span className="font-display text-xl">PawWear</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium fashion crafted for the most important member of your family.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Shop", links: [["All", "/shop"], ["Hoodies", "/shop"], ["Tees", "/shop"], ["Jackets", "/shop"]] },
          { title: "Brand", links: [["About", "/about"], ["Contact", "/contact"], ["Customize", "/customize"]] },
          { title: "Support", links: [["FAQ", "/contact"], ["Sizing", "/shop"], ["Shipping", "/contact"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-base mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-foreground transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PawWear. Made with 🧡 for good boys & girls.</p>
          <p>Free shipping over ₹1,499 · 30-day returns</p>
        </div>
      </div>
    </footer>
  );
}
