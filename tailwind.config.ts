import type { Config } from "tailwindcss";
import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import headlessuiPlugin from "@headlessui/tailwindcss";

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.5rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "1.75rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["2rem", { lineHeight: "3rem" }],
			"4xl": ["2.5rem", { lineHeight: "3rem" }],
			"5xl": ["3rem", { lineHeight: "1" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		extend: {
			animation: {
				"fade-in": "fade-in 0.5s ease-in-out",
				jelly: "jelly 0.5s",
				"slide-in-fade": "slide-in-fade 0.5s ease-in-out",
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
			},
			fontFamily: {
				sans: ["var(--font-roboto-flex)"],
			},
			colors: {
				skyfall: {
					default: "#3b82f6",
					"50": "#eff5ff",
					"100": "#dbe8fe",
					"200": "#bfd7fe",
					"300": "#93bbfd",
					"400": "#609afa",
					"500": "#2570eb",
					"600": "#1d64d8",
					"700": "#1e55af",
					"800": "#1e478a",
					"900": "#172e54",
				},
				twilight: {
					default: "#858fbb",
					"50": "#f4f6f9",
					"100": "#eaeff5",
					"200": "#d9e0ec",
				},
			},
			keyframes: {
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				jelly: {
					"0%,100%": { transform: "scale(1, 1)" },
					"25%": { transform: "scale(0.95, 1.05)" },
					"50%": { transform: "scale(1.05, 0.95)" },
					"75%": { transform: "scale(0.95, 1.05)" },
				},
				"slide-in-fade": {
					"0%": { transform: "translateX(100%)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [aspectRatioPlugin, formsPlugin, typographyPlugin, headlessuiPlugin],
} satisfies Config;
