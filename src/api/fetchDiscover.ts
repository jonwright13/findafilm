import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./base";
import { endpoints } from "./endpoints";
import { Token, Preferences, TitleList, Title } from "../types/types";
import { SelectionProps } from "../types/props";

import { getRandNum, getRandIndex } from "../utils/getRand";

let fetchCounter = 0;
let pageMax = 500;

const fetchDiscover = async (
  token: Token | null,
  selection: SelectionProps,
  prefs: Preferences
) => {
  const handleFetch = async (): Promise<TitleList> => {
    const params = {
      page: getRandNum(1, pageMax).toString(),
      with_genres: selection.genre === "all" ? "" : [selection.genre],
      with_original_language:
        selection.language === "all" ? "" : selection.language,
    };

    const query: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}${endpoints[selection.type]}`,
      params: params,
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
        console.log("Error", err);
        return [];
      });
  };

  const getTitle = (res: TitleList, allIds: number[]): Title => {
    const title: Title = res ? res.results[getRandIndex(res)] : null;

    if (title !== null) {
      if (title.id !== undefined && allIds.includes(title.id)) {
        return getTitle(res, allIds);
      }

      return title;
    } else {
      return getTitle(res, allIds);
    }
  };

  const allIds = Object.values(prefs).flat();

  let res = await handleFetch();

  if (res.results.length === 0) {
    if (fetchCounter < 30) {
      // console.log("New Discover Call", fetchCounter);
      fetchCounter += 1;
      pageMax = res.total_pages;
      setTimeout(() => {
        fetchDiscover(token, selection, prefs);
      }, 500);
    } else {
      throw new Error("No suggestions found. Please try again...");
    }
  } else {
    const title = getTitle(res, allIds);

    return title;
  }
};

export default fetchDiscover;
