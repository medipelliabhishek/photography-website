import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import MasonryGallery from "@/components/MasonryGallery";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getGalleryImages, getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default function Home() {
  const site = getSiteContent();
  const gallery = getGalleryImages();
  const heroImage = site.hero.image || gallery[0]?.src || "";
  const featured = gallery.slice(0, 8);

  return (
    <>
      <Hero
        title={site.hero.title}
        subtitle={site.hero.subtitle}
        image={heroImage}
        photographerName={site.photographerName}
      />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <p className="text-lg leading-relaxed text-stone sm:text-xl">{site.homepageText}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Photography"
          subtitle="A glimpse into recent sessions — explore the full portfolio for more."
        />
        <div className="mt-12">
          <MasonryGallery images={featured} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-block rounded-full border border-gold px-8 py-3 text-sm font-medium tracking-wide text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services"
            subtitle="A range of packages tailored to your story — from intimate portraits to full wedding-day coverage."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-gold px-8 py-3 text-sm font-medium tracking-wide text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              See All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-charcoal">
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
          <div>
            <SectionHeading eyebrow="Who We Are" title={site.about.title} align="left" />
            <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-stone">
              {site.about.text.length > 320
                ? `${site.about.text.slice(0, 320).trim()}…`
                : site.about.text}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full border border-gold px-8 py-3 text-sm font-medium tracking-wide text-gold uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {site.testimonials.length > 0 && (
        <section className="bg-charcoal py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Kind Words"
              title="What Clients Say"
              subtitle="A few notes from the people we've had the pleasure of working with."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {site.testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <SectionHeading
          eyebrow="Let's Work Together"
          title="Ready to capture your story?"
          subtitle="Reach out with your dates and ideas — we'd love to hear from you."
        />
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-10 py-3 text-sm font-medium tracking-wide text-ink uppercase transition-colors hover:bg-gold-light"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
