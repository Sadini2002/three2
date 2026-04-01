import AdvancedBackground from "./AdvanceBackground";
import Background from "./Background";


export default function Login() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      
      {/* 🌌 3D Background */}
      <AdvancedBackground />
      <Background />
     
      {/* 🔐 Login Form */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            borderRadius: "15px",
            color: "white",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h2>Login</h2>

          <input
            placeholder="Email"
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          />

          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "#8b5cf6",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}