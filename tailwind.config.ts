import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--border)',
        ring: 'var(--accent-dark)',
        background: 'var(--bg)',
        foreground: 'var(--ink)',
        primary: {
          DEFAULT: 'var(--ink)',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: 'var(--soft)',
          foreground: 'var(--ink)'
        },
        muted: {
          DEFAULT: 'var(--soft)',
          foreground: 'var(--muted)'
        },
        accent: {
          DEFAULT: 'rgba(0, 229, 160, 0.14)',
          foreground: '#007d5b'
        },
        destructive: {
          DEFAULT: '#bd2b2b',
          foreground: '#ffffff'
        }
      },
      borderRadius: {
        lg: '8px',
        md: '8px',
        sm: '6px'
      }
    }
  },
  plugins: []
};

export default config;
