import { Endpoints, Params } from "../interface/api.types";
import { AxiosRequestConfig } from "axios";
import { endpoints } from "./endpoints";

const BASE_URL: string = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const queryBuilder = (
  option: keyof Endpoints,
  params: Params = null,
  id: string | null = null
): AxiosRequestConfig => {
  const url =
    id === null
      ? `${BASE_URL}${endpoints[option]}`
      : `${BASE_URL}${endpoints[option]}/${id}`;

  return {
    method: "GET",
    url: url,
    params: params,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
