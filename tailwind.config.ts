/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Brand Scale (Blue -> Purple)
        C1: "#eff6ff", // Lightest blue tint
        C2: "#dbeafe",
        C3: "#93c5fd",
        C4: "#60a5fa",
        C5: "#3b82f6", // Primary Blue
        C6: "#7e22ce", // Strong Purple
        // Light Mode Hover States
        CH1: "#e0e7ff",
        CH2: "#bfdbfe",
        CH3: "#2563eb",
        CH4: "#6b21a8",

        // Dark Mode Brand Scale
        D1: "#312e81", // Subtle dark accent
        D2: "#3730a3",
        D3: "#4338ca",
        D4: "#4f46e5",
        D5: "#1e1b4b", // Deep indigo
        D6: "#0f172a", // Deepest dark background
        // Dark Mode Hover States
        DH1: "#4c1d95",
        DH2: "#5b21b6",
        DH3: "#3730a3",
        DH4: "#1e293b",
      },
      spacing: {
        'section-y': '5rem',
        'section-x': '1.5rem',
      },
    },
  },
  plugins: [],
}