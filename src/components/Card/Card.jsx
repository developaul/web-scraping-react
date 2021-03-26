import React from 'react';
import PropTypes from 'prop-types';
import {
  Card as UICard,
  CardHeader,
} from '@material-ui/core';

import useStyles from './Card.css';

const Card = ({ title, children }) => {
  const classes = useStyles();
  return (
    <UICard>
      <CardHeader
        className={classes.cardHeader}
        title={title}
      />
      {children}
    </UICard>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Card;