import { readdir } from "node:fs/promises";
import path from "node:path";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";

const supportedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

async function getGalleryImages() {
  const galleryDirectory = path.join(process.cwd(), "public", "images", "gallery");

  try {
    const files = await readdir(galleryDirectory);

    return files
      .filter((fileName) => supportedExtensions.has(path.extname(fileName).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((fileName) => `/images/gallery/${fileName}`);
  } catch {
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="bg-[#F8F9FA]">
      <GalleryMasonry images={images} />
    </div>
  );
}
