import { Preferences } from "../../interface/general.types";
import { FetchResult, TitleList, Title } from "../../interface/api.types";
import { SelectionProps } from "../../interface/context.types";
import { fetchApi } from "../fetchApi";
import { parseOption, parseParams, findTitle } from "./_utils";

let fetchCounter = 0;
let pageMax = 500;
let resultsMax = 25;

const getTitle = (res: TitleList | null, allIds: number[]): Title => {
  const title = findTitle(res, resultsMax);

  if (title !== null && title !== undefined) {
    if (title.id !== undefined && allIds.includes(title.id)) {
      resultsMax = res ? res.total_results : 0;
      return getTitle(res, allIds);
    }

    return title;
  } else {
    return getTitle(res, allIds);
  }
};

const handleDiscover = async (
  selection: SelectionProps,
  pageMax: number
): Promise<FetchResult<TitleList>> => {
  const params = parseParams(pageMax, selection);
  const option = parseOption(selection.type);

  return await fetchApi<TitleList>(option, params);
};

const fetchDiscover = async (selection: SelectionProps, prefs: Preferences) => {
  const allIds = Object.values(prefs).flat();

  let res = await handleDiscover(selection, pageMax);

  if (res.data?.results.length === 0) {
    if (fetchCounter < 30) {
      fetchCounter += 1;
      pageMax = res.data.total_pages;
      setTimeout(() => {
        fetchDiscover(selection, prefs);
      }, 500);
    } else {
      throw new Error("No suggestions found. Please try again...");
    }
  } else {
    const title = getTitle(res.data, allIds);
    // console.log(pageMax, resultsMax, title);

    return title;
  }
};

export default fetchDiscover;
