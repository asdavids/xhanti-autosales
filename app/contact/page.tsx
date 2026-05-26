"use client";
import Link from "next/link";
import { dealerInfo } from "@/lib/data";
import MobileNav from "../components/MobileNav";

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const contactItems = (info: typeof dealerInfo) => [
  { icon: <LocationIcon />, title: "Address", value: `${info.address}, ${info.city}` },
  { icon: <PhoneIcon />, title: "Phone", value: info.phone },
  { icon: <ClockIcon />, title: "Hours", value: info.hours },
];

export default function ContactPage() {
  const handleSubmit = () => {
    const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value || "";
    const text = encodeURIComponent(`Hi, my name is ${name}. ${message}`);
    window.open(`https://wa.me/260961185620?text=${text}`, "_blank");
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", background: "#fff" }}>
      <nav style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", width: "90%", maxWidth: 1200, background: "#fff", border: "1px solid #f1f5f9", borderRadius: 24, padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <Link href="/"><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 100, width: "auto" }} /></Link>
        <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
          <Link href="/inventory" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>All Inventory</Link>
          <Link href="/trade-in" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Trade-In</Link>
          <Link href="/contact" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Contact</Link>
        </div>
        <MobileNav />
      </nav>
      <main style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>Contact Us</h1>
        <p style={{ color: "#696969", marginBottom: 48, fontSize: 18 }}>We'd love to hear from you</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ background: "#f8fafc", borderRadius: 28, padding: 40, marginBottom: 24 }}>
              <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 24 }}>Get In Touch</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Full Name</label>
                  <input id="name" type="text" placeholder="Your name" style={{ width: "100%", padding: "14px 20px", borderRadius: 100, border: "1px solid #ebf0f5", fontSize: 14, outline: "none", boxSizing: "border-box" as const }} />
                </div>
                <div>
                  <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Phone</label>
                  <input type="tel" placeholder="Your phone number" style={{ width: "100%", padding: "14px 20px", borderRadius: 100, border: "1px solid #ebf0f5", fontSize: 14, outline: "none", boxSizing: "border-box" as const }} />
                </div>
                <div>
                  <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Message</label>
                  <textarea id="message" placeholder="How can we help you?" rows={5} style={{ width: "100%", padding: "14px 20px", borderRadius: 24, border: "1px solid #ebf0f5", fontSize: 14, outline: "none", resize: "none", boxSizing: "border-box" as const }} />
                </div>
                <button onClick={handleSubmit} style={{ background: "#25D366", color: "#fff", borderRadius: 100, padding: "16px 24px", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Send via WhatsApp</button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {contactItems(dealerInfo).map((item) => (
              <div key={item.title} style={{ background: "#f8fafc", borderRadius: 28, padding: 32, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ color: "#1453ae", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.title}</p>
                  <p style={{ color: "#696969", fontSize: 14, lineHeight: 1.6 }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
