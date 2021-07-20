import store from '../store';
import { setPersons, setTodos } from '../store/action-creators';

export function getPersons() {
	const url = 'http://localhost:4000/persons';

	fetch(url)
		.then((resp) => resp.json())
		.then((persons) => {
			store.dispatch(setPersons(persons));
		});
}

export function getTodos() {
	const url = 'http://localhost:4000/todos';

	fetch(url)
		.then((resp) => resp.json())
		.then((todos) => {
			store.dispatch(setTodos(todos));
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

export function deleteTodo(id) {
	const url = `http://localhost:4000/todos/${id}`;
	const options = {
		method: 'DELETE'
	};

	fetch(url, options)
		.then((resp) => resp.json())
		.then((todo) => {
			getTodos();
		});
}

export function createPerson(person) {
	const url = `http://localhost:4000/persons`;
	const options = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json UTF-8'
		},
		body: JSON.stringify(person)
	};

	fetch(url, options)
		.then((resp) => resp.json())
		.then((person) => {
			getPersons();
		});
}

export function createTodo(todo) {
	const url = `http://localhost:4000/todos/`;
	const options = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json UTF-8'
		},
		body: JSON.stringify(todo)
	};

	fetch(url, options)
		.then((resp) => resp.json())
		.then((todo) => {
			getTodos();
		});
}
