import React from 'react'
import { Input, Button } from 'antd'

interface Props {

}
interface State {
  iptValue: string
}
interface event {
  target: {
    value: string
  } 
}
interface color {
  Red: string
  Green: string
  Yellow: string
}
class Type extends React.Component<Props,State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      iptValue: '',
    }
    // this.tuple:[string,number] = [1,2]
  }
  iptValueChange = (e:event):void => {
    const { value } = e.target
    this.setState({
      iptValue: value
    })
  }
  render() {
    enum Color {
      Red='red',Green='green',Yellow='yellow'
    }
    const color:color = {
      Red: 'red',
      Green: 'green',
      Yellow:'yellow'
    }
    let tuple:[string,number]
    tuple = ['hell',10]
    const { iptValue } = this.state
    return (
      <div>
        <Input 
          value={iptValue}
          onChange={this.iptValueChange}
        />
        <div>
          {iptValue}
        </div>
        <div>
          Tuple:{tuple}
        </div>
        <div>
          {Color.Red}
          {color.Red}
        </div>
      </div>
    )
  }
}
export default Type