/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6',
        secondary: '#3B82F6',
        accent: '#8B5CF6',
        gold: '#d4af37',
        'bg-dark': '#0F172A',
        'bg-dark-secondary': '#1E293B',
        'text-secondary': '#94A3B8',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-glow-strong': 'pulseGlowStrong 1.5s ease-in-out infinite',
        'scale-fade-in': 'scaleFadeIn 0.5s ease-out',
        'scale-fade-out': 'scaleFadeOut 0.3s ease-in',
        'progress-ring': 'progressRing 3s linear',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'shimmer-fast': 'shimmer 1.5s ease-in-out infinite',
        'mesh-move': 'meshMove 20s ease-in-out infinite',
        'mesh-move-alt': 'meshMoveAlt 25s ease-in-out infinite',
        'zoom-out': 'zoomOut 0.6s ease-in forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)',
            transform: 'scale(1.05)'
          },
        },
        pulseGlowStrong: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(20, 184, 166, 0.3)',
            filter: 'brightness(1)'
          },
          '50%': { 
            boxShadow: '0 0 60px rgba(139, 92, 246, 1), 0 0 120px rgba(20, 184, 166, 0.6)',
            filter: 'brightness(1.2)'
          },
        },
        scaleFadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.3) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        scaleFadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.5)' },
        },
        progressRing: {
          '0%': { strokeDashoffset: '283' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        meshMove: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(50px, -50px) scale(1.2)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.8)' },
        },
        meshMoveAlt: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-40px, 40px) scale(1.1) rotate(120deg)' },
          '66%': { transform: 'translate(40px, -40px) scale(0.9) rotate(240deg)' },
        },
        zoomOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.3)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(0, -40px) rotate(180deg)' },
          '75%': { transform: 'translate(-20px, -20px) rotate(270deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}