/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos de JavaScript y JSX
    "./public/index.html", // Archivo HTML
  ],
  theme: {
    extend: {
      colors: { Marvel: "#ed1c25" },
    },
  },
  plugins: [],
};

export default config;
