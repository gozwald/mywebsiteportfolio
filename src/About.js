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

const useStyles = makeStyles(() => ({
  deadCenterColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      justify="center"
      alignItems="center"
      container
      name="about"
      style={{ padding: "10vh" }}
    >
      <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            About<br></br>¯¯¯
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid container xs={10}>
        <Grid container xs={4}>
          <ThemeProvider theme={theme}>
            <Typography className={classes.deadCenterColumn}>
              <img
                width="100%"
                component="img"
                alt="me"
                src="/images/me.webp"
                style={{ paddingBottom: "3vh" }}
              />
              <Typography variant="h4" className={classes.deadCenterColumn}>
                Who's this fancy boy?
              </Typography>
              <br></br>
              <div>
                I'm a junior full stack web developer on a mission to become
                f*cking good at this profession.
              </div>
              <br></br>
              <div>
                Forged in Toronto. Having traverssed the high seas of the
                Atlantic, and ultimate surrender to the German capital. Berlin,
                a land of oat milk and artisian honey, some day I will break
                your spell.{" "}
              </div>
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid container item xs={8}>
          <ThemeProvider theme={theme}>
            <Typography
              className={classes.deadCenterColumn}
              style={{ width: "100%" }}
            >
              <div class="skillscontainer">
                <ul>
                  <li class="html">HTML</li>
                  <li class="css">CSS</li>
                  <li class="js">JavaScript</li>
                  <li class="ng">Angular</li>
                </ul>
              </div>
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
