export type Type = "movie" | "tv" | "all";
export type Quality = "low" | "medium" | "high" | "original";
export type Title = Movie | Tv | null | undefined;
export type TitleList = MovieList | TvList;
export type Token = string | undefined;
export type API_KEY = string | undefined;
export type Name = keyof Preferences;
export type Mode = "suggester" | "preferences";

export interface Size {
  width: number;
  height: number;
}

export interface Endpoints {
  [key: string]: string;
}

export interface Qualities {
  low: string;
  medium: string;
  high: string;
  original: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  poster_path: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
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
  id?: number;
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

export interface Preferences {
  watchlist: number[];
  watched: number[];
  ignore: number[];
}
