import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.idx + 1}</td>
        <td>{this.props.item.firstName}</td>
        <td>{this.props.item.lastName}</td>
        <td>{this.props.item.age}</td>
        <td onClick={() => { this.props.remove(this.props.item.id) }} style={{ backgroundColor: 'red', color: 'white' }}>X</td>
      </tr>
    )
  }
}

export default Person;