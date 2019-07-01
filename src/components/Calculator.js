import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Textfield from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "10px 0px",
    padding: "20px"
  },
  resultField: {
    width: "100%"
  },
  keypad: {
    width: "100%"
  }
});

export default function Calculator(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Textfield
          variant="outlined"
          value={props.resultLabel}
          className={classes.resultField}
        />
        <Grid container>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("7");
              }}
            >
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("8");
              }}
            >
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("9");
              }}
            >
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("/");
              }}
            >
              /
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("4");
              }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("5");
              }}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("6");
              }}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("*");
              }}
            >
              x
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("1");
              }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("2");
              }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("3");
              }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("+");
              }}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult(".");
              }}
            >
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("0");
              }}
            >
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("=");
              }}
            >
              =
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.addToResult("-");
              }}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.keypad}
              onClick={() => {
                props.clear();
              }}
            >
              clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
