import React from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Sign in</Link>
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);
const capitalizeFirstLetter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {capitalizeFirstLetter(currentUser.username)}</h2>
    <FlatButton className="header-button" onTouchTap={logout} label="Logout"/>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
