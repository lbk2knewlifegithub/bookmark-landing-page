const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        desktop: "0rem",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1280px",
      },
      // create custom fonts here
      fontFamily: {
        mono: ["'Rubik'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
        primary: withOpacity("--text-primary"),
        danger: withOpacity("--text-danger"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        'modal-box': withOpacity("--bg-modal-box"),
        'primary': withOpacity("--bg-primary"),
        'danger': withOpacity("--bg-danger"),
        'footer': withOpacity("--bg-footer"),
      },
      borderColor: {
        danger: withOpacity("--border-danger"),
        primary: withOpacity("--border-primary"),
      },
      // create custom gradient color here
      gradientColorStops: {
        hue: withOpacity("--color-fill"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen desktop": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
