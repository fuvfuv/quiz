import React from 'react';
import classes from './Loader.scss';

const Loader = props => {
  return (
    <div className={classes.Loader}>
      <div className={classes.LoaderS}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
