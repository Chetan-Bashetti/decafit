/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deck: {
          black: "#030306",
          surface: "#0a0a12",
          card: "#12121c",
          elevated: "#1a1a28",
          border: "#2d2d3d",
          muted: "#94a3b8",
          orange: "#ff6b21",
          orangeDeep: "#ea4a00",
          amber: "#ffc53d",
          gold: "#fbbf24",
          coral: "#ff7a59",
          magenta: "#e879f9",
          violet: "#a78bfa",
          cyan: "#22d3ee",
          lime: "#bef264",
          rose: "#fb7185",
          /** Electric yellow accent for marketing highlights */
          hype: "#FFE600",
          hypeDim: "#C4B000",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-cta":
          "linear-gradient(135deg, #ff4500 0%, #ff6b21 35%, #ffc53d 100%)",
        "gradient-hype":
          "linear-gradient(180deg, #FFE600 0%, #FFB020 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(255,107,33,0.45), transparent 55%), radial-gradient(ellipse 80% 50% at 100% 0%, rgba(167,139,250,0.25), transparent 45%), radial-gradient(ellipse 60% 40% at 0% 20%, rgba(34,211,238,0.12), transparent 50%)",
        "gradient-mesh":
          "linear-gradient(135deg, rgba(255,107,33,0.15) 0%, transparent 50%), linear-gradient(225deg, rgba(167,139,250,0.12) 0%, transparent 40%), linear-gradient(180deg, rgba(34,211,238,0.08) 0%, transparent 60%)",
        "gradient-card-silver":
          "linear-gradient(145deg, rgba(148,163,184,0.15), rgba(15,23,42,0.9))",
        "gradient-card-gold":
          "linear-gradient(145deg, rgba(251,191,36,0.2), rgba(120,53,15,0.35))",
        "gradient-card-diamond":
          "linear-gradient(145deg, rgba(255,107,33,0.35), rgba(88,28,135,0.25))",
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(255, 107, 33, 0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34, 211, 238, 0.35)",
        "glow-violet": "0 0 45px -10px rgba(167, 139, 250, 0.4)",
        "inner-light": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      backgroundSize: {
        shimmer: "200% 100%",
      },
    },
  },
  plugins: [],
};
