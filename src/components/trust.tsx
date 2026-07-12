import { whyAffidea, reviews, site } from "@/lib/site";
import { Section, cx } from "@/components/primitives";

function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <span className={cx("inline-flex", className)} aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-primary">
          <path d="M10 1.6l2.5 5.1 5.6.8-4 4 .9 5.6L10 14.5 5 17.1l.9-5.6-4-4 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}


export function WhyAffideaSection() {
  return (
    <Section
      id="de-ce"
      tone="paper"
      eyebrow="De ce Affidea"
      title="Motive să alegi Affidea pentru RMN cerebral"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyAffidea.map((w) => (
          <div key={w.title} className="select-none rounded-2xl border border-line bg-paper-100 p-6">
            <span className="block h-0.5 w-6 rounded-full bg-primary" aria-hidden />
            <p className="mt-5 font-display font-semibold text-ink">{w.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {w.link ? (
                <>
                  <a
                    href={w.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit hover:text-primary"
                  >
                    {w.link.text}
                  </a>
                  {w.text.slice(w.link.text.length)}
                </>
              ) : (
                w.text
              )}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ReviewsSection() {
  return (
    <Section id="recenzii" tone="white" eyebrow="Recenzii" title="Ce spun pacienții noștri">
      <div className="mb-8 flex items-center gap-3">
        <Stars />
        <span className="tnum text-lg font-bold text-ink">{site.rating.value}</span>
        <span className="text-sm text-muted">din {site.rating.count} recenzii</span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.author} className="flex flex-col select-none rounded-2xl border border-line bg-paper-100 p-6">
            <Stars className="mb-3" />
            <blockquote className="flex-1 text-sm leading-relaxed text-ink/85">
              „{r.text}”
            </blockquote>
            <figcaption className="mt-4 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{r.author}</span>
              <span className="tnum text-xs text-muted">{r.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
