import { PlayIcon, StarIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createSlug } from "@/lib/utils/url";

import noImageIcon from "@/public/images/logo-icon-only.png";

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
    const slug = createSlug(title);
    const posterSrc = poster && poster !== 'N/A' ? poster : noImageIcon;

    return (
        <div className="relative pt-28 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-primary"></div>

            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    <div className="w-full lg:w-auto flex-shrink-0">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-background-secondary rounded-2xl p-2 overflow-hidden">
                                <Image
                                    src={posterSrc}
                                    alt={`${title} poster`}
                                    width={400}
                                    height={600}
                                    className="w-full max-w-sm h-auto object-cover rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                            <StarIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                            <span className="text-yellow-400 font-semibold text-lg">{rating}</span>
                            <span className="text-text-tertiary text-sm">IMDb</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-text-secondary">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5 text-accent-tertiary" />
                                <span>{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-5 h-5 text-accent-tertiary" />
                                <span>{runtime}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {genre.split(',').map((g, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-background-tertiary rounded-full text-sm border border-white/10"
                                    >
                                        {g.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl">
                            {plot}
                        </p>

                        <Link
                            href={{
                                pathname: `/${bannerShowType}/${slug}`,
                                query: {
                                    showID: imdbID,
                                },
                            }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-hover rounded-xl font-semibold text-white shadow-glow hover:shadow-glow-lg transform hover:scale-105 transition-all duration-200 group"
                            aria-label={`View details for ${title}`}
                        >
                            <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                            <span>View Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
