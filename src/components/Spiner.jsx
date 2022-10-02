import { Box, CircularProgress } from "@mui/material";

const Spiner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: 5 }}>
      <CircularProgress size={100} />
    </Box>
  );
};

export default Spiner;
