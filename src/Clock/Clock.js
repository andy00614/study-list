import React from 'react'

export default class Clock extends React.Component {
  state={
    date: new Date()
  }
  // getSnapshotBeforeUpdate() {
  //   console.log(this.rootNode)    
  // }
  // componentDidUpdate(pre) {

  // }
  componentDidMount() {
    console.log(this.rootNode)
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return(
      <div>
        <h2 ref={n => this.rootNode = n}>Clock</h2>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </div>
    )
  }
}