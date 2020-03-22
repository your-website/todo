import React, { Component } from 'react';
import './style/todo-list-item.css';

class TodoListItem extends Component {

  render() {
    const { label, onDeleted, 
            onToggleImportant, 
            onToggleDone, 
            done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' todo-list-item_done';
    };

    if (important) {
      classNames += ' todo-list-item_important';
    };

    return (
      <span className={ classNames }>
        <span 
          className="todo-list-item-label" 
          onClick={ onToggleDone } >
          { label } 
        </span>
        <button type="button" 
                className="btn btn-outline-danger btn-sm"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />        
        </button>
        <button type="button" 
                className="btn btn-outline-success btn-sm"
                onClick={ onToggleImportant }>
          <i className="fa fa-exclamation" />        
        </button>
      </span>
    );
  };
};

export default TodoListItem;