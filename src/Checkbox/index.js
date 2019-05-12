import React from 'react'
import { Checkbox, Button, Input } from 'antd'
import { testData } from './data'

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
export default class CheckboxX extends React.Component {
  state = {
    resultData: [],
    groupValue: [],
    inputValue: '',
    originData: testData,
    showData:[]
  }
  onChange = (val) => {
    console.log(val)
    this.setState({groupValue:val})
  }
  inputChange = (e) => {
    const value = e.target.value
    const copyData = JSON.parse(JSON.stringify(this.state.originData.slice()))
    const a = copyData.filter(item => {
      return item.includes(value)
    })
    this.setState({inputValue:value,showData:a})

  } 
  componentDidMount() {
    const result = testData.slice(0,200)
    this.setState({
      resultData: result
    })
  }
  render() {
    return(
      <div>
        <Input value={this.state.inputValue} onChange={this.inputChange}/>
        <CheckboxGroup options={this.state.resultData} value={this.state.groupValue}  onChange={this.onChange}/>
        <Button onClick={() => this.forceUpdate()}>refresh</Button>
        
        <div>
          {this.state.showData.map(item => {
            return (
              <div key={item}>
                {item}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}