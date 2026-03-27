import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — About",
  description: "Learn more about Sofa King Killer.",
  url: "https://sofakingkiller.com/about",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function About() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>About Page</main>
      </div>
    </>
  );
}
