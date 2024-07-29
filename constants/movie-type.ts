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
    Type: string;
}

interface RatingsArray {
    Source: string;
    Value: string;
}
