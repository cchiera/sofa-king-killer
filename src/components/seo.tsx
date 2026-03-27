import type { Metadata } from "next";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SEOProps {
  title: string;
  description: string;
  /** Canonical URL for this page */
  url?: string;
  /** Absolute URL to the OG/social share image (1200×630 recommended) */
  image?: string;
  /** Image alt text for accessibility & OG */
  imageAlt?: string;
  /** "website" for index pages, "article" for blog posts / docs */
  type?: "website" | "article";
  /** ISO-8601 publish date — used for article type */
  publishedAt?: string;
  /** ISO-8601 modified date — used for article type */
  modifiedAt?: string;
  /** Article author name */
  author?: string;
  /** Prevent indexing (e.g. staging, private pages) */
  noIndex?: boolean;
  /** Twitter / X card style */
  twitterCard?: "summary" | "summary_large_image";
  /** Your @handle without the @ */
  twitterSite?: string;
  /** Keywords (use sparingly — mostly ignored by modern engines) */
  keywords?: string[];
  /** Structured JSON-LD data — pass a fully formed schema object */
  jsonLd?: Record<string, unknown>;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  type: "website" as const,
  twitterCard: "summary_large_image" as const,
  imageAlt: "Page preview image",
};

// ─── generateSEO helper (use in layout.tsx / page.tsx `export const metadata`) ─

/**
 * Call this inside a page or layout file to produce a fully typed `Metadata`
 * object for Next.js App Router.
 *
 * @example
 * // app/about/page.tsx
 * export const metadata = generateSEO({
 *   title: "About Us",
 *   description: "Learn more about our team.",
 *   url: "https://example.com/about",
 * });
 */
export function generateSEO({
  title,
  description,
  url,
  image,
  imageAlt = DEFAULTS.imageAlt,
  type = DEFAULTS.type,
  publishedAt,
  modifiedAt,
  author,
  noIndex = false,
  twitterCard = DEFAULTS.twitterCard,
  twitterSite,
  keywords,
  jsonLd,
}: SEOProps): Metadata {
  const images = image
    ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ]
    : undefined;

  return {
    // ── Core ────────────────────────────────────────────────────────────────
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    ...(url ? { alternates: { canonical: url } } : {}),

    // ── Indexing ────────────────────────────────────────────────────────────
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },

    // ── Open Graph ──────────────────────────────────────────────────────────
    openGraph: {
      title,
      description,
      ...(url ? { url } : {}),
      type,
      ...(images ? { images } : {}),
      ...(type === "article"
        ? {
            article: {
              ...(publishedAt ? { publishedTime: publishedAt } : {}),
              ...(modifiedAt ? { modifiedTime: modifiedAt } : {}),
              ...(author ? { authors: [author] } : {}),
            },
          }
        : {}),
    },

    // ── Twitter / X ─────────────────────────────────────────────────────────
    twitter: {
      card: twitterCard,
      title,
      description,
      ...(images ? { images: [images[0].url] } : {}),
      ...(twitterSite ? { site: `@${twitterSite}` } : {}),
    },

    // ── JSON-LD (injected via <script> below) ───────────────────────────────
    // Stored in `other` so the SEOJsonLd component can read it at render time.
    ...(jsonLd ? { other: { "json-ld": JSON.stringify(jsonLd) } } : {}),
  };
}

// ─── SEOJsonLd component (render inside page when you need JSON-LD) ───────────

/**
 * Renders a `<script type="application/ld+json">` tag.
 * Use this inside your page component when you need JSON-LD structured data
 * (the Next.js `Metadata` object handles most tags via `<head>` automatically).
 *
 * @example
 * // app/page.tsx
 * export default function Home() {
 *   return (
 *     <>
 *       <SEOJsonLd
 *         data={{
 *           "@context": "https://schema.org",
 *           "@type": "WebSite",
 *           name: "My Site",
 *           url: "https://example.com",
 *         }}
 *       />
 *       <div className={styles.page}>…</div>
 *     </>
 *   );
 * }
 */
export function SEOJsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Usage examples ───────────────────────────────────────────────────────────
//
// ╔══════════════════════════════════════════════════════════════════╗
// ║  EXAMPLE 1 — Home page (app/page.tsx)                           ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// import { generateSEO, SEOJsonLd } from "@/components/seo";
//
// export const metadata = generateSEO({
//   title: "My App — Tagline Here",
//   description: "The best app for doing the thing.",
//   url: "https://example.com",
//   image: "https://example.com/og.png",
//   twitterSite: "myhandle",
// });
//
// export default function Home() {
//   return (
//     <>
//       <SEOJsonLd
//         data={{
//           "@context": "https://schema.org",
//           "@type": "WebSite",
//           name: "My App",
//           url: "https://example.com",
//         }}
//       />
//       <div className={styles.page}>
//         <Nav />
//         <main className={styles.main}>Home Page</main>
//       </div>
//     </>
//   );
// }
//
// ╔══════════════════════════════════════════════════════════════════╗
// ║  EXAMPLE 2 — Blog post (app/blog/[slug]/page.tsx)               ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// export async function generateMetadata({ params }) {
//   const post = await getPost(params.slug);
//   return generateSEO({
//     title: post.title,
//     description: post.excerpt,
//     url: `https://example.com/blog/${post.slug}`,
//     image: post.coverImage,
//     type: "article",
//     publishedAt: post.createdAt,
//     modifiedAt: post.updatedAt,
//     author: post.author.name,
//   });
// }
//
// ╔══════════════════════════════════════════════════════════════════╗
// ║  EXAMPLE 3 — Staging / private page (noIndex)                   ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// export const metadata = generateSEO({
//   title: "Preview — Draft",
//   description: "Internal preview, not for public consumption.",
//   noIndex: true,
// });
