import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContent,
  List
} from '@material-ui/core';

import CardEducation from './CardEducation';

import useStyles from './Card.css';

const CardEducations = ({ educations }) => {
  const classes = useStyles();
  return (
    <CardContent className={classes.cardContent}>
      <List>
        {educations.map(({ id, ...rest }) => (
          <CardEducation
            key={id}
            {...rest}
          />
        ))
        }
      </List>
    </CardContent>
  );
};

CardEducations.propTypes = {
  educations: PropTypes.array.isRequired
}

export default CardEducations;