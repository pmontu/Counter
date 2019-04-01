import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
        <div>
          <h1>{this.props.getCounter(this.props.id)}</h1>
          <button onClick={() => this.props.incrementCounter(this.props.id)}>Increment</button>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getCounter: (id) => state["counter" + id]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: (id) => dispatch({type: "INCREMENT", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)