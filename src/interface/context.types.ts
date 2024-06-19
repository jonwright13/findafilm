import { ReactNode } from "react";
import { Type } from "./general.types";
import { DropdownsProps } from "./general.types";

export interface AppContextProps {
  dropdowns: DropdownsProps;
  selection: SelectionProps;
  setSelection: React.Dispatch<React.SetStateAction<SelectionProps>>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface SelectionProps {
  type: Type;
  genre: string;
  language: string;
}
