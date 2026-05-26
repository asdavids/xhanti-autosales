"use client";
import { useState } from "react";
import Link from "next/link";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-menu-btn">
        <MenuIcon />
      </button>

      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "#fff", display: "flex", flexDirection: "column", padding: "24px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <Link href="/" onClick={() => setOpen(false)}><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 80, width: "auto" }} /></Link>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}><CloseIcon /></button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[["All Inventory", "/inventory"], ["Trade-In", "/trade-in"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} style={{ fontSize: 28, fontWeight: 900, color: "#000", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="https://wa.me/260961185620" target="_blank" style={{ background: "#25D366", color: "#fff", borderRadius: 100, padding: "16px 24px", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><WhatsAppIcon /> WhatsApp Us</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
