import { Box } from "@mui/material";

const TextView = ({ title = "", value = "" }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </Box>
  );
};

export default TextView;
