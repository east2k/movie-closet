import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

interface RatingsProps {
    source: string;
    value: string;
}

const Ratings: React.FC<RatingsProps> = ({ source, value }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-background-tertiary border border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-sm font-medium text-text-secondary">{source}</h3>
            </div>
            <p className="text-lg font-semibold text-text-primary">{value}</p>
        </div>
    );
};

export default Ratings;
