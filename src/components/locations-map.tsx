
import { useEffect, useRef, useState } from "react";
import {
  imagingCityPins,
  imagingClinicsInCity,
  type AffideaClinic,
  type CityPin,
  type DayHours,
} from "@/lib/affidea-clinics";
import { RO_BOUNDS } from "@/lib/romania-geo";
import { BUC_SECTORS, BUC_ILFOV } from "@/lib/bucuresti-geo";
import { googleMapsUrl } from "@/lib/maps";

// Ilfov metro centres live in the Bucure»'ti view, not the national map.
const ILFOV_CITIES = new Set(BUC_ILFOV.map((i) => i.city));

const { top, bottom, left, right } = RO_BOUNDS;

// lon/lat -> % of the county map (same frame as public/romania-counties.svg)
function proj(lon: number, lat: number) {
  return {
    x: ((lon - left) / (right - left)) * 100,
    y: ((top - lat) / (top - bottom)) * 100,
  };
}

const DAYS = [
  "Luni",
  "Mar»'i",
  "Miercuri",
  "Joi",
  "Vineri",
  "S√¢mbƒÉtƒÉ",
  "DuminicƒÉ",
];
const PRETTY: Record<string, string> = {
  "Cluj Napoca": "Cluj-Napoca",
  "Sat Scheia, Comuna Scheia": "Scheia",
};
const prettyCity = (c: string) => PRETTY[c] ?? c;

type Active = {
  city: string;
  title: string;
  clinics: AffideaClinic[];
  x: number;
  y: number;
} | null;

const labelShadow = {
  textShadow: "0 1px 3px #fff, 0 0 4px #fff, 0 0 4px #fff",
};
const mapShadow = { filter: "drop-shadow(0 18px 34px rgba(45,105,179,0.16))" };

export function LocationsMap() {
  const [view, setView] = useState<"country" | "buc">("country");
  const [active, setActive] = useState<Active>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  // The two maps have different heights, so switching can push the map out of
  // view. Only nudge it back if it's actually off-screen ("nearest" = no scroll
  // when already visible), so clicking Bucure»'ti doesn't jump the page.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    mapRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [view]);

  function openCity(p: CityPin) {
    if (p.sectors) {
      setActive(null);
      setView("buc");
      return;
    }
    const { x, y } = proj(p.lng, p.lat);
    setActive({
      city: p.city,
      title: prettyCity(p.city),
      clinics: imagingClinicsInCity(p.city),
      x,
      y,
    });
  }

  function openSector(s: (typeof BUC_SECTORS)[number]) {
    setActive({
      city: s.id,
      title: `Bucure»'ti ¬∑ ${s.id}`,
      clinics: imagingClinicsInCity(s.id),
      x: s.lx,
      y: s.ly,
    });
  }

  function openIlfov(i: (typeof BUC_ILFOV)[number]) {
    setActive({
      city: i.city,
      title: `${i.label} ¬∑ Ilfov`,
      clinics: imagingClinicsInCity(i.city),
      x: i.lx,
      y: i.ly,
    });
  }

  return (
    <div
      ref={mapRef}
      className="mx-auto w-full max-w-[1220px] scroll-mt-6 px-4 sm:px-8"
    >
      {/* Both views stay mounted (we toggle `hidden`) so switching never
          remounts the SVG maps ""î that remount is what flashed the pins
          unstyled on the way back to the country map. */}
      <div
        className={`relative mx-auto w-full ${view === "country" ? "" : "hidden"}`}
      >
        <img
          src="/romania-counties.svg?v=5"
          alt="Harta jude»'elor Rom√¢niei cu centrele Affidea"
          className="block h-auto w-full select-none"
          draggable={false}
          style={{ ...mapShadow, aspectRatio: "1000 / 747.4" }}
          onClick={() => setActive(null)}
        />

        {imagingCityPins
          .filter((p) => !ILFOV_CITIES.has(p.city))
          .map((p) => {
            const { x, y } = proj(p.lng, p.lat);
            const isActive = active?.city === p.city;
            return (
              <button
                key={p.city}
                type="button"
                onClick={() => openCity(p)}
                aria-label={
                  p.sectors
                    ? "Bucure»'ti ""î vezi centrele pe sectoare"
                    : `Centre Affidea √Æn ${prettyCity(p.city)} (${p.count})`
                }
                className="group absolute z-10 grid h-6 w-6 -translate-x-1/2 -translate-y-1/2 place-items-center hover:z-30"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {p.sectors && (
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-dark/40" />
                )}
                <span
                  className={`block rounded-full border-2 border-white bg-primary-dark shadow-[0_2px_5px_rgba(15,33,55,0.35)] transition-transform group-hover:scale-125 ${
                    isActive ? "h-3.5 w-3.5 ring-4 ring-primary/25" : "h-3 w-3"
                  }`}
                />
                {/* Labels only from lg up; on mobile/tablet the map shows dots
                    only (tap a dot for the city + its centres). */}
                <span
                  className="pointer-events-none absolute left-1/2 top-[calc(50%+0.5rem)] hidden -translate-x-1/2 whitespace-nowrap text-[0.7rem] font-semibold leading-none tracking-tight text-ink lg:block"
                  style={labelShadow}
                >
                  {prettyCity(p.city)}
                </span>
              </button>
            );
          })}

        {view === "country" && active && (
          <Popover active={active} onClose={() => setActive(null)} />
        )}
      </div>

      <div
        className={`relative mx-auto w-full max-w-lg ${view === "buc" ? "" : "hidden"}`}
      >
        <button
          type="button"
          onClick={() => {
            setActive(null);
            setView("country");
          }}
          className="mb-4 inline-flex h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-primary-dark transition-colors hover:bg-primary-light"
        >
          <span aria-hidden>"Üê</span> √énapoi la harta »'ƒÉrii
        </button>

        <div className="relative w-full">
          <img
            src="/bucuresti-sectors.svg?v=5"
            alt="Municipiul Bucure»'ti √ÆmpƒÉr»'it pe cele 6 sectoare"
            className="block h-auto w-full select-none"
            draggable={false}
            style={{ ...mapShadow, aspectRatio: "1000 / 1107.9" }}
            onClick={() => setActive(null)}
          />

          {BUC_SECTORS.map((s) => {
            const isActive = active?.city === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => openSector(s)}
                aria-label={`Centre Affidea ${s.id}`}
                className="group absolute z-20 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center"
                style={{ left: `${s.lx}%`, top: `${s.ly}%` }}
              >
                <span
                  className={`block rounded-full border-2 border-white bg-primary-dark shadow-[0_2px_5px_rgba(15,33,55,0.35)] transition-transform group-hover:scale-125 ${
                    isActive ? "h-4 w-4 ring-4 ring-primary/25" : "h-3.5 w-3.5"
                  }`}
                />
                <span
                  className="pointer-events-none absolute left-1/2 top-[calc(50%+0.5rem)] -translate-x-1/2 whitespace-nowrap text-[0.7rem] font-semibold tracking-tight text-ink"
                  style={labelShadow}
                >
                  {s.id}
                </span>
              </button>
            );
          })}

          {/* Ilfov ring ""î hollow dots north of the city, outside the sectors */}
          {BUC_ILFOV.map((i) => {
            const isActive = active?.city === i.city;
            return (
              <button
                key={i.city}
                type="button"
                onClick={() => openIlfov(i)}
                aria-label={`Centre Affidea √Æn ${i.label} (Ilfov)`}
                className="group absolute z-20 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center"
                style={{ left: `${i.lx}%`, top: `${i.ly}%` }}
              >
                <span
                  className={`block rounded-full border-2 border-primary-dark bg-white shadow-[0_2px_5px_rgba(15,33,55,0.35)] transition-transform group-hover:scale-125 ${
                    isActive ? "h-4 w-4 ring-4 ring-primary/25" : "h-3.5 w-3.5"
                  }`}
                />
                <span
                  className="pointer-events-none absolute left-1/2 top-[calc(50%+0.5rem)] -translate-x-1/2 whitespace-nowrap text-[0.7rem] font-semibold tracking-tight text-ink"
                  style={labelShadow}
                >
                  {i.label}
                </span>
              </button>
            );
          })}

          {view === "buc" && active && (
            <Popover active={active} onClose={() => setActive(null)} />
          )}
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full border-2 border-primary-dark bg-white"
          />
          Otopeni »'i »'tefƒÉne»'ti sunt √Æn jude»'ul Ilfov, l√¢ngƒÉ Bucure»'ti
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Program (hours) helpers ""î normalize the per-day structure for display and
// compute a live open/closed status in Europe/Bucharest time.
// ---------------------------------------------------------------------------
function sameHours(a: DayHours, b: DayHours) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a[0] === b[0] && a[1] === b[1];
}

function scheduleLines(hours: DayHours[]) {
  const out: string[] = [];
  let i = 0;
  while (i < 7) {
    let j = i;
    while (j + 1 < 7 && sameHours(hours[j + 1], hours[i])) j++;
    const label = i === j ? DAYS[i] : `${DAYS[i]}-${DAYS[j]}`;
    const h = hours[i];
    out.push(`${label}: ${h ? `${h[0]}-${h[1]}` : "√énchis"}`);
    i = j + 1;
  }
  return out;
}

function openStatus(hours: DayHours[]): { open: boolean; label: string } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Bucharest",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const cur =
    Number(parts.find((p) => p.type === "hour")?.value ?? 0) * 60 +
    Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const idx: Record<string, number> = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  const day = idx[wd] ?? 0;
  const mins = (t: string) =>
    Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

  const today = hours[day];
  if (today && cur >= mins(today[0]) && cur < mins(today[1])) {
    return { open: true, label: `Deschis ¬∑ se √Ænchide la ${today[1]}` };
  }
  for (let k = 0; k < 7; k++) {
    const d = (day + k) % 7;
    const h = hours[d];
    if (!h) continue;
    if (k === 0) {
      if (cur < mins(h[0]))
        return { open: false, label: `√énchis ¬∑ deschide azi la ${h[0]}` };
      continue;
    }
    const when = k === 1 ? "m√¢ine" : DAYS[d];
    return { open: false, label: `√énchis ¬∑ deschide ${when} la ${h[0]}` };
  }
  return { open: false, label: "√énchis" };
}

function Popover({
  active,
  onClose,
}: {
  active: NonNullable<Active>;
  onClose: () => void;
}) {
  const { x, y, title, clinics } = active;
  const tx = x < 24 ? "-12%" : x > 76 ? "-88%" : "-50%";
  const ty = y > 26 ? "calc(-100% - 18px)" : "18px";
  return (
    <>
      <button
        type="button"
        aria-label="√énchide"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 z-10 cursor-default"
      />
      <div
        role="dialog"
        aria-label={`Centre Affidea ${title}`}
        className="absolute z-30 flex max-h-[24rem] w-72 flex-col rounded-xl border border-line bg-white text-left shadow-[0_16px_40px_rgba(15,33,55,0.22)]"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(${tx}, ${ty})`,
        }}
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-4 pb-2.5 pt-3">
          <div>
            <p className="text-sm font-semibold leading-tight text-ink">
              {title}
            </p>
            <p className="mt-0.5 text-[0.7rem] text-muted">
              {clinics.length
                ? `${clinics.length} ${clinics.length === 1 ? "centru" : "centre"} de imagisticƒÉ`
                : "FƒÉrƒÉ centru de imagisticƒÉ aici"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="√énchide"
            className="-mr-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-primary-light hover:text-ink"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {clinics.length ? (
          <ul className="flex-1 divide-y divide-line overflow-y-auto px-4">
            {clinics.map((c, i) => {
              const status = c.hours ? openStatus(c.hours) : null;
              return (
                <li key={i} className="py-2.5">
                  <p className="text-xs font-semibold leading-snug text-ink">
                    {c.name}
                  </p>
                  {status && (
                    <p className="mt-1 flex items-center gap-1.5 text-[0.7rem] font-medium">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${status.open ? "bg-signal" : "bg-muted/60"}`}
                        aria-hidden
                      />
                      <span
                        className={
                          status.open ? "text-signal-700" : "text-muted"
                        }
                      >
                        {status.label}
                      </span>
                    </p>
                  )}
                  {c.hours ? (
                    <p className="mt-1 text-[0.7rem] leading-snug text-muted">
                      {scheduleLines(c.hours).join(" ¬∑ ")}
                    </p>
                  ) : (
                    c.program && (
                      <p className="mt-1 text-[0.7rem] leading-snug text-muted">
                        {c.program}
                      </p>
                    )
                  )}
                  {c.hoursNote && (
                    <p className="text-[0.7rem] italic leading-snug text-muted">
                      {c.hoursNote}
                    </p>
                  )}
                  <a
                    href={googleMapsUrl(`${c.name}, ${c.address}, ${c.city}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-start gap-1 text-[0.7rem] leading-snug text-muted transition-colors hover:text-primary-dark"
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
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {c.phone && (
                      <a
                        href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                        className="tnum text-[0.7rem] font-semibold text-primary-dark hover:underline"
                      >
                        {c.phone}
                      </a>
                    )}
                    <a
                      href="#programare"
                      onClick={onClose}
                      className="text-[0.7rem] font-semibold text-primary-dark hover:underline"
                    >
                      ProgrameazƒÉ "Üí
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="px-4 py-3 text-xs leading-snug text-muted">
            Momentan fƒÉrƒÉ centru de imagisticƒÉ Affidea aici. SunƒÉ la{" "}
            <a href="tel:0219338" className="font-semibold text-red-600 transition-colors hover:text-blue-600">
              021 9338
            </a>{" "}
            pentru cel mai apropiat centru.
          </p>
        )}
      </div>
    </>
  );
}
