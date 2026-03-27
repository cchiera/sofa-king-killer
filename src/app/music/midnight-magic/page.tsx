import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo";
import Nav from "@/components/nav";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Midnight Magic",
  description: "Check out our Midnight Magic album.",
  url: "https://sofakingkiller.com/music/midnight-magic",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function MidnightMagic() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/music/midnight-magic",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>Midnight Magic</main>
      </div>
    </>
  );
}
