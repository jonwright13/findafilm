import { ChangeEvent } from "react";
import { SelectionProps } from "../../interface/context.types";
import { DropdownsProps } from "../../interface/general.types";

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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
