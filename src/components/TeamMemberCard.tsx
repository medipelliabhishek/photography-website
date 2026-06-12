import Image from "next/image";
import type { TeamMember } from "@/types/content";

export default function TeamMemberCard({ name, role, bio, photo }: TeamMember) {
  return (
    <div className="rounded-lg border border-white/10 bg-charcoal p-6">
      <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full bg-ink">
        {photo ? (
          <Image src={photo} alt={name} fill sizes="128px" className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-2xl text-stone">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="mt-5 text-center">
        <p className="font-display text-lg text-cream">{name}</p>
        <p className="mt-1 text-xs tracking-widest text-gold uppercase">{role}</p>
        {bio && <p className="mt-3 text-sm leading-relaxed text-stone">{bio}</p>}
      </div>
    </div>
  );
}
