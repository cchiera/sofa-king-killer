import Image from "next/image";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import LyricsToggle from "@/components/LyricsToggle/LyricsToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import YouTubeGallery from "@/components/YouTubeGallery/YouTubeGallery";
import { Video } from "@/components/YouTubeGallery/types";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "Stout Soaked Songs | Sofa King Killer",
  description: "Check out our Stout Soaked Songs album.",
  url: "https://sofakingkiller.com/music/stout-soaked-songs",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const tracks = [
  {
    num: 1,
    title: "Take Me Up on That",
    duration: "4:59",
    url: "https://sofakingkiller.bandcamp.com/track/its-fun-to-be-the-bad-guy",
    lyrics: `<ul>
              <li>I can't help what I am</li>
              <li>I don't care what you think of me</li>
              <li>There is blood on the sheets, yet I am not cut</li>
              <li>It's been a bad fucking week</li>
              <li>Pray for the summer rains</li>
              <li>A drunken, passed out fantasy that life was simple</li>
              <li>Why must god hate me?</li>
              <li>The stained-glass smiles laugh at mankind</li>
              <li>We're all dead or dying</li>
              <li>We don't ask why</li>
              <li>We just say our prayers</li>
            </ul>`,
  },
  {
    num: 2,
    title: "So Was Red",
    duration: "5:52",
    url: "https://sofakingkiller.bandcamp.com/track/taller-buckets-hold-more",
    lyrics: `<ul>
                <li>The truth hurts when you are wrong</li>
                <li>Crashing down on fragile skulls</li>
                <li>I threaten the beliefs and the standards society holds dear</li>
                <li>At the heart of the unity lies that vision, not conceived</li>
                <li>Our fallacy as the self-righteous pigs</li>
                <li>Who's to say?</li>
                <li>Boundaries divide, conquer or die</li>
                <li>Brings the end with time</li>
                <li>Choose the enemy</li>
                <li>Bloodshed feeds the hatred</li>
                <li>Mankind taught you to fear damnation</li>
                <li>All he knows is of earth and murder</li>
                <li>Spoke quiet to preach the cancer</li>
                <li>Loyalty oath to brainwash a child</li>
                <li>Submission, the product of your faith</li>
                <li>The answers erased</li>
                <li>Have you ever looked down into the eyes of the injured?</li>
                <li>The helpless wounded thing pleads for sympathy</li>
              </ul>`,
  },
  {
    num: 3,
    title: "Cajun Lady",
    duration: "1:24",
    url: "https://sofakingkiller.bandcamp.com/track/the-getaway",
    lyrics: null,
  },
  {
    num: 4,
    title: "Fearless Shadow",
    duration: "3:31",
    url: "https://sofakingkiller.bandcamp.com/track/the-god-out-of-reach",
    lyrics: `<ul>
              <li>Growing opposition threatens the extinction of loyalty and good intentions</li>
              <li>Free your eyes</li>
              <li>Free your ears</li>
              <li>Free your slaves</li>
              <li>They amputate for thievery</li>
              <li>Lock your front door and grab your gun</li>
              <li>Hold your own</li>
              <li>Men in suits choose out fate, paid to hate</li>
              <li>Freedom has its limitations</li>
            </ul>`,
  },
  {
    num: 5,
    title: "Backdoor Thang",
    duration: "5:54",
    url: "https://sofakingkiller.bandcamp.com/track/killing-people-is-easy",
    lyrics: `<ul>
              <li>Ten-story suicide</li>
              <li>Impact shook the earth</li>
              <li>When he never found his god, heart stopped beating and faded away</li>
              <li>Live down below with the ground up above</li>
              <li>Survived mediocrity, I'm still breathing yet cast away</li>
              <li>Grow, mold</li>
              <li>Do only as you're told</li>
              <li>Sinfully great when she dominates</li>
              <li>Step down off that pedestal</li>
              <li>Lie still, breath in</li>
              <li>This won't hurt</li>
              <li>Tied to our chairs, grasping for air</li>
              <li>I've exposed conspiracies</li>
              <li>I won't live long and I don't care</li>
              <li>Grow, mold</li>
              <li>Do only as you're told</li>
              <li>A filthy habit of non-chemical dependency</li>
              <li>We dance like puppets</li>
              <li>It's a social illness of programmed defects</li>
            </ul>`,
  },
  {
    num: 6,
    title: "Neris",
    duration: "5:27",
    url: "https://sofakingkiller.bandcamp.com/track/no-other-path-to-pursue",
    lyrics: `<ul>
              <li>I am the eyes of a blind man</li>
              <li>I am arthritis in your hands</li>
              <li>I am the spine that is paralyzed Torn wide open</li>
              <li>Reach inside</li>
              <li>I sail away across the seas of hopelessness like a dream</li>
              <li>Forgetting the destination before I left</li>
              <li>I'm still the bastard that I've always been</li>
              <li>Nothing has changed... just rearranged</li>
            </ul>`,
  },
  {
    num: 7,
    title: "The World Is A Better Place Without You ",
    duration: "4:05",
    url: "https://sofakingkiller.bandcamp.com/track/an-ode-to-myself",
    lyrics: `<ul>
              <li>Lump in my throat</li>
              <li>The devil's seed in her gut</li>
              <li>Nothing I did was ever good enough</li>
              <li>Still I crawl to you for more abuse</li>
              <li>Give it to me and lay it on thick</li>
              <li>When your drowning, I hesitate giving you my hand</li>
              <li>These chains must break someday</li>
              <li>Send me downstream to a place where no streetlights shine</li>
              <li>Carry me away, oh sacred river</li>
              <li>Swallow that tongue and choke on yourself</li>
              <li>Strain in my head and your knife still stuck in my back</li>
              <li>When I fall you get out of the way</li>
              <li>You live to betray</li>
              <li>Carry me away to the final resting place</li>
              <li>Build me up to cut me down</li>
            </ul>`,
  },
  {
    num: 8,
    title: "One More For The Road",
    duration: "6:55",
    url: "https://sofakingkiller.bandcamp.com/track/dont-slow-me-down",
    lyrics: `<ul>
              <li>We sing the stout soaked songs</li>
              <li>Been broke for far too long</li>
              <li>Grab one more and raise it proud</li>
              <li>Suffering is beautiful...</li>
              <li>Grab one more for the road</li>
              <li>Broken hopes broke our bones</li>
              <li>We can't face it</li>
              <li>We can't see straight</li>
              <li>Our heroes slain</li>
              <li>Our world crumbles</li>
              <li>But we smile</li>
              <li>Wasted</li>
              <li>Lay to waste</li>
            </ul>`,
  },
];

const videos: Video[] = [
  {
    id: "Gy2QlIX9hU8",
    title: "Sofa King Killer - No Other Path to Pursue",
    channel: "eyeburngreen",
    duration: "",
    date: "",
    thumbnail: "/slide-1.jpg",
  },
  {
    id: "clN5YRin-6E",
    title: "Sofa King Killer - Take Me Up On That",
    channel: "RockForLife Polly",
    duration: "",
    date: "",
    thumbnail: "/slide-2.jpg",
  },
  {
    id: "FqtUZf3U6Uw",
    title: "Killing People Is Easy",
    channel: "Sofa King Killer - Topic",
    duration: "",
    date: "",
    thumbnail: "/slide-3.jpg",
  },
  {
    id: "7VpNhDv8OqM",
    title: "Sofa King Killer - Killing People Is Easy",
    channel: "stratis82",
    duration: "",
    date: "",
    thumbnail: "/slide-4.jpg",
  },
];

export default function StoutSoakedSongs() {
  return (
    <>
      <SEOJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://sofakingkiller.com/music/stout-soaked-songs",
        }}
      />
      <div className={styles.page}>
        <Breadcrumbs />
        <main className={styles.main}>
          <section className={styles.content}>
            <h2>Stout Soaked Songs</h2>
            <div className={styles.contentAllMusic}>
              <div>
                <Image
                  src="/stout-soaked-songs.jpg"
                  alt="Stout Soaked Songs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <ol>
                  {tracks.map((track) => (
                    <li key={track.num}>
                      {track.title} | {track.duration}
                      {track.lyrics && (
                        <>
                          {" "}
                          | <LyricsToggle lyrics={track.lyrics} />
                        </>
                      )}{" "}
                      |{" "}
                      <a
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faBandcamp} />
                      </a>
                    </li>
                  ))}
                </ol>

                <YouTubeGallery videos={videos} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
