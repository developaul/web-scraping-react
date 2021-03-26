import React from 'react';
import {
  Grid,
  Paper,
  makeStyles
} from '@material-ui/core';

import ProfileHeader from '../components/Profile/ProfileHeader';
import CardExperiences from '../components/Card/CardExperiences';
import CardEducations from '../components/Card/CardEducations';
import Card from '../components/Card';

import { profile } from '../data';

export const ProfileScreen = () => {
  const classes = useStyles();
  const { experiences, educations, ...rest } = profile;
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <ProfileHeader
            {...rest}
          />
        </Grid>
        <Grid item xs={12}>
          <Card title="Experiences" >
            <CardExperiences experiences={experiences} />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card title="Studies">
            <CardEducations educations={educations} />
          </Card>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}), { name: 'App' });