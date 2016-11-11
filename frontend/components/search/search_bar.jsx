import React from 'react';
import SearchResults from './search_results';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      resultsShown: false
    };
  }

  show() {
    return (
    Object.keys(this.props.searchResults).length === 0 || this.state.query === "" ? false : true
    );
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value}, () => {
        if (this.state.query !== "") {
          this.props.clearSearch();
          this.props.searchProducts(this.state.query);
        }
      });
  }


  render () {
    return (
      <ul className="search-container">
        <li><input
          className="search-bar-input"
          type="text"
          placeholder="Search for items"
          onChange={this.update("query")}>
        </input></li>
          <SearchResults
            shown={this.show()}
            results={this.props.searchResults}
          />
      </ul>
    );
  }
}

export default SearchBar;
