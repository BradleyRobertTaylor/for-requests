import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindCssForms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
