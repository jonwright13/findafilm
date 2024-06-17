import { useState } from "react";
import HorizonalMovieList from "../HorizonalMovieList/index";
import { Container, PopoverContainer, PopoverContent } from "./style";
import { Title, Name } from "../../types/types";
import { useApp } from "../../hooks/useAppContext";
import { usePrefs } from "../../hooks/usePrefs";
import MovieCard from "../MovieCard";

const Preferences = () => {
  const { selection } = useApp();
  const { storedValue, handleAddRating } = usePrefs();
  const [title, setTitle] = useState<Title>(null);

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
                selection={selection}
                handleGet={false}
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
