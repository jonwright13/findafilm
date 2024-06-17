import { ReactNode, ChangeEvent } from "react";
import { Title, Name, Token, Preferences, Type, Genre } from "./types";

export interface AppContextProps {
  token: Token | null;
  key: Token | null;
  storedValue: Preferences;
  handleAddRating: (name: Name, item: Title) => void;
  dropdowns: DropdownsProps;
  selection: SelectionProps;
  setSelection: React.Dispatch<React.SetStateAction<SelectionProps>>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface StarRatingProps {
  value?: number;
  maxValue?: number;
}

export interface MoviePosterProps {
  movie: Title;
  header: string;
  setTitle: React.Dispatch<React.SetStateAction<Title>>;
  onClick: (name: Name, item: Title) => void;
}

export interface GenrePropsList {
  genres: Genre[];
}

export interface LanguageProps {
  english_name: string;
  name: string;
  iso_639_1: string;
}

export type LanguagePropsList = LanguageProps[];

export interface SelectionProps {
  type: Type;
  genre: string;
  language: string;
}

export interface DropdownsProps {
  type?: Type[];
  genresAll: Genre[];
  genresMovie: Genre[];
  genresTv: Genre[];
  languages: LanguageProps[];
}

export interface MovieCardProps {
  title: Title;
  selection: SelectionProps;
  handleGet: any;
}

export interface IconSwitchProps {
  type: "watchlist" | "watched" | "ignore";
}

export interface IconProps {
  type: "watchlist" | "watched" | "ignore";
  title: string;
  checked: boolean;
  onClick: (type: "watchlist" | "watched" | "ignore") => void;
  card?: boolean;
}

export interface HorizontalScrollProps {
  children: ReactNode | ReactNode[];
  setPage: any;
}

export interface HorizontalMovieListProps<T extends number> {
  header: string;
  movies: T[];
  setTitle: React.Dispatch<React.SetStateAction<Title>>;
  onClick: (name: Name, item: Title) => void;
}

export interface GenreSwitchSelectProps {
  selection: SelectionProps;
  dropdowns: DropdownsProps;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface DropdownProps {
  label: string;
  placeholder: string;
  name: string;
  options: any[];
  defaultOptionText: string;
  defaultOptionValue: Type | number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
