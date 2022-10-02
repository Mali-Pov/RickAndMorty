import { useFetch } from "hooks";
import { useState, useCallback } from "react";
import { filterEpisodes } from "utils/Helpers";

const COLORS = ["#01b4c6", "#97ce4c", "#fff874", "#bee5fd", "#f675da"];

const useFetchEpisodes = () => {
  const { sendRequest } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const getEpisodes = useCallback(
    async (characters) => {
      setIsLoading(true);
      setError(null);
      try {
        const responses = await Promise.all(
          characters.map((item) => {
            return sendRequest({
              params: new URLSearchParams({ name: item }),
              path: "character/?",
            });
          })
        );
        responses.forEach((characters, index) => {
          const episodes = new Set(
            characters.results
              .map((character) => {
                return filterEpisodes(character);
              })
              .flat()
          );
          setCharacters((prevState) => [
            ...prevState,
            [characters.results[0].name, episodes.size, COLORS[index]],
          ]);
        });
      } catch (error) {
        setError(error.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    },
    [sendRequest]
  );

  return { isLoading, getEpisodes, error, characters };
};
export default useFetchEpisodes;
