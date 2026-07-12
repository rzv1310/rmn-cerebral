// Structured data (@graph) for the national RMN cerebral page.
// Reads from lib/site.ts so schema prices always match on-page prices.
import { site, PRICE, cerebralCuContrast, faqs, cerebralIndications } from "./site";
import affideaLogoAsset from "@/assets/affidea-logo.jpg.asset.json";

const base = site.domain;
const ORG = `${base}/#affidea`;
const TEST = `${base}/#rmn-cerebral`;
const PAGE = `${base}/#webpage`;

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": ORG,
        name: "Affidea",
        alternateName: "Affidea România",
        url: "https://affidea.ro",
        logo: `https://affidea.ro${affideaLogoAsset.url}`,
        description:
          "Rețea națională de imagistică medicală: RMN, CT, mamografie și radiologie în 25 de centre din România.",
        medicalSpecialty: "Radiography",
        areaServed: { "@type": "Country", name: "România" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone.tel,
          contactType: "Programări",
          areaServed: "RO",
          availableLanguage: ["Romanian"],
        },
        // aggregateRating intentionally omitted until genuine, sourced reviews
        // exist — fabricated ratings violate Google policy on a YMYL page.
        makesOffer: [
          {
            "@type": "Offer",
            name: "RMN cerebral nativ",
            priceCurrency: "RON",
            // "de la" pricing — minPrice, not a fixed price (varies per centru)
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: PRICE.nativ,
              priceCurrency: "RON",
              valueAddedTaxIncluded: true,
            },
            itemOffered: { "@id": TEST },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "RMN cerebral cu substanță de contrast",
            priceCurrency: "RON",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: cerebralCuContrast,
              priceCurrency: "RON",
              valueAddedTaxIncluded: true,
            },
            itemOffered: { "@id": TEST },
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "ImagingTest",
        "@id": TEST,
        name: "RMN cerebral",
        alternateName: ["RMN cranio-cerebral", "iRM cerebral", "Rezonanță magnetică cerebrală"],
        imagingTechnique: "MRI",
        usedToDiagnose: cerebralIndications.slice(0, 6).map((c) => ({
          "@type": "MedicalCondition",
          name: c,
        })),
        usesDevice: { "@type": "MedicalDevice", name: site.equipment },
        provider: { "@id": ORG },
      },
      {
        "@type": "MedicalWebPage",
        "@id": PAGE,
        url: base,
        name: "RMN cerebral la Affidea, preț de la 770 lei",
        inLanguage: "ro-RO",
        about: { "@id": TEST },
        mainEntity: { "@id": TEST },
        specialty: "Radiography",
        audience: { "@type": "MedicalAudience", audienceType: "Patient" },
        lastReviewed: "2026-07-06", // DE CONFIRMAT — update la fiecare revizuire
        // Reviewed by the Affidea medical organization. Swap to a named
        // Physician node once a real reviewer is confirmed (DE CONFIRMAT).
        reviewedBy: { "@id": ORG },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: base },
          { "@type": "ListItem", position: 2, name: "RMN cerebral", item: base },
        ],
      },
    ],
  };
}
