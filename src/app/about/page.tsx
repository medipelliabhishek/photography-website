import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about our photography studio and the team behind the camera.",
};

export default function AboutPage() {
  const site = getSiteContent();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <SectionHeading eyebrow="About Us" title={site.about.title} />

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal md:order-2">
          {site.about.image ? (
            <Image
              src={site.about.image}
              alt={site.about.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-stone">
              <span className="font-display text-2xl">{site.photographerName}</span>
            </div>
          )}
        </div>
        <div className="md:order-1">
          <p className="whitespace-pre-line text-base leading-relaxed text-stone sm:text-lg">
            {site.about.text}
          </p>
        </div>
      </div>
    </div>
  );
}
