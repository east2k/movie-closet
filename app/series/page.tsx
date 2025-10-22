import ShowListingPage from "@/components/ShowListingPage";
import { getShowByTitle, searchShows } from "@/lib/api/omdb";

const SeriesPage = async () => {
    try {
        const initialSearchValue = "The Boys";

        const [initialBannerData, initialMovieListData] = await Promise.all([
            getShowByTitle('Breaking Bad'),
            searchShows(initialSearchValue, 'series'),
        ]);

        return (
            <ShowListingPage
                bannerData={initialBannerData}
                initialSearchValue={initialSearchValue}
                searchResults={initialMovieListData}
                showType="series"
            />
        );
    } catch (error) {
        return (
            <div className="flex items-center justify-center h-screen px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error Loading Series</h1>
                    <p className="text-red-400">Failed to load series data. Please try again later.</p>
                </div>
            </div>
        );
    }
};

export default SeriesPage;
