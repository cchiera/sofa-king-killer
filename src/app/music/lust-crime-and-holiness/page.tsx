import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Lust, Crime, and Holiness",
  description: "Check out our Lust, Crime, and Holiness album.",
  url: "https://sofakingkiller.com/music/lust-crime-and-holiness",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const tracks = [
  {
    num: 1,
    title: "Die Like An Astronaut",
    duration: "6:06",
    url: "https://sofakingkiller.bandcamp.com/track/die-like-an-astronaut",
  },
  {
    num: 2,
    title: "Blues Couch",
    duration: "3:21",
    url: "https://sofakingkiller.bandcamp.com/track/blues-couch",
  },
  {
    num: 3,
    title: "CLE",
    duration: "5:21",
    url: "https://sofakingkiller.bandcamp.com/track/cle",
  },
  {
    num: 4,
    title: "Burn The Fields",
    duration: "6:34",
    url: "https://sofakingkiller.bandcamp.com/track/burn-the-fields",
  },
];

export default function LustCrimeAndHoliness() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/music/lust-crime-and-holiness",
        }}
      />
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            src="/lust-crime-and-holiness.jpg"
            alt="Lust, Crime, and Holiness"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2>Lust, Crime, and Holiness</h2>
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
      </div>
    </>
  );
}
