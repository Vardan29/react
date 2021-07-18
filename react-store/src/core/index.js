import store from '../store';
import {setPersons} from '../store/action-creators';

export function getPersons() {
	const url = 'http://localhost:4000/persons';

	fetch(url)
		.then((resp) => resp.json())
		.then((persons) => {
			store.dispatch(setPersons(persons));
		});
}

export function deletePerson(id) {
	const url = `http://localhost:4000/persons/${id}`;
	const options = {
		method: 'DELETE'
	};

	fetch(url, options)
		.then((resp) => resp.json())
		.then((person) => {
			getPersons();
		});
}

export function createPerson(person) {
	const url = `http://localhost:4000/persons`;
	const options = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json UTF-8"
		},
		body: JSON.stringify(person)
	};

	fetch(url, options)
		.then((resp) => resp.json())
		.then((person) => {
			getPersons();
		});
}
