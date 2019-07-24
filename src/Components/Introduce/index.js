import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
 
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 2),
    margin: "30px",
    height: "150px"
  }
}));

export default function Introduce() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h5" component="h3">
          Mocha Class is
        </Typography><br/>
        <Typography component="p">
          다양한 취미 여가 클래스들을 즐겨 보세요!
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography variant="h5" component="h3">
          Intro 1
        </Typography><br/>
        <Typography component="p">
           Intro 1 description
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography variant="h5" component="h3">
          Intro 2
        </Typography><br/>
        <Typography component="p">
          Intro 2 description
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography variant="h5" component="h3">
          Intro 3
        </Typography>
        <Typography component="p"><br/>
          Intro 3 description
        </Typography>
      </Card>
    </div>
  );
}