import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width : '250px',
    minWidth: '250px'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    marginLeft: 0,
    width: '250px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '400px',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'secondary',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 400,
      },
    },
  },
}));

function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon color="primary"/>
        </div>
        <InputBase
            placeholder="검색하기"
            classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
            }}
            //inputProps={{ 'aria-label': 'Search' }}
            name="searchKeyword"
            //value={this.state.searchKeyword}
            //onChange={this.handleValueChange}
        />
    </div>
  );
}

export default SearchBar;
