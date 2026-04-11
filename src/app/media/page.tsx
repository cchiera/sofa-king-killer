import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import YouTubeGallery from "@/components/YouTubeGallery/YouTubeGallery";
import PhotoGallery, { Photo } from "@/components/PhotoGallery/PhotoGallery";
import { Video } from "@/components/YouTubeGallery/types";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Media | Sofa King Killer",
  description: "Check out our media assets.",
  url: "https://sofakingkiller.com/media",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});
const videos: Video[] = [
  {
    id: "Gy2QlIX9hU8",
    title: "Sofa King Killer - No Other Path to Pursue",
    channel: "eyeburngreen",
    duration: "",
    date: "",
    thumbnail: "/slide-1.jpg",
  },
  {
    id: "clN5YRin-6E",
    title: "Sofa King Killer - Take Me Up On That",
    channel: "RockForLife Polly",
    duration: "",
    date: "",
    thumbnail: "/slide-2.jpg",
  },
  {
    id: "FqtUZf3U6Uw",
    title: "Killing People Is Easy",
    channel: "Sofa King Killer - Topic",
    duration: "",
    date: "",
    thumbnail: "/slide-3.jpg",
  },
  {
    id: "7VpNhDv8OqM",
    title: "Sofa King Killer - Killing People Is Easy",
    channel: "stratis82",
    duration: "",
    date: "",
    thumbnail: "/slide-4.jpg",
  },
];

const photos: Photo[] = [
  { src: "/slide-1.jpg", alt: "Sofa King Killer live photo 1" },
  { src: "/slide-2.jpg", alt: "Sofa King Killer live photo 2" },
  { src: "/slide-3.jpg", alt: "Sofa King Killer live photo 3" },
  { src: "/slide-4.jpg", alt: "Sofa King Killer live photo 4" },
];

export default function Media() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/media",
        }}
      />
      <div className={styles.page}>
        <Breadcrumbs />
        <main className={styles.main}>
          All Media Page
          <YouTubeGallery videos={videos} />
          <PhotoGallery photos={photos} />
        </main>
      </div>
    </>
  );
}
