import fs from "fs";
import path from "path";
import VideoGallery from "@/components/VideoGallery";

export default function GalleryPage() {
  const publicDir = path.join(process.cwd(), "public");
  const imagesDir = path.join(publicDir, "images");
  const videosDir = path.join(publicDir, "videos");

  let media: string[] = [];
  try {
    const iEntries = fs.readdirSync(imagesDir);
    const images = iEntries
      .filter((name) => /\.(jpg|jpeg|png|gif|webp)$/i.test(name))
      .map((name) => `/images/${name}`);
    media = media.concat(images);
  } catch {}

  try {
    const vEntries = fs.readdirSync(videosDir);
    const videos = vEntries
      .filter((name) => /\.(mp4|webm|mov|MOV)$/i.test(name))
      .map((name) => `/videos/${name}`);
    media = media.concat(videos);
  } catch {}

  return (
    <main className="min-h-[80vh] mx-auto max-w-6xl px-4 pt-24 pb-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Gallery</h1>
      <VideoGallery videos={media} />
    </main>
  );
}


