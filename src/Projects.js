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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

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
    textAlign: "center",
  },
  gridspacing: {
    padding: "10px",
  },
  cardprop: {
    display: "flex",
    height: "35vh",
    width: "100%",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid name="projects" style={{ padding: "10vh" }}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            <div>Projects</div>
            <div>¯¯¯</div>
          </Typography>
        </Grid>

        <Grid container item xs={12} className={classes.deadCenterRow}>
          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/konami.gif" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/cookbook.png" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/revyou.png" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>

          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/skoli.png" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/videoplayer.png" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
          <Grid className={classes.gridspacing} item xs={4}>
            <div data-aos="fade-up">
              <Card className={classes.cardprop}>
                <div class="bg">
                  <img src="/images/lovit19.png" alt="" />
                  <div class="overlay">
                    <h2>Check This Out!</h2>
                    <p>this is some text.</p>
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default Projects;
