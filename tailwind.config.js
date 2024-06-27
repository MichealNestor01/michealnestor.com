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
        "secondary-colour": "var(--text-secondary-colour)",
        "site-backgound": "var(--site-backgound)",
        "accent-colour": "var(--text-accent-colour)",
      },
    },
  },
  plugins: [],
};
