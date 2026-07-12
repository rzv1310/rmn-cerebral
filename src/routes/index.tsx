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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:url",
        content:
          "https://affidea.ro/ro-RO/servicii/imagistica-medicala/rmn-rezonanta-magnetica-nucleara/rmn-cerebral",
      },
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
