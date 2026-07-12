import { monitorCategories } from "@/lib/site";
import { Section, Cta } from "@/components/primitives";

const steps = [
  "Mergi la medicul de familie pentru o trimitere către medicul specialist.",
  "Medicul specialist evaluează simptomele și emite biletul de trimitere pentru RMN.",
  "Ne suni sau completezi formularul, iar noi îți confirmăm programarea.",
];

export function CnasSection() {
  return (
    <Section
      id="cnas"
      tone="ink"
      eyebrow="Decontare CNAS"
      title="RMN cerebral gratuit cu bilet de trimitere"
      intro="Cu un bilet de trimitere valabil de la medicul specialist, RMN-ul cerebral este decontat integral de Casa de Asigurări de Sănătate: 0 lei pentru pacientul asigurat."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-semibold text-paper-100">
            Programul Monitor: RMN gratuit și prioritar
          </h3>
          <p className="mt-3 leading-relaxed text-muted-2">
            Medicul specialist notează „Monitor 1…7” pe biletul de trimitere.
            Pacienții din aceste categorii beneficiază de RMN gratuit, nelimitat
            și prioritar, chiar și după epuizarea plafonului lunar.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {monitorCategories.map((c, i) => (
              <li
                key={c}
                className="flex select-none items-center gap-3 rounded-xl border border-line-dark bg-white/[0.03] px-4 py-3"
              >
                <span className="tnum text-sm font-semibold text-primary-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-paper-100">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-paper-100">
            Cum obții biletul de trimitere
          </h3>
          <ol className="mt-6 space-y-5">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="tnum flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-light/40 text-sm font-semibold text-primary-light">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-muted-2">{s}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-2">
            Biletul de trimitere este gratuit. Doar medicul specialist poate
            emite o trimitere pentru RMN.
          </p>
          <Cta href="#programare" onDark className="mt-6">
            Programează cu bilet de trimitere
          </Cta>
        </div>
      </div>
    </Section>
  );
}
