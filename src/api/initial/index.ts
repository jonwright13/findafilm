import { GenreList, LanguageList } from "../../interface/api.types";
import { DropdownsProps } from "../../interface/general.types";
import { fetchApi } from "../fetchApi";
import { sortGenres, filterLanguages } from "./_utils";

// Handles the initial fetch of genres and languages for the dropdowns on the suggester page
const fetchInitialData = async (): Promise<DropdownsProps> => {
  const genresMovie = await fetchApi<GenreList>("MOVIE_GENRES");
  const genresTv = await fetchApi<GenreList>("TV_GENRES");
  const languages = await fetchApi<LanguageList>("LANGUAGES");

  const genres = sortGenres(genresMovie.data, genresTv.data);

  // Filter the languages list to exclude those from the popular languages list
  const FilteredLangList = filterLanguages(languages.data);

  return {
    genresAll: genres,
    genresMovie: genresMovie.data !== null ? genresMovie.data.genres : [],
    genresTv: genresTv.data !== null ? genresTv.data.genres : [],
    languages: FilteredLangList,
  };
};

export default fetchInitialData;
