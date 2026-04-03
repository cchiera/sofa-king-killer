import Image from "next/image";
import Link from "next/link";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
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
        <Breadcrumbs />
        <main className={styles.main}>
          <section className={styles.content}>
            <h2>Lust, Crime, and Holiness</h2>
            <h3>(2000 · Independent)</h3>
            <div className={styles.contentAllMusic}>
              <div>
                <Image
                  src="/lust-crime-and-holiness.jpg"
                  alt="Lust, Crime, and Holiness"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <p>
                  A raw, unpolished slab of sludge and doom from a band just
                  getting started and already playing heavier than most would
                  dare. Released independently, it caught the ear of Gary at
                  Shifty Records (USA), who sent a demo to Tony Presedo at Tee
                  Pee Records and set the wheels in motion for what came next.
                </p>
                <ol>
                  {tracks.map((track) => (
                    <li key={track.num}>
                      {track.title} | {track.duration}
                    </li>
                  ))}
                </ol>
                <p className={styles.moreInfo}>Listen links here</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
