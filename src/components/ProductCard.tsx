import type { Product } from "../types/product";

export default function ProductCard({ p }: { p: Product }) {
    return (
        <article className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
            {/* Espace réservé image (tu mettras <img /> plus tard) */}
            <div className="mb-3 aspect-square w-full rounded-lg border border-dashed border-gray-300 bg-gray-50" aria-hidden="true" />
            <h3 className="text-sm font-medium">{p.name}</h3>
            <p className="mt-1 text-xs text-gray-500">{p.category}</p>
            <div className="mt-2 text-base font-semibold">{p.price} €</div>
            <div className="mt-1 text-xs text-gray-500">Pointures : {p.sizes.join(", ")}</div>
            <button className="mt-3 w-full rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                Ajouter au panier
            </button>
        </article>
    );
}
