"use client";
import Link from "next/link";
import { cars } from "@/lib/data";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import MobileNav from "../components/MobileNav";
import NavLink from "../components/NavLink";

const WhatsAppIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>);
const SearchIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>);

function InventoryContent() {
  const searchParams = useSearchParams();
  const conditionParam = searchParams.get("condition") as "New" | "Used" | null;

  const [filter, setFilter] = useState<"All" | "New" | "Used">(conditionParam || "All");
  const [maxPrice, setMaxPrice] = useState(200000);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "mileage" | "newest">("featured");

  useEffect(() => {
    if (conditionParam) setFilter(conditionParam);
  }, [conditionParam]);

  const filtered = cars
    .filter(car => {
      if (filter !== "All" && car.condition !== filter) return false;
      if (car.price > maxPrice) return false;
      if (search && !car.name.toLowerCase().includes(search.toLowerCase()) && !car.make.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "mileage") return parseInt(a.mileage) - parseInt(b.mileage);
      if (sort === "newest") return b.year - a.year;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: "10px 18px", borderRadius: 100, fontWeight: 700, fontSize: 13,
    border: "1px solid #e4e4e7", cursor: "pointer",
    background: active ? "#000" : "#fff", color: active ? "#fff" : "#000",
    whiteSpace: "nowrap",
  });

  return (
    <div>
      <nav style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", width: "92%", maxWidth: 1200, background: "#fff", border: "1px solid #f1f5f9", borderRadius: 24, padding: "0 20px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <Link href="/"><img src="/logo.png" alt="Xhanti AutoSales" style={{ height: 90, width: "auto" }} /></Link>
        <div className="desktop-nav" style={{ gap: 28 }}>
          <NavLink href="/inventory">All Inventory</NavLink>
          <NavLink href="/trade-in">Trade-In</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <div className="desktop-nav" style={{ gap: 10 }}>
          <a href="https://wa.me/260961185620" target="_blank" style={{ background: "#25D366", borderRadius: 100, padding: "10px 18px", fontSize: 13, fontWeight: 700, color: "#fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}><WhatsAppIcon /> WhatsApp</a>
        </div>
        <MobileNav />
      </nav>

      <main style={{ paddingTop: 110, paddingBottom: 60 }}>
        <div className="container">
          <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 6 }}>All Inventory</h1>
          <p style={{ color: "#696969", marginBottom: 24, fontSize: 15 }}>Browse our complete selection of vehicles</p>

          {/* Search */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#8a8a8a" }}><SearchIcon /></span>
            <input type="text" placeholder="Search by make or model..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", padding: "13px 16px 13px 44px", borderRadius: 100, border: "1px solid #e4e4e7", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>

          {/* Filters + Sort */}
          <div className="filter-bar">
            {(["All", "New", "Used"] as const).map(f => (
              <button key={f} style={btnStyle(filter === f)} onClick={() => setFilter(f)}>{f}</button>
            ))}
            <select value={sort} onChange={e => setSort(e.target.value as typeof sort)}
              style={{ padding: "10px 16px", borderRadius: 100, border: "1px solid #e4e4e7", fontSize: 13, fontWeight: 600, outline: "none", cursor: "pointer", background: "#fff" }}>
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="mileage">Lowest Mileage</option>
            </select>
            <div className="filter-price">
              <span style={{ fontSize: 13, fontWeight: 600, color: "#696969", whiteSpace: "nowrap" }}>Max: ${maxPrice.toLocaleString()}</span>
              <input type="range" min={5000} max={200000} step={1000} value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                style={{ width: 120, accentColor: "#000" }} />
            </div>
          </div>

          <p style={{ color: "#8a8a8a", fontSize: 13, marginBottom: 24 }}>{filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} found</p>

          <div className="grid-auto">
            {filtered.map((car) => (
              <Link key={car.id} href={`/cars/${car.slug}`} className="car-card" style={{ opacity: car.sold ? 0.6 : 1 }}>
                <div className="car-card-img">
                  <img src={car.thumbnail} alt={`${car.name} for sale in Lusaka Zambia`} loading="lazy" />
                  {car.featured && !car.sold && <span style={{ position: "absolute", top: 12, right: 12, background: "#1453ae", color: "#fff", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>Featured</span>}
                  {car.sold && <span style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ background: "#dc2626", color: "#fff", borderRadius: 100, padding: "6px 18px", fontSize: 13, fontWeight: 900 }}>SOLD</span></span>}
                </div>
                <div className="car-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ background: "#f4f4f5", color: "#696969", borderRadius: 100, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{car.condition}</span>
                    <span style={{ color: "#8a8a8a", fontSize: 12, fontWeight: 700 }}>{car.year}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#000", marginBottom: 6 }}>{car.name}</h3>
                  <p style={{ color: "#8a8a8a", fontSize: 12, marginBottom: 14 }}>{car.mileage} · {car.transmission} · {car.fuelType}</p>
                  <p style={{ fontSize: 21, fontWeight: 900, color: "#000" }}>${car.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#8a8a8a" }}>
              <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>No vehicles match your filters</p>
              <p style={{ fontSize: 14 }}>Try adjusting the search, price range or condition</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function InventoryPage() {
  return <Suspense><InventoryContent /></Suspense>;
}
