import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header className="clearfix">
      <div className="left-nav">
        <Link to="/" className="header-link"><h1>Bartr</h1></Link>
      </div>
      <div className="right-nav">
        <GreetingContainer />
      </div>
    </header>
    {children}
  </div>
);

export default App;
