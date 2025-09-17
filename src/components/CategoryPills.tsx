import type { CategoryName } from "../types/product";

type Props = {
    categories: readonly CategoryName[];
    current: "Tous" | CategoryName;
    onChange: (c: "Tous" | CategoryName) => void;
};

export default function CategoryPills({ categories, current, onChange }: Props) {
    const all: ReadonlyArray<"Tous" | CategoryName> = ["Tous", ...categories];

    return (
        <div id="categories" className="flex flex-wrap gap-2">
            {all.map((c) => (
                <button
                    key={c}
                    onClick={() => onChange(c)}
                    className={`rounded-full border px-3 py-1 text-sm ${current === c ? "bg-gray-900 text-white border-gray-900" : "hover:bg-gray-50"
                        }`}
                >
                    {c}
                </button>
            ))}
        </div>
    );
}
