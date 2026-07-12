## Problemă accesibilitate: descendenți focalizabili în element `aria-hidden="true"`

### Context
Raportul indică faptul că bara sticky CTA de pe mobil (`StickyCta` din `src/components/site-chrome.tsx`) are atributul `aria-hidden={!visible}` pe container. Când bara nu este vizibilă, acest atribut ascunde containerul pentru tehnologiile de asistare, dar cele două link-uri din interior (`Programează-te` și `Sună acum`) rămân în DOM și pot fi focalizate (de ex. prin tasta Tab), ceea ce încalcă cerințele ARIA.

### Plan de remediere

1. **Audit rapid al altor elemente `aria-hidden` potențial problematice**
   - Se caută în componente instanțe de `aria-hidden` (sau `aria-hidden={true}`) aplicate pe containere care ar putea include elemente interactive (link-uri, butoane, input-uri).
   - Se verifică dacă mai există și alte cazuri similare în afara `StickyCta`.

2. **Remedierea componentei `StickyCta`**
   - Se elimină `aria-hidden={!visible}` de pe containerul exterior.
   - Se aplică atributul `inert={!visible}` pe container când bara este ascunsă. Acest lucru:
     - Împiedică focalizarea descendenților (link-uri) când bara nu este vizibilă.
     - Îi ascunde pe aceștia din arborele de accesibilitate.
     - Păstrează animația CSS de tranziție (`translate-y-0` / `translate-y-full`).
   - Se păstrează `pointer-events-none` și `translate-y-full` pentru stilul vizual când bara este ascunsă.

3. **Verificare**
   - Se rulează build-ul pentru a ne asigura că nu apar erori de tip TypeScript/sintaxă.
   - Se verifică vizual/preview că bara sticky apare/dispare corect la scroll pe mobil.

### Fișiere afectate
- `src/components/site-chrome.tsx` (modificarea componentei `StickyCta`)

### Rezultat așteptat
- Elementele interactive din bara sticky CTA nu mai sunt focalizabile sau accesibile cititoarelor de ecran atunci când bara este ascunsă.
- Eroarea de accesibilitate raportată este eliminată.