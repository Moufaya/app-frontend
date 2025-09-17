import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function validateEmail(v: string) {
    return /\S+@\S+\.\S+/.test(v);
}
function nonEmpty(s: string) {
    return s.trim().length > 0;
}

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [accept, setAccept] = useState(false);       // consentement CGU/Privacy (obligatoire)
    const [marketing, setMarketing] = useState(false); // consentement marketing (optionnel)
    const [error, setError] = useState("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (!nonEmpty(firstName)) return setError("Prénom requis");
        if (!nonEmpty(lastName)) return setError("Nom requis");
        if (!validateEmail(email)) return setError("Email invalide");
        if (password.length < 8) return setError("Mot de passe ≥ 8 caractères");
        if (password !== confirm) return setError("Les mots de passe ne correspondent pas");
        if (!accept) return setError("Vous devez accepter les CGU et la Politique de confidentialité");

        alert(`Compte créé (simulation) : ${firstName} ${lastName} • ${email} • marketing=${marketing ? "oui" : "non"}`);
    }

    return (
        <div className="min-h-dvh bg-gray-50">
            <Header query="" onQueryChange={() => { }} />

            <main className="mx-auto max-w-md px-4 py-10">
                <h1 className="mb-6 text-2xl font-semibold">Créer un compte</h1>

                <form onSubmit={onSubmit} className="space-y-4 rounded-xl border bg-white p-6">
                    {/* Nom / Prénom */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block text-sm">
                            Prénom
                            <input
                                className="mt-1 w-full rounded-md border px-3 py-2"
                                autoComplete="given-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </label>

                        <label className="block text-sm">
                            Nom
                            <input
                                className="mt-1 w-full rounded-md border px-3 py-2"
                                autoComplete="family-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    {/* Email */}
                    <label className="block text-sm">
                        Email
                        <input
                            className="mt-1 w-full rounded-md border px-3 py-2"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    {/* Mot de passe */}
                    <label className="block text-sm">
                        Mot de passe (≥ 8)
                        <input
                            className="mt-1 w-full rounded-md border px-3 py-2"
                            type="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block text-sm">
                        Confirmer le mot de passe
                        <input
                            className="mt-1 w-full rounded-md border px-3 py-2"
                            type="password"
                            autoComplete="new-password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                        />
                    </label>

                    {/* Consentements */}
                    <label className="flex items-start gap-2 text-sm">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={accept}
                            onChange={(e) => setAccept(e.target.checked)}
                            required
                        />
                        <span>
                            J’accepte les <a className="underline" href="/terms" target="_blank" rel="noreferrer">CGU</a> et la{" "}
                            <a className="underline" href="/privacy" target="_blank" rel="noreferrer">Politique de confidentialité</a>.
                        </span>
                    </label>

                    <label className="flex items-start gap-2 text-sm">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={marketing}
                            onChange={(e) => setMarketing(e.target.checked)}
                        />
                        <span>
                            J’accepte de recevoir des offres par email (consentement <b>optionnel</b>, révocable à tout moment).
                        </span>
                    </label>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button className="w-full rounded-md border px-3 py-2 hover:bg-gray-50">
                        Créer mon compte
                    </button>

                    <p className="text-xs text-gray-500">
                        Données collectées : prénom, nom, email, mot de passe (hashé côté serveur dans une vraie app).
                        Cette démo ne stocke rien dans le navigateur.
                    </p>
                </form>

                <p className="mt-4 text-sm">
                    Déjà inscrit ? <Link className="underline" to="/login">Se connecter</Link>
                </p>
            </main>

            <Footer />
        </div>
    );
}
