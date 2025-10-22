import Banner from "@/components/Banner";
import BodyContent from "@/components/BodyContent";
import { BannerPropsType } from "@/types";

interface ShowListingPageProps {
    bannerData: BannerPropsType;
    initialSearchValue: string;
    searchResults: any;
    showType: "movies" | "series";
}

const ShowListingPage = ({
    bannerData,
    initialSearchValue,
    searchResults,
    showType,
}: ShowListingPageProps) => {
    return (
        <div className="">
            <Banner
                title={bannerData.Title}
                year={bannerData.Year}
                rating={bannerData.imdbRating}
                genre={bannerData.Genre}
                plot={bannerData.Plot}
                runtime={bannerData.Runtime}
                poster={bannerData.Poster}
                imdbID={bannerData.imdbID}
                bannerShowType={showType}
            />
            <BodyContent
                initialSearchValue={initialSearchValue}
                initialData={searchResults.Search || []}
                sectionType={showType}
            />
        </div>
    );
};

export default ShowListingPage;
