import {createPerson, deletePerson, getPersons} from '../../core';
import NewPersonPopup from '../../components/new-person-popup';
import PersonRow from '../../components/person-row';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {

	static propTypes = {
		persons: PropTypes.array
	}

	state = {
		isPopupShown: false
	};

	componentDidMount() {
		getPersons();
	}

	onDeletePerson = (id) => {
		deletePerson(id);
	}

	onCreatePerson = (person) => {
		createPerson(person);
	}

	render() {
		const {persons} = this.props;
		const {isPopupShown} = this.state;

		if (!persons) {
			return <div>Loading</div>;
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
								onDelete={this.onDeletePerson}
								key={person.id}
								person={person}
							/>
						))}
					</tbody>
				</table>

				<button onClick={() => this.setState({isPopupShown: true})}>
					Create
				</button>

				{isPopupShown ?
					<NewPersonPopup
						onSave={this.onCreatePerson}
						closePopup={() => this.setState({isPopupShown: false})}
					/> :
					null
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const persons = state.persons;

	return {
		persons
	};
};

export default connect(mapStateToProps)(Home);
