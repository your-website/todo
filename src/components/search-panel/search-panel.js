import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    label: ''
  };

  onLabelChange = (event) => {
    const valueInput = event.target.value

    if (valueInput === '') {
      this.props.clear();
      this.setState(() => {
        return {
          label: valueInput
        };
      });
    } else
    this.props.searchTodo(valueInput);
    this.setState(() => {
      return {
        label: valueInput
      };
    });
  };


  render() {
    const searchText = 'Type here to search';
    const searchStyle = {
      fontSize: '16px'
    };
    return <input className="search-panel form-control"
      style={searchStyle}
      placeholder={ searchText }
      onChange={ this.onLabelChange }
      value={ this.state.label }/>;
  }
}

export default SearchPanel;