import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, endpoints } from "./base";
import { Token, Endpoints } from "../types/types";
import { GenrePropsList, LanguagePropsList } from "../types/props";

const queryBuilder = (
  token: Token | null,
  option: keyof Endpoints
): AxiosRequestConfig => {
  return {
    method: "GET",
    url: `${BASE_URL}${endpoints[option]}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

const fetchData = async (
  token: Token | null,
  option: keyof Endpoints
): Promise<GenrePropsList | LanguagePropsList> => {
  const query = queryBuilder(token, option);

  return axios
    .request(query)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error", err);
      return [] as any;
    });
};

export default fetchData;
