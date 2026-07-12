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
      intro="Pregătește documentele de mai jos înainte de examinare. Vino cu 15–20 de minute mai devreme pentru completarea chestionarului de siguranță RMN."
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
            În plus, pentru RMN cu contrast
          </h3>
          <div className="mt-5">
            <IconList items={documents.contrast} />
          </div>
          <div className="mt-6 border-t border-line pt-5">
            <Note label="Funcție renală">
              Analizele confirmă că funcția renală permite administrarea în siguranță a substanței de
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
      eyebrow="Pregătire"
      title="Cum te pregătești și cum decurge investigația"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Cum se desfășoară investigația
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
          <h3 className="font-display text-lg font-semibold text-ink">Recomandări de pregătire</h3>
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
      eyebrow="Durată"
      title="Cât durează un RMN cerebral și când primești rezultatul"
    >
      <div className="overflow-hidden select-none rounded-2xl border border-line bg-paper-100">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Durata RMN cerebral și livrarea rezultatului</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="eyebrow px-5 py-3 text-[0.65rem] text-muted">
                Examinare
              </th>
              <th scope="col" className="eyebrow px-5 py-3 text-[0.65rem] text-muted">
                Durată
              </th>
              <th
                scope="col"
                className="eyebrow hidden px-5 py-3 text-[0.65rem] text-muted sm:table-cell"
              >
                Detalii
              </th>
            </tr>
          </thead>
          <tbody>
            {interpretation.duration.map((d) => (
              <tr key={d.label} className="border-b border-line last:border-0">
                <th scope="row" className="px-5 py-4 font-medium text-ink">
                  {d.label}
                </th>
                <td className="px-5 py-4">
                  <span className="tnum font-semibold text-primary-dark">{d.value}</span>
                </td>
                <td className="hidden px-5 py-4 text-muted sm:table-cell">{d.extra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

