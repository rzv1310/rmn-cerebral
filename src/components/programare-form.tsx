
import { useState } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "w-full rounded-lg border border-line bg-paper-100 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45";

export function ProgramareForm({ idPrefix = "programare" }: { idPrefix?: string }) {
  const [sent, setSent] = useState(false);
  const fid = (n: string) => `${idPrefix}-${n}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nume = String(data.get("nume") ?? "");
    const telefon = String(data.get("telefon") ?? "");
    const tip = String(data.get("tip") ?? "");
    const mesaj = String(data.get("mesaj") ?? "");
    const body = `Solicitare programare RMN cerebral\n\nNume: ${nume}\nTelefon: ${telefon}\nInvestiga»'ie: ${tip}\nMesaj: ${mesaj}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Programare RMN: " + tip,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="select-none rounded-2xl border border-line bg-paper-100 p-6 sm:p-8">
      {sent ? (
        <div className="flex flex-col items-start gap-3 py-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-soft text-signal">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden>
              <path
                d="M4 10.5l3.6 3.6L16 5.4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="font-display text-lg font-semibold text-ink">√é»'i mul»'umim!</p>
          <p className="text-sm leading-relaxed text-muted">
            Se deschide aplica»'ia de e-mail cu solicitarea completatƒÉ. DacƒÉ preferi, ne po»'i suna
            direct la{" "}
            <a href={`tel:${site.phone.tel}`} className="tnum font-medium text-primary-dark">
              {site.phone.display}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor={fid("nume")} className="mb-1.5 block text-sm font-medium text-ink">
              Nume »'i prenume
            </label>
            <input id={fid("nume")} name="nume" required autoComplete="name" className={fieldClass} placeholder="Ion Popescu" />
          </div>
          <div>
            <label htmlFor={fid("telefon")} className="mb-1.5 block text-sm font-medium text-ink">
              Telefon
            </label>
            <input
              id={fid("telefon")}
              name="telefon"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
              placeholder="07XX XXX XXX"
            />
          </div>
          <div>
            <label htmlFor={fid("tip")} className="mb-1.5 block text-sm font-medium text-ink">
              Tip investiga»'ie
            </label>
            <select id={fid("tip")} name="tip" defaultValue="RMN cerebral nativ" className={fieldClass}>
              <option>RMN cerebral nativ</option>
              <option>RMN cerebral cu substan»'ƒÉ de contrast</option>
              <option>AltƒÉ examinare RMN</option>
            </select>
          </div>
          <div>
            <label htmlFor={fid("mesaj")} className="mb-1.5 block text-sm font-medium text-ink">
              Mesaj (op»'ional)
            </label>
            <textarea
              id={fid("mesaj")}
              name="mesaj"
              rows={3}
              className={fieldClass}
              placeholder="Ai bilet de trimitere? Ora»' preferat?"
            />
          </div>
          <label className="flex items-start gap-3 text-xs leading-relaxed text-muted">
            <span className="relative mt-px inline-flex h-5 w-9 shrink-0 items-center">
              <input type="checkbox" name="acord" required className="peer sr-only" />
              <span className="absolute inset-0 rounded-full bg-line transition-colors peer-checked:bg-primary-dark peer-focus-visible:ring-2 peer-focus-visible:ring-primary/45 peer-focus-visible:ring-offset-2" />
              <span className="absolute left-0.5 h-4 w-4 rounded-full bg-white shadow-[0_1px_2px_rgba(15,33,55,0.35)] transition-transform peer-checked:translate-x-4" />
            </span>
            <span>
              Sunt de acord cu prelucrarea datelor conform{" "}
              <a href="https://affidea.ro/ro-RO/protectia-datelor-personale/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-dark underline underline-offset-2">
                politicii de confiden»'ialitate
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            className="mt-[5px] inline-flex h-12 w-full items-center justify-center rounded-full bg-primary-dark text-sm font-semibold text-paper-100 transition-opacity hover:opacity-90 sm:mt-0"
          >
            Trimite solicitarea
          </button>
        </form>
      )}
    </div>
  );
}
