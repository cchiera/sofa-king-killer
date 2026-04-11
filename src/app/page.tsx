import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import styles from "@/app/page.module.css";
import Hero from "@/components/hero/hero";
import Link from "next/link";
import YouTubeGallery from "@/components/YouTubeGallery/YouTubeGallery";
// import { Video } from "@/components/YouTubeGallery/types";

export const metadata = generateSEO({
  title: "Sofa King Killer — Home",
  description:
    "Born in Akron, Ohio in 1999, Sofa King Killer built their reputation on heavy, down-tuned Black Sabbath-style riffs",
  url: "https://sofakingkiller.com",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const slides = ["/slide-1.jpg", "/slide-2.jpg", "/slide-3.jpg", "/slide-4.jpg"];

const videos = [
  {
    id: "Gy2QlIX9hU8",
    title: "Sofa King Killer - No Other Path to Pursue",
    channel: "eyeburngreen",
    views: "",
    duration: "",
    date: "",
    thumbnail: "/slide-1.jpg",
  },
  {
    id: "clN5YRin-6E",
    title: "Sofa King Killer - Take Me Up On That",
    channel: "RockForLife Polly",
    views: "",
    duration: "",
    date: "",
    thumbnail: "/slide-2.jpg",
  },
  {
    id: "FqtUZf3U6Uw",
    title: "Killing People Is Easy",
    channel: "Sofa King Killer - Topic",
    views: "",
    duration: "",
    date: "",
    thumbnail: "/slide-3.jpg",
  },
  {
    id: "7VpNhDv8OqM",
    title: "Sofa King Killer - Killing People Is Easy",
    channel: "stratis82",
    views: "",
    duration: "",
    date: "",
    thumbnail: "/slide-4.jpg",
  },
];

export default function Home() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://example.com",
        }}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero
            heading="On the frontlines of making Carhartt fashionable"
            slides={slides}
          />
          <section className={styles.content}>
            <p>
              Born in Akron, Ohio in 1999, Sofa King Killer built their
              reputation on heavy, down-tuned Black Sabbath-style riffs, the
              thunderous drumming of the Melvins, and the raw, confrontational
              energy of Eyehategod — a hybrid of doom, sludge, rock and roll,
              and punk that hit like a freight train and didn't apologize for
              it. What they created was something rawer and harder to pin down:
              loud, heavy music delivered by a band that didn't care whether you
              were ready for it.
            </p>
            <Link href="/about/">Learm more</Link>
          </section>
          <YouTubeGallery videos={videos} />
        </main>
      </div>
    </>
  );
}
