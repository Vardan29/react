import store from "../store";
import { setPersons, setTodos } from "../store/action-creators";

export const getPersons = () => {
  const url = "http://localhost:4000/persons";

  fetch(url)
    .then(resp => resp.json())
    .then(persons => {
      store.dispatch(setPersons(persons))
    });
};


export const getTodos = () => {
  const url = "http://localhost:4000/todos";

  fetch(url)
    .then(resp => resp.json())
    .then(todos => {
      store.dispatch(setTodos(todos))
    });
};

export const deletePerson = (id) => {
  const url = `http://localhost:4000/persons/${id}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
    .then(resp => resp.json())
    .then(person => {
      getPersons();
    });
}

export const deleteTodo = (id) => {
  const url = `http://localhost:4000/todos/${id}`;
  const options = {
    method: 'DELETE'
  };

  fetch(url, options)
    .then(resp => resp.json())
    .then(todo => {
      getTodos();
    });
}


export const createPerson = (person) => {
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

export const createTodo = (todo) => {
  const url = `http://localhost:4000/todos`;
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json UTF-8"
    },
    body: JSON.stringify(todo)
  };

  fetch(url, options)
    .then((resp) => resp.json())
    .then((todo) => {
      getTodos();
    });
}
