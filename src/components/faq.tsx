import { useState } from "react";
import { faqs } from "@/lib/site";
import { Section, Accordion, Note } from "@/components/primitives";

const INITIAL = 6;

function FaqRichContent() {
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
          <h4 className="font-display text-lg font-semibold text-ink">Cum funcționează</h4>
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
          <h4 className="font-display text-lg font-semibold text-ink">Substanța de contrast</h4>
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
        <h4 className="font-display text-lg font-semibold text-ink">Avantajele RMN-ului</h4>
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

function FaqSafetyContent() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">
        Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu folosește radiații
        ionizante, ci se bazează pe câmp magnetic și unde radio.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="font-display text-lg font-semibold text-ink">Contraindicații</h4>
          <p className="mt-2 text-sm text-muted">
            Anunță personalul medical dacă te regăsești într-una dintre situațiile de mai jos:
            compatibilitatea se stabilește împreună cu medicul.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Stimulator cardiac (pacemaker) incompatibil RMN",
              "Implanturi metalice sau dispozitive medicale incompatibile",
              "Implant cohlear sau neurostimulatoare",
              "Corpi străini metalici, în special oculari",
              "Insuficiență renală severă (pentru examinarea cu contrast)",
              "Sarcină: doar la recomandarea medicului",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
                <span className="text-sm leading-relaxed text-ink/85">{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-ink">Efecte adverse (rare)</h4>
          <ul className="mt-5 space-y-3">
            {[
              "Reacții alergice ușoare la contrast (urticarie, prurit)",
              "Reacții alergice severe, foarte rare",
              "Fibroză sistemică nefrogenă la pacienți cu insuficiență renală severă",
              "Disconfort tranzitoriu: amețeală, greață, anxietate",
              "Claustrofobie",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
                <span className="text-sm leading-relaxed text-ink/85">{it}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-line pt-5">
            <Note label="Claustrofobie">
              Aparatele cu diametru de până la 70 cm și opțiunea de sedare fac examinarea accesibilă
              și pacienților anxioși.
            </Note>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const hidden = faqs.length - INITIAL;

  const renderAnswer = (q: string) => {
    if (q === "Ce este un RMN cerebral?") return <FaqRichContent />;
    if (q === "Este RMN-ul cerebral sigur? Contraindicații") return <FaqSafetyContent />;
    return faqs.find((f) => f.q === q)?.a ?? "";
  };

  return (
    <Section
      id="intrebari"
      tone="paper"
      eyebrow="Citește și ..."
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
              {renderAnswer(f.q)}
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

        <p className="mt-10 text-center text-xs leading-relaxed text-ink">
          Conținut verificat medical de{" "}
          <a
            href="https://www.linkedin.com/in/ruxandra-negru%C8%99-391295200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink transition-colors hover:text-ink"
          >
            dr. Ruxandra Negruș - medic rezident radiolog
          </a>{" "}
          din rețeaua Affidea. Ultima actualizare: iulie 2026.
        </p>
      </div>
    </Section>
  );
}
