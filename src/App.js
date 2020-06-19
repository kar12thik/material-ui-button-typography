import React from "react";
import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyle: {
    color: "green",
    border: 0
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Material UI</h1>
        <Typography
          className={classes.helloThereStyle}
          variant="h1"
          color="secondary"
        >
          Hello There
        </Typography>
        <Button
          className={classes.buttonStyle}
          onClick={() => {
            console.log("onClick");
          }}
          color="primary"
          s
          variant="outlined"
        >
          This is my first button
        </Button>
      </div>
    </ThemeProvider>
  );
}
