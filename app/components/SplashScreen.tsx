"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("splashShown");
    if (!shown) {
      setVisible(true);
      sessionStorage.setItem("splashShown", "true");
      const timer = setTimeout(() => setFadeOut(true), 2500);
      const hide = setTimeout(() => setVisible(false), 3200);
      return () => { clearTimeout(timer); clearTimeout(hide); };
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#000",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      opacity: fadeOut ? 0 : 1,
      transition: "opacity 0.7s ease-in-out",
      pointerEvents: fadeOut ? "none" : "all",
    }}>
      <style>{`
        @keyframes revealLogo {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes revealText {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          0% { width: 0; }
          100% { width: 120px; }
        }
      `}</style>

      <img src="/logo.png" alt="Xhanti AutoSales" style={{
        height: 120, width: "auto",
        animation: "revealLogo 0.8s ease-out forwards",
        filter: "invert(1)",
      }} />

      <p style={{
        color: "#fff", fontFamily: "Inter, sans-serif",
        fontWeight: 700, fontSize: 13, letterSpacing: 6,
        marginTop: 16, textTransform: "uppercase",
        animation: "revealText 0.8s ease-out 0.4s both",
      }}>DRIVE THE BEST</p>

      <div style={{
        height: 2, background: "#fff", marginTop: 24, borderRadius: 2,
        animation: "lineGrow 1s ease-out 0.6s both",
      }} />
    </div>
  );
}
