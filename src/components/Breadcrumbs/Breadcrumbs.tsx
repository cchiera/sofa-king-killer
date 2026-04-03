"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./breadcrumbs.css";

function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = slugToLabel(segment);
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        <li className="breadcrumbs-item">
          <Link href="/" className="breadcrumbs-link">
            Home
          </Link>
        </li>
        {crumbs.map(({ href, label, isLast }) => (
          <li key={href} className="breadcrumbs-item">
            <span className="breadcrumbs-separator" aria-hidden="true">
              /
            </span>
            {isLast ? (
              <span className="breadcrumbs-current" aria-current="page">
                {label}
              </span>
            ) : (
              <Link href={href} className="breadcrumbs-link">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
