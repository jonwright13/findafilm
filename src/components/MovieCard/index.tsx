import { FC } from "react";
import StarRating from "../StarRating";
import { usePrefs } from "../../hooks/usePrefs";
import { Icon } from "../Icons";
import { Movie, Tv, Name } from "../../types/types";
import { MovieCardProps } from "../../types/props";
import {
  Card,
  Container,
  Title,
  Released,
  Description,
  ButtonsContainer,
  Poster,
} from "./style";
import { getBackdropUrl } from "../../utils/getBackdropUrl";

const MovieCard: FC<MovieCardProps> = ({
  title,
  selection,
  handleGet = false,
}) => {
  const { storedValue, handleAddRating } = usePrefs();

  if (title !== null) {
    const handleRating = (name: Name) => {
      handleAddRating(name, title);
      if (handleGet) handleGet();
    };

    const prefs = {
      watched: title ? storedValue.watched.includes(title.id) : false,
      watchlist: title ? storedValue.watchlist.includes(title.id) : false,
      ignore: title ? storedValue.ignore.includes(title.id) : false,
    };

    const heading: string | undefined =
      selection.type === "movie" ? (title as Movie).title : (title as Tv).name;

    const released: string | undefined =
      selection.type === "movie"
        ? (title as Movie).release_date
        : (title as Tv).first_air_date;

    const posterUrl =
      title !== undefined && title !== null
        ? getBackdropUrl(title?.poster_path)
        : "";

    return (
      <Card>
        <Poster src={`${posterUrl}`} alt="" />
        <Container>
          <Title>{heading}</Title>
          <StarRating value={title?.vote_average} />
          <Released>Released: {released}</Released>
          <Description>{title?.overview}</Description>
          <ButtonsContainer>
            <Icon
              type="watchlist"
              title="Add to Watchlist"
              checked={prefs.watchlist}
              onClick={handleRating}
            />
            <Icon
              type="watched"
              title="Watched"
              checked={prefs.watched}
              onClick={handleRating}
            />
            <Icon
              type="ignore"
              title="Ignore"
              checked={prefs.ignore}
              onClick={handleRating}
            />
          </ButtonsContainer>
        </Container>
      </Card>
    );
  } else {
    return (
      <Card>
        <Title>No Film Found</Title>
      </Card>
    );
  }
};

export default MovieCard;
