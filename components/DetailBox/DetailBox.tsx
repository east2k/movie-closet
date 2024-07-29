import { StarIcon } from "@heroicons/react/20/solid";
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
        <div className="mr-20 ml-10 px-10 my-5 py-5 w-2/3 border border-cinder-500 border-opacity-25 rounded-lg">
            <h1 className="text-4xl font-bold mb-10">{title}</h1>
            <ul className="flex flex-row gap-5 flex-wrap mb-3">
                {splitGenre.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="bg-cinder-900 text-cinder-300 px-3 rounded-full"
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
            <div className="flex flex-row gap-10 mb-4">
                <SmallDetails year={year} rated={rated} runtime={runtime} />
            </div>
            <p className="text-cinder-200 mb-4">{plot}</p>
            <QuickInfo label="Language" info={language} />
            <div>
                <h2 className="text-xs text-cinder-200 text-opacity-50">
                    Ratings:
                </h2>
                <Ratings source="IMDB" value={imdbRating} />
                {ratings.map((item, index) => {
                    return (
                        <Ratings
                            key={index}
                            source={item.Source}
                            value={item.Value}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DetailBox;
