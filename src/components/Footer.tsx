export default function Footer() {
    return (
        <footer className="mt-16 border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-500">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} Sneakly — Tous droits réservés.</p>
                    <nav className="flex gap-4">
                        <a className="hover:underline" href="#">CGV</a>
                        <a className="hover:underline" href="#">Confidentialité</a>
                        <a className="hover:underline" href="#">Contact</a>
                    </nav>
                    <nav className="flex gap-4">
                        <a className="hover:underline" href="/terms">CGU</a>
                        <a className="hover:underline" href="/privacy">Confidentialité</a>
                        <a className="hover:underline" href="#">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
