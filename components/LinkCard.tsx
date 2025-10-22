import Image from "next/image";
import Link from "next/link";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import defaultImage from "@/public/images/logo-icon-only.png";
import { createSlug } from "@/lib/utils/url";

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
    const slug = createSlug(title);
    const posterSrc = poster && poster !== 'N/A' ? poster : defaultImage;

    return (
        <Link
            href={{
                pathname: `/${sectionType}/${slug}`,
                query: {
                    showID: imdbID,
                },
            }}
            className="group relative flex flex-col w-full rounded-2xl bg-background-secondary border border-white/5 overflow-hidden transition-all duration-300 hover:border-accent-primary/50 hover:shadow-card-hover hover:-translate-y-2"
            aria-label={`View ${title} (${year})`}
        >
            <div className="relative aspect-[2/3] overflow-hidden bg-background-tertiary">
                <Image
                    src={posterSrc}
                    alt={`${title} poster`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 224px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircleIcon className="w-16 h-16 text-white opacity-90 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                </div>

                <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-background-primary/80 backdrop-blur-sm text-accent-tertiary text-xs font-semibold rounded-full border border-accent-tertiary/30">
                        {year}
                    </span>
                </div>
            </div>

            <div className="p-4 space-y-2">
                <h3 className="font-semibold text-text-primary text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-accent-primary transition-colors">
                    {title}
                </h3>

                <div className="h-0.5 w-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
        </Link>
    );
};

export default LinkCard;
