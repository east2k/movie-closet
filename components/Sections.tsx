import { SectionPropsType } from "@/constants/section-type";
import React from "react";
import LinkCard from "./LinkCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface SectionProps {
    label: string;
    itemsList: Array<SectionPropsType>;
    size: string;
    loading: boolean;
    sectionType: string;
}

const Sections: React.FC<SectionProps> = ({
    label,
    itemsList,
    size,
    loading,
    sectionType,
}) => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12 w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-full"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                        {label}
                    </h2>
                </div>
                {size === "small" && (
                    <button className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors group">
                        <span className="text-sm font-medium">View All</span>
                        <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                )}
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-[2/3] bg-background-secondary rounded-2xl animate-pulse"
                        >
                            <div className="h-full w-full bg-gradient-to-br from-background-tertiary to-background-secondary rounded-2xl"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {itemsList.map((item, index) => {
                        if (size === "small" && index >= 5) return null;
                        return (
                            <LinkCard
                                key={`${item.imdbID}-${index}`}
                                sectionType={sectionType}
                                title={item.Title}
                                imdbID={item.imdbID}
                                poster={item.Poster}
                                year={item.Year}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Sections;
