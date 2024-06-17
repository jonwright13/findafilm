import fetchData from "./fetchData";
import { Token, Genre } from "../types/types";
import {
  DropdownsProps,
  GenrePropsList,
  LanguagePropsList,
} from "../types/props";
import { sortArray } from "../utils/sortArray";

// Combines both genre lists, sorts, and filters for duplicates
const sortGenres = (
  genresMovie: GenrePropsList,
  genresTv: GenrePropsList
): Genre[] => {
  const genres = sortArray(
    [...genresMovie?.genres, ...genresTv?.genres],
    "name"
  );

  const seenIds = new Set();
  const genresAll = genres.filter((item) => {
    if (seenIds.has(item.id)) {
      return false;
    } else {
      seenIds.add(item.id);
      return true;
    }
  });

  return genresAll;
};

// Handles the initial fetch of genres and languages for the dropdowns on the suggester page
const fetchInitialData = async (
  token: Token | null
): Promise<DropdownsProps> => {
  const genresMovie = (await fetchData(
    token,
    "MOVIE_GENRES"
  )) as GenrePropsList;
  const genresTv = (await fetchData(token, "TV_GENRES")) as GenrePropsList;
  const languages = (await fetchData(token, "LANGUAGES")) as LanguagePropsList;

  const genres = sortGenres(genresMovie, genresTv);

  return {
    genresAll: genres,
    genresMovie: genresMovie?.genres,
    genresTv: genresTv?.genres,
    languages: sortArray(languages, "english_name"),
  };
};

export default fetchInitialData;
