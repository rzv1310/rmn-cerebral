import { createFileRoute } from "@tanstack/react-router";

import { StickyCta } from "@/components/site-chrome";
import { SelectGuard } from "@/components/select-guard";
import { Hero } from "@/components/hero";
import { PriceSection } from "@/components/pricing";

import { ClinicalSection } from "@/components/clinical";
import { CnasSection } from "@/components/cnas";
import { ActeSection, PregatireSection, DurataSection } from "@/components/patient";
import { LocationsSection } from "@/components/locations";
import { WhyAffideaSection, ReviewsSection } from "@/components/trust";
import { FaqSection } from "@/components/faq";
import { BookingSection } from "@/components/booking";
import { buildJsonLd } from "@/lib/jsonld";
import ogImageAsset from "@/assets/rmn-cerebral-og.png.asset.json";

const OG_IMAGE_URL = `https://rmn-cerebral.lovable.app${ogImageAsset.url}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:url",
        content:
          "https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/rmn-cerebral",
      },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
      },
      { name: "author", content: "dr. Ruxandra Negrus" },
      { name: "publisher", content: "Affidea" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/rmn-cerebral",
      },
    ],
  }),
});

function Index() {
  const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <main>
        <Hero />
        <PriceSection />
        <LocationsSection />
        <ClinicalSection />
        <CnasSection />
        <ActeSection />
        <PregatireSection />
        <DurataSection />
        
        <WhyAffideaSection />
        <ReviewsSection />
        <FaqSection />
        <BookingSection />
      </main>
      <StickyCta />
      <SelectGuard />
      {/* spacer so the mobile sticky CTA never covers footer content */}
      <div className="h-20 lg:hidden" aria-hidden />
    </>
  );
}
