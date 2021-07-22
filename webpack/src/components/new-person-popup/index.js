import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPersonPopup extends Component {

  static propTypes = {
    closePopup: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  state = {
    firstName: '',
    lastName: '',
    age: 0
  };

  onSaveHandler = () => {
    const { firstName, lastName, age } = this.state;
    const { onSave, closePopup } = this.props;

    onSave({
      firstName,
      lastName,
      age
    });
    closePopup();
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      this.setState({
        age: +value
      });
    } else {
      this.setState({
        [name]: value
      });
    }

  }

  render() {
    const { firstName, lastName, age } = this.state;
    const { closePopup } = this.props;

    return (
      <div>
        FirstName: <input type='text' name='firstName' value={firstName} onChange={this.onChangeHandler} /><br />
        LastName: <input type='text' name='lastName' value={lastName} onChange={this.onChangeHandler} /><br />
        Age: <input type='number' name='age' value={age} onChange={this.onChangeHandler} /><br />

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

export default NewPersonPopup;
