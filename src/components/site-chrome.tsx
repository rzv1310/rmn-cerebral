
import { useEffect, useState } from "react";
import { site, nav } from "@/lib/site";
import { cx } from "@/components/primitives";

function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cx("group inline-flex items-baseline gap-2", className)}
    >
      <span className="font-display text-xl font-bold tracking-tight text-paper-100">
        affidea
      </span>
      <span aria-hidden className="h-4 w-px bg-white/25" />
      <span className="eyebrow text-[0.7rem] text-primary-light">RMN</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-dark bg-primary-dark/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Wordmark />
        <nav
          aria-label="Secțiuni"
          className="hidden items-center gap-7 lg:flex"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-2 transition-colors hover:text-paper-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${site.phone.tel}`}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="tnum">{site.phone.display}</span>
        </a>
      </div>
    </header>
  );
}

export function StickyCta() {
  // On mobile the hero already contains the form, so the sticky bar would be
  // redundant there. Reveal it only once the hero (form included) is scrolled past.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const anchor =
      document.getElementById("programare") ?? document.getElementById("top");
    if (!anchor) return;
    const update = () => setVisible(anchor.getBoundingClientRect().bottom <= 0);
    const io = new IntersectionObserver(update, { threshold: 0 });
    io.observe(anchor);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cx(
        "fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper-100/95 backdrop-blur-md transition-transform duration-300 ease-out lg:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href="#programare"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary-dark text-sm font-semibold text-paper-100"
        >
          Programează-te
        </a>
        <a
          href={`tel:${site.phone.tel}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-dark text-sm font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Sună acum
        </a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-paper-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-2">
              Rezonanță magnetică cerebrală în {site.affideaFootprint}. Preț
              transparent, aparate de câmp înalt și rezultate rapide.
            </p>
            <p className="mt-4 text-xs text-muted-2">{site.operatorNote}</p>
          </div>

          <nav aria-label="Navigare footer">
            <p className="eyebrow text-muted-2">Pagină</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-muted-2 transition-colors hover:text-paper-100"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-muted-2">Programări</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-2">
              <li>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="tnum text-paper-100 hover:text-primary-light"
                >
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-paper-100"
                >
                  {site.email}
                </a>
              </li>
              <li className="pt-2 text-xs">
                Program: Luni - Vineri {site.hours[0].value}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line-dark pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-2">
            <strong className="font-semibold text-paper-100">
              Notă medicală:
            </strong>{" "}
            Informațiile de pe această pagină au scop educativ și nu înlocuiesc
            consultul unui medic. Recomandarea de investigație și interpretarea
            rezultatului aparțin medicului specialist.
          </p>
          <div className="mt-6 text-xs text-muted-2">
            <p>© {"2026"} Affidea. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="M4.5 3h2.2l1.1 2.9-1.5 1.2a9 9 0 0 0 4.6 4.6l1.2-1.5 2.9 1.1v2.2a1.3 1.3 0 0 1-1.4 1.3A12.5 12.5 0 0 1 3.2 4.4 1.3 1.3 0 0 1 4.5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
