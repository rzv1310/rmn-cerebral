import { site } from "@/lib/site";
import { Section } from "@/components/primitives";
import { ProgramareForm } from "@/components/programare-form";

const assurances = [
  "Fără liste de așteptare",
  "Rezultat în 2–5 zile lucrătoare",
  "Confirmare rapidă a programării",
  "Gratuit cu bilet de trimitere",
];

export function BookingSection() {
  return (
    <Section
      id="contact"
      tone="ink"
      eyebrow="Programare"
      title="Programează-ți RMN-ul cerebral"
      intro="Completează formularul sau sună la Call Center. Îți confirmăm rapid data și centrul Affidea potrivit pentru tine."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <a
            href={`tel:${site.phone.tel}`}
            className="tnum block select-text text-4xl font-bold text-paper-100 hover:text-primary-light sm:text-5xl"
          >
            {site.phone.display}
          </a>
          <p className="mt-2 text-sm text-muted-2">
            Call Center · Luni – Vineri {site.hours[0].value}, Sâmbătă{" "}
            {site.hours[1].value}
          </p>

          <ul className="mt-8 space-y-3">
            {assurances.map((a) => (
              <li key={a} className="flex items-center gap-3 text-muted-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-[2px] bg-primary-light"
                  aria-hidden
                />
                <span className="text-sm">{a}</span>
              </li>
            ))}
          </ul>

        </div>

        <ProgramareForm idPrefix="book" />
      </div>
    </Section>
  );
}
