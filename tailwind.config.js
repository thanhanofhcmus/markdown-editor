module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "fg-light": "var(--color-fg-light)",
        "bg-light": "var(--color-bg-light)",
        "fg-dark": "var(--color-fg-dark)",
        "bg-dark": "var(--color-bg-dark)",
        "fg-light-secondary": "var(--color-fg-light-secondary)",
        "bg-light-secondary": "var(--color-bg-light-secondary)",
        "fg-dark-secondary": "var(--color-fg-dark-secondary)",
        "bg-dark-secondary": "var(--color-bg-dark-secondary)",
      }
    },
  },
  plugins: [],
}
