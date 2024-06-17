import { useEffect, useState } from "react";
import HorizontalScroll from "../HorizontalScroll";
import MoviePoster from "../MoviePoster";
import { Column, Title, Content, List, LoadingContainer } from "./style";
import { HorizontalMovieListProps } from "../../types/props";
import fetchDetails from "../../api/fetchById";
import { useApp } from "../../hooks/useAppContext";
import { SpinningCircles } from "react-loading-icons";

const HorizonalMovieList = <T extends number>({
  header,
  movies,
  setTitle,
  onClick,
}: HorizontalMovieListProps<T>) => {
  const { token } = useApp();
  const [page, setPage] = useState<number>(1);
  const [titles, setTitles] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getTitles = async () => {
    setLoading(true);
    const start = Math.max((page - 4) * 2, 0);
    const end = Math.min(page * 6, movies.length);
    const movieList: T[] = [...movies].reverse();

    const result = await Promise.all(
      movieList.map(async (item, index) => {
        const id = item;
        let data: any;
        if (item !== null) {
          if (index >= start && index <= end) {
            data = await fetchDetails(token, id);
          } else {
            data = { id: item, poster_path: "" };
          }
          return (
            <MoviePoster
              key={index}
              movie={data}
              header={header}
              setTitle={setTitle}
              onClick={onClick}
            />
          );
        }
      })
    );
    setLoading(() => {
      setTitles(result);
      return false;
    });
  };

  useEffect(() => {
    getTitles();
    // setLoading(true);
    // eslint-disable-next-line
  }, [page, movies]);

  return (
    <Column>
      <Content>
        <Title>{header}</Title>
      </Content>

      <HorizontalScroll setPage={setPage}>
        {loading ? (
          <LoadingContainer>
            <SpinningCircles stroke="#248b20" strokeOpacity={1} />
          </LoadingContainer>
        ) : (
          <List>{titles}</List>
        )}
      </HorizontalScroll>
    </Column>
  );
};

export default HorizonalMovieList;
