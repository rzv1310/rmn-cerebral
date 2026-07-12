import asiromLogo from "@/assets/asirom-logo.png";

// Single source of truth for the RMN București (Affidea) landing page.
//
// ⚠️  YMYL / [DE CONFIRMAT]: every value flagged `DE CONFIRMAT` is a plausible
// placeholder from research and MUST be verified with the client before launch.
// Because the visible page and the JSON-LD schema both read from this file,
// updating a price/fact here keeps on-page copy and structured data in sync.

export const site = {
  brand: "Affidea",
  tagline: "Rezonanță Magnetică în București",
  operatorNote: "Centru operat de Biomed Scan, parte din rețeaua Affidea.",

  // Domeniu final Affidea unde va fi găzduită pagina
  domain: "https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/rmn-cerebral",

  // Affidea national Call Center — DE CONFIRMAT
  phone: { display: "021 9338", tel: "+40219338" },
  whatsapp: { number: "40219338", display: "WhatsApp" }, // DE CONFIRMAT (wa.me needs a mobile number)
  email: "programari@affidea.ro", // DE CONFIRMAT
  address: {
    // Sediu de referință pentru schema; pagina este națională (vezi `locations`)
    street: "Bulevardul Nicolae Grigorescu 41",
    area: "Sector 3",
    city: "București",
    postalCode: "030445",
    countryCode: "RO",
  },
  geo: { lat: 44.4183, lng: 26.1526 }, // DE CONFIRMAT
  hours: [
    { days: "Luni – Vineri", value: "07:00 – 21:00" },
    { days: "Sâmbătă", value: "08:00 – 15:00" },
    { days: "Duminică", value: "Închis" },
  ], // DE CONFIRMAT — program orientativ, variază pe centru
  // schema.org openingHoursSpecification shorthand
  hoursSpec: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    { days: ["Saturday"], opens: "09:00", closes: "18:00" },
  ],

  rating: { value: 4.9, count: 1001 }, // DE CONFIRMAT (verify genuine source before publishing)

  affideaFootprint: "25 de centre Affidea din România", // DE CONFIRMAT
  equipment: "Aparat RMN de câmp înalt", // schema usesDevice — specificațiile variază pe centru
} as const;

// ---------------------------------------------------------------------------
// Pricing (Titan flat model) — all amounts in RON (lei)
// ---------------------------------------------------------------------------
export const PRICE = {
  nativ: 770, // orice examinare RMN nativ, o regiune
  contrast: 290, // supliment substanță de contrast
  sedarePrima: 675, // sedare, prima regiune
  sedareSuplim: 503, // sedare, fiecare regiune suplimentară
} as const;

export const cerebralCuContrast = PRICE.nativ + PRICE.contrast; // 1007

export function lei(n: number): string {
  return `${n.toLocaleString("ro-RO")} lei`;
}

// Representative single-region exams — all at the flat native price.
export const priceList: { name: string; anchor?: boolean }[] = [
  { name: "RMN cerebral", anchor: true },
  { name: "RMN coloană cervicală" },
  { name: "RMN coloană toracală" },
  { name: "RMN coloană lombară" },
  { name: "RMN genunchi" },
  { name: "RMN umăr" },
  { name: "RMN cot" },
  { name: "RMN mână / pumn" },
  { name: "RMN gleznă" },
  { name: "RMN picior" },
  { name: "RMN coapsă / gambă" },
  { name: "RMN șold (coxofemural)" },
  { name: "RMN articulații sacroiliace" },
  { name: "RMN abdomen superior" },
  { name: "RMN pelvis" },
  { name: "RMN sinusuri" },
  { name: "RMN hipofiză" },
  { name: "RMN gât (regiune cervicală)" },
  { name: "RMN testicular" },
];

// ---------------------------------------------------------------------------
// Exam catalog (categories → internal links, future child pages)
// ---------------------------------------------------------------------------
export const examCatalog = [
  {
    title: "RMN cerebral și neurologic",
    items: [
      "cerebral",
      "angio-RMN cerebral",
      "hipofiză",
      "orbite",
      "ureche internă",
      "protocol epilepsie",
      "spectroscopie",
    ],
  },
  {
    title: "RMN coloană",
    items: [
      "cervicală",
      "toracală",
      "lombară",
      "coloană totală",
      "plex brahial",
    ],
  },
  {
    title: "RMN articulații și extremități",
    items: [
      "genunchi",
      "umăr",
      "cot",
      "mână / pumn",
      "gleznă",
      "picior",
      "coapsă / gambă",
      "șold",
      "sacroiliace",
    ],
  },
  {
    title: "RMN abdomen și pelvis",
    items: [
      "abdomen superior",
      "pelvis",
      "colangio-RMN",
      "prostată multiparametric",
    ],
  },
  {
    title: "RMN specializate",
    items: ["mamar bilateral", "sinusuri", "gât", "testicular", "angio-RMN"],
  },
] as const;

// ---------------------------------------------------------------------------
// CNAS "Monitor" free-referral program — 7 patient categories
// ---------------------------------------------------------------------------
export const monitorCategories = [
  "Pacienți post-COVID",
  "Pacienți oncologici",
  "Diabet zaharat",
  "Boli cardiovasculare",
  "Boli rare",
  "Boli neurologice",
  "Boli cerebrovasculare",
] as const;

// ---------------------------------------------------------------------------
// Acte necesare (required documents)
// ---------------------------------------------------------------------------
export const documents = {
  required: [
    "Act de identitate (buletin / carte de identitate)",
    "Bilet de trimitere, pentru decontarea CNAS",
    "Card de sănătate / adeverință de asigurat",
    "Documente medicale anterioare relevante",
    "Investigații imagistice anterioare pe CD (RMN/CT), dacă există",
  ],
  contrast: [
    "Analiză recentă de creatinină serică",
    "Rata de filtrare glomerulară (RFG)",
  ],
} as const;

// ---------------------------------------------------------------------------
// Durată table
// ---------------------------------------------------------------------------
export const durations = [
  {
    label: "RMN nativ (o regiune)",
    value: "15–30 min",
    note: "Fără pregătire specială",
  },
  { label: "RMN cerebral nativ", value: "20–30 min", note: "Regiune unică" },
  {
    label: "RMN abdomen / pelvis",
    value: "≈ 30 min",
    note: "Post alimentar recomandat",
  },
  {
    label: "RMN cu substanță de contrast",
    value: "+15–20 min",
    note: "Se adaugă la timpul nativ",
  },
  { label: "RMN cu sedare", value: "≈ 45 min", note: "Necesită însoțitor" },
  {
    label: "Rezultat scris",
    value: "2–5 zile lucrătoare",
    note: "Film + CD/DVD pe loc",
  },
] as const;

// ---------------------------------------------------------------------------
// Technical accordions — "informații tehnice în acordeoane"
// ---------------------------------------------------------------------------
export const techAccordions = [
  {
    q: "Cum funcționează un RMN?",
    a: "RMN-ul se bazează pe rezonanța magnetică nucleară. Protonii de hidrogen din corp se aliniază într-un câmp magnetic puternic; un impuls de unde radio îi excită, iar la revenire emit semnale pe care computerul le transformă în imagini detaliate, secțiune cu secțiune.",
  },
  {
    q: "Ce înseamnă 1.5 sau 3 Tesla?",
    a: "Tesla măsoară puterea câmpului magnetic. 1.5T este standardul clinic de referință, iar unele centre Affidea dispun și de aparate de 3T, cu rezoluție și mai mare. Puterea aparatului diferă în funcție de centru.",
  },
  {
    q: "Ce sunt secvențele RMN (T1, T2, FLAIR, DWI)?",
    a: "Fiecare secvență evidențiază altfel țesuturile: T1 (anatomie), T2 (lichide și edem), FLAIR (leziuni lângă lichidul cefalorahidian) și DWI / difuzie (util în AVC-ul acut). Medicul radiolog alege protocolul potrivit indicației.",
  },
  {
    q: "Ce este diametrul de 70 cm?",
    a: "Diametrul este dimensiunea tunelului aparatului. Un diametru de până la 70 cm oferă mai mult spațiu și confort decât aparatele clasice (≈ 60 cm), reducând senzația de închidere pentru pacienții claustrofobi sau supraponderali.",
  },
  {
    q: "Ce protocoale speciale există?",
    a: "Pe lângă examinarea standard: angio-RMN (vase de sânge), spectroscopie (compoziție chimică), difuzie și perfuzie, tractografie (fibre nervoase), colangio-RMN (căi biliare) și RMN multiparametric (prostată).",
  },
  {
    q: "Cum primesc imaginile?",
    a: "Pe loc primești filmul radiologic și CD/DVD-ul cu imaginile în format DICOM. Raportul scris al medicului radiolog este disponibil în 2–5 zile lucrătoare.",
  },
] as const;

// ---------------------------------------------------------------------------
// FAQ — mirrored verbatim into FAQPage schema
// ---------------------------------------------------------------------------
// FAQ — deduplicated and ordered by search intent. The first 6 are shown by
// default (the most-searched: cost, ce este, gratuit, durată, rezultat,
// siguranță, claustrofobie); the rest sit behind a "more" toggle. Mirrored into
// FAQPage JSON-LD, so keep answers self-contained and factual (YMYL).
export const faqs = [
  {
    q: "Cât costă un RMN cerebral?",
    a: "Un RMN cerebral nativ pornește de la 770 lei, iar cu substanță de contrast de la aproximativ 1.007 lei. Tarifele variază în funcție de centrul Affidea și de tipul de aparat. Cu bilet de trimitere, examinarea este decontată integral de CNAS, deci gratuită.",
  },
  {
    q: "Ce este un RMN cerebral?",
    a: "Rezonanța Magnetică Nucleară (RMN) este o procedură de diagnostic imagistic de înaltă performanță, minim invazivă, atraumatică și neiradiantă. RMN-ul cranio-cerebral oferă imagini detaliate ale structurilor creierului, secțiune cu secțiune, fără a expune pacientul la radiații ionizante. Aparatul folosește un câmp magnetic de intensitate mare și radiofrecvența pentru a obține imagini de înaltă rezoluție. La nevoie, se administrează intravenos o substanță de contrast pe bază de gadoliniu. Principalele avantaje sunt: lipsa radiațiilor ionizante, contrast excelent al țesuturilor moi, imagistică multiplanară și secvențe specializate.",
  },
  {
    q: "Pot face un RMN la cap dacă sunt claustrofob?",
    a: "Da. Multe centre Affidea au aparate cu diametru de până la 70 cm, care reduc senzația de închidere. Pentru cazurile severe există opțiunea de sedare și posibilitatea unui însoțitor.",
  },
  {
    q: "Ce este substanța de contrast și ce înseamnă RMN \"nativ\"?",
    a: "\"Nativ\" înseamnă fără substanță de contrast. La RMN-ul cu contrast se administrează intravenos o substanță pe bază de gadoliniu, care evidențiază tumori, inflamații și vasele de sânge. Necesitatea contrastului o stabilește medicul radiolog, în funcție de investigație.",
  },
  {
    q: "Pot face RMN cerebral dacă sunt însărcinată?",
    a: "RMN-ul nativ este considerat sigur după primul trimestru, dar orice examinare în sarcină se face doar la recomandarea medicului. Substanța de contrast se evită în sarcină.",
  },
  {
    q: "Este RMN-ul cerebral sigur? Contraindicații",
    a: "Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu folosește radiații ionizante, ci se bazează pe câmp magnetic și unde radio. Anunță personalul medical dacă ai stimulator cardiac (pacemaker) incompatibil RMN, implanturi metalice sau dispozitive medicale incompatibile, implant cohlear sau neurostimulatoare, corpi străini metalici (în special oculari), insuficiență renală severă (pentru examinarea cu contrast) sau sarcină. Efectele adverse sunt rare: reacții alergice ușoare la contrast (urticarie, prurit), reacții alergice severe foarte rare, fibroză sistemică nefrogenă la pacienți cu insuficiență renală severă, disconfort tranzitoriu (amețeală, greață, anxietate) sau claustrofobie. Aparatele cu diametru de până la 70 cm și opțiunea de sedare fac examinarea accesibilă și pacienților anxioși.",
  },
];


// Reviews (E-E-A-T) — DE CONFIRMAT (must be genuine before publishing)
export const reviews = [
  {
    author: "Andreea M.",
    text: "Programare rapidă și prețul afișat clar, fără surprize. Rezultatul a venit în 3 zile.",
    date: "2026-05",
  },
  {
    author: "Mihai P.",
    text: "Aparatul cu tunel larg m-a ajutat mult, sunt claustrofob și totul a decurs bine.",
    date: "2026-04",
  },
  {
    author: "Elena R.",
    text: "Personal amabil, mi-au explicat pas cu pas ce presupune examinarea cu contrast.",
    date: "2026-03",
  },
] as const;

export const whyAffidea = [
  {
    title: "180+ Medici primari și specialiști radiologi",
    text: "Cazurile complexe pot fi revizuite de mai mulți medici radiologi din rețea, cu competență în neuroimagistică.",
  },
  {
    title: "Sisteme performante",
    text: "Echipamente RMN moderne și protocoale dedicate creierului: AVC, tumori, scleroză multiplă, epilepsie, malformații vasculare.",
  },
  {
    title: "Rezultat rapid",
    text: "Film și CD pe loc, raport scris în 2–5 zile lucrătoare.",
  },
  {
    title: "Confort pentru claustrofobi",
    text: "Opțiune de sedare pentru pacienții anxioși.",
    link: { text: "Opțiune de sedare", href: "https://rmn-bucuresti.ro/rmn-cu-sedare/" },
  },
] as const;

// Anchor navigation
export const nav = [
  { href: "#pret", label: "Preț" },
  
  { href: "#indicatii", label: "Indicații" },
  { href: "#acte", label: "Acte necesare" },
  { href: "#centre", label: "Centre" },
  { href: "#intrebari", label: "Întrebări" },
] as const;

// ---------------------------------------------------------------------------
// RMN cerebral — page focus content
// ---------------------------------------------------------------------------

// General RMN framing, in Affidea's voice (source: affidea.ro RMN service page)
export const generalRmn = {
  definition:
    "Rezonanța Magnetică Nucleară (RMN) este o procedură de diagnostic imagistic de înaltă performanță, minim invazivă, atraumatică și neiradiantă.",
  principle:
    "Aparatul folosește un câmp magnetic de intensitate mare și radiofrecvența pentru a obține imagini de înaltă rezoluție. Protonii de hidrogen din corp se aliniază în câmpul magnetic, iar semnalele emise la revenire sunt transformate de computer în imagini detaliate, secțiune cu secțiune.",
  noRadiation:
    "Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu folosește radiații ionizante, ci se bazează pe câmp magnetic și unde radio.",
  comfort:
    "Multe aparate RMN Affidea au un tunel mai larg, bine luminat și ventilat, deschis la ambele capete, pentru confortul pacienților corpulenți sau cu simptome de claustrofobie.",
} as const;

// „Ce se vede la un RMN cerebral”
export const cerebralShows = [
  "Structura creierului, trunchiul cerebral și cerebelul",
  "Substanța albă și substanța cenușie",
  "Vasele de sânge cerebrale (prin angio-RMN)",
  "Hipofiza, orbitele, urechea internă și nervii cranieni",
  "Tumori, chisturi și formațiuni anormale",
  "Leziuni de AVC, scleroză multiplă, inflamații sau infecții",
] as const;

// „Când este indicat un RMN cerebral” (În ce cazuri este recomandat)
export const cerebralIndications = [
  "Dureri de cap persistente sau severe",
  "Suspiciune de accident vascular cerebral (AVC)",
  "Tumori cerebrale sau monitorizare oncologică",
  "Scleroză multiplă și boli demielinizante",
  "Epilepsie și crize convulsive",
  "Traumatisme cranio-cerebrale",
  "Amețeli și tulburări de echilibru",
  "Tulburări de vedere sau de auz",
  "Anevrisme și malformații vasculare",
  "Evaluare înainte sau după intervenții neurochirurgicale",
] as const;

// „Cum se desfășoară investigația”
export const procedureSteps = [
  "Îndepărtezi obiectele metalice și îmbraci un halat de unică folosință.",
  "Te așezi pe masa aparatului; uneori zona examinată este imobilizată pentru imagini clare.",
  "În timpul scanării stai nemișcat; vei auzi un zgomot intermitent și primești dopuri de urechi sau căști.",
  "Comunici oricând cu personalul prin interfon și ai la îndemână un buton de alarmă.",
  "Dacă medicul recomandă contrast, acesta se administrează intravenos, în braț.",
] as const;

// „Pregătirea pacientului”
export const preparation = {
  general: [
    "Nu este necesară o pregătire specială pentru majoritatea examinărilor cerebrale.",
    "Îndepărtează bijuteriile, ceasul, ochelarii, agrafele și cardurile cu bandă magnetică.",
    "Anunță personalul dacă ai implanturi, dispozitive medicale sau ești însărcinată.",
    "Vino cu 15–20 de minute mai devreme pentru completarea chestionarului de siguranță.",
  ],
  contrast: [
    "Adu analize recente de creatinină serică și RFG.",
    "Menționează alergiile cunoscute și afecțiunile renale.",
    "Hidratează-te normal înainte de examinare.",
  ],
} as const;

// „Contraindicații / siguranță” (cerebral-weighted)
export const contraindications = [
  "Stimulator cardiac (pacemaker) incompatibil RMN",
  "Implanturi metalice sau dispozitive medicale incompatibile",
  "Implant cohlear sau neurostimulatoare",
  "Corpi străini metalici, în special oculari",
  "Insuficiență renală severă (pentru examinarea cu contrast)",
  "Sarcină: doar la recomandarea medicului",
] as const;

// Efecte adverse (rare)
export const adverseEffects = [
  "Reacții alergice ușoare la contrast (urticarie, prurit)",
  "Reacții alergice severe, foarte rare",
  "Fibroză sistemică nefrogenă la pacienți cu insuficiență renală severă",
  "Disconfort tranzitoriu: amețeală, greață, anxietate",
] as const;

// ---------------------------------------------------------------------------
// RMN cerebral preț — tabel focalizat (tarife Affidea)
// ---------------------------------------------------------------------------
export const cerebralPrices = [
  { name: "RMN CEREBRAL nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN CEREBRAL cu substanță de contrast", plata: 1480, card: 1332, promo: 1036 },
  { name: "ANGIO RMN CEREBRAL nativ", plata: 1380, card: 1242, promo: 966 },
  { name: "ANGIO RMN CEREBRAL cu substanță de contrast", plata: 1745, card: 1570.5, promo: 1225 },
  { name: "RMN CEREBRAL + PROTOCOL EPILEPSIE nativ", plata: 1380, card: 1242, promo: 966 },
  { name: "RMN CEREBRAL + PROTOCOL EPILEPSIE cu substanță de contrast", plata: 1750, card: 1575, promo: 1232 },
  { name: "RMN CEREBRAL + TRUNCHIURI SUPRA-AORTICE cu substanță de contrast", plata: 1750, card: 1575, promo: 1491 },
  { name: "RMN CEREBRAL + ORBITE nativ", plata: 2000, card: 1800, promo: 1400 },
  { name: "RMN CEREBRAL + ORBITE cu substanță de contrast", plata: 2375, card: 2137.5, promo: 1663 },
  { name: "RMN SINUSURI nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN SINUSURI cu substanță de contrast", plata: 1480, card: 1332, promo: 1036 },
  { name: "RMN CEREBRAL + URECHE nativ", plata: 2000, card: 1800, promo: 1400 },
  { name: "RMN CEREBRAL + URECHE cu substanță de contrast", plata: 2375, card: 2137.5, promo: 1663 },
  { name: "RMN HIPOFIZA nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN HIPOFIZA cu substanță de contrast", plata: 1480, card: 1332, promo: 1036 },
] as const;

// Prețurile nu sunt fixe — pornesc de la valorile afișate și variază pe centru/aparat.
export const priceNote =
  "Prețuri de referință. Tariful final se confirmă la programare.";

// Avantajele RMN-ului
export const rmnAdvantages = [
  {
    title: "Fără radiații ionizante",
    text: "Se bazează pe câmp magnetic și unde radio, nu pe raze X.",
  },
  {
    title: "Contrast excelent al țesuturilor moi",
    text: "Detalii superioare ale creierului față de computer tomograf.",
  },
  {
    title: "Imagistică multiplanară",
    text: "Secțiuni în orice plan, fără repoziționarea pacientului.",
  },
  {
    title: "Secvențe specializate",
    text: "Difuzie, perfuzie, angio-RMN și spectroscopie.",
  },
] as const;

// „Patologii frecvente diagnosticate prin RMN cranio-cerebral”
export const cerebralPathologies = [
  {
    title: "Tumori intracraniene",
    text: "Localizare, extindere, vascularizație și răspuns la tratament.",
  },
  {
    title: "Accident vascular cerebral (AVC)",
    text: "Secvențele de difuzie (DWI) detectează precoce zona de ischemie.",
  },
  {
    title: "Boli demielinizante",
    text: "Caracterizarea leziunilor de scleroză multiplă și a activității bolii.",
  },
  {
    title: "Afecțiuni inflamatorii și infecțioase",
    text: "Encefalite, meningite, abcese cerebrale, vasculite.",
  },
  {
    title: "Malformații congenitale",
    text: "Anomalii de dezvoltare corticală, malformații Chiari și vasculare.",
  },
  {
    title: "Traumatisme cranio-cerebrale",
    text: "Contuzii, hematoame și leziuni axonale difuze.",
  },
] as const;

// Rolul RMN-ului în AVC (highlight)
export const avcRole = {
  title: "Rolul RMN-ului în diagnosticul AVC",
  text: "În accidentul vascular cerebral, secvențele de difuzie (DWI) și perfuzie (PWI) diferențiază zona de infarct de zona salvabilă (penumbra), ajutând medicul să stabilească fereastra terapeutică și eligibilitatea pentru tromboliză.",
} as const;

// Interpretarea rezultatelor
export const interpretation = {
  duration: [
    {
      label: "RMN cerebral",
      value: "20–30 min",
      extra: "nativ (fără contrast)",
    },
    {
      label: "RMN cerebral cu contrast",
      value: "45–60 min",
      extra: "în funcție de protocol",
    },
    {
      label: "Rezultat",
      value: "24–72 ore",
      extra: "raport scris, CD DICOM",
    },
  ],
} as const;

// Parteneri / asigurări — logo-uri oficiale
export const partnerLogos = [
  { name: "CNAS", logo: "https://cnas.ro/wp-content/uploads/2021/07/logo_site_300.png" },
  { name: "Signal Iduna", logo: "https://www.signal-iduna.ro/assets/images/signal_iduna_fill.svg" },
  { name: "Allianz-Țiriac", logo: "https://www.allianztiriac.ro/content/dam/onemarketing/cee/azro/media/logo_azt/allianz_tiriac_logo.png" },
  { name: "Groupama", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Groupama_logo.svg" },
  { name: "Generali", logo: "https://www.generali.ro/wp-content/uploads/2022/06/logo.svg" },
  { name: "NN", logo: "https://www.nn.ro/themes/custom/nn/logo.svg" },
  { name: "Asirom", logo: asiromLogo },
  { name: "Uniqa", logo: "https://www.uniqa.ro/themes/custom/uniqa/images/logo.svg" },
] as const;

// Centrele Affidea de pe hartă sunt derivate direct din datele reale:
// `imagingCityPins` din lib/affidea-clinics.ts (un pin per oraș cu centru de
// imagistică, coordonate = media centrelor). Proiecția lon/lat → % folosește
// RO_BOUNDS din lib/romania-geo.ts (același cadru ca public/romania-counties.svg).
