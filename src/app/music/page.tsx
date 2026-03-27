import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
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
        <main className={styles.main}>Music Page</main>
      </div>
    </>
  );
}
