import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1),
    textDecoration: 'none',
  },
  button: {
    padding: theme.spacing(1, 3),
    borderRadius: theme.spacing(3),
    color: '#ffffff',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ff3366',
    },
  },
  homeButton: {
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#1976d2',
    },
  },
  cottagesButton: {
    backgroundColor: '#f44336',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  profileButton: {
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  // Add more button styles here
  aboutButton: {
    backgroundColor: '#9c27b0',
    '&:hover': {
      backgroundColor: '#7b1fa2',
    },
  },
  contactButton: {
    backgroundColor: '#ff9800',
    '&:hover': {
      backgroundColor: '#f57c00',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.link}>
        <Button className={`${classes.button} ${classes.homeButton}`}>Home</Button>
      </Link>
      <Link to="/cottages" className={classes.link}>
        <Button className={`${classes.button} ${classes.cottagesButton}`}>Cottages</Button>
      </Link>
      <Link to="/profile" className={classes.link}>
        <Button className={`${classes.button} ${classes.profileButton}`}>Profile</Button>
      </Link>
      {/* Add more buttons here */}
      <Link to="/about" className={classes.link}>
        <Button className={`${classes.button} ${classes.aboutButton}`}>About</Button>
      </Link>
      <Link to="/contact" className={classes.link}>
        <Button className={`${classes.button} ${classes.contactButton}`}>Contact</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
