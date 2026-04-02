import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import styles from "@/app/page.module.css";
import Nav from "@/components/nav/nav";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Sofa King Killer — Home",
  description:
    "Born in Akron, Ohio in 1999, Sofa King Killer built their reputation on heavy, down-tuned Black Sabbath-style riffs",
  url: "https://sofakingkiller.com",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

export default function Home() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://example.com",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>
          {/* Hero */}
          <section className={styles.hero}>
            <h1>On the frontlines of making Carhartt fashionable </h1>
          </section>
          {/* Hero End */}
          <section className={styles.content}>
            <p>
              Born in Akron, Ohio in 1999, Sofa King Killer built their
              reputation on heavy, down-tuned Black Sabbath-style riffs, the
              thunderous drumming of the Melvins, and the raw, confrontational
              energy of Eyehategod — a hybrid of doom, sludge, rock and roll,
              and punk that hit like a freight train and didn't apologize for
              it. What they created was something rawer and harder to pin down:
              loud, heavy music delivered by a band that didn't care whether you
              were ready for it.
            </p>
            <Link href="/about/">Learm more</Link>
          </section>
        </main>
      </div>
    </>
  );
}
