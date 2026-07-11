import { cerebralPrices, partners, PRICE, lei, priceNote } from "@/lib/site";
import { Section, Cta } from "@/components/primitives";

function fmt(n: number): string {
  return n.toLocaleString("ro-RO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
}

export function PriceSection() {
  return (
    <Section
      id="pret"
      tone="paper"
      eyebrow="Prețuri"
      title="RMN cerebral preț: tarife transparente"
      intro="Prețuri clare, de la 717 lei. Tarifele variază în funcție de centru și de aparat, iar CD/DVD și filmul radiologic sunt incluse. Cu bilet de trimitere, examinarea este gratuită, decontată de CNAS."
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-x-auto rounded-2xl border border-line bg-paper-100">
          <table className="w-full border-collapse">
            <caption className="sr-only">
              Tarife RMN cerebral la Affidea
            </caption>
            <thead className="bg-primary-dark text-paper-100">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2.5 text-left text-sm font-bold"
                >
                  Investigație
                </th>
                <th
                  scope="col"
                  className="px-4 py-2.5 text-center text-sm font-bold"
                >
                  Plată
                </th>
                <th
                  scope="col"
                  className="px-4 py-2.5 text-center text-sm font-bold"
                >
                  Card Fidelitate
                </th>
                <th
                  scope="col"
                  className="px-4 py-2.5 text-center text-sm font-bold"
                >
                  Promo CNAS
                </th>
              </tr>
            </thead>
            <tbody>
              {cerebralPrices.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-[#333] last:border-0 even:bg-[#fafafa]"
                >
                  <td className="border border-[#333] px-4 py-2.5 text-left text-sm font-medium text-ink">
                    {row.name}
                  </td>
                  <td className="border border-[#333] px-4 py-2.5 text-right text-sm tabular-nums text-ink">
                    {fmt(row.plata)}
                  </td>
                  <td className="border border-[#333] px-4 py-2.5 text-right text-sm tabular-nums text-ink">
                    {fmt(row.card)}
                  </td>
                  <td className="border border-[#333] px-4 py-2.5 text-right text-sm tabular-nums text-ink">
                    {fmt(row.promo)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="flex select-none flex-col gap-5 rounded-2xl border border-line bg-primary-dark p-6 text-paper-100">
          <div>
            <p className="eyebrow text-muted-2">Preț de la</p>
            <p className="mt-2 text-lg leading-relaxed">
              <span className="tnum font-semibold text-primary-light">
                de la 717 lei
              </span>{" "}
              pentru un RMN cerebral nativ. Prețul final depinde de centru și de
              aparat.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-muted-2">
            {[
              `Substanță de contrast: +${lei(PRICE.contrast)}`,
              `RMN cu sedare: +${lei(PRICE.sedarePrima)}`,
              "CD/DVD și film radiologic incluse",
              "Cu bilet de trimitere: gratuit prin CNAS",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-primary-light"
                  aria-hidden
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Cta href="#programare" onDark className="mt-auto">
            Programează RMN cerebral
          </Cta>
        </aside>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{priceNote}</p>

      {/* insurance / partners */}
      <div className="mt-10 select-none rounded-2xl border border-line bg-paper-100 px-6 py-5">
        <p className="eyebrow text-muted">Deconturi și asigurări acceptate</p>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {partners.map((p) => (
            <li
              key={p}
              className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink/80"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
