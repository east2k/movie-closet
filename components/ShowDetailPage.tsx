import DetailBox from "@/components/DetailBox/DetailBox";
import QuickInfo from "@/components/DetailBox/QuickInfo";
import Header from "@/components/Header";
import { MoviePropsType } from "@/types";
import Image from "next/image";
import noImageIcon from "@/public/images/logo-icon-only.png";

interface QuickInfoItem {
    label: string;
    info: string;
}

interface ShowDetailPageProps {
    data: MoviePropsType;
}

const ShowDetailPage = ({ data }: ShowDetailPageProps) => {
    const posterSrc = data.Poster && data.Poster !== 'N/A' ? data.Poster : noImageIcon;

    const quickInfoList: QuickInfoItem[] = [
        {
            label: "Director",
            info: data.Director,
        },
        {
            label: "Writer",
            info: data.Writer,
        },
        {
            label: "Actors",
            info: data.Actors,
        },
        {
            label: "Awards",
            info: data.Awards,
        },
        {
            label: "Country",
            info: data.Country,
        },
    ];

    return (
        <div className="min-h-screen pt-20 pb-16">
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start shrink-0">
                        <div className="relative group lg:sticky lg:top-24 w-full max-w-sm h-fit">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-background-secondary rounded-2xl p-2 overflow-hidden aspect-[2/3]">
                                <Image
                                    src={posterSrc}
                                    alt={`${data.Title} poster`}
                                    fill
                                    className="object-cover rounded-xl"
                                    priority
                                    sizes="(max-width: 1024px) 384px, 33vw"
                                />
                            </div>
                        </div>
                    </div>

                    <DetailBox
                        title={data.Title}
                        genre={data.Genre}
                        year={data.Year}
                        rated={data.Rated}
                        runtime={data.Runtime}
                        plot={data.Plot}
                        language={data.Language}
                        ratings={data.Ratings}
                        imdbRating={data.imdbRating}
                    />
                </div>

                <div className="bg-background-secondary/50 border border-white/5 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-text-primary mb-6">Additional Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quickInfoList.map((item, index) => (
                            <QuickInfo
                                key={index}
                                label={item?.label}
                                info={item?.info}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetailPage;
