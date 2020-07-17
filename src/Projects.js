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

const useStyles = makeStyles((theme) => ({
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid justify="center" alignItems="center" container>
      <Grid item xs={12} name="about" style={{ padding: "15vh" }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            <div>Portfolio</div>
            <div>¯¯¯</div>
          </Typography>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Projects;
