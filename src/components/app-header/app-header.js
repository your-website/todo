import React from 'react';
import './css/header.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="header__container">
      <h1 className="header__content-title">Todo List</h1>
      <p className="header__paragraph">{toDo} more to do, {done} done</p>
    </div>
  );
};

export default AppHeader;