"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link href={href} className={`nav-link${isActive ? " active" : ""}`}
      style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>
      {children}
    </Link>
  );
}
