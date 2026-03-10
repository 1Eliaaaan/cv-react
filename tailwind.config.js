/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        deep: '#0A0A0F',
        card: '#12121A',
        'card-hover': '#181825',
        amber: {
          accent: '#F5A623',
          glow: 'rgba(245,166,35,0.15)',
          dim: '#C4841D',
        },
        cyan: {
          accent: '#00D4FF',
          glow: 'rgba(0,212,255,0.12)',
          dim: '#009DBF',
        },
        txt: {
          primary: '#E8E6E3',
          muted: '#6B6B76',
          dim: '#3A3A45',
        },
        border: '#1E1E2A',
        'border-hover': '#2A2A3A',
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(245,166,35,0.15), 0 0 60px rgba(245,166,35,0.05)',
        'glow-cyan': '0 0 20px rgba(0,212,255,0.12), 0 0 60px rgba(0,212,255,0.04)',
        'card': '0 4px 30px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(245,166,35,0.08)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(30,30,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,42,0.5) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'typing': 'typing 3.5s steps(40,end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(12%,9%)' },
          '70%': { transform: 'translate(9%,4%)' },
          '90%': { transform: 'translate(-1%,7%)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#F5A623' },
        },
      },
    },
  },
  plugins: [],
}
