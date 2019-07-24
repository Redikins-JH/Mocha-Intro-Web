import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  navLink: {
    position: 'absolute',
    right: '7px',
    display: 'flex',
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="relation">
          <Toolbar variant="dense">
            <Typography variant="h6" color="secondary">
              Mocha Class
            </Typography>
            <div className={classes.navLink}>
              <MenuItem>
                <Link component={RouterLink} to="/" color="secondary">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link component={RouterLink} to="/Team" color="secondary">Team</Link>
              </MenuItem>
              <MenuItem>
                <Link component={RouterLink} to="/Class" color="secondary">Class</Link>
              </MenuItem>
            </div>
          </Toolbar>
          
        </AppBar>
    </div>
  );
}

export default Navbar;
