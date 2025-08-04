import {Config} from "tailwindcss";


const config: Config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                serif: ['Merriweather', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
                heading: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                slideUp: {
                    '0%': {transform: 'translateY(10px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
            },
            lineHeight: {
                'prose': '1.8',
                'relaxed': '1.75',
                'loose': '2',
            },
            colors: {
                main: "var(--color-main)",
                background: "var(--color-background)",
                "secondary-background": "var(--color-secondary-background)",
                foreground: "var(--color-foreground)",
                "main-foreground": "var(--color-main-foreground)",
                border: "var(--color-border)",
                ring: "var(--color-ring)",
                overlay: "var(--color-overlay)",

                input: "hsl(var(--input))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            boxShadow: {
                shadow: "var(--shadow-shadow)",
                'prose-img': '0 10px 30px rgba(0, 0, 0, 0.15)',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontWeight: {
                base: "var(--font-weight-base)",
                heading: "var(--font-weight-heading)",
            },
        },
    },
}

export default config