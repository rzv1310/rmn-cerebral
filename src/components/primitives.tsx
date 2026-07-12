import type { ReactNode } from "react";

export function cx(...parts: unknown[]): string {
  return parts
    .filter((p): p is string => typeof p === "string" && p.length > 0)
    .join(" ");
}

type Tone = "paper" | "white" | "ink";

const toneBg: Record<Tone, string> = {
  paper: "bg-primary-light text-ink",
  white: "bg-primary-light text-ink",
  ink: "bg-primary-dark text-white",
};

// Imaging registration mark — the page's recurring "you are here" glyph.
// A targeting reticle (center ring + 4 ticks), echoing a scanner's slice locator.
export function Reticle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <circle cx="8" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M8 0.75v3.25M8 12v3.25M0.75 8h3.25M12 8h3.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "eyebrow inline-flex items-center gap-2",
        onDark ? "text-primary-light" : "text-primary-dark",
        className,
      )}
    >
      <Reticle
        className={cx(
          "h-3.5 w-3.5 shrink-0",
          onDark ? "opacity-90" : "text-primary",
        )}
      />
      {children}
    </p>
  );
}

// Clinical annotation — replaces tinted callout boxes. No fill, no rounded box:
// a reticle + optional mono micro-label + text, so notes read as instrument
// margin-notes rather than generic "info boxes".
export function Note({
  label,
  children,
  onDark = false,
}: {
  label?: string;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <Reticle
        className={cx(
          "mt-px h-4 w-4 shrink-0",
          onDark ? "text-primary-light" : "text-primary",
        )}
      />
      <div className="min-w-0">
        {label && (
          <p
            className={cx(
              "eyebrow text-[0.62rem]",
              onDark ? "text-primary-light" : "text-primary-dark",
            )}
          >
            {label}
          </p>
        )}
        <p
          className={cx(
            "text-sm leading-relaxed",
            label && "mt-1.5",
            onDark ? "text-muted-2" : "text-ink/80",
          )}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
  className,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const onDark = tone === "ink";
  const titleId = id ? `${id}-title` : undefined;
  const hasHeader = Boolean(eyebrow || title || intro);
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cx("py-16 sm:py-24", toneBg[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {hasHeader && (
          <div className="max-w-3xl">
            {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
            {title && (
              <h2
                id={titleId}
                className="mt-4 text-[1.875rem] font-semibold leading-[1.08] sm:text-[2.5rem]"
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={cx(
                  "mt-4 text-lg leading-relaxed",
                  onDark ? "text-muted-2" : "text-muted",
                )}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        {children && (
          <div className={cx(hasHeader && "mt-10 sm:mt-12")}>{children}</div>
        )}
      </div>
    </section>
  );
}

// Signature instrument readout: mono label + tabular value
export function DataChip({
  label,
  value,
  onDark = false,
}: {
  label: string;
  value: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-1.5 rounded-xl border px-4 py-3",
        onDark
          ? "border-line-dark bg-white/[0.04]"
          : "border-line bg-paper-100",
      )}
    >
      <span
        className={cx(
          "eyebrow text-[0.6rem]",
          onDark ? "text-muted-2" : "text-muted",
        )}
      >
        {label}
      </span>
      <span
        className={cx(
          "tnum text-xl font-semibold leading-none",
          onDark ? "text-paper-100" : "text-ink",
        )}
      >
        {value}
      </span>
    </div>
  );
}

type CtaVariant = "solid" | "outline" | "ghost";

export function Cta({
  href,
  children,
  variant = "solid",
  onDark = false,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  onDark?: boolean;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-tight transition-colors";
  const styles: Record<string, string> = {
    "solid-false": "bg-primary-dark text-paper-100 hover:opacity-90",
    "solid-true": "bg-white text-primary-dark hover:bg-primary-light",
    "outline-false":
      "border border-line text-ink hover:border-ink/40 hover:bg-primary-dark/[0.03]",
    "outline-true": "border border-white/20 text-paper-100 hover:bg-white/10",
    "ghost-false": "px-0 text-primary-dark hover:text-ink",
    "ghost-true": "px-0 text-primary-light hover:text-paper-100",
  };
  return (
    <a
      href={href}
      className={cx(base, styles[`${variant}-${onDark}`], className)}
      {...rest}
    >
      {children}
    </a>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path
        d="M4 10.5l3.6 3.6L16 5.4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cx("chevron", className)}
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Native, zero-JS, always-in-DOM accordion (crawlable)
export function Accordion({
  q,
  children,
  onDark = false,
  defaultOpen = false,
}: {
  q: string;
  children: ReactNode;
  onDark?: boolean;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className={cx(
        "group border-b",
        onDark ? "border-line-dark" : "border-line",
      )}
    >
      <summary className="flex items-center justify-between gap-4 py-5 text-left">
        <h3
          className={cx(
            "text-base font-medium sm:text-lg",
            onDark ? "text-paper-100" : "text-primary-dark",
          )}
        >
          {q}
        </h3>
        <Chevron
          className={cx(
            "h-5 w-5 shrink-0",
            onDark ? "text-primary-light" : "text-primary-dark",
          )}
        />
      </summary>
      <div
        className={cx(
          "max-w-2xl pb-5 pr-6 leading-relaxed",
          onDark ? "text-muted-2" : "text-muted",
        )}
      >
        {children}
      </div>
    </details>
  );
}
