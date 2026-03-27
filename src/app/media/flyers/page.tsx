import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Flyers",
  description: "Check out our oldest flyers.",
  url: "https://sofakingkiller.com/media/flyers",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function Flyers() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/media/flyers",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>Flyers Page</main>
      </div>
    </>
  );
}
