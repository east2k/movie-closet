import { FilmIcon, TvIcon, HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-background-primary/80 backdrop-blur-xl border-b border-white/10">
            <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <Link href="/" aria-label="Home" className="group flex items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full group-hover:bg-accent-primary/30 transition-all"></div>
                        <Image
                            src="/images/logo-with-text.png"
                            alt="Movie Closet Logo"
                            width={75}
                            height={75}
                            className="relative w-10 h-10 sm:w-12 sm:h-12 scale-125"
                            priority
                        />
                    </div>
                </Link>

                <nav aria-label="Main navigation" className="flex items-center gap-1">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary transition-all duration-200"
                    >
                        <HomeIcon className="w-5 h-5" />
                        <span className="hidden md:block font-medium">Home</span>
                    </Link>
                    <Link
                        href="/movies"
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary transition-all duration-200"
                    >
                        <FilmIcon className="w-5 h-5" />
                        <span className="hidden md:block font-medium">Movies</span>
                    </Link>
                    <Link
                        href="/series"
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary transition-all duration-200"
                    >
                        <TvIcon className="w-5 h-5" />
                        <span className="hidden md:block font-medium">Series</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
