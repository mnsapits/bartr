import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import ProductDetail from './products/product_detail';

const product = {name: "kombucha", sellerId: "1", price: "$4.99"};

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
    <div className="home-img">
    </div>
    <ProductDetail product={product}/>
    {children}
  </div>
);

export default App;
