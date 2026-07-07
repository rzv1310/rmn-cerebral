import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții | Affidea" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Termeni,
});

function Termeni() {
  return (
    <LegalPage
      title="Termeni și condiții"
      intro="Condițiile de utilizare a acestui site și de solicitare a programărilor pentru investigații RMN."
    >
      <p>
        Informațiile de pe acest site au caracter general și educativ. Prețurile afișate sunt de
        referință și pornesc de la valorile indicate; tariful final se confirmă la programare și
        poate varia în funcție de centru și de aparat.
      </p>
      <p>
        Recomandarea de investigație și interpretarea rezultatului aparțin medicului specialist.
        Programarea nu constituie un act medical.
      </p>
    </LegalPage>
  );
}
