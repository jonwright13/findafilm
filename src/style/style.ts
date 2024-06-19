import styled from "styled-components";
import { ChangeEvent } from "react";
import { Type } from "../interface/general.types";

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 2px 2px black;
  font-size: calc(6px + 1vmin);
  width: 160px;
  padding: 15px 8px;

  &&&:hover {
    filter: brightness(80%);
  }

  @media only screen and (max-device-width: 480px) {
    font-size: calc(8px + 2vmin);
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 20px;

  @media only screen and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media only screen and (max-device-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }

  @media only screen and (min-device-width: 1024px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  color: white;
  text-align: center;
  font-size: calc(8px + vmin);

  @media only screen and (max-device-width: 480px) {
    text-align: right;
  }
`;

export const Select = styled.select<{
  placeholder: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}>`
  padding: 8px 10px;
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  font-size: calc(4px + 2vmin);

  @media only screen and (max-device-width: 1024px) {
    width: 150px;
  }
`;

export const Option = styled.option<{
  value: Type | number | string;
}>`
  text-transform: capitalize;
  transform: 1s;
`;
