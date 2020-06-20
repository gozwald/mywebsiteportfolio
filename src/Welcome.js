import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
  },
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  deadCenterRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: "20px",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Welcome = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        justify="center"
        alignItems="center"
        container
        className={classes.home}
      >
        <Grid item xs={8}>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.deadCenterColumn}>
              <div>
                Hi, I'm{" "}
                <span style={{ color: "#e31b6d" }}>Samuel Greenwald.</span>
                <br></br> I'm a full-stack web developer.
              </div>
            </Typography>
          </ThemeProvider>

          <div className={classes.deadCenterRow}>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <span className="ghost-button-semi-transparent">
                VIEW MY WORK
              </span>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Welcome;
