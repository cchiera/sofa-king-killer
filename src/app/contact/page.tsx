import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import styles from "../page.module.css";
import Nav from "@/components/nav";

export const metadata = generateSEO({
  title: "Sofa King Killer — Contact",
  description: "Get in touch with Sofa King Killer.",
  url: "https://sofakingkiller.com/contact",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function Contact() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/contact",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>Contact Page</main>
      </div>
    </>
  );
}
