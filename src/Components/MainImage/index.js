import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  card: {
    maxWidth: 1100,
    marginTop: 20,
  },
  media: {
    height: "100%",
    objectFit: "cover"
  }
});

export default function MainImage() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          image={require("./ParkImage.jpg")}
          title="Contemplative Reptile"
        />
    </Card>
  );
}