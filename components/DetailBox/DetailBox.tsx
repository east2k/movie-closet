import { StarIcon, ClockIcon, CalendarIcon, FilmIcon } from "@heroicons/react/24/solid";
import React from "react";
import SmallDetails from "./SmallDetails";
import Ratings from "./Ratings";
import QuickInfo from "./QuickInfo";

interface DetailBoxProps {
    title: string;
    genre: string;
    year: string;
    rated: string;
    runtime: string;
    plot: string;
    language: string;
    ratings: Array<RatingsArray>;
    imdbRating: string;
}

interface RatingsArray {
    Source: string;
    Value: string;
}

const DetailBox: React.FC<DetailBoxProps> = ({
    title,
    genre,
    year,
    rated,
    runtime,
    plot,
    language,
    ratings,
    imdbRating,
}) => {
    const splitGenre: Array<String> = genre.split(",");
    return (
        <div className="flex-1 space-y-6 px-4 sm:px-6 lg:px-8 py-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">{imdbRating}</span>
                <span className="text-text-tertiary text-sm">IMDb</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight">
                {title}
            </h1>

            <div className="flex flex-wrap gap-2">
                {splitGenre.map((item, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-background-tertiary border border-white/10 rounded-full text-sm text-text-secondary"
                    >
                        {item.trim()}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-accent-tertiary" />
                    <span>{year}</span>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-accent-tertiary" />
                    <span>{runtime}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FilmIcon className="w-5 h-5 text-accent-tertiary" />
                    <span>{rated}</span>
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-text-primary">Overview</h2>
                <p className="text-text-secondary text-base leading-relaxed">{plot}</p>
            </div>

            <QuickInfo label="Language" info={language} />

            <div className="space-y-3">
                <h2 className="text-lg font-semibold text-text-primary">Ratings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Ratings source="IMDB" value={imdbRating} />
                    {ratings.map((item, index) => (
                        <Ratings
                            key={index}
                            source={item.Source}
                            value={item.Value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailBox;
