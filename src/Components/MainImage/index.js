import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: "95%",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  media: {
    height: "100%",
    objectFit: "cover"
  }
});

export default function MainImage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          image={require("./ParkImage.jpg")}
          title="Mocha Class"
          text="주변을 둘러보세요"
        />
          
    </Card>
  );
}