import Banner from "@/components/Banner";
import BodyContent from "@/components/BodyContent";
import { BannerPropsType } from "@/constants/banner-type";
import { SectionArrayType } from "@/constants/section-type";

const page = async () => {
    const initialSearchValue = "The Boys";
    const initialBannerRes = await fetch(
        "https://omdbapi.com/?apikey=d5adca4b&t=Breaking%20Bad"
    );
    const initialMovieList = await fetch(
        `https://omdbapi.com/?apikey=d5adca4b&s=${initialSearchValue}&page=1&type=series`
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
                bannerShowType ="series"
            />
            <BodyContent
                initialSearchValue={initialSearchValue}
                initialData={initialMovieListData.Search}
                sectionType = "series"
            />
        </div>
    );
};

export default page;
