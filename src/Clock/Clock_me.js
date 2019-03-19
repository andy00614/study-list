import React from 'react'

class Clock extends React.Component {
  state = {
    currentTime: new Date().toLocaleTimeString()
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <h2>Second Clock</h2>
        <div>{this.state.currentTime}</div>
      </div>
    )
  }
}
export default Clock