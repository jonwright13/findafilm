import { FC } from "react";
import StarRating from "../StarRating";
import { Icon } from "../Icons";
import { Name } from "../../interface/general.types";
import { MovieCardProps } from "../../interface/components.types";
import {
  Card,
  Container,
  Title,
  Released,
  Description,
  ButtonsContainer,
  Poster,
} from "./style";
import {
  parsePrefs,
  parseHeading,
  parseReleased,
  parsePosterUrl,
} from "./_utils/utils";

const MovieCard: FC<MovieCardProps> = ({
  title,
  handleGet = false,
  addRating,
  storedValue,
}) => {
  if (title !== null) {
    const handleRating = (name: Name) => {
      addRating(name, title);
      if (handleGet) handleGet();
    };

    const prefs = parsePrefs(title, storedValue);
    const heading = parseHeading(title);
    const released = parseReleased(title);
    const posterUrl = parsePosterUrl(title);

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
