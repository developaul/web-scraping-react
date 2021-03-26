import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    paddingBottom: theme.spacing(0)
  },
  cardContent: {
    padding: theme.spacing(0)
  }
}), { name: 'App' });

export default useStyles;