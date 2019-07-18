import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: 80,
      backgroundColor: '#210700'
    },
    typo: {
      padding: "10px"
    }
  }));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography variant="subtitle2" color="secondary" className={classes.typo} >
          Mocha Class Beta 준비중 입니다!   Contact : ksgj2000@gmail.com <br/>
          By REDIKINS, Comming Soon!
        </Typography>
    </div>
  );
}


