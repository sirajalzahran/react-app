import React, { useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

function App() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const appStyle = {
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#282c34",
    padding: "20px",
    color: "white",
  };

  const logoStyle = {
    height: "80px",
    pointerEvents: "none",
    marginBottom: "20px",
  };

  const navListStyle = {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    gap: "20px",
  };

  const navLinkStyle = (isHovered) => ({
    color: isHovered ? "#61dafb" : "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  });

  const mainStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    margin: "20px",
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <img src={logo} style={logoStyle} alt="Logo" />
        <nav>
          <ul style={navListStyle}>
            {["ChallengeOne", "article", "component1"].map((link, index) => (
              <li key={index}>
                <Link
                  to={link}
                  style={navLinkStyle(hoveredLink === link)}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main style={mainStyle}>
        <h1 style={{ color: "#333" }}>React Practice Home Page</h1>
      </main>
    </div>
  );
}

export default App;
