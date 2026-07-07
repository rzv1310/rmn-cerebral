import { site } from "@/lib/site";
import { Eyebrow } from "@/components/primitives";
import { LocationsMap } from "@/components/locations-map";
import { NearestCentre } from "@/components/nearest-centre";

export function LocationsSection() {
  return (
    <section
      id="centre"
      aria-labelledby="centre-title"
      className="bg-primary-light py-16 text-ink sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Eyebrow>Centre în România</Eyebrow>
        <h2
          id="centre-title"
          className="mt-4 text-[1.75rem] font-semibold leading-tight sm:text-4xl"
        >
          RMN cerebral în toată țara
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Alege un oraș de pe hartă pentru a vedea centrele Affidea. Pentru București, deschide
          harta pe sectoare. Un singur număr de contact, aceleași standarde de calitate.
        </p>
      </div>

      <div className="mt-10 sm:mt-14">
        <LocationsMap />
      </div>

      {/* Contact strip */}
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <p className="eyebrow text-muted">Programări · Contact Center</p>
        <a
          href={`tel:${site.phone.tel}`}
          className="tnum select-text text-3xl font-bold text-ink hover:text-primary-dark sm:text-4xl"
        >
          {site.phone.display}
        </a>
        <p className="text-sm text-muted">Luni – Vineri {site.hours[0].value}</p>
        <NearestCentre />
      </div>
    </section>
  );
}
