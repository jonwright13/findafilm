import { Quality, Qualities } from "../interface/api.types";

const baseUrl: string = "https://image.tmdb.org/t/p/";

const getUrl = (
  path: string,
  quality: Quality,
  qualities: Qualities
): string => {
  if (!path) return "";
  return `${baseUrl}${qualities[quality]}${path}`;
};

export const getBackdropUrl = (
  path: string,
  quality: Quality = "medium"
): string => {
  return getUrl(path, quality, {
    low: "w300",
    medium: "w780",
    high: "w1280",
    original: "original",
  });
};
