/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-banner": "url('/images/banner.png')",
        "hand": "url('/images/hand.png')",
        "location": "url('/images/location.png')"
      },
    },
  },
  plugins: [],
};
