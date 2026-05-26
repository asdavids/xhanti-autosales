"use client";
import Link from "next/link";
import { cars, reviews, dealerInfo } from "@/lib/data";
import { useEffect, useRef } from "react";
import MobileNav from "./components/MobileNav";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#f98f44" : "#e4e4e7"} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1453ae" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const TagIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1453ae" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1453ae" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMove = (x: number, y: number) => {
      if (!imgRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = (x - rect.left) / rect.width - 0.5;
      const cy = (y - rect.top) / rect.height - 0.5;
      imgRef.current.style.transform = `translate(${cx * 30}px, ${cy * 15}px) scale(1.08)`;
    };
    const onMouse = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => { const t = e.touches[0]; handleMove(t.clientX, t.clientY); };
    const onLeave = () => { if (imgRef.current) imgRef.current.style.transform = "translate(0,0) scale(1.05)"; };
    const hero = heroRef.current;
    hero?.addEventListener("mousemove", onMouse);
    hero?.addEventListener("touchmove", onTouch, { passive: true });
    hero?.addEventListener("mouseleave", onLeave);
    return () => {
      hero?.removeEventListener("mousemove", onMouse);
      hero?.removeEventListener("touchmove", onTouch);
      hero?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>

      <nav style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", width: "90%", maxWidth: 1200, background: "#fff", border: "1px solid #f1f5f9", borderRadius: 24, padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <Link href="/"><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 120, width: "auto" }} /></Link>
        <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
          <Link href="/inventory" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>All Inventory</Link>
          <Link href="/inventory?condition=New" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>New</Link>
          <Link href="/inventory?condition=Used" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Used</Link>
          <Link href="/trade-in" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Trade-In</Link>
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="https://wa.me/260961185620" target="_blank" style={{ background: "#25D366", borderRadius: 100, padding: "10px 20px", fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}><WhatsAppIcon /> WhatsApp</a>
          <Link href="/contact" style={{ background: "#000", borderRadius: 100, padding: "10px 20px", fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "none" }}>Contact Us</Link>
        </div>
        <MobileNav />
      </nav>

      <section style={{ paddingTop: 140, paddingBottom: 60, paddingLeft: 32, paddingRight: 32 }}>
        <div ref={heroRef} style={{ maxWidth: 1200, margin: "0 auto", borderRadius: 32, minHeight: 700, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "60px 60px 40px", position: "relative", overflow: "hidden", background: "#f8fafc" }}>
          <img ref={imgRef} src="/hero-car.webp" alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", opacity: 1, transform: "scale(1.05)", transition: "transform 0.12s ease-out", willChange: "transform" }} />
          <div style={{ position: "absolute", top: 16, zIndex: 1, textAlign: "center" }}>
            <h1 style={{ fontSize: 72, fontWeight: 900, color: "#000", lineHeight: 1 }}>Xhanti AutoSales</h1>
            <p style={{ fontSize: 22, color: "#505054", fontWeight: 700, marginTop: 8 }}>DRIVE THE BEST</p>
          </div>
          <div style={{ position: "absolute", bottom: 40, zIndex: 1, display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/inventory" style={{ background: "#000", color: "#fff", borderRadius: 100, padding: "14px 32px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>All Inventory</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <h2 style={{ fontSize: 40, fontWeight: 900, color: "#000" }}>Featured Vehicles</h2>
              <p style={{ color: "#696969", marginTop: 6 }}>Hand-picked selections from our premium inventory</p>
            </div>
            <Link href="/inventory" style={{ background: "#000", color: "#fff", borderRadius: 100, padding: "12px 24px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>View All</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {cars.map((car) => (
              <Link key={car.id} href={`/cars/${car.slug}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #f1f5f9", borderRadius: 28, overflow: "hidden", display: "block" }}>
                <div style={{ position: "relative", height: 220, overflow: "hidden", background: "#f4f4f5" }}>
                  <img src={car.image} alt={car.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  {car.featured && <span style={{ position: "absolute", top: 16, right: 16, background: "#1453ae", color: "#fff", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Featured</span>}
                  {car.sold && <span style={{ position: "absolute", top: 16, left: 16, background: "#dc2626", color: "#fff", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Sold</span>}
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ background: "#f4f4f5", color: "#696969", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{car.condition}</span>
                    <span style={{ color: "#8a8a8a", fontSize: 12, fontWeight: 700 }}>{car.year}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#000", marginBottom: 8 }}>{car.name}</h3>
                  <p style={{ color: "#8a8a8a", fontSize: 12, marginBottom: 12 }}>{car.mileage} · {car.transmission} · {car.fuelType}</p>
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ fontSize: 22, fontWeight: 900, color: "#000" }}>K{car.priceZMW.toLocaleString()}</span>
                  </div>
                  <div style={{ background: "#fafcff", border: "1px solid #ebf0f5", borderRadius: 100, padding: "12px 20px", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#505054" }}>View Details</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 8 }}>Why Choose Xhanti AutoSales</h2>
          <p style={{ color: "#717172", marginBottom: 40 }}>Lusaka's trusted automotive partner</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: <ShieldIcon />, title: "Quality Vehicles", desc: "Every vehicle inspected and certified to meet our high standards." },
              { icon: <TagIcon />, title: "Best Prices", desc: "Competitive prices in Zambian Kwacha with flexible payment options." },
              { icon: <WrenchIcon />, title: "Warranty Protection", desc: "Comprehensive warranty coverage for your peace of mind." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #f1f5f9", borderRadius: 28, padding: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#f0f4ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#8a8a8a", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, textAlign: "center", marginBottom: 8 }}>What Our Customers Say</h2>
          <p style={{ color: "#717172", textAlign: "center", marginBottom: 40 }}>Real experiences from real customers</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {reviews.map((review) => (
              <div key={review.id} style={{ background: "#fff", border: "1px solid #f1f5f9", borderRadius: 28, padding: 24 }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled={i < review.rating} />)}
                </div>
                <p style={{ color: "#8a8a8a", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{review.text}</p>
                <p style={{ fontWeight: 700, fontSize: 14 }}>{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "#0a0a0a", borderRadius: 32, padding: "80px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: "#fff", marginBottom: 12 }}>Ready to Find Your Next Vehicle?</h2>
          <p style={{ color: "#aaa", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Chat with us on WhatsApp or visit our showroom on Zambezi Road, Lusaka.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href="https://wa.me/260961185620" target="_blank" style={{ background: "#25D366", color: "#fff", borderRadius: 100, padding: "14px 32px", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}><WhatsAppIcon /> WhatsApp Us</a>
            <Link href="/inventory" style={{ background: "#fff", color: "#000", borderRadius: 100, padding: "14px 32px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>View All Inventory</Link>
          </div>
        </div>
      </section>

      <footer style={{ background: "#000", borderRadius: "24px 24px 0 0", padding: "60px 32px 40px", margin: "0 16px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
            <div>
              <p style={{ color: "#fafafa", fontWeight: 900, fontSize: 24, marginBottom: 16 }}>Xhanti AutoSales</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ color: "#aaa", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><LocationIcon /> 54 Zambezi Road, Lusaka, Zambia</p>
                <p style={{ color: "#aaa", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><PhoneIcon /> {dealerInfo.phone}</p>
                <p style={{ color: "#25D366", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><WhatsAppIcon /> {dealerInfo.whatsapp}</p>
                <p style={{ color: "#aaa", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}><ClockIcon /> {dealerInfo.hours}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              {[["Home", "/"], ["All Inventory", "/inventory"], ["Trade-In", "/trade-in"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={String(label)} href={String(href)} style={{ color: "#fafafa", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#fafafa", fontSize: 12 }}>© 2026 Xhanti AutoSales. All Rights Reserved.</p>
            <p style={{ color: "#fafafa", fontSize: 12 }}>Lusaka, Zambia</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
