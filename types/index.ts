export interface MoviePropsType {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: RatingsArray[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    Response?: string;
    Error?: string;
}

export interface RatingsArray {
    Source: string;
    Value: string;
}

export interface SectionPropsType {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type SectionArrayType = SectionPropsType[];

export interface BannerPropsType {
    Title: string;
    Year: string;
    imdbRating: string;
    Genre: string;
    Plot: string;
    Runtime: string;
    Poster: string;
    imdbID: string;
}

export interface LinkCardProps {
    sectionType: string;
    title: string;
    imdbID: string;
    poster: string;
    year: string;
}

export interface SectionProps {
    label: string;
    itemsList: SectionPropsType[];
    size: 'small' | 'large';
    loading: boolean;
    sectionType: string;
}

export interface DetailBoxProps {
    title: string;
    genre: string;
    year: string;
    rated: string;
    runtime: string;
    plot: string;
    language: string;
    ratings: RatingsArray[];
    imdbRating: string;
}

export interface QuickInfoProps {
    label: string;
    info: string;
}

export interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
