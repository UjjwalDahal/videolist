import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onChange = event => {
    const term = event.target.value;
    this.setState({
      [event.target.name]: event.target.value
    });

    this.props.onSearchTermChange(term);
  };

  render() {
    return (
      <Fragment>
        <input
          name="term"
          onChange={this.onChange}
          value={this.state.term}
          className="form-control search_bar"
        />
      </Fragment>
    );
  }
}

export default SearchBar;
