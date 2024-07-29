import { SectionArrayType } from "@/constants/section-type";
import { useState } from "react";

const useHandleSearch = (
    initialData: SectionArrayType,
    initialSearchValue: string
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
            const res = await fetch(
                `https://omdbapi.com/?apikey=d5adca4b&s=${submitValue}&page=1&type=movie`
            );
            const data: {
                Search: SectionArrayType;
                Response: string;
                Error: string;
            } = await res.json();
            if (data.Response === "False") {
                setError(data.Error);
                setLoading(false);
                return;
            }
            setError("")
            setContentData(data.Search);
            setLoading(false);
        } catch (e) {
            setError("Error");
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
