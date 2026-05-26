"use client";
import Link from "next/link";
import { cars } from "@/lib/data";
import { useState, use } from "react";
import { notFound } from "next/navigation";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const car = cars.find((c) => c.slug === slug);
  if (!car) return notFound();

  const [mainImage, setMainImage] = useState(car.image);

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
        <Link href="/inventory" style={{ color: "#696969", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>← Back to Inventory</Link>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 32 }}>
          <div>
            <img src={mainImage} alt={car.imageAlt} style={{ width: "100%", borderRadius: 24, objectFit: "cover", height: 400 }} />
            {car.images && car.images.length > 1 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginTop: 8 }}>
                {car.images.map((img, i) => (
                  <img key={i} src={img} alt={`view ${i + 1}`} onClick={() => setMainImage(img)} style={{ width: "100%", height: 70, objectFit: "cover", borderRadius: 12, cursor: "pointer", border: mainImage === img ? "3px solid #000" : "3px solid transparent" }} />
                ))}
              </div>
            )}
          </div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <span style={{ background: "#f4f4f5", color: "#696969", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{car.condition}</span>
              <span style={{ background: "#1453ae", color: "#fff", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{car.bodyType}</span>
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>{car.name}</h1>
            <p style={{ color: "#8a8a8a", fontSize: 14, marginBottom: 16 }}>{car.mileage} · {car.transmission} · {car.fuelType}</p>
            <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 4 }}>${car.price.toLocaleString()}</div>
            <p style={{ color: "#8a8a8a", fontSize: 14, marginBottom: 8 }}>K{car.priceZMW.toLocaleString()} ZMW</p>
            <p style={{ color: "#25D366", fontSize: 13, fontWeight: 700, marginBottom: 24 }}>Price Negotiable — WhatsApp to enquire</p>
            <p style={{ color: "#505054", lineHeight: 1.7, marginBottom: 24 }}>{car.description}</p>
            {car.features && car.features.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Key Features</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {car.features.map((f) => (
                    <div key={f} style={{ background: "#f8fafc", borderRadius: 12, padding: "10px 16px", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#25D366", flexShrink: 0 }}><CheckIcon /></span> {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://wa.me/260961185620" target="_blank" style={{ flex: 1, background: "#25D366", color: "#fff", borderRadius: 100, padding: "16px 24px", fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}><WhatsAppIcon /> WhatsApp</a>
              <Link href="/contact" style={{ flex: 1, background: "#000", color: "#fff", borderRadius: 100, padding: "16px 24px", fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center" }}>Schedule Test Drive</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
