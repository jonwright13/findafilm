import { Genre, Language } from "./api.types";

export type Type = "movie" | "tv" | "all";
export type Token = string | undefined;
export type API_KEY = string | undefined;
export type Name = keyof Preferences;
export type Mode = "suggester" | "preferences";

export interface Pref {
  id: number;
  type: Type;
}

export interface Preferences {
  watchlist: Pref[];
  watched: Pref[];
  ignore: Pref[];
}

export interface DropdownsProps {
  type?: Type[];
  genresAll: Genre[];
  genresMovie: Genre[];
  genresTv: Genre[];
  languages: Language[];
}
