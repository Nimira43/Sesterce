/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
  			'support': '#008080',
  			'dark': '#111',
  			'light': '#fffdfa',
  			'grey-1': '#333',
  			'grey-2': '#999',
  			'grey-3': '#ccc',
  			'grey-4': '#eee',
        'gold': '#ffd700'
      },
    },
  },
  plugins: [],
}

