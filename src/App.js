import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Back from "./Back";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
    // backgroundColor: "#2c2e43",
  },
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const classes = useStyles();
  return (
    <>
      <Back />
      <Grid
        justify="center"
        alignItems="center"
        container
        className={classes.home}
      >
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.deadCenterColumn}>
              <div>
                Hi, I'm{" "}
                <span style={{ color: "#e31b6d" }}>Samuel Greenwald.</span>
              </div>
              <div>I'm a full stack web developer.</div>
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid
        justify="center"
        alignItems="center"
        container
        className={classes.home}
      >
        <Grid item>
          <ThemeProvider theme={theme}>
            <Typography variant="h2" className={classes.deadCenterColumn}>
              <div>Hi, I'm Samuel Greenwald.</div>
              <div>I'm a full stack web developer.</div>
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
