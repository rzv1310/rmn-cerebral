
import { useState } from "react";
import { imagingClinics, type AffideaClinic } from "@/lib/affidea-clinics";
import { googleMapsUrl } from "@/lib/maps";
import { site } from "@/lib/site";

// Great-circle distance in km. All ranking happens on-device — the location
// never leaves the browser.
function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

type Ranked = { c: AffideaClinic; d: number };
type Status = "idle" | "loading" | "error" | "done";

function PinGlyph() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
      <path
        d="M10 18s6-5.2 6-9.5A6 6 0 1 0 4 8.5C4 12.8 10 18 10 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.3" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function NearestCentre() {
  const [status, setStatus] = useState<Status>("idle");
  const [results, setResults] = useState<Ranked[]>([]);

  function locate() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const ranked = imagingClinics
          .filter((c) => c.lat != null && c.lng != null)
          .map((c) => ({
            c,
            d: distanceKm(
              latitude,
              longitude,
              c.lat as number,
              c.lng as number,
            ),
          }))
          .sort((a, b) => a.d - b.d)
          .slice(0, 3);
        setResults(ranked);
        setStatus("done");
      },
      () => setStatus("error"),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  return (
    <div className="mt-2 flex w-full flex-col items-center">
      <button
        type="button"
        onClick={locate}
        disabled={status === "loading"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-dark px-6 text-sm font-semibold tracking-tight text-paper-100 transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        <PinGlyph />
        {status === "loading"
          ? "Se caută centrele…"
          : status === "done"
            ? "Caută din nou"
            : "Găsește cel mai apropiat centru"}
      </button>

      {status === "error" && (
        <p className="mt-4 max-w-sm select-text text-sm leading-relaxed text-muted">
          Nu am putut accesa locația. Verifică permisiunile de localizare din
          browser sau sună la{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="font-semibold text-primary-dark"
          >
            {site.phone.display}
          </a>
          .
        </p>
      )}

      {status === "done" && (
        <ul className="mt-7 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
          {results.map(({ c, d }, i) => (
            <li
              key={`${c.name}-${i}`}
              className="flex flex-col rounded-2xl border border-line bg-paper-100 p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="eyebrow text-[0.6rem] text-primary-dark">
                  {c.city}
                </span>
                <span className="tnum select-text text-xs font-semibold text-ink">
                  ~{d < 1 ? "<1" : Math.round(d)} km
                </span>
              </div>
              <p className="mt-2 select-text text-sm font-semibold leading-snug text-ink">
                {c.name}
              </p>
              <a
                href={googleMapsUrl(`${c.name}, ${c.address}, ${c.city}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-start gap-1 text-xs leading-snug text-muted transition-colors hover:text-primary-dark"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="mt-px h-3 w-3 shrink-0"
                >
                  <path
                    d="M8 14.5s4.5-4 4.5-7.5A4.5 4.5 0 1 0 3.5 7c0 3.5 4.5 7.5 4.5 7.5Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8"
                    cy="6.5"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
                <span>{c.address}</span>
              </a>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                {c.phone && (
                  <a
                    href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                    className="tnum text-xs font-semibold text-primary-dark hover:underline"
                  >
                    {c.phone}
                  </a>
                )}
                <a
                  href="#programare"
                  className="text-xs font-semibold text-primary-dark hover:underline"
                >
                  Programează →
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
