module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        darkBlue: "#17345C", // Orbis Dark Blue
        azureBlue: "#4168B1", // Orbis Azure Blue
        orbitBlue: "#6DCFF6", // Orbis Orbit Blue
        light: "#FFFFFF", // White
        accent: "#F8F9FA", // Light gray for background
      },
    },
  },
  plugins: [],
};