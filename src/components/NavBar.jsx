import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "../assets/styles/NavBar.module.css";
import tikal from "../assets/images/tikal.png";
import rick_and_morty from "../assets/images/rick-and-morty.png";
import Image from "mui-image";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.NavBar}>
          <Image
            width="4%"
            src={tikal}
            alt="tikal"
            style={{ minWidth: "2rem" }}
          ></Image>
          <Image
            width="12%"
            src={rick_and_morty}
            alt="rick_and_morty"
            style={{ minWidth: "6rem" }}
          ></Image>

          <Box>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to={"/Task1"}
            >
              Task 1
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to={"/Task2"}
            >
              Task 2
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
