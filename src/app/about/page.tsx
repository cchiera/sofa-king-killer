import Image from "next/image";
import Link from "next/link";
import { generateSEO, SEOJsonLd } from "@/components/seo/seo";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "@/app/page.module.css";

export const metadata = generateSEO({
  title: "About | Sofa King Killer",
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
        <Breadcrumbs />
        <main className={styles.main}>
          <section className={styles.content}>
            <h2>Pronounced sofakingkiller</h2>
            <p>
              Sofa King Killer (abbreviated <strong>SKK</strong>) was an
              American sludge metal band forged in the gritty industrial heart
              of Akron, Ohio. Active from <strong>1999</strong> to{" "}
              <strong>2009</strong>, they carved out a decade-long legacy in the
              underground heavy music scene, blending doom metal, sludge metal,
              rock and roll, and punk rock into a sound that was equal parts
              punishing and hypnotic.
            </p>
            <p>
              SKK's sonic vision was never subtle. Their guitar work drew deep
              from the tar-black well of <strong>Black Sabbath</strong> —
              massive, slow-churning riffs built to crush. The rhythm section
              hit with the lurching, off-kilter thunder of the{" "}
              <strong>Melvins</strong>, while the vocals channeled the raw,
              tortured howl of <strong>Eyehategod</strong>. The result was a
              hybrid sound that defied easy categorization: too abrasive for
              rock radio, too groove-heavy for pure doom, and too loose and
              human to be pinned down by genre alone.
            </p>
            <h2>Roots in the Rust Belt (1999–2000)</h2>
            <p>
              Forming in 1999, Sofa King Killer quickly embedded themselves in
              the <strong>Akron and Cleveland heavy metal underground</strong>,
              a tight-knit scene that prized heaviness, DIY ethics, and
              uncompromising volume. They shared stages with some of the
              region's most respected heavy acts — <strong>Abdullah</strong>,{" "}
              <strong>Boulder</strong>, <strong>Fistula</strong>,{" "}
              <strong>Keelhaul</strong>,<strong>Rebreather</strong>, and{" "}
              <strong>Rue</strong> — building a reputation as a band that could
              hold its own in any room.
            </p>
            <p>
              Beyond Northeast Ohio, SKK found kinship with a broader community
              of sludge and Southern-influenced acts including{" "}
              <strong>Alabama Thunderpussy</strong>,
              <strong>Beaten Back To Pure</strong>, <strong>Mugwart</strong>,
              and <strong>Weedeater</strong> — bands whose roots in Southern
              rock gave sludge metal its swampy, whiskey-soaked character. SKK
              absorbed those influences and filtered them through the Rust
              Belt's colder, more industrial sensibility.
            </p>
            <p>
              In <strong>2000</strong>, Sofa King Killer self-released their
              debut recording,{" "}
              <Link href="/music/stout-soaked-songs/">Stout-Soaked Songs</Link>{" "}
              — a raw, unpolished statement of intent that caught the ear of{" "}
              <strong>Gary</strong>, owner of{" "}
              <strong>Shifty Records (USA)</strong>. Recognizing something worth
              amplifying, Gary moved quickly, arranging a{" "}
              <strong>split Mini CD</strong> pairing SKK with fellow Ohioans
              Fistula, a collaboration that felt natural given the bands' shared
              DNA in the regional heavy underground.
            </p>
            <p>
              Gary also forwarded the{" "}
              <Link href="/music/stout-soaked-songs/">Stout-Soaked Songs</Link>{" "}
              demo to <strong>Tony Presedo</strong> of{" "}
              <strong>Tee Pee Records</strong>, one of the premier labels for
              underground heavy music at the time. The result was a{" "}
              <strong>split EP</strong> with <strong>Leechmilk</strong> from
              Atlanta, Georgia, released in <strong>2001</strong> — a pairing
              that connected SKK to the Southern sludge world and put their name
              in front of a national audience for the first time.
            </p>
            <h2>Taking It to the Road (2001–2002)</h2>
            <p>
              With new releases building momentum, Sofa King Killer hit the
              road. They embarked on a series of{" "}
              <strong>short East Coast tours alongside Fistula</strong>, playing
              dive bars and underground venues from Ohio outward. The tour
              circuit brought them into contact with a rotating cast of heavy
              underground acts: <strong>Beaten Back To Pure</strong>,{" "}
              <strong>Slow Horse</strong>, <strong>Molehill</strong>,{" "}
              <strong>Mugwart</strong>, and <strong>Weedeater</strong> — a
              network of bands trading shows, favors, and floor space in an era
              before social media made touring logistics easy. Bookings were
              handled the old-fashioned way: Gary from Shifty Records and
              members of the band itself getting on the phone and making it
              happen.
            </p>
            <h2>EP and Full-Length Record (2002–2005)</h2>
            <p>
              In <strong>2002</strong>, SKK released{" "}
              <strong>Lust Crimes and Holiness</strong> through{" "}
              <strong>At A Loss Recordings</strong>, a label synonymous with
              heavy, challenging music. The album deepened their catalog and
              broadened their reach, catching the attention of the UK's{" "}
              <strong>Retribute Records</strong>, which signed the band for
              international distribution.
            </p>
            <p>
              <strong>Midnight Magic</strong>, saw the band strike out onto the
              <strong>West Coast</strong> for the first time, with tour booking
              handled by <strong>Thunderdome Booking Agency</strong>. The crown
              jewel of this run was a lengthy co-headlining tour with sludge
              metal pioneers 16 — a band that had helped define the genre and
              whose seal of approval carried real weight in the underground.
              Opening for <strong>16</strong>
              night after night put SKK in front of larger, receptive audiences
              and marked the high-water point of their national reach.
            </p>
            <h2>Final Years and Legacy (2005–2009)</h2>
            <p>
              After the Midnight Magic tour cycle wound down, Sofa King Killer
              scaled back to <strong>local and regional shows</strong>,
              continuing to play the Ohio circuit they'd helped build a decade
              earlier. The band quietly dissolved in <strong>2009</strong>,
              leaving behind a discography that documented one of the more
              honest and uncompromising trajectories in the early 2000s American
              underground — no major label flirtation, no crossover pivot, just
              a decade of heavy music made on their own terms.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
