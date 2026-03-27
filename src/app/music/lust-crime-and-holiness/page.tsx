import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Lust, Crime, and Holiness",
  description: "Check out our Lust, Crime, and Holiness album.",
  url: "https://sofakingkiller.com/music/lust-crime-and-holiness",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

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
        <Nav />
        <main className={styles.main}>Lust, Crime, and Holiness</main>
      </div>
    </>
  );
}
