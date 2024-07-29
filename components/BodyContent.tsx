"use client";

import { useState } from "react";
import Sections from "./Sections";
import { SectionArrayType, SectionPropsType } from "@/constants/section-type";
import SearchInput from "./SearchInput";
import useHandleSearch from "@/hooks/useHandleSearch";

interface BodyContentProps {
    initialData: Array<SectionPropsType>;
    initialSearchValue: string;
    sectionType: string;
}

const BodyContent: React.FC<BodyContentProps> = ({
    initialData,
    initialSearchValue,
    sectionType,
}) => {
    const {
        error,
        loading,
        searchValue,
        contentData,
        handleSearch,
        handleSubmit,
    } = useHandleSearch(initialData, initialSearchValue);

    return (
        <div className="flex flex-col items-center max-w-screen-xl mx-auto">
            <div className="px-20 mt-10 ml-auto">
                <SearchInput
                    size="big"
                    handleSearch={handleSearch}
                    handleSubmit={handleSubmit}
                    searchValue={searchValue}
                />
            </div>
            {error ? (
                <h1 className="w-full text-center my-2 text-2xl text-red-100 border-y border-y-red-100 border-opacity-20 mb-56">
                    {error}
                </h1>
            ) : (
                <Sections
                    loading={loading}
                    label="Movies"
                    sectionType={sectionType}
                    itemsList={contentData}
                    size="big"
                />
            )}
        </div>
    );
};

export default BodyContent;
