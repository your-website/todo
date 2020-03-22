import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: ''
  };

  inputChange = (event) => {
    const term = event.target.value
    this.setState(() => {
      return {
        term: term
      };
    });

    this.props.onSearchChange(term);
  };


  render() {
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '16px'
    };
    return <input className="search-panel form-control"
      style={searchStyle}
      placeholder={ searchText }
      onChange={ this.inputChange }
      value={ this.state.term }/>;
  }
}

export default SearchPanel;