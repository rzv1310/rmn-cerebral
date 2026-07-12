import { useState } from "react";
import { faqs } from "@/lib/site";
import { Section, Accordion, Note } from "@/components/primitives";

const INITIAL = 6;

function FaqRichContent({ question }: { question: string }) {
  if (question !== "Ce este un RMN cerebral?") return null;

  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">
        Rezonanța Magnetică Nucleară (RMN) este o procedură de diagnostic imagistic de înaltă
        performanță, minim invazivă, atraumatică și neiradiantă.
      </p>
      <p className="leading-relaxed text-muted">
        RMN-ul cranio-cerebral, cunoscut și ca iRM cerebral sau RMN cap, este o metodă imagistică
        avansată care oferă imagini detaliate ale structurilor creierului, secțiune cu secțiune,
        fără a expune pacientul la radiații ionizante.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Cum funcționează</h3>
          <p className="mt-2 leading-relaxed text-muted">
            Aparatul folosește un câmp magnetic de intensitate mare și radiofrecvența pentru a
            obține imagini de înaltă rezoluție. Protonii de hidrogen din corp se aliniază în câmpul
            magnetic, iar semnalele emise la revenire sunt transformate de computer în imagini
            detaliate, secțiune cu secțiune.
          </p>
          <div className="mt-4">
            <Note label="Fără radiații">
              Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu folosește radiații
              ionizante, ci se bazează pe câmp magnetic și unde radio.
            </Note>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Substanța de contrast</h3>
          <p className="mt-2 leading-relaxed text-muted">
            Când medicul radiolog o recomandă, se administrează intravenos o substanță de contrast pe
            bază de gadoliniu, pentru imagini cu acuratețe crescută, utilă în tumori, leziuni
            inflamatorii sau anomalii vasculare.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Administrarea se face doar când beneficiile depășesc riscurile, după o evaluare atentă a
            funcției renale.
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold text-ink">Avantajele RMN-ului</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">Fără radiații ionizante</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Se bazează pe câmp magnetic și unde radio, nu pe raze X.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">Contrast excelent al țesuturilor moi</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Detalii superioare ale creierului față de computer tomograf.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">Imagistică multiplanară</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Secțiuni în orice plan, fără repoziționarea pacientului.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">Secvențe specializate</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Difuzie, perfuzie, angio-RMN și spectroscopie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const hidden = faqs.length - INITIAL;

  return (
    <Section
      id="intrebari"
      tone="paper"
      eyebrow="Întrebări frecvente"
      title="Întrebări frecvente despre RMN cerebral"
    >
      <div className="mx-auto max-w-3xl">
        {/* All FAQs stay in the DOM (crawlable + FAQPage schema); the extras are
            just hidden until "more". The first one is open by default. */}
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className={!showAll && i >= INITIAL ? "hidden" : undefined}
          >
            <Accordion q={f.q} defaultOpen={i === 0}>
              <FaqRichContent question={f.q} />
              {f.a}
            </Accordion>
          </div>
        ))}

        {!showAll && hidden > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-primary-dark transition-colors hover:border-primary/40"
            >
              Mai multe întrebări
              <span className="tnum text-muted">+{hidden}</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="h-4 w-4"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
