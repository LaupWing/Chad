/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
   ],
   theme: {
      extend: {
         colors:{
            gray1: "#c1c5ce",
            gray2: "#a7adbb",
            gray3: "#65737e",
            gray4: "#4f5b67",
            gray5: "#343c46",
            gradient1: "#6782B4",
            gradient2: "#B1BFD8",
         }
      },
   },
   plugins: [],
}
