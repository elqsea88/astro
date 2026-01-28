/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px"
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        mobile: "420px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px"
      }
    },
    extend: {
      colors: {
        "color-mostaza": "#F9A825",
        "color-negro": "#1C1C1C",
        "color-cyan": "#20949A",
        "color-blanco": "#ffffff",
        "color-verde": "#1DAF44",
        "color-amarillo": "#FAB951"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["\"Source Sans 3\"", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"]
      },
      fontSize: {
        h1: ["57px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h2: ["45px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h3: ["36px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h4: ["30px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h5: ["24px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
        h6: ["20px", { lineHeight: "1.3", letterSpacing: "-0.5px" }],
      }
    }
  },
  plugins: [
    function ({ addBase, theme }) {
      const headingFamily = theme("fontFamily.heading");
      const headingFont = Array.isArray(headingFamily)
        ? headingFamily.join(", ")
        : headingFamily;
      const buildHeading = (sizeKey, weight, letterSpacing) => {
        const [fontSize, options] = theme(`fontSize.${sizeKey}`);

        return {
          fontFamily: headingFont,
          fontWeight: weight,
          fontStyle: "normal",
          fontSize,
          lineHeight: options.lineHeight,
          ...(letterSpacing ? { letterSpacing } : {})
        };
      };

      addBase({
        /* BASE (mobile first) */
        h1: buildHeading("h1", "900", "-0.25px"),
        h2: buildHeading("h2", "700", "-0.25px"),
        h3: buildHeading("h3", "600"),
        h4: buildHeading("h4", "600"),
        h5: buildHeading("h5", "500"),
        h6: buildHeading("h6", "400"),

        /* TABLET */
        "@screen mobile": {
          h1: { lineHeight: "1.2" },
          h2: { lineHeight: "1.2" },
          h3: { lineHeight: "1.2" },
          h4: { lineHeight: "1.2" },
          h5: { lineHeight: "1.2" },
          h6: { lineHeight: "1.2" }
        },

        /* TABLET */
        "@screen tablet": {
          h1: { lineHeight: "1.25" },
          h2: { lineHeight: "1.25" },
          h3: { lineHeight: "1.3" },
          h4: { lineHeight: "1.3" },
          h5: { lineHeight: "1.3" },
          h6: { lineHeight: "1.3" }
        },

        /* LAPTOP */
        "@screen laptop": {
          h1: { lineHeight: "1.2" },
          h2: { lineHeight: "1.2" },
          h3: { lineHeight: "1.2" },
          h4: { lineHeight: "1.2" },
          h5: { lineHeight: "1.2" },
          h6: { lineHeight: "1.2" }
        },

        /* DESKTOP */
        "@screen desktop": {
          h1: { lineHeight: "1.15" },
          h2: { lineHeight: "1.15" },
          h3: { lineHeight: "1.15" },
          h4: { lineHeight: "1.15" },
          h5: { lineHeight: "1.15" },
          h6: { lineHeight: "1.15" }
        }
      });

    }
  ]
};
