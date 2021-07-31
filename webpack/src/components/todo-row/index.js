import React from 'react';
import PropTypes from 'prop-types';

const TodoRow = ({ onDelete, todo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.content}</td>
      <td>
        <button onClick={() => {
          onDelete(todo.id)
        }}>
          X
        </button>
      </td>
    </tr>
  );
}
TodoRow.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoRow;
