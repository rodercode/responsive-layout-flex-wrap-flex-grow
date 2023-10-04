/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    sm: "640px",

    md: "768px",

    lg: "1024px",

    xl: "1280px",

    "2xl": "1536px",
    extend: {
      colors: {
        // PRIMARY COLORS
        "primary-dark-color": "#575C61",
        "primary-base-color": "#6D7379",
        "primary-light-color": "#8A8F94",

        // SECONDARY COLORS
        "secondary-dark-color": "#C84242",
        "secondary-base-color": "#fa5252",
        "secondary-light-color": "#FB7575",

        // GREY COLORS
        "gray-dark-color": "#3A4046",
        "gray-base-color": "#495057",
        "gray-light-color": "#6D7379",

        // Btn Colors
        "btn-text-color": "white",
      },
      borderWidth: {
        1: "1px",
      },
      lineHeight: {
        "xl-relaxed": "1.725",
        "xl-loose": "2.5",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
