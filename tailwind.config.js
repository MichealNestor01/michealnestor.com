/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "primary-colour": "var(--text-main-colour)",
        "site-backgound": "var(--site-backgound)",
        "hover-colour": "var(--text-hover-colour)",
      },
    },
  },
  plugins: [],
};
