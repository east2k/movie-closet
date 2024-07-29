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
        },
    },
    plugins: [],
};
export default config;
