import { useState, ChangeEvent, FC } from "react";
import GenreSwitchSelect from "./components/GenreSelect";
import MovieCard from "../../components/MovieCard/index";
import fetchDiscover from "../../api/discover";
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
import { popularLanguages } from "../../utils/popularLanguagesList";
import { Mode, Type } from "../../interface/general.types";
import { Language, Title } from "../../interface/api.types";
import { usePrefs } from "../../hooks/usePrefs";

const Suggester: FC<{ mode: Mode }> = ({ mode }) => {
  const { dropdowns, selection, setSelection } = useApp();
  const { storedValue, handleAddRating } = usePrefs();

  const [title, setTitle] = useState<Title | null>(null);
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

    await fetchDiscover(selection, storedValue)
      .then((data) => {
        setTitle(() => {
          if (data === undefined) return null;
          return data;
        });
        setLoading(false);
      })

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
            <Option value="all">all</Option>
            {dropdowns.type?.map((item: Type, index: number) => (
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
            <Option value="all">all</Option>
            {popularLanguages.map((item) => (
              <Option key={item.iso_639_1} value={item.iso_639_1}>
                {item.english_name}
              </Option>
            ))}
            <Option key="divider" value="_">
              -----------------------
            </Option>
            {dropdowns.languages.map((item: Language) => (
              <Option key={item.iso_639_1} value={item.iso_639_1}>
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
        <MovieCard
          title={title}
          handleGet={handleGet}
          addRating={handleAddRating}
          storedValue={storedValue}
        />
      ) : (
        loadingContainer
      )}
      {error !== "" ? <Errors>{error}</Errors> : null}
    </SuggesterContainer>
  );
};

export default Suggester;
