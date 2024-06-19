import { useState, useEffect } from "react";
import fetchInitialData from "../api/initial";
import { DropdownsProps as InitialDropdowns } from "../interface/general.types";

const useInitialFetch = () => {
  const [dropdowns, setDropdowns] = useState<InitialDropdowns>({
    type: ["movie", "tv"],
    genresAll: [],
    genresMovie: [],
    genresTv: [],
    languages: [],
  });

  const handleSetDropdown = async () => {
    const data: InitialDropdowns = await fetchInitialData();
    setDropdowns((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    handleSetDropdown();
    // eslint-disable-next-line
  }, []);

  return { dropdowns, setDropdowns };
};

export default useInitialFetch;
