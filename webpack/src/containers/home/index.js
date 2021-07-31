import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PersonRow from '../../components/person-row';
import NewPersonPopup from '../../components/new-person-popup';
import { createPerson, deletePerson, getPersons } from '../../core';
import { useSelector } from 'react-redux';

const Home = () => {

  const [isPopupShown, setIsPopupShown] = useState(false)
  const persons = useSelector(state => state.persons);

  useEffect(() => {
    getPersons()
  }, []);


  const onDeletePerson = (id) => {
    deletePerson(id);
  };

  const onCreatePerson = (person) => {
    createPerson(person);
  };


  if (!persons) {
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
          {persons.map((person) => (
            <PersonRow
              onDelete={onDeletePerson}
              key={person.id}
              person={person}
            />
          ))}
        </tbody>
      </table>

      <button onClick={() => setIsPopupShown(true)}>
        Create
      </button>

      {isPopupShown ?
        <NewPersonPopup
          onSave={onCreatePerson}
          closePopup={() => setIsPopupShown(false)}
        /> :
        null
      }
    </div>
  );
}

Home.propTypes = {
  persons: PropTypes.array
};

export default Home;