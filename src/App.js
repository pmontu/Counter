import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>{this.props.counter}</h1>
          <button onClick={this.props.incrementCounter}>Increment</button>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: () => dispatch({type: "INCREMENT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)