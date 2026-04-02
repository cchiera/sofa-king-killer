import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import styles from "../page.module.css";

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
        <main className={styles.main}>
          <h2>Contact Page</h2>
        </main>
      </div>
    </>
  );
}
