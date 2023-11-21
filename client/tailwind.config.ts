import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindCssForms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        logo: ['Kdam Thmor Pro'],
      },
    },
  },
  plugins: [tailwindCssForms],
} satisfies Config;

// primary: '#1DB853',
// secondary: '#316355',
// accent: '#1DB8AB',
// neutral: '#19362C',
// 'base-100': '#171212',
// info: '#5D3163',
// success: '#00D488',
// warning: '#FFBE00',
// error: '#633131',
