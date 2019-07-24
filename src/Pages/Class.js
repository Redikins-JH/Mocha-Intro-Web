import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: '20px',
    minHeight: '600px'
  }
})

class Class extends Component {
  render(){
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <ul>
                <li><Link to="/Class/apple">애플</Link></li>
                <li><Link to="/Class/google">구글</Link></li>
                <li><Link to="/Class/microsoft">마이크로소프트</Link></li>
                <li><Link to="/Class/facebook">페이스북</Link></li>
            </ul>
            {/* <Switch>
                <Route exact path="/Class" component={Class} render={() => (<Redirect to="/Class/apple" />)} />
                <Route path="/Class/:id" render={({match}) => <User user={match.params.id} />}/> 
            </Switch> */}
        </div>
        
    );

  }
   
}

export default withStyles(styles)(Class);

