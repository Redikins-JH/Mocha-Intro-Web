import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px',
    minHeight: '600px'
  }
}))

export default function Team() {
  const classes = useStyles();
  return (
    <div className={classes.root}>팀원 모집 합니다. <br/>
    - 디자이너 <br/>
    - 개발자 <br/>
    - 마케터 <br/>
    언제든 편히 아래의 메일로 연락 주세요!</div>
  );
}


