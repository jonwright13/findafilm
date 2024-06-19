export type FetchResponse = TitleList | GenreList | LanguageList | Title;
export type Title = Movie | Tv;
export type TitleList = MovieList | TvList;
export type Params = DiscoverParams | null;
export type Quality = "low" | "medium" | "high" | "original";

export interface FetchResult<T> {
  data: T | null;
  error: Error | null;
}

export interface Endpoints {
  [key: string]: string;
}

export interface Language {
  english_name: string;
  name: string;
  iso_639_1: string;
}

export type LanguageList = Language[];

export interface Genre {
  id: number;
  name: string;
}

export interface GenreList {
  genres: Genre[];
}

export interface Movie {
  poster_path: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface Tv {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  first_air_date?: string;
  name?: string;
  vote_average?: number;
  vote_countr?: number;
}

export interface MovieList {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface TvList {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}

export type DiscoverSortBy =
  | null
  | "original_title.asc"
  | "original_title.desc"
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "title.asc"
  | "title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export interface DiscoverParams {
  page: string;
  with_genres?: string | string[];
  with_original_language?: string;
  sort_by: DiscoverSortBy;
  year?: null | number;
}

export interface Qualities {
  low: string;
  medium: string;
  high: string;
  original: string;
}
