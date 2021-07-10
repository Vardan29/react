import React, { Component } from 'react';
import { getPersons, removePersons } from '../../core';
import Person from '../../components/home/Person';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		getPersons(dt => {
			this.setState({ items: dt });
		});
	}

	remove = (id) => {
		removePersons(id);
		getPersons(dt => {
			this.setState({ items: dt });
		});
	}

	render() {
		const { items } = this.state;
		return (
			<table border="1">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, idx) => (
						<Person item={item}
							idx={idx}
							key={item.id}
							remove={id => this.remove(id)} />
					)
					)}
				</tbody>
			</table>
		);
	}
}

export default Home;
