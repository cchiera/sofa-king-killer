import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import PhotoGallery, { Photo } from "@/components/PhotoGallery/PhotoGallery";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Sofa King Killer — Photos",
  description: "Check out our oldest photos.",
  url: "https://sofakingkiller.com/media/photos",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const photos: Photo[] = [
  { src: "/slide-1.jpg", alt: "Sofa King Killer live photo 1" },
  { src: "/slide-2.jpg", alt: "Sofa King Killer live photo 2" },
  { src: "/slide-3.jpg", alt: "Sofa King Killer live photo 3" },
  { src: "/slide-4.jpg", alt: "Sofa King Killer live photo 4" },
];

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
        <Breadcrumbs />
        <main className={styles.main}>
          <PhotoGallery photos={photos} />
        </main>
      </div>
    </>
  );
}
