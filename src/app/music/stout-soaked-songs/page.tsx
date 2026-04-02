import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Nav from "@/components/nav/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Stout Soaked Songs",
  description: "Check out our Stout Soaked Songs album.",
  url: "https://sofakingkiller.com/music/stout-soaked-songs",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const tracks = [
  {
    num: 1,
    title: "It's Fun To Be The Bad Guy",
    duration: "3:12",
    url: "https://sofakingkiller.bandcamp.com/track/its-fun-to-be-the-bad-guy",
  },
  {
    num: 2,
    title: "Taller Buckets Hold More",
    duration: "3:24",
    url: "https://sofakingkiller.bandcamp.com/track/taller-buckets-hold-more",
  },
  {
    num: 3,
    title: "The Getaway",
    duration: "4:39",
    url: "https://sofakingkiller.bandcamp.com/track/the-getaway",
  },
  {
    num: 4,
    title: "The God Out Of Reach",
    duration: "4:05",
    url: "https://sofakingkiller.bandcamp.com/track/the-god-out-of-reach",
  },
  {
    num: 5,
    title: "Killing People is Easy",
    duration: "3:34",
    url: "https://sofakingkiller.bandcamp.com/track/killing-people-is-easy",
  },
  {
    num: 6,
    title: "No Other Path to Pursue",
    duration: "5:02",
    url: "https://sofakingkiller.bandcamp.com/track/no-other-path-to-pursue",
  },
  {
    num: 7,
    title: "An Ode to Myself",
    duration: "3:00",
    url: "https://sofakingkiller.bandcamp.com/track/an-ode-to-myself",
  },
  {
    num: 8,
    title: "Don't Slow Me Down",
    duration: "3:57",
    url: "https://sofakingkiller.bandcamp.com/track/dont-slow-me-down",
  },
  {
    num: 9,
    title: "Thibodeaux",
    duration: "3:45",
    url: "https://sofakingkiller.bandcamp.com/track/thibodeaux",
  },
  {
    num: 10,
    title: "Holy Bottle",
    duration: "3:30",
    url: "https://sofakingkiller.bandcamp.com/track/holy-bottle",
  },
];

export default function StoutSoakedSongs() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/music/stout-soaked-songs",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>
          <Image
            src="/stout-soaked-songs.jpg"
            alt="Stout Soaked Songs"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2>Stout Soaked Songs</h2>
          <ol>
            {tracks.map((track) => (
              <li key={track.num}>
                <p>
                  {track.title} | {track.duration}
                </p>
              </li>
            ))}
          </ol>
        </main>
        big
      </div>
    </>
  );
}
