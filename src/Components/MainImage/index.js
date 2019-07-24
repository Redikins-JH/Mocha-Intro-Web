import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import BackgroundImage from './MainImageBig.jpg';
import SearchBar from '../SearchBar'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width:"100%",
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
      //paddingLeft: 0,
    },
  },
  searchBar: {
    position: 'absolute',
  },
  imageCopyright: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MainImage() {
  const classes = useStyles();

  return (
   
      <Paper className={classes.root}>
        <div className={classes.overlay} />
          <div className={classes.content}>
            <Typography component="h5" variant="h5" color="secondary" gutterBottom>
              주변을 둘러보세요
            </Typography>
            <br/>
            <Typography variant="h5" color="secondary" paragraph>
              다양한 취미/여가 클래스들을 <br/><br/> 찾아 보세요
            </Typography>
            
            <br/><br/>
            <SearchBar className={classes.searchBar}/>
            <Button variant="contained" color="primary" className={classes.button}>
                Class 개설하기
            </Button>
            <br/><br/><br/><br/>
          </div>
          <Link variant="subtitle1" href="#" className={classes.imageCopyright}>
            Photo by Fritz Bielmeier on Unsplash
          </Link>
      </Paper>
    
       
  );
}