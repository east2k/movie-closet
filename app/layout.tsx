import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Movie Closet - Discover Your Next Favorite Movie",
    description: "Explore millions of movies and TV series. Find ratings, reviews, cast info, and more.",
    keywords: ["movies", "tv series", "entertainment", "streaming", "reviews"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <div className="min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    );
}
