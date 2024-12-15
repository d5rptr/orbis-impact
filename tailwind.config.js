/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // Include shared components
    "./pages/**/*.{js,ts,jsx,tsx}", // Include Pages Router if applicable
  ],
  theme: {
    extend: {
      // Extend font families
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Default sans-serif font
        heading: ['"Poppins"', 'sans-serif'], // Optional: Add a heading font
      },
      // Extend custom colors
      colors: {
        darkBlue: "#17345C", // Orbis Dark Blue
        azureBlue: "#4168B1", // Orbis Azure Blue
        orbitBlue: "#6DCFF6", // Orbis Orbit Blue
        light: "#FFFFFF", // White
        accent: "#F8F9FA", // Light gray for background
        danger: "#FF5A5A", // Optional: Add a danger (error) color
        success: "#4CAF50", // Optional: Add a success color
      },
      // Add container settings for better responsiveness
      container: {
        center: true,
        padding: "1rem",
      },
      // Extend spacing, if needed
      spacing: {
        18: "4.5rem", // Example: Custom spacing value
        36: "9rem",
      },
      // Add optional box shadow presets
      boxShadow: {
        light: "0 2px 4px rgba(0, 0, 0, 0.1)", // Light shadow
        medium: "0 4px 6px rgba(0, 0, 0, 0.2)", // Medium shadow
      },
    },
  },
  plugins: [],
};
