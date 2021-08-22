import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import TodoRow from 'components/todo-row';
import {todosSelector} from 'store/selectors/todo';
import NewPersonPopup from 'components/new-person-popup';
import {createTodo, deleteTodo, getTodos} from 'core/controllers/todos';

const Todos = () => {

	const [isPopupShown, changeIsPopupShown] = useState(false);
	const todos = useSelector(todosSelector);

	useEffect(() => {
		getTodos();
	}, []);

	const onDeleteTodo = (id) => {
		deleteTodo(id);
	};

	const onCreateTodo = (todo) => {
		createTodo(todo);
	};

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
					<th>Remove</th>
				</tr>
				</thead>
				<tbody>
				{todos.map((todo) => (
					<TodoRow key={todo.id} todo={todo} onDelete={onDeleteTodo}/>
				))}
				</tbody>
			</table>

			<button onClick={() => changeIsPopupShown(true)}>
				Create
			</button>

			{isPopupShown ?
				<NewPersonPopup
					onSave={onCreateTodo}
					closePopup={() => changeIsPopupShown(false)}
				/> :
				null
			}
		</div>
	);
};

Todos.propTypes = {
	todos: PropTypes.array
};

export default Todos;
