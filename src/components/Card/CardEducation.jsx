import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

const CardEducation = ({ career, date, institution }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar variant="rounded">
        <SchoolIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={career}
      secondaryTypographyProps={{
        component: "div"
      }}
      secondary={
        <>
          <Typography variant="body1">{institution}</Typography>
          <Typography variant="body1">{date}</Typography>
        </>
      } />
  </ListItem>
);

CardEducation.propTypes = {
  career: PropTypes.string,
  date: PropTypes.string,
  institution: PropTypes.string
}

export default CardEducation;