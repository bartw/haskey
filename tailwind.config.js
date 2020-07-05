module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  theme: {
    extend: {
      colors: {
        royal: {
          100: "#f2f5fd",
          200: "#a8baf0",
          300: "#7d98e8",
          400: "#5275e0",
          500: "#2653d9",
          600: "#1f42ad",
          700: "#173282",
          800: "#0f2157",
          900: "#08112b",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
