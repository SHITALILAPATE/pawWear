import hoodie from "@/assets/product-hoodie.jpg";
import tee from "@/assets/product-tee.jpg";
import jacket from "@/assets/product-jacket.jpg";
import woof from "@/assets/product-woof.jpg";
import sneakers from "@/assets/product-sneakers.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "hoodies" | "tees" | "jackets" | "accessories";
  colors: string[];
  sizes: ("XS" | "S" | "M" | "L" | "XL")[];
  description: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: "pawwear-hoodie",
    name: "PawWear Knit Hoodie",
    price: 899,
    image: hoodie,
    category: "hoodies",
    colors: ["Cream", "Cocoa", "Sand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Soft brushed-fleece hoodie with a roomy hood and ribbed cuffs. Made from breathable organic cotton — designed for cozy mornings and Sunday strolls.",
    tag: "Best Seller",
  },
  {
    id: "birthday-tee",
    name: "Birthday Dog Tee",
    price: 599,
    image: tee,
    category: "tees",
    colors: ["Sunset", "Cream"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Make their big day adorable. Soft cotton blend with a hand-illustrated birthday print and contrast trims.",
    tag: "New",
  },
  {
    id: "winter-fur-jacket",
    name: "Winter Fur Jacket",
    price: 1299,
    image: jacket,
    category: "jackets",
    colors: ["Cocoa", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Plush faux-fur jacket lined with a thermal layer to keep your best friend toasty in sub-zero walks.",
  },
  {
    id: "funny-woof-tee",
    name: "Funny Woof Tee",
    price: 699,
    image: woof,
    category: "tees",
    colors: ["White", "Sunset"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Bold typographic statement tee in a buttery-soft cotton blend. Because every walk deserves a punchline.",
  },
  {
    id: "paw-sneakers",
    name: "Paw Sneakers",
    price: 1499,
    image: sneakers,
    category: "accessories",
    colors: ["Cream/Sunset"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Grippy rubber sole, padded ankle and breathable canvas upper. Pavement and trail ready.",
    tag: "Limited",
  },
];

export const findProduct = (id: string) => products.find((p) => p.id === id);
