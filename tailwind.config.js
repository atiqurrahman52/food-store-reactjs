/** @type {import('tailwindcss').Config} */
export default {
  // content: ["/src/**/*.{js,jsx,ts,tsx}",],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1146px",
        "2xl": "1146px",
      },
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Playfair: ["Playfair Display", "sans-serif"],
        NotoSans: ["Noto Sans", "sans-serif"],
      },

      colors: {
        text_color: "#071C1F",
        p_text: "#606060",
        primary_3: "#47A358",
        csk:"#91BF73"
      },
    },
  },
  plugins: [],
}

