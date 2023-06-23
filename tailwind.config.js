/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light_red':           '#FFAA00',
        'light_red':           '#C60068',
        'soft_orange':         '#E09715',
        'lime_green':          '#4A8E70',
        'violet':              '#5747EA',
        'blue':                '#7BCC99',
        'soft_blue':           '#60BC9E',
        'dark_blue':           '#1C204B',
        'pale_blue':           '#F2F2F2',
        'very_dark_blue':      '#0E1323',
        'desaturated_blue':    '#57A5CC',
      }
    },
  },
  plugins: [],
}
