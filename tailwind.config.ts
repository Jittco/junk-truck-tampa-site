import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'anton': ['Anton', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'changa-one': ['Changa One', 'Impact', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				// Alias so redesign components can say what a font is FOR rather
				// than which typeface it happens to be. Points at Anton, which is
				// already loaded and already the site's display face.
				'display': ['Anton', 'Impact', 'sans-serif'],
			},
			colors: {
				/*
				  Redesign palette. Additive only — nothing above or below is
				  changed, so every existing component keeps rendering exactly as
				  it does today and these are opt-in per component.

				  Neutrals are tinted warm toward the logo's orange rather than
				  being pure grey, and there is no #000 or #fff anywhere: the
				  darkest ink still carries red, and sand-50 is a warm off-white.
				  That tint is what makes the orange feel native to the page
				  instead of pasted onto it.
				*/
				ink: {
					900: '#17120F', // near-black, warm
					800: '#221B16',
					700: '#31271F',
					500: '#6B5D53',
					300: '#A99C92',
				},
				sand: {
					50: '#FAF6F1',  // warm off-white page base
					100: '#F2EBE2',
					200: '#E5DACB',
				},
				brand: {
					orange: '#E98922',      // sampled from the logo artwork
					'orange-deep': '#C96F14',
					green: '#18D13D',       // existing CTA green
					'green-deep': '#12A82F',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				text: 'hsl(var(--text))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(2px)' }
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'pulse-subtle': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)' },
					'50%': { boxShadow: '0 0 0 8px rgba(255, 255, 255, 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'breathe-3s': 'breathe 1s ease-in-out 0s 3',
				'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
				'shake-subtle': 'shake 0.5s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
