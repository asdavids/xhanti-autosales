import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#fff", padding: "32px 16px", textAlign: "center" }}>
      <img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 80, marginBottom: 32 }} />
      <h1 style={{ fontSize: 80, fontWeight: 900, color: "#000", lineHeight: 1 }}>404</h1>
      <p style={{ fontSize: 20, fontWeight: 700, marginTop: 8, marginBottom: 8 }}>Page not found</p>
      <p style={{ color: "#696969", fontSize: 14, marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" style={{ background: "#000", color: "#fff", borderRadius: 100, padding: "14px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Go Home</Link>
        <Link href="/inventory" style={{ background: "#f4f4f5", color: "#000", borderRadius: 100, padding: "14px 28px", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>View Inventory</Link>
      </div>
    </div>
  );
}
