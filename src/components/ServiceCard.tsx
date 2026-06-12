import type { ServiceItem } from "@/types/content";

export default function ServiceCard({ title, description, price }: ServiceItem) {
  return (
    <div className="group rounded-lg border border-white/10 bg-charcoal p-8 transition-colors hover:border-gold/50">
      <h3 className="font-display text-xl text-cream">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{description}</p>
      <p className="mt-5 text-sm tracking-wide text-gold uppercase">{price}</p>
    </div>
  );
}
