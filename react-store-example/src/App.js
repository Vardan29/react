import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";
import { setDecrement, setIncrement } from "./store/action-creators";

class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className="App">
        <h1>Counter: {counter ?? 0}</h1>
        <button onClick={() => { store.dispatch(setIncrement(1)) }}>Increment</button>
        <button onClick={() => { store.dispatch(setDecrement(1)) }}>Decrement</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { counter } = state;

  return {
    counter
  }
};

export default connect(mapStateToProps)(App);
