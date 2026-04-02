import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Nav from "@/components/nav/nav";
import styles from "@/app/page.module.css";
import YouTubeGallery from "@/components/YouTubeGallery/YouTubeGallery";
import { Video } from "@/components/YouTubeGallery/types";

export const metadata = generateSEO({
  title: "Sofa King Killer — Media",
  description: "Check out our media assets.",
  url: "https://sofakingkiller.com/media",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const videos: Video[] = [
  {
    id: "L6gSWieIg_I",
    title: "Sofa King Killer 8/13/2016 Kent, Ohio",
    channel: "Sean Gleba",
    views: "204 views",
    duration: "31:57",
    date: "9 years ago",
    thumbnail: "https://img.youtube.com/vi/L6gSWieIg_I/maxresdefault.jpg",
  },
  {
    id: "pKek8rbMVsg",
    title: "Sofa King Killer - Instrumental/Take Me Up On That",
    channel: "kneecompression",
    views: "671 views",
    duration: "4:21",
    date: "14 years ago",
    thumbnail: "https://img.youtube.com/vi/pKek8rbMVsg/maxresdefault.jpg",
  },
  {
    id: "JGwWNGJdvx8",
    title: "Ed Sheeran – Shape of You",
    channel: "Ed Sheeran",
    views: "6.2B views",
    duration: "4:24",
    date: "7 years ago",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Luis Fonsi – Despacito ft. Daddy Yankee",
    channel: "Luis Fonsi",
    views: "8.4B views",
    duration: "4:42",
    date: "7 years ago",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
  },
  {
    id: "OPf0YbXqDm0",
    title: "Mark Ronson – Uptown Funk ft. Bruno Mars",
    channel: "Mark Ronson",
    views: "5B views",
    duration: "4:30",
    date: "9 years ago",
    thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg",
  },
  {
    id: "RgKAFK5djSk",
    title: "Wiz Khalifa – See You Again ft. Charlie Puth",
    channel: "Wiz Khalifa",
    views: "6.1B views",
    duration: "3:58",
    date: "9 years ago",
    thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg",
  },
  {
    id: "fRh_vgS2dFE",
    title: "Justin Bieber – Sorry",
    channel: "Justin Bieber",
    views: "3.7B views",
    duration: "3:18",
    date: "8 years ago",
    thumbnail: "https://img.youtube.com/vi/fRh_vgS2dFE/maxresdefault.jpg",
  },
  {
    id: "YqeW9_5kURI",
    title: "Maroon 5 – Sugar",
    channel: "Maroon 5",
    views: "3.8B views",
    duration: "3:55",
    date: "9 years ago",
    thumbnail: "https://img.youtube.com/vi/YqeW9_5kURI/maxresdefault.jpg",
  },
  {
    id: "hT_nvWreIhg",
    title: "OneRepublic – Counting Stars",
    channel: "OneRepublic",
    views: "3.3B views",
    duration: "4:17",
    date: "11 years ago",
    thumbnail: "https://img.youtube.com/vi/hT_nvWreIhg/maxresdefault.jpg",
  },
];

export default function Media() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/media",
        }}
      />
      <div className={styles.page}>
        <Nav />
        <main className={styles.main}>
          All Media Page
          <YouTubeGallery videos={videos} />
        </main>
      </div>
    </>
  );
}
