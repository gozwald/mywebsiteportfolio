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
import CardContent from "@material-ui/core/CardContent";

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
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid name="projects" style={{ padding: "15vh" }}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.deadCenterColumn}>
            <div>Projects</div>
            <div>¯¯¯</div>
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          style={{ padding: "0px 8vw" }}
          className={classes.deadCenterRow}
        >
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src="/images/idea.png"
                        alt="Avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div class="flip-card-back">
                      <h1>John Doe</h1>
                      <p>Architect & Engineer</p>
                      <p>We love that guy</p>
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid style={{ padding: "3px" }} item xs={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default Projects;
