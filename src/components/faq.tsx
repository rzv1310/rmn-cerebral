import { useState } from "react";
import { faqs } from "@/lib/site";
import { Section, Accordion, Note } from "@/components/primitives";

const INITIAL = 6;

function FaqRichContent() {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-muted">
        RezonanÈ'a MagneticÄƒ NuclearÄƒ (RMN) este o procedurÄƒ de diagnostic imagistic de Ã®naltÄƒ
        performanÈ'Äƒ, minim invazivÄƒ, atraumaticÄƒ È'i neiradiantÄƒ.
      </p>
      <p className="leading-relaxed text-muted">
        RMN-ul cranio-cerebral, cunoscut È'i ca iRM cerebral sau RMN cap, este o metodÄƒ imagisticÄƒ
        avansatÄƒ care oferÄƒ imagini detaliate ale structurilor creierului, secÈ'iune cu secÈ'iune,
        fÄƒrÄƒ a expune pacientul la radiaÈ'ii ionizante.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="font-display text-lg font-semibold text-ink">Cum funcÈ'ioneazÄƒ</h4>
          <p className="mt-2 leading-relaxed text-muted">
            Aparatul foloseÈ'te un cÃ¢mp magnetic de intensitate mare È'i radiofrecvenÈ'a pentru a
            obÈ'ine imagini de Ã®naltÄƒ rezoluÈ'ie. Protonii de hidrogen din corp se aliniazÄƒ Ã®n cÃ¢mpul
            magnetic, iar semnalele emise la revenire sunt transformate de computer Ã®n imagini
            detaliate, secÈ'iune cu secÈ'iune.
          </p>
          <div className="mt-4">
            <Note label="FÄƒrÄƒ radiaÈ'ii">
              Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu foloseÈ'te radiaÈ'ii
              ionizante, ci se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio.
            </Note>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-ink">SubstanÈ'a de contrast</h4>
          <p className="mt-2 leading-relaxed text-muted">
            CÃ¢nd medicul radiolog o recomandÄƒ, se administreazÄƒ intravenos o substanÈ'Äƒ de contrast pe
            bazÄƒ de gadoliniu, pentru imagini cu acurateÈ'e crescutÄƒ, utilÄƒ Ã®n tumori, leziuni
            inflamatorii sau anomalii vasculare.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Administrarea se face doar cÃ¢nd beneficiile depÄƒÈ'esc riscurile, dupÄƒ o evaluare atentÄƒ a
            funcÈ'iei renale.
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold text-ink">Avantajele RMN-ului</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">FÄƒrÄƒ radiaÈ'ii ionizante</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio, nu pe raze X.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">Contrast excelent al È'esuturilor moi</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Detalii superioare ale creierului faÈ'Äƒ de computer tomograf.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">ImagisticÄƒ multiplanarÄƒ</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              SecÈ'iuni Ã®n orice plan, fÄƒrÄƒ repoziÈ'ionarea pacientului.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper-100 p-4">
            <p className="font-display font-semibold text-ink">SecvenÈ'e specializate</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Difuzie, perfuzie, angio-RMN È'i spectroscopie.
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
        Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu foloseÈ'te radiaÈ'ii
        ionizante, ci se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h4 className="font-display text-lg font-semibold text-ink">ContraindicaÈ'ii</h4>
          <p className="mt-2 text-sm text-muted">
            AnunÈ'Äƒ personalul medical dacÄƒ te regÄƒseÈ'ti Ã®ntr-una dintre situaÈ'iile de mai jos:
            compatibilitatea se stabileÈ'te Ã®mpreunÄƒ cu medicul.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Stimulator cardiac (pacemaker) incompatibil RMN",
              "Implanturi metalice sau dispozitive medicale incompatibile",
              "Implant cohlear sau neurostimulatoare",
              "Corpi strÄƒini metalici, Ã®n special oculari",
              "InsuficienÈ'Äƒ renalÄƒ severÄƒ (pentru examinarea cu contrast)",
              "SarcinÄƒ: doar la recomandarea medicului",
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
              "ReacÈ'ii alergice uÈ'oare la contrast (urticarie, prurit)",
              "ReacÈ'ii alergice severe, foarte rare",
              "FibrozÄƒ sistemicÄƒ nefrogenÄƒ la pacienÈ'i cu insuficienÈ'Äƒ renalÄƒ severÄƒ",
              "Disconfort tranzitoriu: ameÈ'ealÄƒ, greaÈ'Äƒ, anxietate",
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
              Aparatele cu diametru de pÃ¢nÄƒ la 70 cm È'i opÈ'iunea de sedare fac examinarea accesibilÄƒ
              È'i pacienÈ'ilor anxioÈ'i.
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
    if (q === "Este RMN-ul cerebral sigur? ContraindicaÈ'ii") return <FaqSafetyContent />;
    return faqs.find((f) => f.q === q)?.a ?? "";
  };

  return (
    <Section
      id="intrebari"
      tone="paper"
      eyebrow="CiteÈ'te È'i ..."
      title="ÃntrebÄƒri frecvente despre RMN cerebral"
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
              Mai multe Ã®ntrebÄƒri
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

        <p className="mt-10 text-center text-xs leading-relaxed text-ink italic">
          ConÈ'inut verificat medical de{" "}
          <a
            href="https://www.linkedin.com/in/ruxandra-negru%C8%99-391295200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink transition-colors hover:text-ink"
          >
            dr. Ruxandra NegruÈ' - medic rezident radiolog
          </a>{" "}
          din reÈ'eaua Affidea. Ultima actualizare: iulie 2026.
        </p>
      </div>
    </Section>
  );
}
