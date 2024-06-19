import { Title, Movie, Tv } from "../../../interface/api.types";
import { getBackdropUrl } from "../../../api/getBackdropUrl";
import { Pref } from "../../../interface/general.types";

interface Prefs {
  [key: string]: boolean;
}

const idInArray = (arr: Pref[], id: number): boolean => {
  for (const item of arr) {
    if (item.id === id) return true;
  }
  return false;
};

export const parsePrefs = (title: Title, storedValue: any): Prefs => {
  return {
    watched: title ? idInArray(storedValue.watched, title.id) : false,
    watchlist: title ? idInArray(storedValue.watchlist, title.id) : false,
    ignore: title ? idInArray(storedValue.ignore, title.id) : false,
  };
};

export const parseHeading = (title: Title): string => {
  const str =
    (title as Movie).title !== null
      ? (title as Movie).title
      : (title as Tv).name;
  return str !== undefined ? str : "";
};

export const parseReleased = (title: Title): string => {
  const str =
    (title as Movie).release_date !== null
      ? (title as Movie).release_date
      : (title as Tv).first_air_date;

  return str !== undefined ? str : "";
};

export const parsePosterUrl = (title: Title): string => {
  return title !== undefined && title !== null
    ? getBackdropUrl(title?.poster_path)
    : "";
};
