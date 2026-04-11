import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import YouTubeGallery from "@/components/YouTubeGallery/YouTubeGallery";
import { Video } from "@/components/YouTubeGallery/types";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Videos | Sofa King Killer",
  description: "Check out our oldest videos.",
  url: "https://sofakingkiller.com/media/videos",
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

export default function Videos() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/media/videos",
        }}
      />
      <div className={styles.page}>
        <Breadcrumbs />
        <main className={styles.main}>
          <YouTubeGallery videos={videos} />
        </main>
      </div>
    </>
  );
}
