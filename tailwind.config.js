// tailwind.config.js
module.exports = {
          content: [
                    "./app/**/*.{js,ts,jsx,tsx}",
                    "./pages/**/*.{js,ts,jsx,tsx}",
                    "./components/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
                    extend: {
                              screens: {
                                        sm: '576px', 
                                        'xs': '360px', 
                              }
                    }
          },
          plugins: [],
}