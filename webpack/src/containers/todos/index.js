import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoRow from '../../components/todo-row';
import NewTodoPopup from '../../components/new-todo-popup';
import { createTodo, deleteTodo, getTodos } from '../../core';
import PropTypes from 'prop-types';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [isPopupShown, setIsPopupShown] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  const onDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const onCreateTodo = (todo) => {
    createTodo(todo);
  };

  if (!todos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoRow
              onDelete={onDeleteTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
        </tbody>
      </table>

      <button onClick={() => setIsPopupShown(true)}>
        Create
      </button>

      {isPopupShown ?
        <NewTodoPopup
          onSave={onCreateTodo}
          closePopup={() => setIsPopupShown(false)}
        /> :
        null
      }
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;