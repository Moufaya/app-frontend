import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function validateEmail(v: string) { return /\S+@\S+\.\S+/.test(v); }

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        if (!validateEmail(email)) return setError("Email invalide");
        if (!password) return setError("Mot de passe requis");

        // 🔐 Front-only demo : on ne stocke rien. On simule un succès.
        alert("Connexion réussie (simulation). Aucun cookie ni stockage.");
    }

    return (
        <div className="min-h-dvh bg-gray-50">
            <Header query="" onQueryChange={() => { }} />

            <main className="mx-auto max-w-md px-4 py-10">
                <h1 className="mb-6 text-2xl font-semibold">Connexion</h1>
                <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-white p-6">
                    <label className="block text-sm">
                        Email
                        <input className="mt-1 w-full rounded-md border px-3 py-2" type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label className="block text-sm">
                        Mot de passe
                        <input className="mt-1 w-full rounded-md border px-3 py-2" type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button className="w-full rounded-md border px-3 py-2 hover:bg-gray-50">Se connecter</button>

                    <p className="text-xs text-gray-500">
                        Nous utilisons vos données uniquement pour vous authentifier (base légale : exécution du contrat).
                        Aucune donnée n’est conservée côté navigateur dans cette démo.
                    </p>
                </form>

                <p className="mt-4 text-sm">
                    Pas de compte ? <a className="underline" href="/register">Créer un compte</a>
                </p>
            </main>

            <Footer />
        </div>
    );
}
