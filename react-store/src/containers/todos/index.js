import { createTodo, deleteTodo, getTodos } from '../../core';
import NewTodoPopup from '../../components/new-todo-popup';
import TodoRow from '../../components/todo-row';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Todos extends Component {

  static propTypes = {
    todos: PropTypes.array
  }

  state = {
    isPopupShown: false
  };

  componentDidMount() {
    getTodos();
  }

  onDeleteTodo = (id) => {
    deleteTodo(id);
  }

  onCreateTodo = (todo) => {
    createTodo(todo);
  }

  render() {
    const { todos } = this.props;
    const { isPopupShown } = this.state;

    if (!todos) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoRow
                onDelete={this.onDeleteTodo}
                key={todo.id}
                todo={todo}
              />
            ))}
          </tbody>
        </table>

        <button onClick={() => this.setState({ isPopupShown: true })}>
          Create
        </button>

        {isPopupShown ?
          <NewTodoPopup
            onSave={this.onCreateTodo}
            closePopup={() => this.setState({ isPopupShown: false })}
          /> :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state;

  return {
    todos
  };
};

export default connect(mapStateToProps)(Todos);
