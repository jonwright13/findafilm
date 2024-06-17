import { Endpoints } from "../types/types";

export const BASE_URL: string = "https://api.themoviedb.org/3";

export const endpoints: Endpoints = {
  DISCOVER_MOVIE: "/discover/movie",
  DISCOVER_TV: "/discover/tv",
  MOVIE_GENRES: "/genre/movie/list",
  TV_GENRES: "/genre/tv/list",
  MOVIE_CERTIFICATIONS: "/certification/movie/list",
  TV_CERTIFICATIONS: "/certification/tv/list",
  LANGUAGES: "/configuration/languages",
};
