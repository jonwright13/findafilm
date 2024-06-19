import { Title } from "../../interface/api.types";
import { Type } from "../../interface/general.types";
import { fetchApi } from "../fetchApi";

const fetchDetails = async (id: number, type: Type): Promise<Title | null> => {
  const ID = id.toString();
  let res;
  switch (type) {
    case "movie":
      res = await fetchApi<Title>("MOVIE", null, ID);
      break;
    case "tv":
      res = await fetchApi<Title>("TV", null, ID);
      break;
    default:
      res = await fetchApi<Title>("MOVIE", null, ID);
      break;
  }

  return res.data;
};

export default fetchDetails;
