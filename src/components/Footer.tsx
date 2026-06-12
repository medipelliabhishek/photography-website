import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import type { ContactContent } from "@/types/content";

interface FooterProps {
  photographerName: string;
  contact: ContactContent;
}

export default function Footer({ photographerName, contact }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-2xl text-cream">{photographerName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone">
            Premium photography for weddings, portraits and events — crafted
            with care, delivered with love.
          </p>
        </div>

        <div>
          <p className="text-sm tracking-widest text-gold uppercase">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            <li>
              <Link href="/portfolio" className="hover:text-gold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm tracking-widest text-gold uppercase">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-stone">
            {contact.phone && (
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:text-gold">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href={`mailto:${contact.email}`} className="hover:text-gold">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.address && (
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>{contact.address}</span>
              </li>
            )}
            {contact.instagram && (
              <li className="flex items-center gap-2">
                <InstagramIcon size={16} className="text-gold" />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-stone/70">
        © {year} {photographerName}. All rights reserved.
      </div>
    </footer>
  );
}
