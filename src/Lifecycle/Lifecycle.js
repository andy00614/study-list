import React from 'react'
import ChildComponent from './ChildComponent'

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stateVariable:1000,
      
    }
  }
  handleState = () => {
    this.setState(state => {
      return {
        stateVariable: state.stateVariable - 1
      }
    })
  }
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props,this.state)
    console.log(nextProps,nextState)
    if(this.props !== nextProps || this.state !== nextState) {
      return true
    }
    return false
  }
  componentDidUpdate(preProps,preState) {
    console.log(preProps,this.props)
    console.log(preState,this.state)
  }
  getSnapshotBeforeUpdate(props,state) {
    console.log('getSnapshotBeforeUpdate')
    console.log(props,state)
  }
  render() {
    console.log('render')
    return(
      <div>
        <button onClick={this.handleState}>changeState</button>
        <h1>Props:{this.props.propsVarible}</h1>
        <h2>State:{this.state.stateVariable}</h2>
        <div>
          <ChildComponent data={this.state.stateVariable}/>
        </div>
      </div>
    )
  }
}