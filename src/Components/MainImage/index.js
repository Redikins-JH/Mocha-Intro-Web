import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import BackgroundImage from './ParkImage.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    width:"95%",
    marginTop: "10px",
    marginBottom: theme.spacing(3),
    position: 'relative',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.05)',
  },
  content: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainImage() {
  const classes = useStyles();

  return (
   
      <Paper className={classes.root}>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.content}>
              <Typography component="h5" variant="h5" color="primary" gutterBottom>
                주변을 둘러보세요
              </Typography>
              <Typography variant="h6" color="primary" paragraph>
                다양한 취미/여가 클래스들을 <br/> 찾아 보세요.
              </Typography><br/><br/><br/><br/><br/><br/>
              <Link variant="subtitle1" href="#">
                  More
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    
       
  );
}