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
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   fetch(
  //     "https://www.elformo.com/forms/01d802f1-d244-49e4-ae9f-143c153d0d92",
  //     {
  //       mode: "no-cors",
  //       method: "POST",
  //       headers: {
  //         "Content-type": "multipart/form-data; charset=UTF-8",
  //       },
  //       body: data,
  //     }
  //   );
  // };

  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          paddingTop: "15vh",
          display: "flex",
        }}
      >
        <img
          src="./images/arrowdown.webp"
          alt="downarrow"
          style={{
            width: "100%",
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        name="contactme"
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
            <br></br>
          </Typography>
          <div className={classes.deadCenterColumn}>
            <div class="login-box">
              {/* <form onSubmit={handleSubmit}> */}
              <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div class="user-box">
                  <input type="text" id="name" name="name" required />
                  <label>Name</label>
                </div>
                <div class="user-box">
                  <input type="text" id="email" name="email" required />
                  <label>Email</label>
                </div>
                <div class="user-box">
                  <textarea
                    id="comment"
                    placeholder="Your message goes here!"
                    name="message"
                    style={{
                      width: "100%",
                      height: "150px",
                      background: "#283948",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      outline: "none",
                    }}
                  />
                </div>

                <button className="submit" type="submit" name="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Contact;
