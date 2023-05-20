import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Paper, makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CottageListing from './components/CottageListing';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Assuming you have a CSS file for App styling
import Banner from './components/Banner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url("./media/lake_view_background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Banner />  
      <div className={classes.root}>
        <Paper className={classes.content}>
          <Container maxWidth="sm">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cottages" component={CottageListing} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Paper>

        <Navbar className="navbar" />
      </div>
    </Router>
  );
};

export default App;
