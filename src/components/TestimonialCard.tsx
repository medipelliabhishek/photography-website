import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/types/content";

export default function TestimonialCard({ name, role, text }: TestimonialItem) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-white/10 bg-charcoal p-8">
      <Quote className="mb-4 text-gold" size={28} />
      <p className="flex-1 text-sm leading-relaxed text-stone italic">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-display text-base text-cream">{name}</p>
        <p className="text-xs tracking-widest text-gold uppercase">{role}</p>
      </div>
    </div>
  );
}
