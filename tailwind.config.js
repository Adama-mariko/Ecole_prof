export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
     animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'count-up': 'countUp 0.6s ease-out',
        'card-in': 'cardIn 0.6s ease-out both',
        'gradient': 'gradient 3s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        countUp: {
          'from': { 
            transform: 'scale(0.5)',
            opacity: '0'
          },
          'to': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        cardIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      }
      
  } },
  plugins: [],
}
