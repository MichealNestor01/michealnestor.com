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
        "site-backgound": "var(--site-background)",
        "accent-colour": "var(--text-accent-colour)",
        "accent-colour2": "var(--text-accent-colour2)",
        "button-colour": "var(--text-button-colour)",
      },
    },
  },
  plugins: [],
};
