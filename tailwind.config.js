/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens:{
        'lg': '1285px',
      }
    },
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'mob991': { max: '991px' },
      // => @media (max-width: 991px) { ... }
      
      'mob767': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'mob575': { max: '575px' },
      // => @media (max-width: 575px) { ... }
  
    },
    extend: {},
  },
  plugins: [],
}

