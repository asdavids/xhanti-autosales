"use client";
import Link from "next/link";
import MobileNav from "../components/MobileNav";

const CarIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="11" width="22" height="9" rx="2"/><path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4"/><circle cx="7" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>);
const DollarIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>);
const BoltIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
const ClipboardIcon = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2h-2"/><rect x="9" y="1" width="6" height="4" rx="1"/></svg>);

const inputStyle: React.CSSProperties = { width: "100%", padding: "14px 20px", borderRadius: 100, border: "1px solid #ebf0f5", fontSize: 14, outline: "none", boxSizing: "border-box", background: "#fff" };

export default function TradeInPage() {
  const handleSubmit = () => {
    const make = (document.getElementById("make") as HTMLInputElement)?.value || "";
    const year = (document.getElementById("year") as HTMLInputElement)?.value || "";
    const mileage = (document.getElementById("mileage") as HTMLInputElement)?.value || "";
    const condition = (document.getElementById("condition") as HTMLSelectElement)?.value || "";
    window.open(`https://wa.me/260961185620?text=${encodeURIComponent(`Hi, I'd like a trade-in valuation for my ${year} ${make}. Mileage: ${mileage} km. Condition: ${condition}.`)}`, "_blank");
  };

  return (
    <div>
      <nav style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", width: "92%", maxWidth: 1200, background: "#fff", border: "1px solid #f1f5f9", borderRadius: 24, padding: "0 20px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <Link href="/"><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 90, width: "auto" }} /></Link>
        <div className="desktop-nav" style={{ gap: 28 }}>
          <Link href="/inventory" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>All Inventory</Link>
          <Link href="/trade-in" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Trade-In</Link>
          <Link href="/contact" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Contact</Link>
        </div>
        <MobileNav />
      </nav>
      <main style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div className="container">
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 6 }}>Trade-In Your Vehicle</h1>
          <p style={{ color: "#696969", marginBottom: 40, fontSize: 16 }}>Get a fair value for your current car</p>
          <div className="two-col">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <CarIcon />, title: "Free Valuation", desc: "Get a no-obligation valuation of your current vehicle." },
                { icon: <DollarIcon />, title: "Top Dollar", desc: "We offer competitive trade-in values above market average." },
                { icon: <BoltIcon />, title: "Fast Process", desc: "Complete your trade-in in as little as 30 minutes." },
                { icon: <ClipboardIcon />, title: "Any Condition", desc: "We accept vehicles in any condition, running or not." },
              ].map((item) => (
                <div key={item.title} style={{ background: "#f8fafc", borderRadius: 24, padding: 24, display: "flex", gap: 16 }}>
                  <span style={{ color: "#1453ae", flexShrink: 0 }}>{item.icon}</span>
                  <div><p style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{item.title}</p><p style={{ color: "#696969", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p></div>
                </div>
              ))}
            </div>
            <div style={{ background: "#f8fafc", borderRadius: 28, padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>Get Your Trade-In Value</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div><label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Full Name</label><input type="text" placeholder="Your name" style={inputStyle} /></div>
                <div><label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Vehicle Make & Model</label><input id="make" type="text" placeholder="e.g. Toyota Camry" style={inputStyle} /></div>
                <div><label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Year</label><input id="year" type="text" placeholder="e.g. 2019" style={inputStyle} /></div>
                <div><label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Mileage (km)</label><input id="mileage" type="text" placeholder="e.g. 45,000" style={inputStyle} /></div>
                <div><label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 8 }}>Condition</label>
                  <select id="condition" style={{ ...inputStyle, borderRadius: 100 }}><option>Excellent</option><option>Good</option><option>Fair</option><option>Poor</option></select>
                </div>
                <button onClick={handleSubmit} style={{ background: "#25D366", color: "#fff", borderRadius: 100, padding: "15px 24px", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", marginTop: 4 }}>Send via WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
