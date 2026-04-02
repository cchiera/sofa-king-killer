import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
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
        <main className={styles.main}>Flyers Page</main>
      </div>
    </>
  );
}
