import React from "react";
import { Grid } from "@material-ui/core";
import Image from "../../assets/undraw_monitor_iqpq.svg";

import useStyles from "./styles";

const InfoCardLeft = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.InfoCardLeft}
        >
          <Grid item xs={4}>
            <img src={`${props.ContentImage}`} alt="Site" />
          </Grid>
          <Grid item xs={6}>
            {props.ContentText}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoCardLeft;
