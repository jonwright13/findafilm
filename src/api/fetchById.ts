import axios from "axios";
import { BASE_URL } from "./base";
import { Token, Title } from "../types/types";

// Rate limiting is around 50 requests per second: https://developer.themoviedb.org/docs/rate-limiting

const fetchDetails = async (
  token: Token | null,
  movieId: number
): Promise<Title> => {
  const query = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .request(query)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("Error withh movieId", movieId, err);
      return [];
    });
};

export default fetchDetails;
