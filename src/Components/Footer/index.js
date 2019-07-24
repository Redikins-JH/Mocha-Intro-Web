import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BackgroundImage from './FooterImage.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      
      
      flexDirection: 'column',
      width: '100%',
      
    },
    imageContainer: {
      position: 'relative',
      flexDirection: 'column',
      minHeight: '530px',
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    container: {
      display: 'flex',
      //maxWidth: 'sm',
      backgroundColor: '#151a1d',
      height: '50px',
      width: '100%',
    },
    buttonOne: {
      margin: theme.spacing(1),
      position: 'absolute',
      right: '5px',
      bottom: '170px',
     
    },
    buttonTwo: {
      margin: theme.spacing(1),
      position: 'absolute',
      right: '5px',
      bottom: '120px',
    },
    typoOne: {
     margin: '10px'
    },
    typoTwo: {
      margin: '10px'
    },
    typoThree: {
      position: 'absolute',
      right: '0px',
      bottom: '70px',
      margin: '10px'
    },
    typoFour: {
      position: 'absolute',
      right: '0px',
      bottom: '20px',
      margin: '10px'
    },
    footerTypo: {
      padding: '15px',
    }
  }));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <Typography component="h5" variant="h5" color="secondary" className={classes.typoOne} gutterBottom>
          당신이 원하는 것은 무엇인가요?
        </Typography>
        <br/>
        <Typography variant="h5" color="secondary" className={classes.typoTwo} paragraph>
          새로운 경험들을 해보세요
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonOne}>
          ! 팀원 채용/모집 !
        </Button>
        <Button variant="contained" color="primary" className={classes.buttonTwo}>
              Class 개설 문의
        </Button>
        <Typography component="h5" variant="h5" color="primary" className={classes.typoThree} gutterBottom>
          누구나 클래스를 개설하고
        </Typography>
        <br/>
        <Typography variant="h5" color="primary" className={classes.typoFour} paragraph>
          추가적인 수익을 창출 할 수 있어요
        </Typography>
      </div>
      
      <div className={classes.container} >
        <Typography variant="subtitle2" color="primary" className={classes.footerTypo} >
          Copyright by REDIKINS, 2019
        </Typography>
      </div>
    </div>
  );
}


