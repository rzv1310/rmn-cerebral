import { generalRmn, rmnAdvantages } from "@/lib/site";
import { Section, Note } from "@/components/primitives";

export function CeEsteSection() {
  return (
    <Section
      id="ce-este"
      tone="white"
      eyebrow="Despre investigație"
      title="Ce este un RMN cerebral?"
      intro={generalRmn.definition}
    >
      <p className="max-w-3xl text-lg leading-relaxed text-muted">
        RMN-ul cranio-cerebral, cunoscut și ca iRM cerebral sau RMN cap, este o metodă
        imagistică avansată care oferă imagini detaliate ale structurilor creierului, secțiune cu
        secțiune, fără a expune pacientul la radiații ionizante.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">Cum funcționează</h3>
          <p className="mt-3 leading-relaxed text-muted">{generalRmn.principle}</p>
          <div className="mt-5 border-t border-line pt-5">
            <Note label="Fără radiații">{generalRmn.noRadiation}</Note>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">Substanța de contrast</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Când medicul radiolog o recomandă, se administrează intravenos o substanță de contrast
            pe bază de gadoliniu, pentru imagini cu acuratețe crescută, utilă în tumori, leziuni
            inflamatorii sau anomalii vasculare.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Administrarea se face doar când beneficiile depășesc riscurile, după o evaluare atentă a
            funcției renale.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-display text-xl font-semibold text-ink">Avantajele RMN-ului</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rmnAdvantages.map((a) => (
            <div key={a.title} className="select-none rounded-2xl border border-line bg-paper-100 p-5">
              <p className="font-display font-semibold text-ink">{a.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
