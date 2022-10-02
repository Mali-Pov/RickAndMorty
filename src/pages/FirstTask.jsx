import { useEffect } from "react";
import MuiAlert from "@mui/material/Alert";
import { useFetchCharacter } from "hooks";
import styles from "../assets/styles/Tasks.module.css";
import { Spiner, Table } from "components";

const FirstTask = () => {
  const { isLoading, getCharachter, location, character, error } =
    useFetchCharacter();

  useEffect(() => {
    getCharachter();
  }, [getCharachter]);

  return (
    <>
      {error && (
        <MuiAlert variant="filled" severity="error">
          There was an error : {error}
        </MuiAlert>
      )}
      <div className={styles.header}>
        The Most unpopular character from Earth C-137
      </div>
      {isLoading && <Spiner />}
      {!isLoading && !error && (
        <Table location={location} character={character} />
      )}
    </>
  );
};

export default FirstTask;
