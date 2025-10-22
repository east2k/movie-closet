import ShowListingPage from "@/components/ShowListingPage";
import { getShowByTitle, searchShows } from "@/lib/api/omdb";

const MoviesPage = async () => {
    try {
        const initialSearchValue = "Batman";

        const [initialBannerData, initialMovieListData] = await Promise.all([
            getShowByTitle('The Godfather'),
            searchShows(initialSearchValue, 'movie'),
        ]);

        return (
            <ShowListingPage
                bannerData={initialBannerData}
                initialSearchValue={initialSearchValue}
                searchResults={initialMovieListData}
                showType="movies"
            />
        );
    } catch (error) {
        return (
            <div className="flex items-center justify-center h-screen px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error Loading Movies</h1>
                    <p className="text-red-400">Failed to load movie data. Please try again later.</p>
                </div>
            </div>
        );
    }
};

export default MoviesPage;
