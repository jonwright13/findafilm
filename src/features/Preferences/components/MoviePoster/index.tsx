import { FC, useState } from "react";
import { Icon } from "../../../../components/Icons";
import { Name } from "../../../../interface/general.types";
import { MoviePosterProps } from "../../preferences.types";
import { Poster, Img, Controls } from "./style";

const baseUrl = "https://image.tmdb.org/t/p/";

const MoviePoster: FC<MoviePosterProps> = ({
  movie,
  header,
  setTitle,
  onClick,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = (name: Name) => {
    onClick(name, movie);
  };

  const handleSelect = () => {
    setTitle(movie);
  };

  const posterTitle =
    movie !== null && movie !== undefined
      ? "title" in movie
        ? movie.title
        : undefined
      : undefined;

  return (
    <Poster
      title={posterTitle}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Img
        src={`${baseUrl}w780${movie?.poster_path}`}
        alt=""
        onClick={handleSelect}
      />
      {show ? (
        <Controls className="poster-controls">
          <Icon
            type="watchlist"
            title="Add to Watchlist"
            checked={header === "watchlist"}
            onClick={handleClick}
            card={false}
          />
          <Icon
            type="watched"
            title="Watched"
            checked={header === "watched"}
            onClick={handleClick}
            card={false}
          />
          <Icon
            type="ignore"
            title="Ignore"
            checked={header === "ignore"}
            onClick={handleClick}
            card={false}
          />
        </Controls>
      ) : null}
    </Poster>
  );
};

export default MoviePoster;
