import React, { Component } from 'react';
import ClassList from '../Components/ClassList';
import { withStyles } from '@material-ui/core/styles';
//import SearchBar from '../Components/SearchBar';
//import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
   // justifyContent: 'center',
  },
  body: {
  }
})

class Class extends Component {
  render(){
    const { classes } = this.props;
    return (
        <div className={classes.root}>
           
            <div className={classes.body}>
               <ClassList />
            </div>    
        </div>
        
    );

  }
   
}

export default withStyles(styles)(Class);

