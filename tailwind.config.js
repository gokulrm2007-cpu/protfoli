/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        slate: {
          850: '#151f32',
          925: '#0b1324',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite 0.7s',
        'float-fast': 'float 4.5s ease-in-out infinite 1.4s',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}