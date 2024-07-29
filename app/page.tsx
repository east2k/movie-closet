import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Sections from "@/components/Sections";
import { BannerPropsType } from "@/constants/banner-type";
import { SectionArrayType } from "@/constants/section-type";

export default async function Home() {
    const initialBannerRes = await fetch(
        "https://omdbapi.com/?apikey=d5adca4b&t=lord%20of%20the%20rings"
    );
    const movieList = await fetch(
        "https://omdbapi.com/?apikey=d5adca4b&s=Avengers&page=1&type=movie"
    );
    const seriesList = await fetch(
        "https://omdbapi.com/?apikey=d5adca4b&s=Batman&page=1&type=series"
    );

    const initialBannerData: BannerPropsType = await initialBannerRes.json();
    const movieListData: { Search: SectionArrayType } = await movieList.json();
    const seriesListData: { Search: SectionArrayType } =
        await seriesList.json();

    return (
        <main className="flex flex-col h-screen">
            <Header />
            <Banner
                title={initialBannerData.Title}
                year={initialBannerData.Year}
                rating={initialBannerData.imdbRating}
                genre={initialBannerData.Genre}
                plot={initialBannerData.Plot}
                runtime={initialBannerData.Runtime}
                poster={initialBannerData.Poster}
                imdbID={initialBannerData.imdbID}
                bannerShowType ="movies"
            />
            <div className="flex flex-col">
                <Sections
                    label="Movies"
                    sectionType="movies"
                    itemsList={movieListData.Search}
                    size="small"
                    loading={false}
                />
                <Sections
                    label="Series"
                    sectionType="series"
                    itemsList={seriesListData.Search}
                    size="small"
                    loading={false}
                />
            </div>
        </main>
    );
}
