/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#000000',
        color: '#ffffff'
      },
      backgroundImage: (theme) => ({
        'banner-bg': "url('../accets/bannerImg.jpg')"
      })
    }
  },
  plugins: []
};
