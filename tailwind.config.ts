import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    primary: "#0a0e1a",
                    secondary: "#141824",
                    tertiary: "#1e2433",
                },
                accent: {
                    primary: "#3b82f6",
                    secondary: "#8b5cf6",
                    tertiary: "#06b6d4",
                    hover: "#2563eb",
                },
                text: {
                    primary: "#f8fafc",
                    secondary: "#cbd5e1",
                    tertiary: "#94a3b8",
                },
                cinder: {
                    "50": "#f6f6f9",
                    "100": "#ececf2",
                    "200": "#d7d6e1",
                    "300": "#b2b1c8",
                    "400": "#8887a9",
                    "500": "#6a688f",
                    "600": "#565376",
                    "700": "#474460",
                    "800": "#3d3b51",
                    "900": "#363446",
                    "950": "#16151c",
                },
                ocean: {
                    "50": "#f2f5fd",
                    "100": "#e4e9fa",
                    "200": "#c3d1f4",
                    "300": "#8eabeb",
                    "400": "#5280de",
                    "500": "#2c60cb",
                    "600": "#1d48ac",
                    "700": "#18398c",
                    "800": "#183274",
                    "900": "#192c61",
                    "950": "#060a17",
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-mesh': 'radial-gradient(at 0% 0%, #3b82f6 0px, transparent 50%), radial-gradient(at 100% 100%, #8b5cf6 0px, transparent 50%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
                'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
                'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
