import Banner from "@/components/Banner";
import BodyContent from "@/components/BodyContent";
import { BannerPropsType } from "@/constants/banner-type";
import { SectionArrayType } from "@/constants/section-type";

const page = async () => {
    const initialSearchValue = "Batman";
    const initialBannerRes = await fetch(
        "https://omdbapi.com/?apikey=d5adca4b&t=The%20Godfather&page=1&"
    );
    const initialMovieList = await fetch(
        `https://omdbapi.com/?apikey=d5adca4b&s=${initialSearchValue}&page=1&type=movie`
    );

    const initialMovieListData: { Search: SectionArrayType } =
        await initialMovieList.json();
    const initialBannerData: BannerPropsType = await initialBannerRes.json();
    
    return (
        <div className="">
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
            <BodyContent
                initialSearchValue={initialSearchValue}
                initialData={initialMovieListData.Search}
                sectionType = "movies"
            />
        </div>
    );
};

export default page;
