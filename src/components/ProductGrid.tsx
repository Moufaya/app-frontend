import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }: { items: Product[] }) {
    if (items.length === 0) {
        return (
            <div className="rounded-md border p-6 text-center text-sm text-gray-500">
                Aucun produit ne correspond à vos filtres.
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
    );
}
