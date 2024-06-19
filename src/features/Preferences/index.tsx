import { useState } from "react";
import HorizonalMovieList from "./components/HorizonalMovieList/index";
import { Container, PopoverContainer, PopoverContent } from "./style";
import { Name } from "../../interface/general.types";
import { Title } from "../../interface/api.types";
import { usePrefs } from "../../hooks/usePrefs";
import MovieCard from "../../components/MovieCard";

const Preferences = () => {
  const { storedValue, handleAddRating } = usePrefs();
  const [title, setTitle] = useState<Title | null>(null);

  const keys: string[] = ["watchlist", "watched", "ignore"];

  const handleClickAway = () => {
    setTitle(null);
  };

  const isVisible = title !== null;

  if (storedValue) {
    return (
      <Container>
        {keys.map((key: string) => (
          <HorizonalMovieList
            key={key}
            header={key}
            movies={storedValue[key as Name]}
            setTitle={setTitle}
            onClick={handleAddRating}
          />
        ))}
        {
          <PopoverContainer $isVisible={isVisible} onClick={handleClickAway}>
            <PopoverContent $isVisible={isVisible}>
              <MovieCard
                title={title}
                handleGet={false}
                storedValue={storedValue}
                addRating={handleAddRating}
              />
            </PopoverContent>
          </PopoverContainer>
        }
      </Container>
    );
  } else {
    return <Container>Add some movies to your lists first.</Container>;
  }
};

export default Preferences;
