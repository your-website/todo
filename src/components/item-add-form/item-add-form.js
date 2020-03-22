import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.label === '') {
      return;
    }
    this.props.addItem(this.state.label);
    this.clearLabel();
  };

  clearLabel = () => {
    this.setState({
      label: ''
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex"
            onSubmit={ this.onSubmit }>
        <input type="text"
               className="form-control"
               onChange={ this.onLabelChange }
               placeholder="What needs to be done" 
               value={ label }/>
        <button className="btn btn-outline-primary text-nowrap">
          Add Item
        </button>
      </form>
    );
  };
};

export default ItemAddForm;