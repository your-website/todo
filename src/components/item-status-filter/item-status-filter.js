import React, { Component } from 'react';

class ItemStatusFilter extends Component {

  buttonActive = () => {
  }

  render() {

    const { onTodoAll, onTodoActive, onTodoDone, buttonAll, buttonActive, buttonDone } = this.props;

    let classNames = 'btn btn-outline-secondary';
    let classNamesActive = 'btn btn-info';

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" 
                  className={ buttonAll ? classNamesActive : classNames }
                  onClick={ onTodoAll }>
            All
          </button>
          <button type="button" 
                  className={ buttonActive ? classNamesActive : classNames }
                  onClick={ onTodoActive }>
            Active
          </button>
          <button type="button" 
                  className={ buttonDone ? classNamesActive : classNames }
                  onClick={ onTodoDone }>
            Done
          </button>
      </div>
    );
  };
};

export default ItemStatusFilter;