import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

const Header = () => {
    return (
        <header className="absolute w-full border-b">
            <div className="flex flex-row justify-between items-center max-w-screen-xl m-auto px-20 ">
                <Link href="/">
                    <Image
                        src="/images/logo-with-text.png"
                        alt="Logo"
                        width={75}
                        height={75}
                    />
                </Link>
                <ul className="flex flex-row gap-5">
                    <li>
                        <Link className="hover:opacity-70 px-2 py-1" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:opacity-70 px-2 py-1"
                            href="/movies"
                        >
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="hover:opacity-70 px-2 py-1"
                            href="/series"
                        >
                            Series
                        </Link>
                    </li>
                </ul>
                {/* <SearchInput size="normal" /> */}
            </div>
        </header>
    );
};

export default Header;
