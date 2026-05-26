import Link from "next/link";
import { cars } from "@/lib/data";

export default function InventoryPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", background: "#fff" }}>
      <nav style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", width: "90%", maxWidth: 1200, background: "#fff", border: "1px solid #f1f5f9", borderRadius: 24, padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <Link href="/"><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 100, width: "auto" }} /></Link>
        <div style={{ display: "flex", gap: 32 }}>
          <Link href="/inventory" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>All Inventory</Link>
          
          <Link href="/trade-in" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Trade-In</Link>
          <Link href="/contact" style={{ fontWeight: 700, fontSize: 14, color: "#000", textDecoration: "none" }}>Contact</Link>
        </div>
      </nav>
      <main style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 8 }}>All Inventory</h1>
        <p style={{ color: "#696969", marginBottom: 40, fontSize: 18 }}>Browse our complete selection of vehicles</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cars.map((car) => (
            <Link key={car.id} href={`/cars/${car.slug}`} style={{ textDecoration: "none", background: "#fff", border: "1px solid #f1f5f9", borderRadius: 28, overflow: "hidden", display: "block" }}>
              <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                <img src={car.image} alt={car.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                {car.featured && <span style={{ position: "absolute", top: 16, right: 16, background: "#1453ae", color: "#fff", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Featured</span>}
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ background: "#f4f4f5", color: "#696969", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{car.condition}</span>
                  <span style={{ color: "#8a8a8a", fontSize: 12, fontWeight: 700 }}>{car.year}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#000", marginBottom: 8 }}>{car.name}</h3>
                <p style={{ color: "#8a8a8a", fontSize: 12, marginBottom: 16 }}>{car.mileage} · {car.transmission} · {car.fuelType}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: "#000" }}>${car.price.toLocaleString()}</span>
                  <span style={{ fontSize: 12, color: "#8a8a8a" }}>or {car.monthlyPayment}</span>
                </div>
                <div style={{ background: "#fafcff", border: "1px solid #ebf0f5", borderRadius: 100, padding: "12px 20px", textAlign: "center", fontSize: 14, fontWeight: 700, color: "#505054" }}>View Details</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
