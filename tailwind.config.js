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
        'light_red':           '#FF5E7D',
        'soft_orange':         '#FF8B64',
        'lime_green':          '#4BCF82',
        'violet':              '#5747EA',
        'soft_violet':         '#7335D2',
        'blue':                '#55C2E6',
        'soft_blue':           '#60BC9E',
        'dark_blue':           '#1C204B',
        'pale_blue':           '#F2F2F2',
        'very_dark_blue':      '#0E1323',
        'desaturated_blue':    '#57A5CC',
        'soft_yellow':         '#F1C75B',
      }
    },
  },
  plugins: [],
}
