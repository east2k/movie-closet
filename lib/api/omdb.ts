import { MoviePropsType, SectionArrayType } from '@/types';

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const BASE_URL = 'https://omdbapi.com';

if (!API_KEY) {
    throw new Error('OMDB API key is not configured');
}

interface FetchOptions {
    revalidate?: number;
}

const fetchFromOMDB = async <T>(queryParams: Record<string, string>, options?: FetchOptions): Promise<T> => {
    const params = new URLSearchParams({
        apikey: API_KEY,
        ...queryParams,
    });

    const url = `${BASE_URL}?${params.toString()}`;

    try {
        const response = await fetch(url, {
            next: { revalidate: options?.revalidate ?? 3600 },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error || 'API request failed');
        }

        return data as T;
    } catch (error) {
        console.error('OMDB API Error:', error);
        throw error;
    }
};

export const getShowById = async (imdbID: string): Promise<MoviePropsType> => {
    return fetchFromOMDB<MoviePropsType>({ i: imdbID });
};

export const getShowByTitle = async (title: string): Promise<MoviePropsType> => {
    return fetchFromOMDB<MoviePropsType>({ t: title });
};

export const searchShows = async (
    query: string,
    type?: 'movie' | 'series',
    page: number = 1
): Promise<{ Search: SectionArrayType; totalResults: string }> => {
    const params: Record<string, string> = {
        s: query,
        page: page.toString(),
    };

    if (type) {
        params.type = type;
    }

    return fetchFromOMDB<{ Search: SectionArrayType; totalResults: string }>(params);
};
