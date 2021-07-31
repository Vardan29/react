import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewPersonPopup = ({ onsave, closePopup }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);

  const onSaveHandler = () => {
    onSave({
      firstName,
      lastName,
      age
    });
    closePopup();
  }
  return (
    <div>
      FirstName: <input type='text' name='firstName' value={firstName} onChange={({ target: { value } }) => { setFirstName(value) }} /><br />
      LastName: <input type='text' name='lastName' value={lastName} onChange={({ target: { value } }) => { setLastName(value) }} /><br />
      Age: <input type='number' name='age' value={age} onChange={({ target: { value } }) => { setAge(+value) }} /><br />

      <button onClick={closePopup}>
        Cancel
      </button>
      <button onClick={onSaveHandler}>
        Save
      </button>
    </div>
  );
}

NewPersonPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default NewPersonPopup;
