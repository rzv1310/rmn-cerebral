import { cerebralPrices, partnerLogos, PRICE, lei, priceNote } from "@/lib/site";
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
      eyebrow="Tarife"
      title="RMN cerebral preț de la 770 lei"
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-x-auto rounded-2xl bg-primary-dark">
          <table className="w-full border-collapse text-paper-100">
            <caption className="sr-only">
              Tarife RMN cerebral la Affidea
            </caption>
            <thead className="bg-primary-dark">
              <tr>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-left text-sm font-bold"
                >
                  Investigație
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  Plată
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  Card Fidelitate
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  Promo CNAS
                </th>
              </tr>
            </thead>
            <tbody>
              {cerebralPrices.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-white/20 last:border-0"
                >
                  <td className="border border-white/20 px-4 py-2.5 text-left text-sm font-medium">
                    {row.name}
                  </td>
                  <td className="border border-white/20 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.plata)}
                  </td>
                  <td className="border border-white/20 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.card)}
                  </td>
                  <td className="border border-white/20 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.promo)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="flex select-none flex-col gap-5 rounded-2xl border border-line bg-white p-6 text-primary-dark">
          <div>
            <p className="eyebrow text-primary-dark/70">Preț de la</p>
            <p className="mt-2 text-lg leading-relaxed text-primary-dark">
              <span className="tnum font-semibold text-primary">
                de la 770 lei
              </span>{" "}
              pentru un RMN cerebral nativ. Tariful final depinde de centrul
              Affidea și de aparat.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-primary-dark">
            {[
              `RMN cu sedare: +${lei(PRICE.sedarePrima)}`,
              "CD/DVD și raport medical incluse",
              "Cu bilet de trimitere: Gratuit prin CNAS",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-primary"
                  aria-hidden
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Cta href="#programare" className="mt-auto">
            Programează un RMN cerebral
          </Cta>
        </aside>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{priceNote}</p>

      {/* insurance / partners */}
      <div className="mt-10 select-none rounded-2xl border border-line bg-paper-100 px-6 py-5">
        <p className="eyebrow text-muted">Asigurări Acceptate</p>
          <div className="relative mt-[19px] overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-3 md:gap-6">
            {[...partnerLogos, ...partnerLogos].map((p, i) => {
              const isLargerMobile =
                p.name === "Asirom" ||
                p.name === "Signal Iduna" ||
                p.name === "Groupama" ||
                p.name === "Allianz-Țiriac";
              return (
                <div
                  key={`${p.name}-${i}`}
                  className={`flex items-center justify-center md:h-10 md:w-24 ${
                    p.name === "Asirom" ? "md:h-11 md:w-28" : ""
                  } ${
                    isLargerMobile
                      ? "h-[33px] w-[73px]"
                      : "h-7 w-17"
                  }`}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                    loading={p.name === "Asirom" ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
