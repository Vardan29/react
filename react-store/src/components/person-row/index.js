import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonRow extends Component {

	static propTypes = {
		person: PropTypes.object.isRequired,
		onDelete: PropTypes.func.isRequired
	};

	render() {
		const {person, onDelete} = this.props;

		return (
			<tr>
				<td>{person.id}</td>
				<td>{person.firstName} {person.lastName}</td>
				<td>{person.age}</td>
				<td>
					<button onClick={() => {
						onDelete(person.id)
					}}>
						X
					</button>
				</td>
			</tr>
		);
	}
}

export default PersonRow;
