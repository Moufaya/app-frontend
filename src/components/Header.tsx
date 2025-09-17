import { useState } from "react";

type Props = { query: string; onQueryChange: (q: string) => void };

export default function Header({ query, onQueryChange }: Props) {
    const [value, setValue] = useState(query);

    return (
        <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
                <div className="text-xl font-bold tracking-tight">Sneakly</div>

                {/* Liens */}
                <nav className="ml-2 hidden gap-6 text-sm text-gray-600 md:flex">
                    <a className="hover:underline" href="#categories">Catégories</a>
                    <a className="hover:underline" href="#nouveautes">Nouveautés</a>
                    <a className="hover:underline" href="#promo">Promos</a>
                    <nav className="ml-2 hidden gap-6 text-sm text-gray-600 md:flex">
                        <a className="hover:underline" href="#categories">Catégories</a>
                        <a className="hover:underline" href="#nouveautes">Nouveautés</a>
                        <a className="hover:underline" href="#promo">Promos</a>
                        <a className="hover:underline" href="/login">Connexion</a>
                        <a className="hover:underline" href="/register">S’inscrire</a>
                    </nav>
                </nav>

                {/* Recherche + Panier */}
                <div className="ml-auto flex items-center gap-2">
                    <form
                        onSubmit={(e) => { e.preventDefault(); onQueryChange(value.trim()); }}
                        role="search"
                        className="flex items-center gap-2"
                    >
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Rechercher un modèle…"
                            className="w-56 rounded-md border px-3 py-2 text-sm"
                        />
                        <button className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">OK</button>
                    </form>
                    <button
                        className="rounded-md border p-2 text-sm hover:bg-gray-50"
                        aria-label="Panier"
                        title="Panier"
                    >
                        🛒
                    </button>
                </div>
            </div>
        </header>
    );
}
