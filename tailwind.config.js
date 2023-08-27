/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        "alkaliMetals": "#85E6C5",
        "alkalineEarthMetals": "#F8485E",
        "lanthanoids" :"#00C1D4",
        "aktinoids": "#C08261",
        "transitionMetals": "#A084E8",
        "postTransitionMetals": "#35A29f",
        "metalloids": "#EA906C",
        "nonmetals": "#068DA9",
        "nobleGasses": "#EA1179",
        "uknown": "#B9B4C7",
      }

    },
  },
  plugins: [],
}

