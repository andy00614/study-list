import React from 'react'

export default class ChildComponent extends React.Component {
  state={
    count:2000
  }
  render() {
    console.log('ChildComponent')
    return (
      <div>
        <hr/>
        <h3>ChildComponent</h3>
        <button onClick={() => {
          this.setState(state => {
            return {
              count: state.count / 2
            }
          })
        }}>changeMyselfState</button>
        <div>ChildComponent_Props:{this.props.data}</div>
        <div>ChildComponent_State:{this.state.count}</div>
      </div>
    )
  }
}