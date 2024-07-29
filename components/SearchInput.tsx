"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

interface SearchInputProps {
    size: string;
    searchValue: string;
    handleSearch: (inputValue: string) => void;
    handleSubmit: (inputValue: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    size,
    searchValue,
    handleSearch,
    handleSubmit,
}) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;

        if (e.key === "Enter" && !!value.trim()) {
            handleSubmit(value);
        }
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <div className="relative">
            <input
                placeholder="Search..."
                type="text"
                value={searchValue}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                className={`outline-none px-3 py-1 pr-8 text-black w-96 ${
                    size === "big" ? "w-96" : "w-auto"
                }`}
            />
            <MagnifyingGlassIcon className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 w-5 h-5 text-black" />
        </div>
    );
};

export default SearchInput;
