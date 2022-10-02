import { useState, useCallback } from "react";
import { getCharacter, getCharactersId } from "utils/Helpers";
import { useFetch } from "hooks";

const useFetchCharacter = () => {
  const { sendRequest } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(null);

  const getCharachter = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const locationEarth = await sendRequest({
        params: new URLSearchParams({ name: "Earth (C-137)" }),
        path: "location/?",
      });
      setLocation(locationEarth.results[0]);

      const characters = await sendRequest({
        params: getCharactersId(locationEarth.results[0]),
        path: "character/",
      });
      setCharacter(getCharacter(characters));
      
    } catch (error) {
      setError(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [sendRequest]);

  return { getCharachter, isLoading, location, character, error };
};
export default useFetchCharacter;
