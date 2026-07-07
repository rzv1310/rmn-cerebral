import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/gdpr")({
  head: () => ({
    meta: [
      { title: "GDPR: protecția datelor | Affidea" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Gdpr,
});

function Gdpr() {
  return (
    <LegalPage
      title="GDPR: protecția datelor"
      intro="Drepturile tale privind datele cu caracter personal, conform Regulamentului (UE) 2016/679."
    >
      <p>
        Ai dreptul de a fi informat, de acces, de rectificare, de ștergere („dreptul de a fi
        uitat”), de restricționare a prelucrării, de portabilitate și de opoziție.
      </p>
      <p>
        Pentru exercitarea acestor drepturi sau pentru sesizări, ne poți contacta la datele din
        pagina de contact. Ai, de asemenea, dreptul de a te adresa Autorității Naționale de
        Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
      </p>
    </LegalPage>
  );
}
