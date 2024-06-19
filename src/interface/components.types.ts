import { Title } from "./api.types";
import { Preferences } from "./general.types";

export interface MovieCardProps {
  title: Title | null;
  handleGet: any;
  addRating: (name: keyof Preferences, item: Title) => void;
  storedValue: any;
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

export interface StarRatingProps {
  value?: number;
  maxValue?: number;
}
