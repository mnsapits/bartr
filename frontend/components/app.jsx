import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import SearchBarContainer from './search/search_bar_container';

const App = ({children, router}) => (
  <div>
    <header className="">
      <div className="left-nav">
        <div>
          <Link to="/" className="header-link"><h1>Bartr</h1></Link>
        </div>
        <div>
          <SearchBarContainer />
        </div>
      </div>
      <div className="right-nav">
        <GreetingContainer router={router}/>
      </div>
    </header>
    {children}
  </div>
);

export default App;
