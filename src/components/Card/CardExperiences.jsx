import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  List,
} from '@material-ui/core';

import CardExperience from './CardExperience';

import useStyles from './Card.css';

const CardExperiences = ({ experiences }) => {
  const classes = useStyles();
  return (
    <CardContent className={classes.cardContent}>
      <List>
        {experiences.map(({ id, ...rest }) => (
          <CardExperience
            key={id}
            {...rest}
          />
        ))
        }
      </List>
    </CardContent>
  );
};

CardExperiences.propTypes = {
  experiences: PropTypes.array.isRequired
}

export default CardExperiences;