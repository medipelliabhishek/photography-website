import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Photography packages and pricing for weddings, portraits and events.",
};

export default function ServicesPage() {
  const site = getSiteContent();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading
        eyebrow="What We Offer"
        title="Services & Pricing"
        subtitle="A range of packages tailored to your story — from intimate portraits to full wedding-day coverage."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {site.services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {site.pricingText && (
        <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-white/10 bg-charcoal p-8 text-center">
          <p className="text-sm leading-relaxed text-stone">{site.pricingText}</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-gold px-10 py-3 text-sm font-medium tracking-wide text-ink uppercase transition-colors hover:bg-gold-light"
        >
          Get a Custom Quote
        </Link>
      </div>
    </div>
  );
}
