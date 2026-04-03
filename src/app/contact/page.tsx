import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import ContactForm from "@/components/ContactForm/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
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
        <Breadcrumbs />
        <main className={styles.main}>
          <h2>Contact</h2>
          <ContactForm />
        </main>
      </div>
    </>
  );
}
