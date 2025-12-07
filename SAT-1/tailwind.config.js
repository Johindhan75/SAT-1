/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Energetic Orange
        primary: {
          DEFAULT: '#F36E1F', // orange-600
          50: '#FFF4ED',
          100: '#FFE8D5',
          200: '#FFCFAA',
          300: '#FFAD74',
          400: '#FF8A4C',
          500: '#F36E1F',
          600: '#E55A0A',
          700: '#C44808',
          800: '#9C3A0E',
          900: '#7E310F',
        },
        // Secondary Colors - Dark Azure Blue
        secondary: {
          DEFAULT: '#0A3758', // dark-blue-900
          50: '#E8F1F8',
          100: '#D1E3F1',
          200: '#A3C7E3',
          300: '#75ABD5',
          400: '#478FC7',
          500: '#1973B9',
          600: '#145C94',
          700: '#0F456F',
          800: '#0A3758',
          900: '#072840',
        },
        // Accent Colors - Warm Highlights
        accent: {
          DEFAULT: '#FF8A4C', // orange-400
          light: '#FFCFAA', // orange-200
          dark: '#E55A0A', // orange-600
        },
        // Background Colors
        background: {
          DEFAULT: '#FFFFFF', // white
          dark: '#0A3758', // secondary-800
        },
        // Surface Colors
        surface: {
          DEFAULT: '#F8F9FA', // gray-50
          dark: '#E9ECEF', // gray-200
          darker: '#072840', // secondary-900
        },
        // Text Colors
        text: {
          primary: '#1A1A1A', // gray-900
          secondary: '#6C757D', // gray-600
          tertiary: '#ADB5BD', // gray-400
          inverse: '#FFFFFF', // white
        },
        // Semantic Colors
        success: {
          DEFAULT: '#28A745', // green-600
          light: '#D4EDDA', // green-100
          dark: '#1E7E34', // green-700
        },
        warning: {
          DEFAULT: '#FFC107', // yellow-500
          light: '#FFF3CD', // yellow-100
          dark: '#E0A800', // yellow-600
        },
        error: {
          DEFAULT: '#DC3545', // red-600
          light: '#F8D7DA', // red-100
          dark: '#BD2130', // red-700
        },
        // Border Colors
        border: {
          DEFAULT: '#E9ECEF', // gray-200
          light: '#F8F9FA', // gray-50
          dark: '#DEE2E6', // gray-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        headline: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        cta: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        accent: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'md': '0 6px 12px rgba(0, 0, 0, 0.12)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'base': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'slide-down': 'slideDown 400ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}