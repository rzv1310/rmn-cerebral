import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politică de confidențialitate | Affidea" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Confidentialitate,
});

function Confidentialitate() {
  return (
    <LegalPage
      title="Politică de confidențialitate"
      intro="Cum colectăm, folosim și protejăm datele tale personale atunci când soliciți o programare sau ne contactezi."
    >
      <p>
        Datele transmise prin formularul de programare (nume, telefon, tipul investigației și
        mesajul opțional) sunt folosite exclusiv pentru a-ți procesa solicitarea și a te contacta.
      </p>
      <p>
        Nu vindem și nu partajăm datele cu terți în scopuri de marketing. Ai dreptul de acces,
        rectificare, ștergere și opoziție conform Regulamentului (UE) 2016/679 (GDPR).
      </p>
    </LegalPage>
  );
}
