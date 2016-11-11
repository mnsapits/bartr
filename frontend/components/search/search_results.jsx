import React from 'react';
import { Link } from 'react-router';

const SearchResults = ({shown, results}) => {
  if (shown) {
    let names = Object.keys(results).map(id => <Link key={id} to={"/product/"+ id}><li className="search-result-item" >{results[id].name}</li></Link>);
    return (
      <ul className="search-results">{names}</ul>
    );
  } else {
  return  null;
  }
};

export default SearchResults;
