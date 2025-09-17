import { useEffect, useState } from "react";
const KEY = "consent:analytics";

export default function ConsentBanner() {
    const [seen, setSeen] = useState(true);
    useEffect(() => { setSeen(localStorage.getItem(KEY) !== null); }, []);
    if (seen) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-4">
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-700">
                    Nous n’utilisons que des cookies <b>essentiels</b> par défaut. Autoriser les cookies d’analyse ?
                </p>
                <div className="flex gap-2">
                    <button className="rounded-md border px-3 py-2 text-sm" onClick={() => { localStorage.setItem(KEY, "false"); setSeen(true); }}>
                        Tout refuser
                    </button>
                    <button className="rounded-md border px-3 py-2 text-sm" onClick={() => { localStorage.setItem(KEY, "true"); setSeen(true); }}>
                        Tout accepter
                    </button>
                </div>
            </div>
        </div>
    );
}