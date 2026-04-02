import Image from "next/image";
import Link from "next/link";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Nav from "@/components/nav/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Music",
  description: "Check out our music.",
  url: "https://sofakingkiller.com/music",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function Music() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/music",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>
          <section className={styles.content}>
            <h2>Stout-Soaked Songs</h2>
            <h3>(2000 · Independent)</h3>
            <div className={styles.contentAllMusic}>
              <Image
                src="/stout-soaked-songs.jpg"
                alt="Lust, Crime, and Holiness"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "275px", height: "100%" }}
              />
              <p>
                A raw, unpolished slab of sludge and doom from a band just
                getting started and already playing heavier than most would
                dare. Released independently, it caught the ear of Gary at
                Shifty Records (USA), who sent a demo to Tony Presedo at Tee Pee
                Records and set the wheels in motion for what came next.
              </p>
              <Link href="/music/stout-soaked-songs/">More info</Link>
            </div>
          </section>
          <section className={styles.content}>
            <h2>Leechmilk / Sofa King Killer Split EP</h2>
            <h3> (2001 · Tee Pee Records)</h3>
            <div className={styles.contentAllMusic}>
              <Image
                src="/leechmilk-sofa-king-killer-split.jpg"
                alt="Lust, Crime, and Holiness"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "275px", height: "100%" }}
              />
              <p>
                A shared release with Atlanta sludge outfit Leechmilk, brokered
                through Tee Pee Records, that put SKK on the radar of the wider
                underground heavy scene. The release kicked off a string of east
                coast tours alongside Fistula, with shows shared among Beaten
                Back to Pure, Slow Horse, Molehill, Mugwart, and Weedeater.
              </p>
              <Link href="/music/leechmilk-sofa-king-killer-split-ep/">
                More info
              </Link>
            </div>
          </section>
          <section className={styles.content}>
            <h2>Lust, Crimes and Holiness </h2>
            <h3>(2002 · At A Loss Recordings)</h3>
            <div className={styles.contentAllMusic}>
              <Image
                src="/lust-crime-and-holiness.jpg"
                alt="Lust, Crime, and Holiness"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "275px", height: "100%" }}
              />
              <p>
                A four-track EP that sharpened the band's sound and introduced a
                wider audience to the SKK formula: crushing riffs, blunt
                delivery, and absolutely no filler. Tracks include Die Like An
                Astronaut, Blues Couch, CLE, and Burn The Fields. The release
                marked a new chapter — shortly after, SKK signed with UK label
                Retribute Records.
              </p>
              <Link href="/music/lust-crime-and-holiness/">More info</Link>
            </div>
          </section>
          <section className={styles.content}>
            <h2>Midnight Magic</h2>
            <h3>(2004 · Retribute Records)</h3>
            <div className={styles.contentAllMusic}>
              <Image
                src="/midnight-magic.jpg"
                alt="Lust, Crime, and Holiness"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "275px", height: "100%" }}
              />
              <p>
                SKK's first full-length and their definitive statement. Released
                on Retribute Records and supported by a lengthy west coast tour
                booked through Thunderdome Booking Agency, Midnight Magic saw
                the band open for sludge metal pioneers 16 — one of their most
                significant runs on the road. The record pushed deeper into
                blues territory without losing any of the heaviness, warm in
                production and hard-hitting in every track. It would be their
                last west coast tour; SKK returned to local and regional shows
                until the band came to an end in 2009.
              </p>
              <Link href="/music/midnight-magic/">More info</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
