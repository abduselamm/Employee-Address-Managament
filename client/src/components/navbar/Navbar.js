import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import OIP from "../../images/OIP.jpg";
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h3" align="center">
        IPDC EMPLOYEE MANAGEMENT SYSTEM
      </Typography>
      <img className={classes.image} src={OIP} alt="icon" height="60" />
    </AppBar>
  );
};

export default Navbar;
