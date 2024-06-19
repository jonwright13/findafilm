import { Type } from "../../interface/general.types";
import {
  Endpoints,
  DiscoverParams,
  DiscoverSortBy,
  TitleList,
  Title,
} from "../../interface/api.types";
import { getRandNum } from "../../utils/getRand";
import { SelectionProps } from "../../interface/context.types";

const sortByOptions: DiscoverSortBy[] = [
  "popularity.desc",
  "revenue.desc",
  "title.desc",
  "vote_average.desc",
  "vote_count.desc",
];

const getRandIndex = (
  res: TitleList,
  minIndex: number = 1,
  maxIndex: number = 25
): number => {
  const rand: number = getRandNum(minIndex, maxIndex);
  const fixer: number = Math.min(rand, res.results.length - 1);
  return fixer;
};

export const parseOption = (type: Type): keyof Endpoints => {
  switch (type) {
    case "movie":
      return "DISCOVER_MOVIE";
    case "tv":
      return "DISCOVER_TV";
    default:
      const rand = Math.random() >= 0.5;
      if (rand) {
        return "DISCOVER_MOVIE";
      } else {
        return "DISCOVER_TV";
      }
  }
};

export const findTitle = (
  res: TitleList | null,
  resultsMax: number
): Title | null => {
  return res ? res.results[getRandIndex(res, 1, resultsMax)] : null;
};

const selectSorting = (): DiscoverSortBy => {
  const index = Math.floor(Math.random() * sortByOptions.length);
  return sortByOptions[index];
};

const getRandPageNum = (pageMax: number): string => {
  return getRandNum(1, pageMax).toString();
};

const getGenre = (genre: string): string | string[] => {
  return genre === "all" ? "" : [genre];
};

const getLanguage = (language: string): string => {
  return language === "all" ? "" : language;
};

export const parseParams = (
  pageMax: number,
  selection: SelectionProps
): DiscoverParams => {
  const pageNum = getRandPageNum(pageMax);
  const genres = getGenre(selection.genre);
  const languages = getLanguage(selection.language);

  return {
    page: pageNum,
    with_genres: genres,
    with_original_language: languages,
    sort_by: selectSorting(),
  };
};
