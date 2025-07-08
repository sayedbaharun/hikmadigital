/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arabic': ['Noto Sans Arabic', 'Inter', 'sans-serif'],
      },
      colors: {
        // Dubai-appropriate color palette
        primary: {
          DEFAULT: '#1F25BF',
          50: '#E0E2FA',
          100: '#C8CAF6',
          200: '#989CEE',
          300: '#686DE7',
          400: '#373EDF',
          500: '#1F25BF',
          600: '#171C8F',
          700: '#121670',
          800: '#0D1051',
          900: '#080A33',
          950: '#060723'
        },
        
        // Gold accent for luxury/premium feel
        gold: {
          DEFAULT: '#E9C46A',
          light: '#F4D89C',
          dark: '#D4A84B'
        },
        
        // Text colors
        text: {
          primary: '#37474F',
          secondary: '#606F7B',
          light: '#8795A1',
          inverse: '#FFFFFF'
        },
        
        // Background colors
        background: {
          DEFAULT: '#F5F7FA',
          white: '#FFFFFF',
          light: '#FAFBFC',
          dark: '#E8ECF0'
        },
        
        // Success/Innovation green
        emerald: {
          DEFAULT: '#43A047',
          light: '#66BB6A',
          dark: '#388E3C'
        },
        
        // Neutral grays
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F7',
          200: '#E5E5E7',
          300: '#D1D1D6',
          400: '#A1A1A6',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#363638',
          900: '#1C1C1E'
        },
        
        // Functional colors
        success: '#43A047',
        error: '#FF3B30',
        
        // Keep legacy colors for compatibility
        secondary: '#606F7B',
        accent: '#E9C46A',
        
        // UAE compliance
        uae: {
          red: '#CE1126',
          green: '#009639',
        },
      },
      fontSize: {
        // Ultimate Typography System - 3 sizes only
        'sm': ['14px', { lineHeight: '1.6', letterSpacing: '0' }],
        'base': ['16px', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['20px', { lineHeight: '1.5', letterSpacing: '0' }],
        'xl': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        '2xl': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '3xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '5xl': ['64px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        '6xl': ['72px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      fontWeight: {
        // Only 3 weights - discipline
        light: '300',
        normal: '400',
        semibold: '600',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
      },
      spacing: {
        // Perfect 8px Grid - Steve Jobs Level Precision
        '0': '0px',
        '1': '8px',      // 8px
        '2': '16px',     // 16px
        '3': '24px',     // 24px
        '4': '32px',     // 32px
        '6': '48px',     // 48px
        '8': '64px',     // 64px
        '12': '96px',    // 96px
        '16': '128px',   // 128px
        '20': '160px',   // 160px
        '24': '192px',   // 192px
        '32': '256px',   // 256px
      },
      borderRadius: {
        'none': '0',
        'sm': '8px',
        DEFAULT: '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        'full': '9999px',
      },
      animation: {
        // Minimal animations - only what serves a purpose
        'fade-in': 'fadeIn 0.2s ease-out',
        'fade-out': 'fadeOut 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      transitionDuration: {
        '0': '0ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};