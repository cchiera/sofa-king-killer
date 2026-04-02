"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import "./nav.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  {
    href: "/music",
    label: "Music",
    children: [
      {
        href: "/music/stout-soaked-songs",
        label: "Stout Soaked Songs",
      },
      {
        href: "/music/leechmilk-sofa-king-killer-split-ep",
        label: "Leechmilk / Sofa King Killer Split EP",
      },
      {
        href: "/music/lust-crime-and-holiness",
        label: "Lust, Crime and Holiness",
      },
      {
        href: "/music/midnight-magic",
        label: "Midnight Magic",
      },
    ],
  },
  {
    href: "/media",
    label: "Media",
    children: [
      {
        href: "/media/photos",
        label: "Photos",
      },
      {
        href: "/media/flyers",
        label: "Flyers",
      },
      {
        href: "/media/videos",
        label: "Videos",
      },
    ],
  },
  { href: "/contact", label: "Contact" },
];

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

function DesktopNavItem({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!link.children) {
    return (
      <li ref={ref}>
        <Link
          href={link.href}
          className={pathname === link.href ? "active" : ""}
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="nav-item-has-children">
      <button
        className={`nav-parent-btn ${pathname.startsWith(link.href) ? "active" : ""}`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label} <span className="nav-chevron">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <ul className="nav-submenu" role="menu">
          <li role="none">
            <Link
              href={link.href}
              role="menuitem"
              className={pathname === link.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              All {link.label}
            </Link>
          </li>
          {link.children.map(({ href, label }) => (
            <li key={href} role="none">
              <Link
                href={href}
                role="menuitem"
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Sofa King Killer
      </Link>

      {/* Desktop links */}
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <DesktopNavItem key={link.href} link={link} pathname={pathname} />
        ))}
      </ul>

      {/* Mobile hamburger dropdown */}
      <div className="nav-dropdown" ref={menuRef}>
        <button
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-haspopup="true"
        >
          <span
            style={{
              transform: open ? "rotate(45deg) translate(4px, 4px)" : undefined,
            }}
          />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span
            style={{
              transform: open
                ? "rotate(-45deg) translate(4px, -4px)"
                : undefined,
            }}
          />
        </button>

        {open && (
          <ul className="nav-dropdown-menu" role="menu">
            {NAV_LINKS.map(({ href, label, children }) => (
              <React.Fragment key={href}>
                <li key={href} role="none">
                  <Link
                    href={href}
                    role="menuitem"
                    className={pathname === href ? "active" : ""}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
                {children?.map((child) => (
                  <li
                    key={child.href}
                    role="none"
                    className="nav-dropdown-child"
                  >
                    <Link
                      href={child.href}
                      role="menuitem"
                      className={pathname === child.href ? "active" : ""}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
