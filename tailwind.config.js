/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF784D',
        orange: '#FF784D',
        specialYellow: '#FFB511',
        green: '#4E754F',
        blue: '#4954D2',
        grey: '#E9E9E9',
        background: '#F4F4F4',
        stripe: '#625BF6',
      },
      fontFamily: {
        body: ['Isola'],
        headline: ['Moderat'],
      },
      borderRadius: {
        'semi-huge': '60px',
        'huge': '75px',
        'large': '40px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      dropShadow: {
        'addons': '0 4px 12px rgba(0, 0, 0, 0.1)'
      },
      boxShadow: {
        'basket': '-20px 0px 150px rgba(0, 0, 0, 0.1)',
        'button-hover': '0px 2px 20px rgba(0, 0, 0, 0.15)'
      },
      backgroundImage: {
        'desktop-shapes-svg': "url('assets/desktop-shapes.svg')",
        'mobile-shapes-svg': "url('assets/mobile-shapes.svg')",
        'custom-colours-background': 'radial-gradient(circle, rgba(245, 245, 245, 0.7) 80%, rgba(0,0,0,0) 95%)',
      },
      transitionTimingFunction: {
        kibushopdefault: 'cubic-bezier(0.250, 0.250, 0.000, 1.000)',
        hypereaseout: 'cubic-bezier(0.000, 0.970, 0.000, 1.000)'
      },
      animation: {
        'truck-animation': 'truck 3s ease-out infinite',
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        truck: {
          '0%': { transform: 'translate(-15px)', opacity: '0' },
          '20%': { transform: 'translate(0px)', opacity: '100' },
          '98%': { transform: 'translate(0px)', opacity: '100' },
          '100%': { transform: 'translate(0px)', opacity: '0' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4B5563',
            h3: {
              color: '#000000',
              fontWeight: '600',
            },
            strong: {
              color: '#000000',
              fontWeight: '600',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              backgroundColor: '#FF784D',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  layer: {
    utilities: {
      '.no-scrollbar::-webkit-scrollbar': {
        display: 'none',
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    },
  },
}
