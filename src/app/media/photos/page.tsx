import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Nav from "@/components/nav/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Photos",
  description: "Check out our oldest photos.",
  url: "https://sofakingkiller.com/media/photos",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function Photos() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/media/photos",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>Photos Page</main>
      </div>
    </>
  );
}
