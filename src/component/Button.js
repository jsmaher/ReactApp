import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" onClick={props.next} style={{background:"#333333"}} color="primary" className={classes.button}>
        {props.val}
      </Button>
    </div>
  );
}