import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '0.5rem',
    display: 'flex',
    padding: '10px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '10px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));