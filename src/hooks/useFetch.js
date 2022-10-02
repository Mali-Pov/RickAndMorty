import { useCallback } from "react";

const URL = "https://rickandmortyapi.com/api/";

const useFetch = () => {
  const sendRequest = useCallback(async (requestConfig) => {
    const response = await fetch( URL + requestConfig.path + requestConfig.params);
    if (!response.ok) throw new Error("Request failed!");
    return await response.json();
  }, []);

  return { sendRequest };
};

export default useFetch;
