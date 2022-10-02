import { Box, Container } from "@mui/material";
import { TextView } from "components";
import styles from "../assets/styles/Table.module.css";

const Table = ({ location, character }) => {
  return (
    <Container
      maxWidth={"md"}
      disableGutters={true}
      className={styles.container}
    >
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <TextView title={"Character name"} value={character.name} />
        <TextView title={"Origin name"} value={location.name} />
        <TextView title={"Origin dimension"} value={location.dimension} />
        <TextView title={"Poplurity"} value={character.episode?.length} />
      </Box>
    </Container>
  );
};

export default Table;
