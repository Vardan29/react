import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTodoPopup extends Component {

  static propTypes = {
    closePopup: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  state = {
    title: '',
    content: ''
  };

  onSaveHandler = () => {
    const { title, content, } = this.state;
    const { onSave, closePopup } = this.props;

    onSave({
      title,
      content
    });
    closePopup();
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { title, content } = this.state;
    const { closePopup } = this.props;

    return (
      <div>
        title: <input type='text' name='title' value={title} onChange={this.onChangeHandler} /><br />
        content: <input type='text' name='content' value={content} onChange={this.onChangeHandler} /><br />

        <button onClick={closePopup}>
          Cancel
        </button>
        <button onClick={this.onSaveHandler}>
          Save
        </button>
      </div>
    );
  }
}

export default NewTodoPopup;
