import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  photographerName: string;
}

export default function Hero({ title, subtitle, image, photographerName }: HeroProps) {
  return (
    <section className="relative flex h-[90vh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-charcoal">
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-gold-light uppercase">
          {photographerName}
        </p>
        <h1 className="font-display text-4xl leading-tight text-cream sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-stone sm:text-lg">{subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-wide text-ink uppercase transition-colors hover:bg-gold-light"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-cream/30 px-8 py-3 text-sm font-medium tracking-wide text-cream uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}
