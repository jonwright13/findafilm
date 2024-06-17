import { useState, ChangeEvent, FC } from "react";
import GenreSwitchSelect from "../GenreSelect";
import MovieCard from "../MovieCard/index";
import fetchDiscover from "../../api/fetchDiscover";
import { useApp } from "../../hooks/useAppContext";
import {
  SuggesterContainer,
  GetSuggestionsButton,
  ButtonContainer,
  Errors,
  SkeletonContainer,
} from "./style";
import {
  DropdownContainer,
  SelectContainer,
  Select,
  Label,
  Option,
} from "../../style/style";
import { SpinningCircles } from "react-loading-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Title, Mode } from "../../types/types";

const Suggester: FC<{ mode: Mode }> = ({ mode }) => {
  const { token, storedValue, dropdowns, selection, setSelection } = useApp();

  const [title, setTitle] = useState<Title>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSelection((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGet = async () => {
    setTitle(() => {
      setLoading(true);
      setError("");
      return null;
    });

    await fetchDiscover(token, selection, storedValue)
      .then((data) =>
        setTitle(() => {
          setLoading(false);
          return data;
        })
      )
      .catch((error) => setError(error));
  };

  const loadingContainer = loading ? (
    <SkeletonContainer>
      <Skeleton baseColor="#282c34" highlightColor="#393e49" height={"30vh"} />
    </SkeletonContainer>
  ) : (
    <SkeletonContainer></SkeletonContainer>
  );

  return (
    <SuggesterContainer>
      <DropdownContainer>
        <SelectContainer>
          <Label>Type</Label>
          <Select placeholder="all" name="type" onChange={handleChange}>
            <Option value={selection.type}>{selection.type}</Option>
            {dropdowns.type?.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </SelectContainer>
        <GenreSwitchSelect
          selection={selection}
          dropdowns={dropdowns}
          handleChange={handleChange}
        />
        <SelectContainer>
          <Label>Langauge</Label>
          <Select
            placeholder="Select Language"
            name="language"
            onChange={handleChange}
          >
            <Option value={selection.language}>{selection.language}</Option>
            {dropdowns.languages.map((item, index) => (
              <Option key={index} value={item.iso_639_1}>
                {item.english_name}
              </Option>
            ))}
          </Select>
        </SelectContainer>
      </DropdownContainer>
      <ButtonContainer>
        <GetSuggestionsButton onClick={handleGet}>
          Get Suggestion
        </GetSuggestionsButton>
        <SpinningCircles
          stroke="#98ff98"
          visibility={!loading ? "hidden" : "visible"}
        />
      </ButtonContainer>
      {mode === "suggester" && title ? (
        <MovieCard title={title} selection={selection} handleGet={handleGet} />
      ) : (
        loadingContainer
      )}
      {error !== "" ? <Errors>{error}</Errors> : null}
    </SuggesterContainer>
  );
};

export default Suggester;
