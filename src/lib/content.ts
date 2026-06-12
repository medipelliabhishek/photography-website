import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import type { ContactContent, GalleryImage, SiteContent } from "@/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");
const SITE_FILE = path.join(CONTENT_DIR, "site.json");
const CONTACT_FILE = path.join(CONTENT_DIR, "contact.json");
const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export function getSiteContent(): SiteContent {
  const raw = fs.readFileSync(SITE_FILE, "utf-8");
  return JSON.parse(raw) as SiteContent;
}

export function getContactContent(): ContactContent {
  const raw = fs.readFileSync(CONTACT_FILE, "utf-8");
  return JSON.parse(raw) as ContactContent;
}

export function saveSiteContent(data: SiteContent): void {
  fs.writeFileSync(SITE_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

export function saveContactContent(data: ContactContent): void {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

export function getGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const images: GalleryImage[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(GALLERY_DIR, file);
      const buffer = fs.readFileSync(filePath);
      const dimensions = imageSize(buffer);
      images.push({
        src: `/gallery/${file}`,
        name: file,
        width: dimensions.width,
        height: dimensions.height,
      });
    } catch {
      // Skip files that can't be read as images
    }
  }

  return images;
}
