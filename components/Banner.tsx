import { ArrowRightCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerProps {
    title: string;
    year: string;
    rating: string;
    genre: string;
    plot: string;
    runtime: string;
    poster: string;
    imdbID: string;
    bannerShowType: string;
}

const Banner: React.FC<BannerProps> = ({
    title,
    year,
    rating,
    genre,
    plot,
    runtime,
    poster,
    imdbID,
    bannerShowType,
}) => {
    return (
        <div className="bg-ocean-950">
            <div className="flex flex-row max-w-screen-xl m-auto pt-24">
                <div className="w-1/2 px-20 py-28">
                    <p className="mb-3 flex flex-row items-center">
                        <StarIcon className="w-4 h-4 text-yellow-300" />
                        {rating}
                    </p>
                    <h1 className="text-5xl mb-10">{title}</h1>
                    <p className="text-sm text-white text-opacity-75 mb-10">
                        {plot}
                    </p>
                    <Link
                        href={{
                            pathname: `/${bannerShowType}/${title}`,
                            query: {
                                showID: imdbID,
                            },
                        }}
                        className="flex flex-row justify-center items-center rounded-md bg-ocean-400 px-7 py-2 mb-20"
                    >
                        <ArrowRightCircleIcon className="w-5 h-5 mr-1" />
                        Check it out
                    </Link>
                    <div className="flex flex-row gap-5">
                        <p>{year}</p>
                        <p>{genre}</p>
                        <p>{runtime}</p>
                    </div>
                </div>
                <div className="w-1/2 h-auto flex justify-end items-center px-20 overflow-hidden">
                    <Image
                        src={poster}
                        alt="Movie Poster"
                        width={1000}
                        height={1000}
                        className="h-4/5 w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
