import { searchShows } from "@/lib/api/omdb";
import { SectionArrayType } from "@/types";
import { useState } from "react";

export const useHandleSearch = (
    initialData: SectionArrayType,
    initialSearchValue: string,
    searchType: "movie" | "series" = "movie"
) => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [contentData, setContentData] = useState(initialData);

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const handleSubmit = (value: string) => {
        fetchData(value);
    };

    const fetchData = async (submitValue: string) => {
        try {
            setLoading(true);
            setError("");

            const data = await searchShows(submitValue, searchType);

            setContentData(data.Search || []);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    return {
        searchValue,
        contentData,
        error,
        loading,
        handleSearch,
        handleSubmit,
    };
};

export default useHandleSearch;
