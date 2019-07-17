import React from 'react';
import MainImage from '../Components/MainImage';
import Introduce from '../Components/Introduce';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
     
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainImage/>
      <Introduce/>
    </div>
    
  );
}

export default Home;
