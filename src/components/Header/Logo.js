import React from "react";

const Logo = ({ width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="navbar-logo"
      role="img"
      aria-label="HY Logo"
    >
      <defs>
        <linearGradient id="hyNavbarGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="16"
        fill="url(#hyNavbarGradient)"
        style={{
          filter: "drop-shadow(0 2px 8px rgba(8, 145, 178, 0.2))",
        }}
      />

      <text
        x="32"
        y="37"
        textAnchor="middle"
        fontFamily="Poppins, Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#f8fafc"
      >
        HY
      </text>
    </svg>
  );
};

export default Logo;
