import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

// Connect this component to the store
import { connect } from 'react-redux'

// get actions
import { incrementCounter, decrementCounter } from './testActions'


/**
 * Get data from the store
 */
// test matches the reducer name key+ in the rootReducer
const mapState = (state) => ({
  data: state.test.data
})

/**
 * Change data in the store
 */
const actions = {
  incrementCounter,
  decrementCounter,
}

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>Test Answer is {data}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='blue' content='Decrement' />
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)