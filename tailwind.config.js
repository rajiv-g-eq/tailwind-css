/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

