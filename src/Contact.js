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

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid justify="center" alignItems="center" container>
      <Grid item xs={12} style={{ paddingTop: "15vh" }}>
        <img
          src="./images/arrowdown.svg"
          alt="downarrow"
          style={{ width: "100%", verticalAlign: "bottom" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        name="about"
        style={{ padding: "15vh", background: "#2c3e50" }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            style={{ color: "white" }}
            variant="h2"
            className={classes.deadCenterColumn}
          >
            <div>Contact</div>
            <div>¯¯¯</div>
          </Typography>
          <Typography
            style={{ color: "turquoise" }}
            className={classes.deadCenterColumn}
          >
            <p>Something on your mind?</p>
          </Typography>
          <div class="login-box">
            <form>
              <div class="user-box">
                <input type="text" name="" required="" />
                <label>Name</label>
              </div>
              <div class="user-box">
                <input type="text" email="" required="" />
                <label>email</label>
              </div>
              <div class="user-box">
                <input />
                <textarea
                  name="textarea"
                  style={{ width: "100%", height: "150px" }}
                ></textarea>
                <label>email</label>
              </div>
              <a href="dunno#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Contact;
