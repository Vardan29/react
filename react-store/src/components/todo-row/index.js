import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoRow extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { todo, onDelete } = this.props;
    const { id, title, content } = todo
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button onClick={() => {
            onDelete(id)
          }}>
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoRow;
