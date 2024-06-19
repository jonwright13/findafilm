import {
  Endpoints,
  Params,
  FetchResponse,
  FetchResult,
} from "../interface/api.types";
import axios from "axios";
import { queryBuilder } from "./queryBuilder";

export const fetchApi = async <T extends FetchResponse>(
  option: keyof Endpoints,
  params: Params = null,
  id: string | null = null
): Promise<FetchResult<T>> => {
  const query = queryBuilder(option, params, id);

  return await axios
    .request(query)
    .then((res) => {
      return { data: res.data as T, error: null };
    })
    .catch((err) => {
      console.log("Error", err);
      return { data: null, error: err };
    });
};
