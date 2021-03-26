import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';

const ProfileHeader = ({ name, location }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        src="static/bg.jpg"
      />
      <div className={classes.avatarContainer}>
        <Avatar />
      </div>
      <CardContent>
        <div className={classes.container}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <IconButton>
            <ReplayIcon />
          </IconButton>
        </div>
        <div className={classes.locationContainer}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2" color="textSecondary" component="p">
            {location}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  media: {
    backgroundColor: '#0A66C2',
    height: 140,
  },
  avatarContainer: {
    padding: '16px',
    position: 'absolute',
    top: '125px',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default ProfileHeader;