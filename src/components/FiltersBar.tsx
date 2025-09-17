type Props = {
    sort: "relevance" | "price-asc" | "price-desc";
    onSort: (v: Props["sort"]) => void;
    minPrice: string;
    maxPrice: string;
    onMinPrice: (v: string) => void;
    onMaxPrice: (v: string) => void;
    size: string; // pointure ou ""
    onSize: (v: string) => void;
};

export default function FiltersBar({
    sort, onSort, minPrice, maxPrice, onMinPrice, onMaxPrice, size, onSize,
}: Props) {
    return (
        <section className="flex flex-wrap items-end gap-3 rounded-md border bg-white p-3">
            <label className="flex flex-col text-sm">
                Tri
                <select value={sort} onChange={(e) => onSort(e.target.value as any)} className="rounded-md border px-2 py-1">
                    <option value="relevance">Pertinence</option>
                    <option value="price-asc">Prix ↑</option>
                    <option value="price-desc">Prix ↓</option>
                </select>
            </label>

            <label className="flex flex-col text-sm">
                Prix min (€)
                <input value={minPrice} onChange={(e) => onMinPrice(e.target.value)} className="w-24 rounded-md border px-2 py-1" inputMode="numeric" />
            </label>
            <label className="flex flex-col text-sm">
                Prix max (€)
                <input value={maxPrice} onChange={(e) => onMaxPrice(e.target.value)} className="w-24 rounded-md border px-2 py-1" inputMode="numeric" />
            </label>

            <label className="flex flex-col text-sm">
                Pointure
                <input value={size} onChange={(e) => onSize(e.target.value)} placeholder="ex: 42" className="w-24 rounded-md border px-2 py-1" inputMode="numeric" />
            </label>
        </section>
    );
}
