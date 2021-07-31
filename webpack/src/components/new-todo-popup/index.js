import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTodoPopup = ({ onSave, closePopup }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSaveHandler = () => {
    onSave({
      title,
      content
    });
    closePopup();
  }

  return (
    <div>
      title: <input type='text' name='title' value={title} onChange={({ target: { value } }) => { setTitle(value) }} /><br />
      content: <input type='text' name='content' value={content} onChange={({ target: { value } }) => { setContent(value) }} /><br />

      <button onClick={closePopup}>
        Cancel
      </button>
      <button onClick={onSaveHandler}>
        Save
      </button>
    </div>
  );
}

NewTodoPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default NewTodoPopup;
