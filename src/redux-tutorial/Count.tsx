// https://daveceddia.com/redux-tutorial/
import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import { increment, decrement } from '../redux/action'

interface Props {
  count: number
  increment: any
  decrement: any
}
class Counter extends React.Component<Props,object> {
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }
  componentDidMount() {
    new Promise(resolve => {
      console.log('promise')
      resolve()
    })
    .then(() => {
      console.log('promise2')
    })
  }
  render() {
    return (
      <div>
        <h2>Counter Typescript</h2>
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
const mapStateToProps = (state:any) => ({
  count: state.count.count
})
const mapDispatchToProps = {
  increment,
  decrement
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);