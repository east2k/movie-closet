import { CalendarIcon, ClockIcon, FilmIcon } from "@heroicons/react/20/solid";
import React from "react";

interface SmallDetailsProps {
    year: string;
    rated: string;
    runtime: string;
}

interface detailsList {
    icon: React.ElementType;
    detail: string;
}

const SmallDetails: React.FC<SmallDetailsProps> = ({
    year,
    rated,
    runtime,
}) => {
    const detailsList: Array<detailsList> = [
        { icon: CalendarIcon, detail: year },
        { icon: FilmIcon, detail: rated },
        { icon: ClockIcon, detail: runtime },
    ];
    return (
        <>
            {detailsList.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="flex flex-row items-center">
                        <div className="pr-2">
                            <Icon className="w-5 h-5 text-cinder-200" />
                        </div>
                        <p className="text-cinder-200">{item.detail}</p>
                    </div>
                );
            })}
        </>
    );
};

export default SmallDetails;
