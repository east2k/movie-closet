import Image from "next/image";
import Link from "next/link";
import defaultImage from "@/public/images/logo-icon-only.png";

interface LinkCardProps {
    sectionType: string;
    title: string;
    imdbID: string;
    poster: string;
    year: string;
}

const LinkCard: React.FC<LinkCardProps> = ({
    sectionType,
    title,
    imdbID,
    poster,
    year,
}) => {
    return (
        <Link
            href={{
                pathname: `/${sectionType}/${title}`,
                query: {
                    showID: imdbID,
                },
            }}
            className="cursor-pointer flex flex-col border border-opacity-15 border-ocean-300 max-w-56 rounded-sm"
        >
            <div className="mr-5 w-full h-72 overflow-hidden p-3 bg-cinder-900 bg-opacity-10">
                <Image
                    src={poster === "N/A" ? defaultImage : poster}
                    alt="Poster"
                    width={120}
                    height={240}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-2">
                <p className="text-xs border rounded-full max-w-fit px-1 border-ocean-300 text-ocean-300 mb-2">
                    {year}
                </p>
                <h2 className="font-semibold">{title}</h2>
            </div>
        </Link>
    );
};

export default LinkCard;
