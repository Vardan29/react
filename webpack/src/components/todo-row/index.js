import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoRow extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { todo, onDelete } = this.props;

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
}

export default TodoRow;
