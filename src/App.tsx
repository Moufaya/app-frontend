import type { CategoryName } from "./types/product";
import { useState } from "react";
import Header from "./components/Header";
import CategoryPills from "./components/CategoryPills";
import FiltersBar from "./components/FiltersBar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { CATEGORIES, PRODUCTS } from "./data/products";
import type { Product } from "./types/product";


export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"Tous" | CategoryName>("Tous");
  const [sort, setSort] = useState<"relevance" | "price-asc" | "price-desc">("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [size, setSize] = useState("");

  // Version simple et sûre (pas de useMemo)
  let list: Product[] = [...PRODUCTS];

  if (category !== "Tous") {
    list = list.filter((p) => p.category === category);
  }
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }
  if (minPrice) list = list.filter((p) => p.price >= Number(minPrice));
  if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice));
  if (size) list = list.filter((p) => p.sizes.includes(Number(size)));

  if (sort === "price-asc") {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-dvh bg-gray-50">
      <Header query={query} onQueryChange={setQuery} />

      {/* Bandeau d'intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-semibold">Chaussures pour bouger — et pour le style</h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Running, lifestyle, basket, rando. Filtre, trie et trouve ta paire idéale.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <CategoryPills
          categories={CATEGORIES as readonly CategoryName[]}
          current={category}
          onChange={(c) => setCategory(c)}
        />

        <FiltersBar
          sort={sort}
          onSort={setSort}
          minPrice={minPrice}
          onMinPrice={setMinPrice}
          maxPrice={maxPrice}
          onMaxPrice={setMaxPrice}
          size={size}
          onSize={setSize}
        />

        <section aria-labelledby="resultats" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 id="resultats" className="text-lg font-medium">Résultats</h2>
            <div className="text-sm text-gray-500">{list.length} produit(s)</div>
          </div>
          <ProductGrid items={list} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
