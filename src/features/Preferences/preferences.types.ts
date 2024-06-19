import { ReactNode } from "react";
import { Name, Pref } from "../../interface/general.types";
import { Title } from "../../interface/api.types";

export interface MoviePosterProps {
  movie: Title;
  header: string;
  setTitle: React.Dispatch<React.SetStateAction<Title | null>>;
  onClick: (name: Name, item: Title) => void;
}

export interface HorizontalScrollProps {
  children: ReactNode | ReactNode[];
  setPage: any;
}

export interface HorizontalMovieListProps<T extends Pref> {
  header: string;
  movies: T[];
  setTitle: React.Dispatch<React.SetStateAction<Title | null>>;
  onClick: (name: Name, item: Title) => void;
}

export interface Size {
  width: number;
  height: number;
}
