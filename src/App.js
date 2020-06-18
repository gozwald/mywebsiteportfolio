import React from "react";
import Grid from "@material-ui/core/Grid";
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
  },
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  const classes = useStyles();
  return (
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
  );
}

export default App;
