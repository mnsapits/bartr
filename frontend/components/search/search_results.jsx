import React from 'react';
import { Link } from 'react-router';

const SearchResults = ({shown, results}) => {
  if (shown) {
    let names = Object.keys(results).map(id => <Link to={"/product/"+ id}><li className="search-result-item" key={id}>{results[id].name}</li></Link>);
    return (
      <ul className="search-results">{names}</ul>
    );
  } else {
    return null;
  }
};

export default SearchResults;
