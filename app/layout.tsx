import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Deca({ subsets: ["latin"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Movie Closet",
    description: "Search any movies",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" className="bg-cinder-950 text-white">
            <body className={lexend.className}>{children}</body>
        </html>
    );
}
