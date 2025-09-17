export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-10 prose">
            <h1>Politique de confidentialité</h1>
            <p><i>Exemple à adapter avec ton juridique.</i></p>
            <h2>Responsable de traitement</h2>
            <p>Nom de l’entreprise, adresse, contact (email DPO/support).</p>

            <h2>Données traitées & finalités</h2>
            <ul>
                <li><b>Compte</b> : prénom, nom, email, hash du mot de passe — finalité : création et gestion du compte (base légale : contrat).</li>
                <li><b>Marketing (optionnel)</b> : email — finalité : newsletter (base légale : consentement).</li>
            </ul>

            <h2>Durées de conservation</h2>
            <ul>
                <li>Compte : tant que le compte est actif puis X mois après suppression.</li>
                <li>Marketing : jusqu’au retrait du consentement.</li>
            </ul>

            <h2>Destinataires & sous-traitants</h2>
            <p>Liste à compléter (hébergeur, emailing…). Contrats conformes RGPD.</p>

            <h2>Vos droits</h2>
            <p>Accès, rectification, suppression, opposition, limitation, portabilité : contactez <code>dpo@exemple.com</code>.</p>

            <h2>Cookies</h2>
            <p>Pas de cookies non essentiels par défaut. Consentement demandé avant tout dépôt marketing/analytics.</p>
        </main>
    );
}