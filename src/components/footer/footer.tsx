import Link from "next/link";
import "./footer.css";

const FOOTER_NAV = [
  {
    label: "Band",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Music",
    links: [
      { href: "/music", label: "All Music" },
      { href: "/music/stout-soaked-songs", label: "Stout Soaked Songs" },
      {
        href: "/music/leechmilk-sofa-king-killer-split-ep",
        label: "Leechmilk Split EP",
      },
      {
        href: "/music/lust-crime-and-holiness",
        label: "Lust, Crime and Holiness",
      },
      { href: "/music/midnight-magic", label: "Midnight Magic" },
    ],
  },
  {
    label: "Media",
    links: [
      { href: "/media/photos", label: "Photos" },
      { href: "/media/flyers", label: "Flyers" },
      { href: "/media/videos", label: "Videos" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Sofa King Killer
          </Link>
          <span className="footer-tagline">Heavy Metal &bull; Akron, OH</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {FOOTER_NAV.map((group) => (
            <div key={group.label} className="footer-nav-group">
              <span className="footer-nav-group-label">{group.label}</span>
              {group.links.map(({ href, label }) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          &copy; {year} Sofa King Killer. All rights reserved.
        </span>
        <span className="footer-location">Akron, Ohio</span>
      </div>
    </footer>
  );
}
