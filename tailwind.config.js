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

      'mob-md': { max: '991px' },
      // => @media (max-width: 991px) { ... }
      
      'mob-sm': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'mob-xsm': { max: '575px' },
      // => @media (max-width: 575px) { ... }
  
    },
    extend: {},
  },
  plugins: [],
}

