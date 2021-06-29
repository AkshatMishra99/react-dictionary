/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import messages from './messages';
import SearchContainer from './SearchContainer';
const useStyles = makeStyles({
  home: {
    textAlign: 'center',
    paddingTop: '100px',
  },
  header: {
    fontSize: '48px',
    fontWeight: 'bold',
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <FormattedMessage {...messages.header} />
        <SearchContainer />
      </div>
    </div>
  );
}
