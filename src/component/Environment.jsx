import AdvancedBackground from "./AdvancedBackground";

export default function Environment() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* 🌌 3D Background */}
      <AdvancedBackground />

      {/* 🌈 Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(34,197,94,0.2), rgba(0,0,0,0.8))",
          zIndex: 1,
        }}
      />

      {/* 🌍 Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          🌍 Save Our Planet
        </h1>

        {/* Subtitle */}
        <p
          style={{
            maxWidth: "600px",
            fontSize: "18px",
            color: "#e5e7eb",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Experience immersive design with Three.js. Let’s protect our
          environment and build a sustainable future together.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              title: "🌱 Go Green",
              text: "Plant trees and reduce pollution.",
            },
            {
              title: "💧 Save Water",
              text: "Use water wisely and avoid waste.",
            },
            {
              title: "♻️ Recycle",
              text: "Reuse materials to protect nature.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "220px",
                padding: "20px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#e5e7eb" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          style={{
            marginTop: "40px",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            background: "#22c55e",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(34,197,94,0.5)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "#16a34a")
          }
          onMouseLeave={(e) =>
            (e.target.style.background = "#22c55e")
          }
        >
          Get Started
        </button>
      </div>
    </div>
  );
}