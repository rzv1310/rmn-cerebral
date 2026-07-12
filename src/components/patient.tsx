import {
  documents,
  procedureSteps,
  preparation,
  interpretation,
} from "@/lib/site";
import { Section, Note } from "@/components/primitives";

function IconList({
  items,
  variant = "check",
}: {
  items: readonly string[];
  variant?: "check" | "dot";
}) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          {variant === "check" ? (
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-primary" aria-hidden />
          ) : (
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" aria-hidden />
          )}
          <span className="text-sm leading-relaxed text-ink/85">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function ActeSection() {
  return (
    <Section
      id="acte"
      tone="paper"
      eyebrow="Acte necesare"
      title="Ce documente aduci la programare"
      intro="PregÄƒteÈ'te documentele de mai jos Ã®nainte de examinare. Vino cu 15-20 de minute mai devreme pentru completarea chestionarului de siguranÈ'Äƒ RMN."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="select-none rounded-2xl border border-line bg-paper-100 p-6">
          <h3 className="font-display text-lg font-semibold text-ink">Documente obligatorii</h3>
          <div className="mt-5">
            <IconList items={documents.required} />
          </div>
        </div>
        <div className="select-none rounded-2xl border border-line bg-paper-100 p-6">
          <h3 className="font-display text-lg font-semibold text-ink">
            ÃŽn plus, pentru RMN cu contrast
          </h3>
          <div className="mt-5">
            <IconList items={documents.contrast} />
          </div>
          <div className="mt-6 border-t border-line pt-5">
            <Note label="FuncÈ'ie renalÄƒ">
              Analizele confirmÄƒ cÄƒ funcÈ'ia renalÄƒ permite administrarea Ã®n siguranÈ'Äƒ a substanÈ'ei de
              contrast.
            </Note>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function PregatireSection() {
  return (
    <Section
      id="pregatire"
      tone="white"
      eyebrow="PregÄƒtire"
      title="Cum te pregÄƒteÈ'ti È'i cum decurge investigaÈ'ia"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Cum se desfÄƒÈ'oarÄƒ investigaÈ'ia
          </h3>
          <ol className="mt-6 space-y-5">
            {procedureSteps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="tnum flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm font-semibold text-primary-dark">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink/85">{s}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">RecomandÄƒri de pregÄƒtire</h3>
          <div className="mt-6">
            <IconList items={preparation.general} />
          </div>
          <div className="mt-6 select-none rounded-xl border border-line bg-paper-100 p-5">
            <p className="eyebrow text-muted">Pentru RMN cu contrast</p>
            <div className="mt-3">
              <IconList items={preparation.contrast} variant="dot" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function DurataSection() {
  return (
    <Section
      id="durata"
      tone="paper"
      eyebrow="DuratÄƒ"
      title="CÃ¢t dureazÄƒ un RMN cerebral È'i cÃ¢nd primeÈ'ti rezultatul"
    >
      <div className="overflow-hidden select-none rounded-2xl border border-white/20 bg-primary-dark">
        <table className="w-full text-left text-sm text-white">
          <caption className="sr-only">Durata RMN cerebral È'i livrarea rezultatului</caption>
          <thead>
            <tr className="border-b border-white/20">
              <th scope="col" className="eyebrow px-5 py-3 text-[0.65rem] text-white/80">
                Examinare
              </th>
              <th scope="col" className="eyebrow px-5 py-3 text-[0.65rem] text-white/80">
                DuratÄƒ
              </th>
              <th
                scope="col"
                className="eyebrow hidden px-5 py-3 text-[0.65rem] text-white/80 sm:table-cell"
              >
                Detalii
              </th>
            </tr>
          </thead>
          <tbody>
            {interpretation.duration.map((d) => (
              <tr key={d.label} className="border-b border-white/20 last:border-0">
                <th scope="row" className="px-5 py-4 font-medium text-white">
                  {d.label}
                </th>
                <td className="px-5 py-4">
                  <span className="tnum font-semibold text-primary-light">{d.value}</span>
                </td>
                <td className="hidden px-5 py-4 text-white/80 sm:table-cell">{d.extra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

