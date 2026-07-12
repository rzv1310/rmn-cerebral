import { site } from "@/lib/site";
import { Cta, Eyebrow, cx } from "@/components/primitives";
import { ProgramareForm } from "@/components/programare-form";

function Stars({ className }: { className?: string }) {
  return (
    <span className={cx("inline-flex", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 animate-pulse fill-white">
          <path d="M10 1.6l2.5 5.1 5.6.8-4 4 .9 5.6L10 14.5 5 17.1l.9-5.6-4-4 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

function HeroForm() {
  return (
    <div
      id="programare"
      className="animate-rise mx-auto w-full max-w-md scroll-mt-6 lg:mx-0"
    >
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p className="eyebrow text-muted-2">Cere o programare</p>
        <span className="text-xs text-muted-2">Îți confirmăm rapid</span>
      </div>
      <ProgramareForm idPrefix="hero" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-dark text-paper-100"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 85% 0%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(255,255,255,0.06), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise">
          <Eyebrow onDark>
            <a
              href="https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/"
              className="text-inherit no-underline hover:text-inherit"
            >
              Imagistică prin rezonanță magnetică
            </a>
          </Eyebrow>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            RMN cerebral <span className="text-primary-light">la Affidea</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-2">
            Rezonanță magnetică cerebrală cu rezultat rapid și fără liste de
            așteptare, în 25+ centre Affidea din România.
          </p>

          {/* price readout */}
          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <span className="eyebrow text-muted-2">RMN cerebral preț</span>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-lg text-muted-2">de la</span>
                <span className="tnum text-5xl font-bold leading-none text-paper-100">
                  770
                </span>
                <span className="text-lg text-muted-2">lei</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Cta href={`tel:${site.phone.tel}`} onDark>
              Sună pentru programare: {site.phone.display}
            </Cta>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-2">
            <span className="inline-flex items-center gap-2">
              <span className="tnum font-semibold text-paper-100">
                {site.rating.value}
              </span>
              <Stars />
              <span>· {site.rating.count} recenzii Google</span>
            </span>
          </div>

        </div>

        <HeroForm />
      </div>
    </section>
  );
}
