import { useEffect } from "react";
import styles from "../assets/styles/Tasks.module.css";
import MuiAlert from "@mui/material/Alert";
import { useFetchEpisodes } from "hooks";
import { BarChart, Spiner } from "components";

const charactersNames = [
  "Rick Sanchez",
  "Summer Smith",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
];

const SecondTask = () => {
  const { isLoading, getEpisodes, error, characters } = useFetchEpisodes();

  useEffect(() => {
    getEpisodes(charactersNames);
  }, [getEpisodes]);

  return (
    <>
      {error && (
        <MuiAlert variant="filled" severity="error">
          There was an error : {error}
        </MuiAlert>
      )}
      <div className={styles.header}>
        Chart popularity of Rick and Morty family
      </div>
      {isLoading ? <Spiner /> : <BarChart data={characters} />}
    </>
  );
};

export default SecondTask;
