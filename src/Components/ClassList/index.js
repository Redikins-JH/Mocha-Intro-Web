import React from 'react';
import { classListData } from './ClassListData';
import ClassItem from '../ClassItem';

import Paper from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {

    }
  });
  

function ClassList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            {classListData[3].image}
            <Paper className={classes.paper}>
                {classListData
                //.filter(movie => movie.poster_path !== null)
                .map( classData => (
                    <ClassItem
                    key={classData.id}
                    id={classData.id}
                    category={classData.category}
                    title={classData.title}
                    tag={classData.tag}
                    copyright={classData.copyright}
                    image={classData.image}
                    />
                ))}

            </Paper>
            
    </div>
    
  );
}

export default ClassList;

