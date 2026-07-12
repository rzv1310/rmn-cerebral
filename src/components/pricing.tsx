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
      title="RMN cerebral preÈ' de la 770 lei"
    >
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-x-auto rounded-2xl bg-white">
          <table className="w-full border-collapse text-primary-dark">
            <caption className="sr-only">
              Tarife RMN cerebral la Affidea
            </caption>
            <thead className="bg-primary-dark text-paper-100">
              <tr>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-left text-sm font-bold"
                >
                  InvestigaÈ'ie
                </th>
                <th
                  scope="col"
                  className="whitespace-nowrap border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  PlatÄƒ
                </th>
                <th
                  scope="col"
                  className="border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  Card
                  <br />
                  Fidelitate
                </th>
                <th
                  scope="col"
                  className="border border-white/20 px-4 py-2.5 text-center text-sm font-bold"
                >
                  Promo
                  <br />
                  CNAS
                </th>
              </tr>
            </thead>
            <tbody>
              {cerebralPrices.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-primary-dark/15 last:border-0"
                >
                  <td className="border border-primary-dark/15 px-4 py-2.5 text-left text-sm font-medium">
                    {row.name}
                  </td>
                  <td className="border border-primary-dark/15 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.plata)}
                  </td>
                  <td className="border border-primary-dark/15 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.card)}
                  </td>
                  <td className="border border-primary-dark/15 px-4 py-2.5 text-right text-sm tabular-nums">
                    {fmt(row.promo)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="flex select-none flex-col gap-5 rounded-2xl bg-primary-dark p-6 text-white">
          <div>
            <p className="eyebrow text-white/70">PreÈ' de la</p>
            <p className="mt-2 text-lg leading-relaxed text-white">
              <span className="tnum font-semibold text-white">
                de la 770 lei
              </span>{" "}
              pentru un RMN cerebral nativ. Tariful final depinde de centrul
              Affidea È'i de aparat.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-white">
            {[
              `RMN cu sedare: +${lei(PRICE.sedarePrima)}`,
              "CD/DVD È'i raport medical incluse",
              "Cu bilet de trimitere: Gratuit prin CNAS",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-white"
                  aria-hidden
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <Cta href="tel:0219338" onDark className="mt-auto">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="h-4 w-4"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.57 15.57 0 0 1-6.62-6.62l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 0 1 8.59 3.99c0-.55-.45-1-1-1H4.08c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            ProgrameazÄƒ un RMN cerebral
          </Cta>
        </aside>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted">{priceNote}</p>

      {/* insurance / partners */}
      <div className="mt-10 select-none rounded-2xl border border-line bg-paper-100 px-6 py-5">
        <p className="eyebrow text-muted">AsigurÄƒri Acceptate</p>
          <div className="relative mt-[19px] overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-3 md:gap-6">
            {[...partnerLogos, ...partnerLogos].map((p, i) => {
              const isLargerMobile =
                p.name === "Asirom" ||
                p.name === "Signal Iduna" ||
                p.name === "Groupama" ||
                p.name === "Allianz-È'iriac";
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
