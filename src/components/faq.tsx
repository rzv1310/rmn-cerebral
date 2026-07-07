
import { useState } from "react";
import { faqs } from "@/lib/site";
import { Section, Accordion } from "@/components/primitives";

const INITIAL = 6;

export function FaqSection() {
  const [showAll, setShowAll] = useState(false);
  const hidden = faqs.length - INITIAL;

  return (
    <Section
      id="intrebari"
      tone="paper"
      eyebrow="Întrebări frecvente"
      title="Întrebări frecvente despre RMN cerebral"
    >
      <div className="mx-auto max-w-3xl">
        {/* All FAQs stay in the DOM (crawlable + FAQPage schema); the extras are
            just hidden until "more". The first one is open by default. */}
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className={!showAll && i >= INITIAL ? "hidden" : undefined}
          >
            <Accordion q={f.q} defaultOpen={i === 0}>
              {f.a}
            </Accordion>
          </div>
        ))}

        {!showAll && hidden > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-primary-dark transition-colors hover:border-primary/40"
            >
              Mai multe întrebări
              <span className="tnum text-muted">+{hidden}</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="h-4 w-4"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
