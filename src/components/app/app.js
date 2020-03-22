import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './css/app.css';

class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    beforeData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    buttonAll: true,
    buttonActive: false,
    buttonDone: false
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);

      const newArray = [...before, ...after];

      return {
        beforeData: newArray,
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ beforeData }) => {
      const newArray = [...beforeData, newItem];

      return {
        beforeData: newArray,
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);

    return [...before, newItem, ...after];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData, beforeData }) => {
      return {
        beforeData: this.toggleProperty(beforeData, id, 'important'),
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData, beforeData }) => {
      return {
        beforeData: this.toggleProperty(beforeData, id, 'done'),
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onTodoAll = () => {
    this.setState(({ todoData, beforeData }) => {
      return {
        todoData: beforeData,
        buttonAll: true,
        buttonActive: false,
        buttonDone: false
      };
    });
  };

  onTodoActive = () => {
    this.setState(({ beforeData }) => {
      const itemsActive = beforeData.filter((el) => !el.done);
      return {
        todoData: itemsActive,
        buttonAll: false,
        buttonActive: true,
        buttonDone: false
      };
    });
  };

  onTodoDone = () => {
    this.setState(({ beforeData }) => {
      const itemsDone = beforeData.filter((el) => el.done);
      return {
        todoData: itemsDone,
        buttonAll: false,
        buttonActive: false,
        buttonDone: true
      };
    });
  };

  searchTodo = (item) => {
    this.setState(({ todoData, beforeData }) => {
      const newData = beforeData.filter((el) => {
        return el.label.toLowerCase().includes(item)
      }); 
      return {
        todoData: newData,
      };
    });
  };

  clear = () => {
    this.setState(({ beforeData }) => {
      return {
        todoData: beforeData
      };
    });
  }

  render() {
    const { todoData, buttonAll, buttonActive, buttonDone, beforeData } = this.state;
    const doneCount = beforeData
                        .filter((el) => el.done).length;
    const todoCount = beforeData.length - doneCount;

    return (
      <div className="app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="app__container">
              <SearchPanel todoData={ todoData } searchTodo={ this.searchTodo } clear={ this.clear }  />
              <ItemStatusFilter onTodoAll={this.onTodoAll} 
                                onTodoActive={this.onTodoActive}
                                onTodoDone={this.onTodoDone} 
                                buttonAll={ buttonAll }
                                buttonActive={ buttonActive }
                                buttonDone={ buttonDone }/>
          </div>
          <TodoList 
              todos={ todoData } 
              onDeleted={ this.deleteItem }
              onToggleImportant={ this.onToggleImportant} 
              onToggleDone={ this.onToggleDone }/>
          <ItemAddForm addItem={ this.addItem } />
      </div>
    );
  };
};

export default App;