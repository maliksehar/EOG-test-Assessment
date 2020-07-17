import React from 'react';
import { connect } from 'react-redux';
import { Typography, AppBar, Toolbar, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Weather from './Weather';
import { Store } from '../store';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

interface Props {
  classes: any;
  loading: boolean;
}

const Header: React.SFC<Props> = ({ classes, loading }) => {
  const name = "Sehar Malik's";
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {name} EOG React Visualization Assessment
          </Typography>
          <Weather />
        </Toolbar>
      </AppBar>
      {loading && <LinearProgress />}
    </>
  );
};

export default connect(({ drone: { loading } }: Store) => ({ loading }))(
  withStyles(styles)(Header)
);
