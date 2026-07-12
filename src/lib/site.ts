import asiromLogo from "@/assets/asirom-logo.png";

// Single source of truth for the RMN BucureÈ'ti (Affidea) landing page.
//
// "' ï¸  YMYL / [DE CONFIRMAT]: every value flagged `DE CONFIRMAT` is a plausible
// placeholder from research and MUST be verified with the client before launch.
// Because the visible page and the JSON-LD schema both read from this file,
// updating a price/fact here keeps on-page copy and structured data in sync.

export const site = {
  brand: "Affidea",
  tagline: "RezonanÈ'Äƒ MagneticÄƒ Ã®n BucureÈ'ti",
  operatorNote: "Centru operat de Biomed Scan, parte din reÈ'eaua Affidea.",

  // Domeniu final Affidea unde va fi gÄƒzduitÄƒ pagina
  domain: "https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/rmn-cerebral",

  // Affidea national Call Center ""” DE CONFIRMAT
  phone: { display: "021 9338", tel: "+40219338" },
  whatsapp: { number: "40219338", display: "WhatsApp" }, // DE CONFIRMAT (wa.me needs a mobile number)
  email: "programari@affidea.ro", // DE CONFIRMAT
  address: {
    // Sediu de referinÈ'Äƒ pentru schema; pagina este naÈ'ionalÄƒ (vezi `locations`)
    street: "Bulevardul Nicolae Grigorescu 41",
    area: "Sector 3",
    city: "BucureÈ'ti",
    postalCode: "030445",
    countryCode: "RO",
  },
  geo: { lat: 44.4183, lng: 26.1526 }, // DE CONFIRMAT
  hours: [
    { days: "Luni - Vineri", value: "07:00 - 21:00" },
    { days: "SÃ¢mbÄƒtÄƒ", value: "08:00 - 15:00" },
    { days: "DuminicÄƒ", value: "Ãnchis" },
  ], // DE CONFIRMAT ""” program orientativ, variazÄƒ pe centru
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

  affideaFootprint: "25 de centre Affidea din RomÃ¢nia", // DE CONFIRMAT
  equipment: "Aparat RMN de cÃ¢mp Ã®nalt", // schema usesDevice ""” specificaÈ'iile variazÄƒ pe centru
} as const;

// ---------------------------------------------------------------------------
// Pricing (Titan flat model) ""” all amounts in RON (lei)
// ---------------------------------------------------------------------------
export const PRICE = {
  nativ: 770, // orice examinare RMN nativ, o regiune
  contrast: 290, // supliment substanÈ'Äƒ de contrast
  sedarePrima: 675, // sedare, prima regiune
  sedareSuplim: 503, // sedare, fiecare regiune suplimentarÄƒ
} as const;

export const cerebralCuContrast = PRICE.nativ + PRICE.contrast; // 1007

export function lei(n: number): string {
  return `${n.toLocaleString("ro-RO")} lei`;
}

// Representative single-region exams ""” all at the flat native price.
export const priceList: { name: string; anchor?: boolean }[] = [
  { name: "RMN cerebral", anchor: true },
  { name: "RMN coloanÄƒ cervicalÄƒ" },
  { name: "RMN coloanÄƒ toracalÄƒ" },
  { name: "RMN coloanÄƒ lombarÄƒ" },
  { name: "RMN genunchi" },
  { name: "RMN umÄƒr" },
  { name: "RMN cot" },
  { name: "RMN mÃ¢nÄƒ / pumn" },
  { name: "RMN gleznÄƒ" },
  { name: "RMN picior" },
  { name: "RMN coapsÄƒ / gambÄƒ" },
  { name: "RMN È'old (coxofemural)" },
  { name: "RMN articulaÈ'ii sacroiliace" },
  { name: "RMN abdomen superior" },
  { name: "RMN pelvis" },
  { name: "RMN sinusuri" },
  { name: "RMN hipofizÄƒ" },
  { name: "RMN gÃ¢t (regiune cervicalÄƒ)" },
  { name: "RMN testicular" },
];

// ---------------------------------------------------------------------------
// Exam catalog (categories "†’ internal links, future child pages)
// ---------------------------------------------------------------------------
export const examCatalog = [
  {
    title: "RMN cerebral È'i neurologic",
    items: [
      "cerebral",
      "angio-RMN cerebral",
      "hipofizÄƒ",
      "orbite",
      "ureche internÄƒ",
      "protocol epilepsie",
      "spectroscopie",
    ],
  },
  {
    title: "RMN coloanÄƒ",
    items: [
      "cervicalÄƒ",
      "toracalÄƒ",
      "lombarÄƒ",
      "coloanÄƒ totalÄƒ",
      "plex brahial",
    ],
  },
  {
    title: "RMN articulaÈ'ii È'i extremitÄƒÈ'i",
    items: [
      "genunchi",
      "umÄƒr",
      "cot",
      "mÃ¢nÄƒ / pumn",
      "gleznÄƒ",
      "picior",
      "coapsÄƒ / gambÄƒ",
      "È'old",
      "sacroiliace",
    ],
  },
  {
    title: "RMN abdomen È'i pelvis",
    items: [
      "abdomen superior",
      "pelvis",
      "colangio-RMN",
      "prostatÄƒ multiparametric",
    ],
  },
  {
    title: "RMN specializate",
    items: ["mamar bilateral", "sinusuri", "gÃ¢t", "testicular", "angio-RMN"],
  },
] as const;

// ---------------------------------------------------------------------------
// CNAS "Monitor" free-referral program ""” 7 patient categories
// ---------------------------------------------------------------------------
export const monitorCategories = [
  "PacienÈ'i post-COVID",
  "PacienÈ'i oncologici",
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
    "Act de identitate (buletin / paÈ'aport)",
    "Bilet de trimitere de la medic specialist",
    "Card de sÄƒnÄƒtate / adeverinÈ'Äƒ de asigurat",
    "Documente medicale anterioare relevante",
    "InvestigaÈ'ii imagistice anterioare pe CD (RMN/CT), dacÄƒ existÄƒ",
  ],
  contrast: [
    "AnalizÄƒ recentÄƒ de creatininÄƒ sericÄƒ",
    "Rata de filtrare glomerularÄƒ (RFG)",
  ],
} as const;

// ---------------------------------------------------------------------------
// DuratÄƒ table
// ---------------------------------------------------------------------------
export const durations = [
  {
    label: "RMN nativ (o regiune)",
    value: "15-30 min",
    note: "FÄƒrÄƒ pregÄƒtire specialÄƒ",
  },
  { label: "RMN cerebral nativ", value: "20-30 min", note: "Regiune unicÄƒ" },
  {
    label: "RMN abdomen / pelvis",
    value: ""‰ˆ 30 min",
    note: "Post alimentar recomandat",
  },
  {
    label: "RMN cu substanÈ'Äƒ de contrast",
    value: "+15-20 min",
    note: "Se adaugÄƒ la timpul nativ",
  },
  { label: "RMN cu sedare", value: ""‰ˆ 45 min", note: "NecesitÄƒ Ã®nsoÈ'itor" },
  {
    label: "Rezultat scris",
    value: "2-5 zile lucrÄƒtoare",
    note: "Film + CD/DVD pe loc",
  },
] as const;

// ---------------------------------------------------------------------------
// Technical accordions ""” "informaÈ'ii tehnice Ã®n acordeoane"
// ---------------------------------------------------------------------------
export const techAccordions = [
  {
    q: "Cum funcÈ'ioneazÄƒ un RMN?",
    a: "RMN-ul se bazeazÄƒ pe rezonanÈ'a magneticÄƒ nuclearÄƒ. Protonii de hidrogen din corp se aliniazÄƒ Ã®ntr-un cÃ¢mp magnetic puternic; un impuls de unde radio Ã®i excitÄƒ, iar la revenire emit semnale pe care computerul le transformÄƒ Ã®n imagini detaliate, secÈ'iune cu secÈ'iune.",
  },
  {
    q: "Ce Ã®nseamnÄƒ 1.5 sau 3 Tesla?",
    a: "Tesla mÄƒsoarÄƒ puterea cÃ¢mpului magnetic. 1.5T este standardul clinic de referinÈ'Äƒ, iar unele centre Affidea dispun È'i de aparate de 3T, cu rezoluÈ'ie È'i mai mare. Puterea aparatului diferÄƒ Ã®n funcÈ'ie de centru.",
  },
  {
    q: "Ce sunt secvenÈ'ele RMN (T1, T2, FLAIR, DWI)?",
    a: "Fiecare secvenÈ'Äƒ evidenÈ'iazÄƒ altfel È'esuturile: T1 (anatomie), T2 (lichide È'i edem), FLAIR (leziuni lÃ¢ngÄƒ lichidul cefalorahidian) È'i DWI / difuzie (util Ã®n AVC-ul acut). Medicul radiolog alege protocolul potrivit indicaÈ'iei.",
  },
  {
    q: "Ce este diametrul de 70 cm?",
    a: "Diametrul este dimensiunea tunelului aparatului. Un diametru de pÃ¢nÄƒ la 70 cm oferÄƒ mai mult spaÈ'iu È'i confort decÃ¢t aparatele clasice ("‰ˆ 60 cm), reducÃ¢nd senzaÈ'ia de Ã®nchidere pentru pacienÈ'ii claustrofobi sau supraponderali.",
  },
  {
    q: "Ce protocoale speciale existÄƒ?",
    a: "Pe lÃ¢ngÄƒ examinarea standard: angio-RMN (vase de sÃ¢nge), spectroscopie (compoziÈ'ie chimicÄƒ), difuzie È'i perfuzie, tractografie (fibre nervoase), colangio-RMN (cÄƒi biliare) È'i RMN multiparametric (prostatÄƒ).",
  },
  {
    q: "Cum primesc imaginile?",
    a: "Pe loc primeÈ'ti filmul radiologic È'i CD/DVD-ul cu imaginile Ã®n format DICOM. Raportul scris al medicului radiolog este disponibil Ã®n 2-5 zile lucrÄƒtoare.",
  },
] as const;

// ---------------------------------------------------------------------------
// FAQ ""” mirrored verbatim into FAQPage schema
// ---------------------------------------------------------------------------
// FAQ ""” deduplicated and ordered by search intent. The first 6 are shown by
// default (the most-searched: cost, ce este, gratuit, duratÄƒ, rezultat,
// siguranÈ'Äƒ, claustrofobie); the rest sit behind a "more" toggle. Mirrored into
// FAQPage JSON-LD, so keep answers self-contained and factual (YMYL).
export const faqs = [
  {
    q: "CÃ¢t costÄƒ un RMN cerebral Ã®n clinicile Affidea?",
    a: "Un RMN cerebral nativ porneÈ'te de la 770 lei, iar cu substanÈ'Äƒ de contrast de la aproximativ 1.007 lei. Tarifele variazÄƒ Ã®n funcÈ'ie de centrul Affidea È'i de tipul de aparat. Cu bilet de trimitere, examinarea este decontatÄƒ integral de CNAS, deci gratuitÄƒ.",
  },
  {
    q: "Ce este un RMN cerebral?",
    a: "RezonanÈ'a MagneticÄƒ NuclearÄƒ (RMN) este o procedurÄƒ de diagnostic imagistic de Ã®naltÄƒ performanÈ'Äƒ, minim invazivÄƒ, atraumaticÄƒ È'i neiradiantÄƒ. RMN-ul cranio-cerebral oferÄƒ imagini detaliate ale structurilor creierului, secÈ'iune cu secÈ'iune, fÄƒrÄƒ a expune pacientul la radiaÈ'ii ionizante. Aparatul foloseÈ'te un cÃ¢mp magnetic de intensitate mare È'i radiofrecvenÈ'a pentru a obÈ'ine imagini de Ã®naltÄƒ rezoluÈ'ie. La nevoie, se administreazÄƒ intravenos o substanÈ'Äƒ de contrast pe bazÄƒ de gadoliniu. Principalele avantaje sunt: lipsa radiaÈ'iilor ionizante, contrast excelent al È'esuturilor moi, imagisticÄƒ multiplanarÄƒ È'i secvenÈ'e specializate.",
  },
  {
    q: "Pot face un RMN la cap dacÄƒ sunt claustrofob?",
    a: "Da. Multe centre Affidea au aparate cu diametru de pÃ¢nÄƒ la 70 cm, care reduc senzaÈ'ia de spaÈ'iu inchis. Pentru cazurile severe existÄƒ opÈ'iunea de sedare È'i posibilitatea unui Ã®nsoÈ'itor.",
  },
  {
    q: "Ce este substanÈ'a de contrast È'i ce Ã®nseamnÄƒ RMN \"nativ\"?",
    a: "\"Nativ\" Ã®nseamnÄƒ fÄƒrÄƒ substanÈ'Äƒ de contrast. La RMN-ul cu contrast se administreazÄƒ intravenos o substanÈ'Äƒ pe bazÄƒ de gadoliniu, care evidenÈ'iazÄƒ tumori, inflamaÈ'ii È'i vasele de sÃ¢nge. Necesitatea contrastului o stabileÈ'te medicul radiolog, Ã®n funcÈ'ie de investigaÈ'ie.",
  },
  {
    q: "Pot face RMN cerebral dacÄƒ sunt Ã®nsÄƒrcinatÄƒ?",
    a: "RMN-ul nativ este considerat sigur dupÄƒ primul trimestru, dar orice examinare Ã®n sarcinÄƒ se face doar la recomandarea medicului. SubstanÈ'a de contrast se evitÄƒ Ã®n sarcinÄƒ.",
  },
  {
    q: "Este RMN-ul cerebral sigur? ContraindicaÈ'ii",
    a: "Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu foloseÈ'te radiaÈ'ii ionizante, ci se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio. AnunÈ'Äƒ personalul medical dacÄƒ ai stimulator cardiac (pacemaker) incompatibil RMN, implanturi metalice sau dispozitive medicale incompatibile, implant cohlear sau neurostimulatoare, corpi strÄƒini metalici (Ã®n special oculari), insuficienÈ'Äƒ renalÄƒ severÄƒ (pentru examinarea cu contrast) sau sarcinÄƒ. Efectele adverse sunt rare: reacÈ'ii alergice uÈ'oare la contrast (urticarie, prurit), reacÈ'ii alergice severe foarte rare, fibrozÄƒ sistemicÄƒ nefrogenÄƒ la pacienÈ'i cu insuficienÈ'Äƒ renalÄƒ severÄƒ, disconfort tranzitoriu (ameÈ'ealÄƒ, greaÈ'Äƒ, anxietate) sau claustrofobie. Aparatele cu diametru de pÃ¢nÄƒ la 70 cm È'i opÈ'iunea de sedare fac examinarea accesibilÄƒ È'i pacienÈ'ilor anxioÈ'i.",
  },
];


// Reviews (E-E-A-T) ""” DE CONFIRMAT (must be genuine before publishing)
export const reviews = [
  {
    author: "Andreea M.",
    text: "Programare rapidÄƒ È'i preÈ'ul afiÈ'at clar, fÄƒrÄƒ surprize. Rezultatul a venit Ã®n 3 zile.",
    date: "2026-05",
  },
  {
    author: "Mihai P.",
    text: "Aparatul cu tunel larg m-a ajutat mult, sunt claustrofob È'i totul a decurs bine.",
    date: "2026-04",
  },
  {
    author: "Elena R.",
    text: "Personal amabil, mi-au explicat pas cu pas ce presupune examinarea cu contrast.",
    date: "2026-03",
  },
] as const;

type WhyAffideaItem = {
  title: string;
  text: string;
  link?: { text: string; href: string };
};

export const whyAffidea: readonly WhyAffideaItem[] = [
  {
    title: "180+ Medici primari È'i specialiÈ'ti radiologi",
    text: "Cazurile complexe pot fi revizuite de mai mulÈ'i medici radiologi din reÈ'ea, cu competenÈ'Äƒ Ã®n neuroimagisticÄƒ.",
  },
  {
    title: "Sisteme performante",
    text: "Echipamente RMN moderne È'i protocoale dedicate afecÈ'iunilor creierului: AVC, tumori, sclerozÄƒ multiplÄƒ, epilepsie, malformaÈ'ii vasculare.",
  },
  {
    title: "Rezultat rapid",
    text: "Film È'i CD pe loc, raport scris Ã®n 2-5 zile lucrÄƒtoare.",
  },
  {
    title: "Confort pentru claustrofobi",
    text: "OpÈ'iune de sedare pentru pacienÈ'ii anxioÈ'i.",
    link: { text: "OpÈ'iune de sedare", href: "https://rmn-bucuresti.ro/rmn-cu-sedare/" },
  },
] as const;

// Anchor navigation
export const nav = [
  { href: "#pret", label: "PreÈ'" },
  
  { href: "#indicatii", label: "IndicaÈ'ii" },
  { href: "#acte", label: "Acte necesare" },
  { href: "#centre", label: "Centre" },
  { href: "#intrebari", label: "ÃntrebÄƒri" },
] as const;

// ---------------------------------------------------------------------------
// RMN cerebral ""” page focus content
// ---------------------------------------------------------------------------

// General RMN framing, in Affidea's voice (source: affidea.ro RMN service page)
export const generalRmn = {
  definition:
    "RezonanÈ'a MagneticÄƒ NuclearÄƒ (RMN) este o procedurÄƒ de diagnostic imagistic de Ã®naltÄƒ performanÈ'Äƒ, minim invazivÄƒ, atraumaticÄƒ È'i neiradiantÄƒ.",
  principle:
    "Aparatul foloseÈ'te un cÃ¢mp magnetic de intensitate mare È'i radiofrecvenÈ'a pentru a obÈ'ine imagini de Ã®naltÄƒ rezoluÈ'ie. Protonii de hidrogen din corp se aliniazÄƒ Ã®n cÃ¢mpul magnetic, iar semnalele emise la revenire sunt transformate de computer Ã®n imagini detaliate, secÈ'iune cu secÈ'iune.",
  noRadiation:
    "Spre deosebire de radiografie sau computer tomograf (CT), RMN-ul nu foloseÈ'te radiaÈ'ii ionizante, ci se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio.",
  comfort:
    "Multe aparate RMN Affidea au un tunel mai larg, bine luminat È'i ventilat, deschis la ambele capete, pentru confortul pacienÈ'ilor corpulenÈ'i sau cu simptome de claustrofobie.",
} as const;

// """Ce se vede la un RMN cerebral"""
export const cerebralShows = [
  "Structura creierului, trunchiul cerebral È'i cerebelul",
  "SubstanÈ'a albÄƒ È'i substanÈ'a cenuÈ'ie",
  "Vasele de sÃ¢nge cerebrale (prin angio-RMN)",
  "Hipofiza, orbitele, urechea internÄƒ È'i nervii cranieni",
  "Tumori, chisturi È'i formaÈ'iuni anormale",
  "Leziuni de AVC, sclerozÄƒ multiplÄƒ, inflamaÈ'ii sau infecÈ'ii",
] as const;

// """CÃ¢nd este indicat un RMN cerebral""" (Ãn ce cazuri este recomandat)
export const cerebralIndications = [
  "Dureri de cap persistente sau severe",
  "Suspiciune de accident vascular cerebral (AVC)",
  "Tumori cerebrale sau monitorizare oncologicÄƒ",
  "SclerozÄƒ multiplÄƒ È'i boli demielinizante",
  "Epilepsie È'i crize convulsive",
  "Traumatisme cranio-cerebrale",
  "AmeÈ'eli È'i tulburÄƒri de echilibru",
  "TulburÄƒri de vedere sau de auz",
  "Anevrisme È'i malformaÈ'ii vasculare",
  "Evaluare Ã®nainte sau dupÄƒ intervenÈ'ii neurochirurgicale",
] as const;

// """Cum se desfÄƒÈ'oarÄƒ investigaÈ'ia"
export const procedureSteps = [
  "ÃndepÄƒrtezi obiectele metalice È'i Ã®mbraci un halat de unicÄƒ folosinÈ'Äƒ.",
  "Te aÈ'ezi pe masa aparatului; zona examinatÄƒ va fi imobilizatÄƒ pentru imagini clare.",
  "Ãn timpul scanÄƒrii stai nemiÈ'cat; vei auzi un zgomot intermitent È'i primeÈ'ti dopuri de urechi sau cÄƒÈ'ti.",
  "Comunici oricÃ¢nd cu personalul prin interfon È'i ai la Ã®ndemÃ¢nÄƒ un buton de alarmÄƒ.",
  "DacÄƒ medicul recomandÄƒ contrast, acesta se administreazÄƒ intravenos, Ã®n braÈ'.",
] as const;

// """PregÄƒtirea pacientului"""
export const preparation = {
  general: [
    "Nu este necesarÄƒ o pregÄƒtire specialÄƒ pentru majoritatea examinÄƒrilor cerebrale.",
    "ÃndepÄƒrteazÄƒ bijuteriile, ceasul, ochelarii, agrafele È'i cardurile cu bandÄƒ magneticÄƒ.",
    "AnunÈ'Äƒ personalul dacÄƒ ai implanturi, dispozitive medicale sau eÈ'ti Ã®nsÄƒrcinatÄƒ.",
    "Vino cu 15-20 de minute mai devreme pentru completarea chestionarului de siguranÈ'Äƒ.",
  ],
  contrast: [
    "Adu analize recente de creatininÄƒ sericÄƒ È'i RFG.",
    "MenÈ'ioneazÄƒ alergiile cunoscute È'i afecÈ'iunile renale.",
    "HidrateazÄƒ-te normal Ã®nainte de examinare.",
  ],
} as const;

// """ContraindicaÈ'ii / siguranÈ'Äƒ""" (cerebral-weighted)
export const contraindications = [
  "Stimulator cardiac (pacemaker) incompatibil RMN",
  "Implanturi metalice sau dispozitive medicale incompatibile",
  "Implant cohlear sau neurostimulatoare",
  "Corpi strÄƒini metalici, Ã®n special oculari",
  "InsuficienÈ'Äƒ renalÄƒ severÄƒ (pentru examinarea cu contrast)",
  "SarcinÄƒ: doar la recomandarea medicului",
] as const;

// Efecte adverse (rare)
export const adverseEffects = [
  "ReacÈ'ii alergice uÈ'oare la contrast (urticarie, prurit)",
  "ReacÈ'ii alergice severe, foarte rare",
  "FibrozÄƒ sistemicÄƒ nefrogenÄƒ la pacienÈ'i cu insuficienÈ'Äƒ renalÄƒ severÄƒ",
  "Disconfort tranzitoriu: ameÈ'ealÄƒ, greaÈ'Äƒ, anxietate",
] as const;

// ---------------------------------------------------------------------------
// RMN cerebral preÈ' ""” tabel focalizat (tarife Affidea)
// ---------------------------------------------------------------------------
export const cerebralPrices = [
  { name: "RMN CEREBRAL nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN CEREBRAL cu substanÈ'Äƒ de contrast", plata: 1480, card: 1332, promo: 1036 },
  { name: "ANGIO RMN CEREBRAL nativ", plata: 1380, card: 1242, promo: 966 },
  { name: "ANGIO RMN CEREBRAL cu substanÈ'Äƒ de contrast", plata: 1745, card: 1570.5, promo: 1225 },
  { name: "RMN CEREBRAL + PROTOCOL EPILEPSIE nativ", plata: 1380, card: 1242, promo: 966 },
  { name: "RMN CEREBRAL + PROTOCOL EPILEPSIE cu substanÈ'Äƒ de contrast", plata: 1750, card: 1575, promo: 1232 },
  { name: "RMN CEREBRAL + TRUNCHIURI SUPRA-AORTICE cu substanÈ'Äƒ de contrast", plata: 1750, card: 1575, promo: 1491 },
  { name: "RMN CEREBRAL + ORBITE nativ", plata: 2000, card: 1800, promo: 1400 },
  { name: "RMN CEREBRAL + ORBITE cu substanÈ'Äƒ de contrast", plata: 2375, card: 2137.5, promo: 1663 },
  { name: "RMN SINUSURI nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN SINUSURI cu substanÈ'Äƒ de contrast", plata: 1480, card: 1332, promo: 1036 },
  { name: "RMN CEREBRAL + URECHE nativ", plata: 2000, card: 1800, promo: 1400 },
  { name: "RMN CEREBRAL + URECHE cu substanÈ'Äƒ de contrast", plata: 2375, card: 2137.5, promo: 1663 },
  { name: "RMN HIPOFIZA nativ", plata: 1100, card: 990, promo: 770 },
  { name: "RMN HIPOFIZA cu substanÈ'Äƒ de contrast", plata: 1480, card: 1332, promo: 1036 },
] as const;

// PreÈ'urile nu sunt fixe ""” pornesc de la valorile afiÈ'ate È'i variazÄƒ pe centru/aparat.
export const priceNote =
  "PreÈ'uri de referinÈ'Äƒ. Tariful final se confirmÄƒ la programare.";

// Avantajele RMN-ului
export const rmnAdvantages = [
  {
    title: "FÄƒrÄƒ radiaÈ'ii ionizante",
    text: "Se bazeazÄƒ pe cÃ¢mp magnetic È'i unde radio, nu pe raze X.",
  },
  {
    title: "Contrast excelent al È'esuturilor moi",
    text: "Detalii superioare ale creierului faÈ'Äƒ de computer tomograf.",
  },
  {
    title: "ImagisticÄƒ multiplanarÄƒ",
    text: "SecÈ'iuni Ã®n orice plan, fÄƒrÄƒ repoziÈ'ionarea pacientului.",
  },
  {
    title: "SecvenÈ'e specializate",
    text: "Difuzie, perfuzie, angio-RMN È'i spectroscopie.",
  },
] as const;

// """Patologii frecvente diagnosticate prin RMN cranio-cerebral"""
export const cerebralPathologies = [
  {
    title: "Tumori intracraniene",
    text: "Localizare, extindere, vascularizaÈ'ie È'i rÄƒspuns la tratament.",
  },
  {
    title: "Accident vascular cerebral (AVC)",
    text: "SecvenÈ'ele de difuzie (DWI) detecteazÄƒ precoce zona de ischemie.",
  },
  {
    title: "Boli demielinizante",
    text: "Caracterizarea leziunilor de sclerozÄƒ multiplÄƒ È'i a activitÄƒÈ'ii bolii.",
  },
  {
    title: "AfecÈ'iuni inflamatorii È'i infecÈ'ioase",
    text: "Encefalite, meningite, abcese cerebrale, vasculite.",
  },
  {
    title: "MalformaÈ'ii congenitale",
    text: "Anomalii de dezvoltare corticalÄƒ, malformaÈ'ii Chiari È'i vasculare.",
  },
  {
    title: "Traumatisme cranio-cerebrale",
    text: "Contuzii, hematoame È'i leziuni axonale difuze.",
  },
] as const;

// Rolul RMN-ului Ã®n AVC (highlight)
export const avcRole = {
  title: "Rolul RMN-ului Ã®n diagnosticul AVC",
  text: "Ãn accidentul vascular cerebral, secvenÈ'ele de difuzie (DWI) È'i perfuzie (PWI) diferenÈ'iazÄƒ zona de infarct de zona salvabilÄƒ (penumbra), ajutÃ¢nd medicul sÄƒ stabileascÄƒ fereastra terapeuticÄƒ È'i eligibilitatea pentru trombolizÄƒ.",
} as const;

// Interpretarea rezultatelor
export const interpretation = {
  duration: [
    {
      label: "RMN cerebral",
      value: "20-30 min",
      extra: "nativ (fÄƒrÄƒ contrast)",
    },
    {
      label: "RMN cerebral cu contrast",
      value: "45-60 min",
      extra: "Ã®n funcÈ'ie de protocol",
    },
    {
      label: "Rezultat",
      value: "2-5 zile",
      extra: "raport scris, CD DICOM",
    },
  ],
} as const;

// Parteneri / asigurÄƒri ""” logo-uri oficiale
export const partnerLogos = [
  { name: "CNAS", logo: "https://cnas.ro/wp-content/uploads/2021/07/logo_site_300.png" },
  { name: "Signal Iduna", logo: "https://www.signal-iduna.ro/assets/images/signal_iduna_fill.svg" },
  { name: "Allianz-È'iriac", logo: "https://www.allianztiriac.ro/content/dam/onemarketing/cee/azro/media/logo_azt/allianz_tiriac_logo.png" },
  { name: "Groupama", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Groupama_logo.svg" },
  { name: "Generali", logo: "https://www.generali.ro/wp-content/uploads/2022/06/logo.svg" },
  { name: "NN", logo: "https://www.nn.ro/themes/custom/nn/logo.svg" },
  { name: "Asirom", logo: asiromLogo },
  { name: "Uniqa", logo: "https://www.uniqa.ro/themes/custom/uniqa/images/logo.svg" },
] as const;

// Centrele Affidea de pe hartÄƒ sunt derivate direct din datele reale:
// `imagingCityPins` din lib/affidea-clinics.ts (un pin per oraÈ' cu centru de
// imagisticÄƒ, coordonate = media centrelor). ProiecÈ'ia lon/lat "†’ % foloseÈ'te
// RO_BOUNDS din lib/romania-geo.ts (acelaÈ'i cadru ca public/romania-counties.svg).
