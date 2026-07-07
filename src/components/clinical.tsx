import {
  cerebralIndications,
  cerebralShows,
  avcRole,
  cerebralPathologies,
} from "@/lib/site";
import { Section, Eyebrow } from "@/components/primitives";

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-primary" aria-hidden />
          <span className="text-sm leading-relaxed text-ink/85">{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function ClinicalSection() {
  return (
    <Section
      id="indicatii"
      tone="paper"
      eyebrow="Indicații"
      title="Când este indicat un RMN cerebral?"
      intro="Medicul specialist recomandă un RMN cerebral pentru a investiga simptome neurologice sau pentru a diagnostica și monitoriza numeroase afecțiuni ale creierului."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">Când este recomandat</h3>
          <div className="mt-5">
            <CheckList items={cerebralIndications} />
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Ce evidențiază RMN-ul cranio-cerebral
          </h3>
          <div className="mt-5">
            <CheckList items={cerebralShows} />
          </div>
        </div>
      </div>

      {/* AVC focus callout */}
      <div className="mt-12 select-none overflow-hidden rounded-2xl bg-primary-dark p-8 text-paper-100 sm:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow onDark>Focus · Accident vascular cerebral</Eyebrow>
            <h3 className="mt-3 font-display text-xl font-semibold">{avcRole.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-2">{avcRole.text}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <span className="tnum rounded-lg border border-line-dark px-3 py-2 text-sm text-primary-light">
              DWI
            </span>
            <span className="tnum rounded-lg border border-line-dark px-3 py-2 text-sm text-primary-light">
              PWI
            </span>
          </div>
        </div>
      </div>

      {/* pathologies */}
      <div className="mt-14">
        <h3 className="font-display text-xl font-semibold text-ink">
          Patologii frecvente diagnosticate prin RMN cerebral
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cerebralPathologies.map((p) => (
            <div key={p.title} className="select-none rounded-2xl border border-line bg-paper-100 p-5">
              <p className="font-display font-semibold text-ink">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
