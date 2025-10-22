import ShowDetailPage from "@/components/ShowDetailPage";
import { getShowById } from "@/lib/api/omdb";
import { PageProps } from "@/types";

const SeriesDetailPage = async ({ searchParams }: PageProps) => {
    try {
        const resolvedSearchParams = await searchParams;
        const showID = resolvedSearchParams.showID as string;

        if (!showID) {
            throw new Error("Series ID is required");
        }

        const data = await getShowById(showID);

        return <ShowDetailPage data={data} />;
    } catch (error) {
        return (
            <div className="flex items-center justify-center h-screen px-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Error Loading Series</h1>
                    <p className="text-red-400">Failed to load series details. Please try again later.</p>
                </div>
            </div>
        );
    }
};

export default SeriesDetailPage;
