// https://daveceddia.com/redux-tutorial/
import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import { increment, decrement } from '../redux/action'

class Counter extends React.Component {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <h2>List</h2>
        <div>
          <List />
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({count}) => ({
  count: count.count
})
const mapDispatchToProps = {
  increment,
  decrement
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);