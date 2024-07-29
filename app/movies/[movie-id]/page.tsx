import DetailBox from "@/components/DetailBox/DetailBox";
import QuickInfo from "@/components/DetailBox/QuickInfo";
import { MoviePropsType } from "@/constants/movie-type";
import Image from "next/image";

interface QuickInfoListArray {
    label: string;
    info: string;
}
interface NextPageProps<SlugType = string> {
    params: { slug: SlugType };
    searchParams: { [key: string]: string | string[] | undefined };
}

const page: React.FC<NextPageProps> = async ({ searchParams }) => {
    const res = await fetch(
        `https://omdbapi.com/?apikey=d5adca4b&i=${searchParams.showID}`
    );
    const data: MoviePropsType = await res.json();
    const quickInfoList: Array<QuickInfoListArray> = [
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
        <div className="flex flex-col max-w-screen-xl m-auto pt-24">
            <div className="flex flex-row border-b mb-5 border-cinder-500 border-opacity-5">
                <div className="w-1/3 flex justify-end items-center pl-20">
                    <Image
                        src={data.Poster}
                        alt="Movie Poster"
                        width={1000}
                        height={1000}
                        className="h-auto w-full min-w-fit"
                    />
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
            <div className="mx-20 px-10 py-5 border border-cinder-500 border-opacity-25 rounded-lg mb-20">
                {quickInfoList.map((item, index) => {
                    return (
                        <QuickInfo
                            key={index}
                            label={item?.label}
                            info={item?.info}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default page;
