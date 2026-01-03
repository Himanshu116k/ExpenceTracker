"use client"
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Big 404 */}
      <h1
        style={{
          fontSize: "10rem",
          fontWeight: "800",
          margin: "0",
          background: "linear-gradient(90deg, #ff4ecd, #7f5cff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      {/* Message */}
      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "10px",
          color: "#d1d1d1",
        }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Sub message */}
      <p
        style={{
          fontSize: "1rem",
          maxWidth: "500px",
          marginTop: "8px",
          color: "#9ca3af",
        }}
      >
        It might have been moved, deleted, or maybe you typed the URL wrong.
      </p>

      {/* Button */}
      <Link
        href="/"
        style={{
          marginTop: "30px",
          padding: "12px 28px",
          borderRadius: "12px",
          background: "linear-gradient(90deg, #ff4ecd, #7f5cff)",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "600",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Go back home 🏠
      </Link>

      {/* Footer hint */}
      <span
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "0.9rem",
          color: "#6b7280",
        }}
      >
        You seem lost in space 🌌
      </span>
    </div>
  );
}
