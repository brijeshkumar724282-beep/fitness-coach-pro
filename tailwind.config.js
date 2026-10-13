/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        panel: '#141416',
        panel2: '#1C1C1F',
        line: '#2A2A2E',
        volt: '#D6F93C',
        voltink: '#101200',
        bone: '#F4F3EE',
        muted: '#A7A7AB',
      },
      fontFamily: {
        display: ['"Archivo"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
