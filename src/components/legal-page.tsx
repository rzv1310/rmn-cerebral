import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Note } from "@/components/primitives";

// Minimal, honest scaffold for legal routes. noindex at the route level.
// Real legal text is supplied by Affidea before launch (DE CONFIRMAT).
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl select-text px-5 py-16 sm:px-8 sm:py-24">
      <a href="/" className="eyebrow text-primary-dark hover:text-ink">
        ← Înapoi la pagina principală
      </a>
      <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>

      <div className="mt-8 border-t border-line pt-5">
        <Note label="În curs de definitivare">
          Conținutul legal complet este furnizat de Affidea înainte de lansare. Pentru orice
          întrebare privind datele tale personale, ne poți contacta la{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-primary-dark">
            {site.email}
          </a>
          .
        </Note>
      </div>

      <div className="mt-10 space-y-5 text-sm leading-relaxed text-ink/85">{children}</div>
    </main>
  );
}
