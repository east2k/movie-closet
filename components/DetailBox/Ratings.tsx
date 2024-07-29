import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

interface RatingsProps {
    source: string;
    value: string;
}

const Ratings: React.FC<RatingsProps> = ({ source, value }) => {
    return (
        <div className="flex flex-row items-center border-b border-opacity-10 border-cinder-500">
            <StarIcon className="w-4 h-4 text-yellow-300" />
            <h3 className="text-sm text-cinder-200 w-full">{source}</h3>
            <p className="ml-5">{value}</p>
        </div>
    );
};

export default Ratings;
