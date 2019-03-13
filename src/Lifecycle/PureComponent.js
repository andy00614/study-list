import React from 'react'
import { Input, Button } from 'antd'
import PureChildren from './PureChild'

export default class PureComponentDemo extends React.PureComponent {
  state = {
    inputValue: '',
    submitValue: '',
  }
  iptOnchange = (e) => {
    const value = e.target.value
    this.setState({
      inputValue: value
    })
  }
  handleClick = () => {
    const { inputValue } = this.state
    this.setState({
      submitValue: inputValue
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <Input value={this.state.inputValue} onChange={this.iptOnchange}/>
        <Button onClick={this.handleClick}>submit</Button>
        <PureChildren inputValue={this.state.submitValue}/>
      </div>
    )
  }
}