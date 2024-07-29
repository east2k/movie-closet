import { SectionPropsType } from "@/constants/section-type";
import React from "react";
import LinkCard from "./LinkCard";

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
        <div className="px-20 pb-10 pt-0 w-full h-full max-w-screen-xl m-auto border-b border-cinder-900 mt-10">
            <h1 className="mb-5">{label}</h1>
            {loading ? (
                <div>Loading</div>
            ) : (
                <div className="grid grid-rows-1 grid-cols-5 gap-7">
                    {itemsList.map((item, index) => {
                        if (size === "small" && index >= 5) return;
                        return (
                            <LinkCard
                                key={index}
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
        </div>
    );
};

export default Sections;
