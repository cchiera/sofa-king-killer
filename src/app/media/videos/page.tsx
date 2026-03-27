import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Videos",
  description: "Check out our oldest videos.",
  url: "https://sofakingkiller.com/media/videos",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

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
        <Nav />
        <main className={styles.main}>Video Page</main>
      </div>
    </>
  );
}
