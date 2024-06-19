import {
  Genre,
  GenreList,
  Language,
  LanguageList,
} from "../../interface/api.types";
import { sortArray } from "../../utils/sortArray";
import { popularLanguages } from "../../utils/popularLanguagesList";

// Combines both genre lists, sorts, and filters for duplicates
export const sortGenres = (
  genresMovie: GenreList | null,
  genresTv: GenreList | null
): Genre[] => {
  const movies = genresMovie !== null ? genresMovie.genres : [];
  const tv = genresTv !== null ? genresTv.genres : [];

  const genres = sortArray([...movies, ...tv], "name");

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

export const filterLanguages = (languages: LanguageList | null) => {
  return languages !== null
    ? sortArray(languages, "english_name").filter(
        (lang) =>
          !popularLanguages.some((item: Language) => item.name === lang.name)
      )
    : [];
};
