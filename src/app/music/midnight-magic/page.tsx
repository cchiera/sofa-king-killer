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
  title: "Midnight Magic | Sofa King Killer",
  description: "Check out our Midnight Magic album.",
  url: "https://sofakingkiller.com/music/midnight-magic",
  image: "https://example.com/og.png",
  twitterSite: "sofakingkiller",
});

const tracks = [
  {
    num: 1,
    title: "It's Fun To Be The Bad Guy",
    duration: "3:12",
    url: "https://sofakingkiller.bandcamp.com/track/its-fun-to-be-the-bad-guy",
    lyrics: `<ul>
              <li>Breaking A Mold. Breaking The Law</li>
              <li>Never Felt So Good. And I Just Want</li>
              <li>To Break Them All. So. Give Up The</li>
              <li>Problems And Forget About The Past.</li>
              <li>Do All Your Drugs For Free And Get</li>
              <li>The Hell Out Fast. Take A Stand With</li>
              <li>A Beer In Your Hand. I'll Raise My</li>
              <li>Glass Up High For You Man.</li>
            </ul>`,
  },
  {
    num: 2,
    title: "Taller Buckets Hold More",
    duration: "3:24",
    url: "https://sofakingkiller.bandcamp.com/track/taller-buckets-hold-more",
    lyrics: `<ul>
              <li>You've Been Thinking I've Been Drinking.</li>
              <li>Well. That's Right Man... Pass One</li>
              <li>On Down. Letting Everything Get To</li>
              <li>My Head. Hey Man. So What Are You</li>
              <li>Thinking About? I'm Not Joking. She's</li>
              <li>Been Smoking. You're Baby Girl. She's</li>
              <li>Been Running Around. By Now She's</li>
              <li>Got Every Disease. Spreading All Her</li>
              <li>Loving All Over The Town. What Are</li>
              <li>You Thinking About? About A Better</li>
              <li>Place? Where You Can Think About</li>
              <li>Thinking About Nothing At All?</li>
            </ul>`,
  },
  {
    num: 3,
    title: "The Getaway",
    duration: "4:39",
    url: "https://sofakingkiller.bandcamp.com/track/the-getaway",
    lyrics: `<ul>
              <li>Grab The Wheel And Drive Me Away To</li>
              <li>Anywhere Other Than This Place. Hit</li>
              <li>The Gas And Don't Slow Down. Get Me</li>
              <li>Out Of This Town. Once Lost. You're</li>
              <li>Never Found. Grab The Cash And Don't</li>
              <li>Look Back. We'll Jump Those Railroad</li>
              <li>Tracks. Hit The Gas And Lay Some</li>
              <li>Patch. They're Riding On Our Ass.</li>
              <li>Getaway. Hit The Gas.</li>
            </ul>`,
  },
  {
    num: 4,
    title: "The God Out Of Reach",
    duration: "4:05",
    url: "https://sofakingkiller.bandcamp.com/track/the-god-out-of-reach",
    lyrics: `<ul>
              <li>I've Got A Feeling You'll Be Lost With</li>
              <li>Your Spirit Guide. The Most Reliable</li>
              <li>Maps Lie Somewhere In Your Mind.</li>
              <li>Protect Us From Ourselves-Our</li>
              <li>Worst Enemy. Protect Us From The</li>
              <li>Gods Feeding The Beast. The Thumb On</li>
              <li>The Trigger. Aimed Right Back At You.</li>
            </ul>`,
  },
  {
    num: 5,
    title: "Killing People is Easy",
    duration: "3:34",
    url: "https://sofakingkiller.bandcamp.com/track/killing-people-is-easy",
  },
  {
    num: 6,
    title: "No Other Path to Pursue",
    duration: "5:02",
    url: "https://sofakingkiller.bandcamp.com/track/no-other-path-to-pursue",
    lyrics: `<ul>
              <li>Sitting Around. Wasting Time. If You</li>
              <li>Where Mine. I'd Be Alright. Sitting In A</li>
              <li>Prison Cell Late That Night. Just</li>
              <li>Trying To Work It Out And Make</li>
              <li>Things Right. But If I Had You. Well I'd</li>
              <li>Be Just Fine. How Do I Get You Off Of</li>
              <li>My Mind? If Only God Had Made A 48-Hour</li>
              <li>Day. Well. I'd Probably Sit</li>
              <li>Around And Do Nothing Anyway. But If</li>
              <li>I Had You. I'd Be Just Fine. Tell Me</li>
              <li>What I've Got To Do To Make You All</li>
              <li>Mine. She's A Drug.</li>
            </ul>`,
  },
  {
    num: 7,
    title: "An Ode to Myself",
    duration: "3:00",
    url: "https://sofakingkiller.bandcamp.com/track/an-ode-to-myself",
  },
  {
    num: 8,
    title: "Don't Slow Me Down",
    duration: "3:57",
    url: "https://sofakingkiller.bandcamp.com/track/dont-slow-me-down",
    lyrics: `<ul>
              <li>If You Could Walk In My Shoes. I Tell</li>
              <li>You Where You'd Go. You'd Run Across</li>
              <li>The Oceans. Wake Up In Mexico. If You</li>
              <li>Could Open My Hero. I Tell You What</li>
              <li>You'd See. The Parts Are All.</li>
              <li>Rearranged And Some Are Just Missing.</li>
              <li>Slow It Down. Don't Slow Me Down.</li>
              <li>If You Could Look Through My Eyes.</li>
              <li>I Tell You What You'd See. A</li>
              <li>World Gone Completely Mad.</li>
              <li>Everyone But Me. Help Me Out. I Can</li>
              <li>Not Speak It So... Help Me Out. If I</li>
              <li>Could Climb That Mountain. I Tell You</li>
              <li>What I'd Do. Once I Reach The Summit.</li>
              <li>I'd Take A Piss On You.</li>
            </ul>`,
  },
  {
    num: 9,
    title: "Thibodeaux",
    duration: "3:45",
    url: "https://sofakingkiller.bandcamp.com/track/thibodeaux",
    lyrics: `<ul>
              <li>Yeah. That Banjo Was A Good Ol'boy.</li>
              <li>Killed Five Inside The Square And</li>
              <li>Ready For More. The Family Remains A</li>
              <li>Legacy. Dead Game. The Dogmen Came</li>
              <li>The Southern States To See The</li>
              <li>Thirty-five-pound Hell On Wheels</li>
              <li>Breaking Legs.</li>
            </ul>`,
  },
  {
    num: 10,
    title: "Holy Bottle",
    duration: "3:30",
    url: "https://sofakingkiller.bandcamp.com/track/holy-bottle",
    lyrics: `<ul>
              <li>Hey Man. You Should Come Along</li>
              <li>Drinking And We Can Sing The Songs.</li>
              <li>It's Another Night Of Indulgence. So</li>
              <li>Get Ready To Drink Until The Sun</li>
              <li>Comes Up. And You Can't Explain. You</li>
              <li>Just Want To Blame Us. Hey Man. Sing</li>
              <li>A Lovely Song. Drinking Until The</li>
              <li>Early Morn. It's Another Day. Don't Be</li>
              <li>Ashamed. So Kick Back And Drink Until</li>
              <li>The Sun Comes Up. Hey Man. Leave It</li>
              <li>On The Shelf. Drinking Is Holy In</li>
              <li>Itself. It's A Sunday Night. Your</li>
              <li>Drinking Wine... That's Fine. Just Don't</li>
              <li>Condemn Us For Drinking Until The</li>
              <li>Sun Comes Up. Don't Have To Leave</li>
              <li>Like You My Friend. Because I Ain't</li>
              <li>Never Going To Die.</li>
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
        <Breadcrumbs />
        <main className={styles.main}>
          <section className={styles.content}>
            <h2>
              <a
                href="https://sofakingkiller.bandcamp.com/album/midnight-magic"
                target="_blank"
                rel="noopener noreferrer"
              >
                Midnight Magic
              </a>
            </h2>
            <div className={styles.contentAllMusic}>
              <div>
                <Image
                  src="/midnight-magic.jpg"
                  alt="Midnight Magic"
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
