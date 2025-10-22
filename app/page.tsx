import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Sections from "@/components/Sections";
import { getShowByTitle, searchShows } from "@/lib/api/omdb";

const Home = async () => {
    try {
        const [initialBannerData, movieListData, seriesListData] = await Promise.all([
            getShowByTitle('lord of the rings'),
            searchShows('Avengers', 'movie'),
            searchShows('Batman', 'series'),
        ]);

        return (
            <main className="min-h-screen">
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
                    bannerShowType="movies"
                />
                <div className="space-y-8 pb-16">
                    <Sections
                        label="Popular Movies"
                        sectionType="movies"
                        itemsList={movieListData.Search || []}
                        size="small"
                        loading={false}
                    />
                    <Sections
                        label="Trending Series"
                        sectionType="series"
                        itemsList={seriesListData.Search || []}
                        size="small"
                        loading={false}
                    />
                </div>
            </main>
        );
    } catch (error) {
        return (
            <main className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center space-y-4 max-w-md">
                        <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-text-primary">Error Loading Content</h1>
                        <p className="text-text-secondary">Failed to load movie data. Please try again later.</p>
                        {error instanceof Error && (
                            <p className="text-sm text-text-tertiary">{error.message}</p>
                        )}
                    </div>
                </div>
            </main>
        );
    }
};

export default Home;
