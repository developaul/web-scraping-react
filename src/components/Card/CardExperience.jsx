import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import { Business as BusinessIcon } from '@material-ui/icons';

const CardExperience = ({ jobTitle, company, date_range }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar variant="rounded">
        <BusinessIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={jobTitle}
      secondaryTypographyProps={{
        component: "div"
      }}
      secondary={
        <>
          <Typography variant="body1">{company}</Typography>
          <Typography variant="body1">{date_range}</Typography>
        </>
      } />
  </ListItem>
);

CardExperience.propTypes = {
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  date_range: PropTypes.string
}

export default CardExperience;