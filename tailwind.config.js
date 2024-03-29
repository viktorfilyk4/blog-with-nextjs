/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './posts/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  // '@tailwindcss/typography' gives custom styling for HTML elements
  /* It is useful for content that I don't control, i.e. markdown */
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
